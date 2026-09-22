export interface MosaicSolution {
  key: string;
  slug: string;
  no: string;
  tileTitle: string;
  objective: string;
  color: string;
  onLight?: boolean;
  area: string;
  areaSm: string;
}

export interface Vector3D {
  x: number;
  y: number;
  rotate: number;
}

export const ENTRY_VECTORS: Vector3D[] = [
  { x: -280, y: -220, rotate: -22 },
  { x: 40, y: -300, rotate: 16 },
  { x: 300, y: -200, rotate: -18 },
  { x: 0, y: -250, rotate: 25 },
  { x: 320, y: 50, rotate: 20 },
  { x: -300, y: 240, rotate: -24 },
  { x: -40, y: 310, rotate: 18 },
  { x: 280, y: 260, rotate: -20 },
  { x: -320, y: -30, rotate: 22 },
];

export const EXIT_VECTORS: Vector3D[] = [
  { x: 320, y: 240, rotate: 24 },
  { x: -280, y: 280, rotate: -20 },
  { x: -320, y: -220, rotate: 22 },
  { x: 0, y: 320, rotate: -25 },
  { x: -340, y: 60, rotate: -22 },
  { x: 280, y: -260, rotate: 20 },
  { x: 80, y: -320, rotate: -18 },
  { x: -300, y: -280, rotate: 25 },
  { x: 340, y: -40, rotate: -20 },
];

export const MOSAIC_SOLUTIONS: MosaicSolution[] = [
  {
    key: "supply",
    slug: "medical-supply-delivery",
    no: "01",
    tileTitle: "Medical Supply & Delivery",
    objective: "Right Product. Right Place. Right Time.",
    color: "#083B76",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "vendor",
    slug: "vendor-discovery",
    no: "02",
    tileTitle: "Vendor Discovery & Procurement",
    objective: "Finding and coordinating suitable healthcare sources.",
    color: "#0B4C8C",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "pharmacy",
    slug: "pharmacy-management",
    no: "03",
    tileTitle: "Pharmacy Management",
    objective: "Your pharmacy. Our complete operational support.",
    color: "#0D5E7A",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "custom",
    slug: "custom-healthcare-solutions",
    no: "DT",
    tileTitle: "DavaTrack Core",
    objective: "Healthcare Solutions & Execution Partner",
    color: "#062952",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "manufacturing",
    slug: "manufacturing",
    no: "04",
    tileTitle: "Medicine Manufacturing",
    objective: "Your product. Our manufacturing network.",
    color: "#115473",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "apps",
    slug: "apps-and-software",
    no: "06",
    tileTitle: "Apps & Software Systems",
    objective: "Tailored around your actual clinical workflows.",
    color: "#123B7A",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "accounting",
    slug: "accounting-mis",
    no: "05",
    tileTitle: "Accounting & MIS Reporting",
    objective: "Turn healthcare data into actionable decisions.",
    color: "#0F465C",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "staffing",
    slug: "hr-staffing",
    no: "07",
    tileTitle: "HR & Healthcare Staffing",
    objective: "The right people for the right healthcare unit.",
    color: "#16345A",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
  {
    key: "patient",
    slug: "patient-engagement",
    no: "09",
    tileTitle: "Patient Engagement",
    objective: "Care shouldn't end when the patient leaves.",
    color: "#0A5699",
    onLight: false,
    area: "lg:col-span-4 lg:row-span-3",
    areaSm: "col-span-6 row-span-2",
  },
];
