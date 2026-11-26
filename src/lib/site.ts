/* ============================================================
   MORLIX BRAND — Site Configuration
   ------------------------------------------------------------
   ★ EDIT THIS FILE to update contact details, services and any
   site-wide copy. Everything on the website reads from here,
   so you never have to dig through components.
   ============================================================ */

export const site = {
  name: "Morlix Brand",
  shortName: "Morlix",
  legalName: "MORLIX BRAND",
  tagline: "Building Brands. Advancing Business",
  pillars: ["Strategy", "Brand Development", "Digital Solutions", "Innovation"],

  /* ----------------------------------------------------------
     CONTACT DETAILS — ★ EDIT THIS BLOCK ★
     · email       : the business inbox shown on the contact page,
                     footer & metadata — the single contact channel
     · emailTo     : the inbox that should receive form submissions
                     once you wire up email delivery
                     (see src/app/api/contact/route.ts)
     · whatsappLink: WhatsApp chat link (wa.me). Used as a plain
                     link only — the phone number itself is never
                     displayed anywhere on the site.
     · linkedin    : company LinkedIn page, linked from the footer
                     and the contact page.
  ---------------------------------------------------------- */
  email: "info@morlixbrandpartners.com",
  emailTo: "hello@morlixbrandpartners.com",
  whatsappLink: "https://wa.me/233591517852",
  linkedin: "https://www.linkedin.com/company/health-synergy-mpf/",
  location: "Serving clients locally & globally",
  responseNote: "We typically respond within one business day.",
} as const;

/* ------------------------------------------------------------
   OUR SERVICES
   `slug` is ready for future dedicated service pages.
------------------------------------------------------------ */
export type Service = {
  title: string;
  slug: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "Brand Strategy & Development",
    slug: "brand-strategy-development",
    description:
      "Developing brand strategies, positioning frameworks and identity systems that establish a clear, consistent and competitive market presence.",
    deliverables: [
      "Brand strategy",
      "Positioning frameworks",
      "Identity systems",
      "Market research",
      "Brand messaging",
    ],
  },
  {
    title: "Creative Design & Brand Identity",
    slug: "creative-design-brand-identity",
    description:
      "Creating professional visual communication materials, brand identities and marketing designs that communicate brand values and strengthen recognition.",
    deliverables: [
      "Logo & identity",
      "Brand guidelines",
      "Marketing graphics",
      "Digital creatives",
      "Promotional materials",
    ],
  },
  {
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "Managing digital platforms through strategic content planning, creative development, publishing, audience engagement and performance analysis.",
    deliverables: [
      "Content planning",
      "Content creation",
      "Publishing",
      "Community management",
      "Performance tracking",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Planning and executing digital campaigns that increase brand awareness, reach target audiences and generate measurable business results.",
    deliverables: [
      "Paid advertising",
      "SEO",
      "Campaign management",
      "Audience targeting",
      "Performance analytics",
    ],
  },
  {
    title: "Web Design & Maintenance",
    slug: "web-design-maintenance",
    description:
      "Designing and maintaining responsive, functional websites that strengthen digital presence, communicate brand value and support business objectives.",
    deliverables: [
      "Website architecture",
      "UI design",
      "E-commerce integration",
      "Optimisation",
      "Maintenance",
    ],
  },
  {
    title: "Email Marketing & Automation",
    slug: "email-marketing-automation",
    description:
      "Developing targeted email campaigns and automated communication systems that improve customer engagement, retention and conversion.",
    deliverables: [
      "Campaign design",
      "Mailing list management",
      "Automated workflows",
      "Lead nurturing",
      "Segmentation",
    ],
  },
  {
    title: "Video Editing & Motion Graphics",
    slug: "video-editing-motion-graphics",
    description:
      "Producing and refining visual content, promotional videos and motion graphics for digital communication and marketing.",
    deliverables: [
      "Promotional videos",
      "Corporate videos",
      "Social media reels",
      "Motion graphics",
      "Sound design",
    ],
  },
  {
    title: "AI Automation & Business Integration",
    slug: "ai-automation-business-integration",
    description:
      "Integrating appropriate AI tools and automated workflows to improve business processes, operational efficiency and digital productivity.",
    deliverables: [
      "AI-powered workflows",
      "Chatbot development",
      "Process automation",
      "App integration",
      "Automated communication",
    ],
  },
];

/* ------------------------------------------------------------
   WHO WE WORK WITH — audience list for the dedicated section
------------------------------------------------------------ */
export const audience = [
  "Established corporations",
  "NGOs and nonprofit organisations",
  "Government and public institutions",
  "Educational and healthcare institutions",
  "Entrepreneurs and personal brands",
  "Startups and emerging businesses",
  "Small and medium-sized enterprises",
];
