/**
 * DavaTrack Digital LLP - Global System Constants & Brand Design Tokens
 *
 * This file serves as the single source of truth for global configuration,
 * brand color tokens, company contact information, and platform metadata.
 */

export const SITE_CONFIG = {
  name: "DavaTrack Digital LLP",
  shortName: "DavaTrack",
  tagline: "The Healthcare Solutions & Operational Execution Partner",
  description:
    "DavaTrack unites Supply, Technology, People, Processes, Management, and Execution into a reliable operational backbone for hospitals, pharmacy chains, and healthcare enterprises.",
  url: "https://davatrack.com",
  contact: {
    email: "contact@davatrack.com",
    supportEmail: "support@davatrack.com",
    inquiryEmail: "inquiry@davatrack.com",
    phone: "+91 98765 43210",
    displayPhone: "+91 98765 43210",
    whatsapp: "+919876543210",
    address: "Healthcare Operations Hub, India",
    workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  },
  social: {
    linkedin: "https://linkedin.com/company/davatrack",
    twitter: "https://twitter.com/davatrack",
  },
  meta: {
    themeColor: "#122631",
    backgroundColor: "#EDF3F0",
  },
} as const;

/**
 * Official Brand Color Tokens
 *
 * Use these tokens across components, Canvas/SVG graphics, and GSAP animations
 * to ensure 100% visual coherence with the DavaTrack Brand Guide.
 */
export const BRAND_COLORS = {
  /** Dark Slate / Deep Ink - Primary headings, high-contrast text, dark hero surfaces */
  primary: "#122631",
  /** Deep Ocean Teal - Primary buttons, key highlight containers, interactive cards */
  secondary: "#266573",
  /** Sky Cyan / Soft Mint - Glow highlights, active status badges, energetic accents */
  accent: "#6BB0BF",
  /** Soft Sage Canvas - Global page background, light surface cards */
  bg: "#EDF3F0",
  /** Muted Sage Border - Card borders, subtle dividers, structural lines */
  border: "#CAD7D0",
} as const;

/**
 * DavaTrack 6 Core Operational Pillars
 */
export const OPERATIONAL_PILLARS = [
  { label: "Supply", description: "Verified procurement, contract manufacturing & scheduled delivery" },
  { label: "Technology", description: "Bespoke digital health portals, APIs & automation pipelines" },
  { label: "People", description: "Certified healthcare manpower, pharmacists & clinical coordinators" },
  { label: "Process", description: "Standard operating procedures, claims workflows & quality protocols" },
  { label: "Management", description: "Executive MIS analytics, audit reconciliation & inventory control" },
  { label: "Execution", description: "On-ground deployment, day-to-day oversight & SLAs" },
] as const;

/**
 * Recognized Indian Healthcare Regulatory & Compliance Standards
 */
export const COMPLIANCE_STANDARDS = [
  { label: "ABDM Compliant", description: "Ayushman Bharat Digital Mission aligned data models" },
  { label: "NABH Aligned", description: "National Accreditation Board for Hospitals guidelines" },
  { label: "CDSCO Verified", description: "Central Drugs Standard Control Organisation verification" },
] as const;
