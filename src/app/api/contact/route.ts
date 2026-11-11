import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10).max(5000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Please check the form fields and try again." },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    // 1) Persist the enquiry so no lead is ever lost.
    await db.contactMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        service: service || null,
        message,
      },
    });

    /* ─────────────────────────────────────────────────────────────
       2) EMAIL DELIVERY — how to receive enquiries in your inbox
       --------------------------------------------------------------
       Right now enquiries are stored in the local SQLite database.
       View them any time in VS Code with:  npx prisma studio

       To ALSO get each enquiry delivered to your business email,
       add a provider such as Resend (resend.com) — free tier works:

         // bun add resend        (or: npm install resend)
         import { Resend } from "resend";
         import { site } from "@/lib/site";

         const resend = new Resend(process.env.RESEND_API_KEY);
         try {
           await resend.emails.send({
             from: "Morlix Website <onboarding@resend.dev>",
             to: site.emailTo,                    // your business inbox
             replyTo: email,
             subject: `New website enquiry — ${name}`,
             text: [
               `Name:    ${name}`,
               `Email:   ${email}`,
               `Phone:   ${phone || "—"}`,
               `Service: ${service || "—"}`,
               "",
               message,
             ].join("\n"),
           });
         } catch (mailError) {
           // Never lose a lead because mail failed — it is already saved.
           console.error("Email delivery failed:", mailError);
         }

       Then set RESEND_API_KEY in your .env file.
    ───────────────────────────────────────────────────────────── */

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side. Please try again or reach us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
