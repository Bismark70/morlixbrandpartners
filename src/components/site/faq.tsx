import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const faqs = [
  {
    q: "How do we start working with Morlix Brand Partners?",
    a: "It begins with a free consultation. We take time to understand your organization — your current position, ambitions, audience, and challenges — then recommend practical solutions aligned with your objectives. From there, we develop a clear approach and proposal tailored to your needs.",
  },
  {
    q: "Do you only offer these six services?",
    a: "These six are our launch services — the capabilities most organizations need first. Morlix Brand Partners is built as a multidisciplinary brand and digital solutions company, and our ecosystem already extends into software solutions, AI and automation, data intelligence, digital consulting, and training, which we will introduce as the organization grows.",
  },
  {
    q: "Who does Morlix work with?",
    a: "We work with organizations at different stages and across a wide range of sectors — startups, small and medium-sized enterprises, corporations, NGOs and nonprofits, government and educational institutions, healthcare organizations, entrepreneurs, professionals, and personal brands. Our services accommodate both emerging organizations and established institutions.",
  },
  {
    q: "Can we engage you for a single service, or do we need the full package?",
    a: "Both work. You can engage us for a single service — a website, a brand identity, a social media system — or take advantage of our integrated approach, where branding, design, technology, marketing, and strategy work together as one coordinated ecosystem. Many clients start with one service and expand as the relationship grows.",
  },
  {
    q: "How do you measure whether the work is successful?",
    a: "Every solution we provide should have a reason behind it. A marketing campaign should have an objective, data should inform decisions, and a website should serve a purpose. We define relevant performance indicators with you from the start, then track, report, and refine — so results are visible and decisions stay grounded in evidence.",
  },
  {
    q: "What happens during the free consultation?",
    a: "A focused conversation about your organization — where you are, where you want to be, and what stands in between. We identify practical opportunities for improvement and outline recommended next steps. There is no pressure and no obligation; you leave with clarity either way.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything organizations usually ask before their first conversation with us."
        />
        <Reveal delay={0.08} className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-muted/50 px-6 shadow-none transition-colors data-[state=open]:border-flame-500/30 data-[state=open]:bg-white data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-navy-800 hover:no-underline [&>svg]:text-flame-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
