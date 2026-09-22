export interface TestimonialItem {
  id: string;
  quote: string;
  highlight: string;
  role: string;
  organizationType: string;
  segment: "Hospital" | "Pharmacy Chain" | "Diagnostic Network" | "Healthcare Startup" | "All";
  metrics?: { label: string; value: string }[];
  isPlaceholder?: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "DavaTrack helped us streamline our recurring surgical and medicine procurement across our 150-bed multi-specialty facility. Having single-point vendor coordination and scheduled delivery eliminated critical stockouts.",
    highlight: "Zero procurement disruptions across critical clinical operations",
    role: "Director of Operations",
    organizationType: "Multi-Specialty Hospital Network",
    segment: "Hospital",
    metrics: [
      { label: "Procurement Lead Time", value: "-45%" },
      { label: "Stockout Incidents", value: "0%" },
    ],
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote: "Managing expiry rotation, pharmacy manpower, and daily billing reconciliation was a major headache across our 6 retail branches. DavaTrack's managed pharmacy workflows gave us total operational control.",
    highlight: "Complete inventory visibility and near-zero expired medicine write-offs",
    role: "Head of Retail Pharmacy Operations",
    organizationType: "Regional Pharmacy Chain",
    segment: "Pharmacy Chain",
    metrics: [
      { label: "Expiry Loss Reduction", value: "-82%" },
      { label: "Inventory Turnover", value: "+2.4x" },
    ],
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote: "Instead of trying to adapt generic ERP software, DavaTrack built a digital workflow tailored exactly to our sample collection and diagnostic reporting paths. Our staff adopted it with zero friction.",
    highlight: "Bespoke digital architecture without workflow compromise",
    role: "Chief Medical Information Officer",
    organizationType: "Diagnostic & Pathology Network",
    segment: "Diagnostic Network",
    metrics: [
      { label: "Report Turnaround", value: "3x Faster" },
      { label: "Data Entry Errors", value: "-90%" },
    ],
    isPlaceholder: true,
  },
  {
    id: "t4",
    quote: "As a fast-growing digital health platform, we needed verified contract manufacturers and compliant packaging for our private-label wellness formulation. DavaTrack executed the entire coordination seamlessly.",
    highlight: "From formulation concept to certified shelf-ready product",
    role: "Founder & CEO",
    organizationType: "HealthTech & Preventive Care Startup",
    segment: "Healthcare Startup",
    metrics: [
      { label: "Launch Timeline", value: "90 Days" },
      { label: "Regulatory Compliance", value: "100%" },
    ],
    isPlaceholder: true,
  },
];
