export interface SubExecutionSolution {
  title: string;
  slug: string;
}

export interface CoreSolutionDomain {
  key: string;
  number: string;
  categoryLabel: string;
  title: string;
  description: string;
  color: string;
  tag: string;
  subSolutions: SubExecutionSolution[];
  slug: string;
}

export interface Vector3D {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
}

// Interlocking Pinwheel vectors matching user's hand-drawn sketch
export const PINWHEEL_ENTRY_VECTORS: Vector3D[] = [
  { x: -380, y: -60, rotate: -16 },  // 01 Supply Chain (Left Vertical)
  { x: 300, y: -260, rotate: 14 },   // 02 Pharmacy & Care (Top Horizontal)
  { x: 0, y: 0, rotate: -25, scale: 0.4 }, // Center Dava·Track Pill
  { x: 380, y: 60, rotate: 16 },    // 03 Digital Health (Right Vertical)
  { x: -300, y: 260, rotate: -14 },  // 04 Healthcare Administration (Bottom Horizontal)
];

export const ASYMMETRIC_ENTRY_VECTORS = PINWHEEL_ENTRY_VECTORS;
export const FOUR_ENTRY_VECTORS = PINWHEEL_ENTRY_VECTORS;

export const FOUR_CORE_SOLUTIONS: CoreSolutionDomain[] = [
  {
    key: "supply-chain",
    number: "01",
    categoryLabel: "MEDICAL SUPPLY CHAIN & SOURCING",
    title: "Supply Chain",
    description: "Build a dependable medicine and healthcare-product supply system — from discovery and procurement to delivery management and real-time tracking.",
    color: "#234E48", // Rich glossy forest teal
    tag: "SUPPLY CHAIN",
    slug: "medical-supply-delivery",
    subSolutions: [
      { title: "Vendor Discovery & Procurement", slug: "vendor-discovery" },
      { title: "Medicine Manufacturing & Private Label", slug: "manufacturing" },
      { title: "Medical Supply & Delivery", slug: "medical-supply-delivery" },
    ],
  },
  {
    key: "pharmacy-care",
    number: "02",
    categoryLabel: "PHARMACY OPERATIONS & PATIENT LIFECYCLE",
    title: "Pharmacy & Care",
    description: "End-to-end pharmacy management, continuous post-service patient engagement, and specialized insurance claims workflows.",
    color: "#3D4952", // Rich glossy slate gray
    tag: "PHARMACY & CARE",
    slug: "pharmacy-management",
    subSolutions: [
      { title: "Pharmacy Management", slug: "pharmacy-management" },
      { title: "Patient Engagement & Continuity of Care", slug: "patient-engagement" },
      { title: "Medical Claims & Health Insurance Support", slug: "claims-support" },
    ],
  },
  {
    key: "digital-health",
    number: "03",
    categoryLabel: "TECHNOLOGY & SOFTWARE TRANSFORMATION",
    title: "Digital Health",
    description: "Tailored applications, healthcare portals, workflow automation, and custom digital systems built strictly around your actual clinical and administrative operations.",
    color: "#354555", // Rich glossy steel navy
    tag: "DIGITAL HEALTH",
    slug: "apps-and-software",
    subSolutions: [
      { title: "Apps, Software & Digital Transformation", slug: "apps-and-software" },
      { title: "Digital Workflows & Healthcare Automation", slug: "digital-workflows" },
    ],
  },
  {
    key: "healthcare-admin",
    number: "04",
    categoryLabel: "STAFFING, MIS & OPERATIONAL GOVERNANCE",
    title: "Healthcare Administration",
    description: "Structured accounting, real-time MIS analytics, executive dashboards, and specialized healthcare staffing to keep operations compliant and running smoothly.",
    color: "#5B434C", // Rich glossy mocha bronze / espresso
    tag: "ADMINISTRATION",
    slug: "accounting-mis",
    subSolutions: [
      { title: "Accounting, MIS & Reporting", slug: "accounting-mis" },
      { title: "HR & Healthcare Staffing", slug: "hr-staffing" },
    ],
  },
];
