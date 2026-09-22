export interface MosaicSolution {
  key: string;
  slug: string;
  no: string;
  tileTitle: string;
  objective: string;
  color: string;
  tag: string;
  onLight?: boolean;
}

export interface Vector3D {
  x: number;
  y: number;
  rotate: number;
}

export const ENTRY_VECTORS: Vector3D[] = [
  { x: -340, y: -220, rotate: -22 }, // 01 Supply & Delivery
  { x: -360, y: 200, rotate: 18 },   // 06 Vendor Discovery
  { x: -90, y: -320, rotate: -16 },  // 02 Pharmacy Management
  { x: -160, y: 280, rotate: 20 },   // 07 Manufacturing
  { x: 0, y: -160, rotate: -10 },    // Center Pill Badge
  { x: 40, y: 340, rotate: 16 },     // 08 HR & Staffing
  { x: 200, y: -300, rotate: 22 },   // 03 Apps & Software
  { x: 210, y: 280, rotate: -20 },   // 09 Claims Support
  { x: 340, y: -230, rotate: -18 },  // 04 Accounting & MIS
  { x: 360, y: 240, rotate: 22 },    // 05 Patient Engagement
];

export const MOSAIC_SOLUTIONS: MosaicSolution[] = [
  {
    key: "supply",
    slug: "medical-supply-delivery",
    no: "01",
    tileTitle: "Supply & Delivery",
    objective: "Right product. Right place. Right time.",
    color: "#234E48",
    tag: "SUPPLY",
    onLight: false,
  },
  {
    key: "vendor",
    slug: "vendor-discovery",
    no: "06",
    tileTitle: "Vendor Discovery",
    objective: "You bring the requirement. We bring the source.",
    color: "#5C744C",
    tag: "VENDOR",
    onLight: false,
  },
  {
    key: "pharmacy",
    slug: "pharmacy-management",
    no: "02",
    tileTitle: "Pharmacy Management",
    objective: "One pharmacy. One operating system.",
    color: "#3D4952",
    tag: "PHARMACY",
    onLight: false,
  },
  {
    key: "manufacturing",
    slug: "manufacturing",
    no: "07",
    tileTitle: "Manufacturing",
    objective: "Your label. Our network.",
    color: "#8EACA0",
    tag: "MFG",
    onLight: true,
  },
  {
    key: "staffing",
    slug: "hr-staffing",
    no: "08",
    tileTitle: "HR & Staffing",
    objective: "Staffed for the operation you actually run.",
    color: "#1E6C6D",
    tag: "STAFFING",
    onLight: false,
  },
  {
    key: "apps",
    slug: "apps-and-software",
    no: "03",
    tileTitle: "Apps & Software",
    objective: "Software that follows the workflow.",
    color: "#354555",
    tag: "APPS",
    onLight: false,
  },
  {
    key: "claims",
    slug: "claims-support",
    no: "09",
    tileTitle: "Claims Support",
    objective: "Fewer stuck claims.",
    color: "#5B434C",
    tag: "CLAIMS",
    onLight: false,
  },
  {
    key: "accounting",
    slug: "accounting-mis",
    no: "04",
    tileTitle: "Accounting & MIS",
    objective: "Numbers you can act on.",
    color: "#A87C64",
    tag: "ACCOUNTS",
    onLight: false,
  },
  {
    key: "patient",
    slug: "patient-engagement",
    no: "05",
    tileTitle: "Patient Engagement",
    objective: "The visit ends. The care doesn't.",
    color: "#664A57",
    tag: "PATIENT",
    onLight: false,
  },
];
