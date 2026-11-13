export const site = {
  name: "Hourani Enterprises",
  tagline: "Support for work and for home.",
  phone: {
    label: "0450 518 508",
    href: "tel:0450518508",
  },
  address: {
    line1: "Suite 902, Level 9, 66-72 Rickard Rd",
    line2: "Bankstown NSW 2200",
  },
  jobsRusUrl: "https://www.jobsrus.com.au/",
  enayaUrl: "https://enaya.com.au/",
  instagramUrl: "https://www.instagram.com/jobs.are.us/",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Referrals", href: "#refer" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
] as const;

export const serviceAreas = [
  "Bankstown",
  "Greenacre",
  "Liverpool",
  "Cumberland",
  "Chatswood",
  "South Sydney",
  "Surry Hills",
  "Alexandria",
  "Mascot",
  "Botany",
  "Randwick",
  "Maroubra",
] as const;

export const values = [
  {
    letter: "H",
    name: "Honesty",
    description: "Transparent, client-first support built on trust and clear communication.",
    tone: "blue",
  },
  {
    letter: "E",
    name: "Empathy",
    description: "We listen closely to each person's goals and build the pathway around them.",
    tone: "soft",
  },
  {
    letter: "R",
    name: "Reliability",
    description: "Support you can plan your week around.",
    tone: "warm",
  },
  {
    letter: "O",
    name: "Open-mindedness",
    description: "Flexible, inclusive support that adapts to each person's needs and strengths.",
    tone: "purple",
  },
] as const;

export const referralSteps = [
  {
    number: "1",
    title: "Send the referral",
    description: "Share the participant's details, plan and goals online or by phone.",
    tone: "jr",
  },
  {
    number: "2",
    title: "We call you back",
    description: "Within [X business days], to confirm fit, funding and availability.",
    tone: "blend",
  },
  {
    number: "3",
    title: "We meet and match",
    description: "We meet the participant and family, then match a screened worker.",
    tone: "en",
  },
] as const;

export const insights = [
  {
    title: "The NDIS changes conversation",
    description: "What recent changes and budget cuts mean for families.",
    gradient: "linear-gradient(170deg, var(--blend-bright), var(--blend-navy))",
  },
  {
    title: "Healthy reward systems",
    description: "Bribes versus a reward system that actually helps.",
    gradient: "linear-gradient(170deg, var(--en-gradient), var(--blend-plum))",
  },
  {
    title: "Employment support boundaries",
    description: "Supporting participants professionally, with purpose.",
    gradient: "linear-gradient(170deg, var(--blend-mid), var(--blend-navy))",
  },
  {
    title: "Four ways to improve the NDIS",
    description: "Simple ideas for participants and providers.",
    gradient: "linear-gradient(170deg, var(--jr-blue), var(--blend-plum))",
  },
] as const;

export const footerNav = [
  {
    label: "Services",
    links: [
      { label: "JobsRUs", href: site.jobsRusUrl },
      { label: "Enaya", href: site.enayaUrl },
      { label: "Make a referral", href: "#refer" },
      { label: "Emergency respite", href: "#respite" },
    ],
  },
  {
    label: "Your rights",
    links: [
      { label: "Policies and procedures", href: "#policies" },
      { label: "Feedback and complaints", href: "#feedback" },
      { label: "Accessibility", href: "#accessibility" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
] as const;
