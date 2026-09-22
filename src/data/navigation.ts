export interface MegaMenuItem {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export interface MegaMenuCategory {
  title: string;
  categoryKey: string;
  items: MegaMenuItem[];
}

export const SOLUTIONS_MEGA_MENU: MegaMenuCategory[] = [
  {
    title: "SUPPLY CHAIN",
    categoryKey: "supply-chain",
    items: [
      {
        title: "Vendor Discovery & Procurement",
        href: "/solutions/vendor-discovery",
        description: "Verified sourcing & vendor coordination",
        icon: "Search",
      },
      {
        title: "Medicine Manufacturing & Private Label",
        href: "/solutions/manufacturing",
        description: "Contract manufacturing & private label",
        icon: "Factory",
      },
      {
        title: "Medical Supply & Delivery",
        href: "/solutions/medical-supply-delivery",
        description: "Structured recurring supply & tracking",
        icon: "PackageCheck",
      },
    ],
  },
  {
    title: "PHARMACY & CARE",
    categoryKey: "pharmacy-care",
    items: [
      {
        title: "Pharmacy Management",
        href: "/solutions/pharmacy-management",
        description: "End-to-end pharmacy operations & inventory",
        icon: "Store",
      },
      {
        title: "Patient Engagement & Continuity",
        href: "/solutions/patient-engagement",
        description: "Post-care follow-up & feedback loops",
        icon: "Users",
      },
      {
        title: "Claims & Insurance Support",
        href: "/solutions/claims-support",
        description: "Process support for insurance workflows",
        icon: "FileCheck",
      },
    ],
  },
  {
    title: "DIGITAL HEALTH",
    categoryKey: "digital-health",
    items: [
      {
        title: "Apps & Software Transformation",
        href: "/solutions/apps-and-software",
        description: "Custom healthcare portals & applications",
        icon: "Smartphone",
      },
      {
        title: "Digital Workflows & Automation",
        href: "/solutions/digital-workflows",
        description: "Automated pipelines & system bridges",
        icon: "GitMerge",
      },
    ],
  },
  {
    title: "HEALTHCARE ADMINISTRATION",
    categoryKey: "healthcare-admin",
    items: [
      {
        title: "Accounting, MIS & Reporting",
        href: "/solutions/accounting-mis",
        description: "Financial dashboards & executive reporting",
        icon: "BarChart3",
      },
      {
        title: "HR & Healthcare Staffing",
        href: "/solutions/hr-staffing",
        description: "Vetted healthcare & pharmacy manpower",
        icon: "UserCheck",
      },
    ],
  },
];

export const PRIMARY_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Testimonials", href: "/testimonials" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "All Solutions", href: "/solutions" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Discuss Requirement", href: "/inquiry" },
  ],
  solutions: [
    { label: "Medical Supply & Delivery", href: "/solutions/medical-supply-delivery" },
    { label: "Vendor Discovery & Procurement", href: "/solutions/vendor-discovery" },
    { label: "Pharmacy Management", href: "/solutions/pharmacy-management" },
    { label: "Contract Manufacturing", href: "/solutions/manufacturing" },
    { label: "Accounting, MIS & Reporting", href: "/solutions/accounting-mis" },
    { label: "Apps & Digital Transformation", href: "/solutions/apps-and-software" },
    { label: "HR & Healthcare Staffing", href: "/solutions/hr-staffing" },
    { label: "Medical Claims Support", href: "/solutions/claims-support" },
    { label: "Patient Engagement", href: "/solutions/patient-engagement" },
    { label: "Custom Healthcare Solutions", href: "/solutions/custom-healthcare-solutions" },
  ],
  categories: [
    { label: "Supply Chain", href: "/solutions#supply-chain" },
    { label: "Pharmacy & Care", href: "/solutions#pharmacy-care" },
    { label: "Digital Health", href: "/solutions#digital-health" },
    { label: "Healthcare Administration", href: "/solutions#healthcare-admin" },
  ],
};
