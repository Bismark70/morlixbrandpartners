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
  tagline: "Your Vision. Our Partnership. Greater Possibilities.",
  pillars: ["Strategy", "Creativity", "Technology", "Innovation"],

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
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "Managing and growing brand presence across digital platforms through content planning, content creation, publishing, audience engagement, community management, and performance tracking. We build structured social media systems that strengthen visibility, engagement, and brand relevance.",
    deliverables: [
      "Content planning",
      "Content creation",
      "Publishing",
      "Community management",
      "Performance tracking",
    ],
  },
  {
    title: "Creative Design & Brand Identity",
    slug: "creative-design-brand-identity",
    description:
      "Developing distinctive brand identities and compelling visual assets, from logo design and brand guidelines to marketing graphics, digital creatives, and promotional materials. We create cohesive visual systems that communicate brand value and establish a recognisable market presence.",
    deliverables: [
      "Logo & identity",
      "Brand guidelines",
      "Marketing graphics",
      "Digital creatives",
      "Promotional materials",
    ],
  },
  {
    title: "Web Design & Development",
    slug: "web-design-development",
    description:
      "Designing, developing, and maintaining responsive websites tailored to business needs. Our services cover website architecture, user interface design, e-commerce integration, functionality, and optimisation to deliver seamless digital experiences that convert visitors into customers.",
    deliverables: [
      "Website architecture",
      "UI design",
      "E-commerce integration",
      "Optimisation",
      "Maintenance",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Planning and executing targeted digital campaigns to increase brand awareness, attract qualified audiences, and drive business growth. Our approach covers paid advertising, search engine optimisation (SEO), campaign management, audience targeting, and performance analytics.",
    deliverables: [
      "Paid advertising",
      "SEO",
      "Campaign management",
      "Audience targeting",
      "Performance analytics",
    ],
  },
  {
    title: "Email Marketing & Automation",
    slug: "email-marketing-automation",
    description:
      "Building strategic email communication systems that connect businesses with their audiences. From campaign design and mailing list management to automated workflows, lead nurturing, customer segmentation, and performance monitoring, we turn communication into a sustainable customer engagement channel.",
    deliverables: [
      "Campaign design",
      "Mailing list management",
      "Automated workflows",
      "Lead nurturing",
      "Segmentation",
    ],
  },
  {
    title: "Brand Strategy & Marketing",
    slug: "brand-strategy-marketing",
    description:
      "Defining how businesses position, communicate, and compete in their markets. We provide brand development, market research, competitive analysis, positioning, marketing strategy, and brand messaging to create a clear market identity and a coordinated direction for growth.",
    deliverables: [
      "Brand development",
      "Market research",
      "Competitive analysis",
      "Positioning",
      "Brand messaging",
    ],
  },
  {
    title: "Video Editing & Motion Graphics",
    slug: "video-editing-motion-graphics",
    description:
      "Transforming raw footage and creative concepts into engaging, professionally edited video content. Our services include promotional videos, corporate videos, social media reels, motion graphics, visual storytelling, transitions, sound design, and video optimisation for different digital platforms. We produce compelling video content that captures attention, communicates brand messages, and strengthens digital engagement.",
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
      "Designing intelligent automation systems that streamline business operations, improve productivity, and enhance customer experiences. Our services include AI-powered workflows, chatbot development, business process automation, application integration, automated customer communication, and AI-assisted operational systems that reduce repetitive tasks and support business efficiency.",
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
   WHO WE SERVE — used in the hero ticker
------------------------------------------------------------ */
export const audience = [
  "Startups",
  "Small & Medium Enterprises",
  "Corporations",
  "NGOs & Nonprofits",
  "Government Institutions",
  "Educational Institutions",
  "Healthcare Organizations",
  "Entrepreneurs",
  "Professionals",
  "Personal Brands",
];
