export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
}

export interface SolutionItem {
  slug: string;
  number: string;
  categoryKey: "supply-chain" | "pharmacy-care" | "digital-health" | "healthcare-admin" | "custom";
  categoryTitle: string;
  title: string;
  shortDescription: string;
  headline: string;
  fullDescription: string;
  objective?: string;
  weCanSupport: string[];
  processSteps?: ProcessStep[];
  keyOutcomes: string[];
  iconName: string;
  complianceNote?: string;
  relatedSlugs: string[];
}

export interface SolutionCategory {
  key: "supply-chain" | "pharmacy-care" | "digital-health" | "healthcare-admin";
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  solutions: {
    slug: string;
    title: string;
    description: string;
    iconName: string;
  }[];
}

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    key: "supply-chain",
    number: "01",
    title: "SUPPLY CHAIN",
    subtitle: "Medical Supply Chain & Sourcing",
    description: "Build a dependable medicine and healthcare-product supply system — from discovery and procurement to delivery management and real-time tracking.",
    iconName: "Truck",
    accentColor: "#0D6EFD",
    solutions: [
      {
        slug: "vendor-discovery",
        title: "Vendor Discovery & Procurement",
        description: "Finding and coordinating suitable sources for healthcare requirements, medicines, consumables and equipment.",
        iconName: "Search",
      },
      {
        slug: "manufacturing",
        title: "Medicine Manufacturing & Private Label",
        description: "Coordination with verified manufacturing partners for custom healthcare formulations and private-label products.",
        iconName: "Factory",
      },
      {
        slug: "medical-supply-delivery",
        title: "Medical Supply & Delivery",
        description: "Reliable medicine and healthcare-product supply with structured logistics and delivery systems.",
        iconName: "PackageCheck",
      },
    ],
  },
  {
    key: "pharmacy-care",
    number: "02",
    title: "PHARMACY & CARE",
    subtitle: "Pharmacy Operations & Patient Lifecycle",
    description: "End-to-end pharmacy management, continuous post-service patient engagement, and specialized insurance claims workflows.",
    iconName: "HeartPulse",
    accentColor: "#1EA7FF",
    solutions: [
      {
        slug: "pharmacy-management",
        title: "Pharmacy Management",
        description: "Procurement, inventory, stock rotation, billing, staff, technology, MIS and complete managed pharmacy operations.",
        iconName: "Store",
      },
      {
        slug: "patient-engagement",
        title: "Patient Engagement & Continuity of Care",
        description: "Structured post-service engagement systems for proactive follow-up, feedback collection, and care continuity.",
        iconName: "Users",
      },
      {
        slug: "claims-support",
        title: "Medical Claims & Health Insurance Support",
        description: "Technology-enabled, process-oriented support for medical documentation, tracking and insurance claims workflows.",
        iconName: "FileCheck",
      },
    ],
  },
  {
    key: "digital-health",
    number: "03",
    title: "DIGITAL HEALTH",
    subtitle: "Technology & Software Transformation",
    description: "Tailored applications, healthcare portals, workflow automation, and custom digital systems built strictly around your actual clinical and administrative operations.",
    iconName: "Cpu",
    accentColor: "#06366F",
    solutions: [
      {
        slug: "apps-and-software",
        title: "Apps, Software & Digital Transformation",
        description: "Customized web & mobile applications, portals, clinical tools, and automation built around your specific workflow.",
        iconName: "Smartphone",
      },
      {
        slug: "digital-workflows",
        title: "Digital Workflows & Healthcare Automation",
        description: "Connecting disparate systems, automating clinical documentation, inventory sync, and administrative pipelines.",
        iconName: "GitMerge",
      },
    ],
  },
  {
    key: "healthcare-admin",
    number: "04",
    title: "HEALTHCARE ADMINISTRATION",
    subtitle: "Staffing, MIS & Operational Governance",
    description: "Structured accounting, real-time MIS analytics, executive dashboards, and specialized healthcare staffing to keep operations compliant and running smoothly.",
    iconName: "Building2",
    accentColor: "#0D6EFD",
    solutions: [
      {
        slug: "accounting-mis",
        title: "Accounting, MIS & Reporting",
        description: "Turn healthcare data into actionable decisions with structured accounting support, dashboards and management reporting.",
        iconName: "BarChart3",
      },
      {
        slug: "hr-staffing",
        title: "HR & Healthcare Staffing",
        description: "Recruitment, vetting, hiring and workforce support for medical, pharmacy, administrative and technical personnel.",
        iconName: "UserCheck",
      },
    ],
  },
];

export const SOLUTIONS_DATA: Record<string, SolutionItem> = {
  "medical-supply-delivery": {
    slug: "medical-supply-delivery",
    number: "01",
    categoryKey: "supply-chain",
    categoryTitle: "SUPPLY CHAIN",
    title: "Medical Supply & Delivery",
    shortDescription: "Build a supply chain you can depend on. Reliable medicine and healthcare-product supply with structured delivery systems.",
    headline: "Reliable Medicine & Consumables Supply With Structured Logistics",
    fullDescription: "We help healthcare organizations establish dependable, structured supply and delivery systems for recurring healthcare requirements. From urgent clinical supplies to scheduled pharmaceutical restocking, our logistics network ensures complete visibility and consistency across your operations.",
    objective: "Right Product. Right Place. Right Time.",
    weCanSupport: [
      "Medicine procurement",
      "Medical consumables",
      "Surgical products",
      "Vendor coordination",
      "Order management",
      "Delivery management",
      "Route management",
      "Supply tracking",
    ],
    processSteps: [
      { number: "01", title: "Demand Assessment", description: "Mapping consumption patterns and recurring inventory requirements." },
      { number: "02", title: "Catalog Alignment", description: "Standardizing SKUs across medicine, consumables, and surgical items." },
      { number: "03", title: "Structured Dispatch", description: "Coordinated ordering and optimized multi-point delivery schedules." },
      { number: "04", title: "Live Tracking", description: "Real-time visibility into route status and temperature-sensitive transit." },
      { number: "05", title: "Reorder & SLA Review", description: "Continuous replenishment to eliminate stockouts and delivery delays." },
    ],
    keyOutcomes: [
      "Zero disruption to emergency and routine patient care",
      "Lower holding costs through optimized replenishment cycles",
      "Transparent batch tracking and expiration control",
      "Single-point coordination for multi-vendor supply orders",
    ],
    iconName: "PackageCheck",
    relatedSlugs: ["vendor-discovery", "pharmacy-management", "manufacturing"],
  },

  "vendor-discovery": {
    slug: "vendor-discovery",
    number: "02",
    categoryKey: "supply-chain",
    categoryTitle: "SUPPLY CHAIN",
    title: "Vendor Discovery & Procurement",
    shortDescription: "Finding and coordinating appropriate sources for medicines, medical products, consumables, equipment and healthcare requirements.",
    headline: "Strategic Healthcare Sourcing and Vendor Coordination",
    fullDescription: "Need a trusted healthcare vendor? Finding compliant, competitive, and reliable suppliers in healthcare is time-consuming and fraught with supply risks. DavaTrack helps find and coordinate appropriate verified sources for medicines, specialized consumables, medical equipment, and institution-specific requirements.",
    objective: "Verified Sources. Competitive Terms. Zero Procurement Bottlenecks.",
    weCanSupport: [
      "Vendor sourcing & identification",
      "Quality & license verification",
      "Price negotiation & rate contracts",
      "Consumables & surgical sourcing",
      "Equipment vendor evaluation",
      "Multi-vendor coordination",
      "Procurement lifecycle management",
      "Supplier SLA compliance tracking",
    ],
    processSteps: [
      { number: "01", title: "Requirement", description: "Detailed specification of clinical needs, volume, and budget." },
      { number: "02", title: "Vendor Discovery", description: "Market scan across verified national and regional healthcare manufacturers." },
      { number: "03", title: "Evaluation", description: "Assessing certifications, licensing, lead times, and commercial viability." },
      { number: "04", title: "Coordination", description: "Establishing rate contracts, payment terms, and delivery SLAs." },
      { number: "05", title: "Procurement", description: "Execution of purchase orders and ongoing supplier governance." },
    ],
    keyOutcomes: [
      "Access to extensive verified healthcare supplier network",
      "Substantial cost savings through structured vendor negotiation",
      "Elimination of counterfeit or unverified supplier risks",
      "Streamlined purchasing workflows across all institutional departments",
    ],
    iconName: "Search",
    relatedSlugs: ["medical-supply-delivery", "manufacturing", "accounting-mis"],
  },

  "pharmacy-management": {
    slug: "pharmacy-management",
    number: "03",
    categoryKey: "pharmacy-care",
    categoryTitle: "PHARMACY & CARE",
    title: "Pharmacy Management",
    shortDescription: "Your pharmacy. Our operational support. End-to-end pharmacy management support across the operational ecosystem.",
    headline: "Comprehensive Pharmacy Operations, Inventory & Technology Management",
    fullDescription: "Operating a high-performing pharmacy requires mastering procurement, inventory turnover, near-expiry management, billing accuracy, pharmacist staffing, and statutory compliance. DavaTrack provides end-to-end pharmacy management support — enabling healthcare organizations to operate profitable, compliant, and patient-centric pharmacies.",
    objective: "Flawless Stock Control. Faster Dispensing. Healthier Unit Economics.",
    weCanSupport: [
      "Procurement & vendors",
      "Inventory & stock rotation",
      "Expiry & reorder systems",
      "Billing & point-of-sale",
      "Staff & HR management",
      "Accounting coordination",
      "MIS & margin reporting",
      "SOP & process standardization",
      "Technology & software",
      "Delivery management",
    ],
    complianceNote: "For suitable engagements, DavaTrack can support complete pharmacy operations, subject to applicable licensing, professional, and regulatory requirements.",
    processSteps: [
      { number: "01", title: "Audit & Baseline", description: "Evaluating existing inventory, billing processes, and margins." },
      { number: "02", title: "SOP Implementation", description: "Establishing strict receiving, dispensing, and storage protocols." },
      { number: "03", title: "Inventory Re-engineering", description: "Configuring automated reorder triggers and expiry rotation." },
      { number: "04", title: "Staff & Tech Deployment", description: "Training pharmacists and deploying modern dispensing software." },
      { number: "05", title: "Daily Execution & MIS", description: "Continuous margin tracking, stock auditing, and reporting." },
    ],
    keyOutcomes: [
      "Dramatic reduction in expired medicine write-offs",
      "Optimized working capital through intelligent reordering",
      "Higher patient satisfaction with rapid dispensing and home delivery",
      "Complete transparency into daily sales, margins, and shrinkage",
    ],
    iconName: "Store",
    relatedSlugs: ["medical-supply-delivery", "accounting-mis", "patient-engagement"],
  },

  "manufacturing": {
    slug: "manufacturing",
    number: "04",
    categoryKey: "supply-chain",
    categoryTitle: "SUPPLY CHAIN",
    title: "Medicine Manufacturing & Private Label",
    shortDescription: "Your healthcare product. Our manufacturing network. Coordinating with appropriate manufacturing partners for custom formulations.",
    headline: "Contract Manufacturing & Private-Label Healthcare Coordination",
    fullDescription: "If a hospital, pharmacy network, or healthcare enterprise wants its own private-label medicine, nutraceutical, or surgical product line without investing in heavy manufacturing infrastructure, DavaTrack coordinates the entire lifecycle with vetted, certified contract manufacturers.",
    objective: "Turn Healthcare Brand Vision Into Certified Quality Products.",
    weCanSupport: [
      "Manufacturer discovery",
      "Contract manufacturing coordination",
      "Private-label coordination",
      "Product requirements & formulation",
      "Packaging & artwork coordination",
      "Production planning & batch tracking",
      "Supply planning",
      "Procurement & batch testing coordination",
    ],
    complianceNote: "All manufacturing activities are subject to applicable regulatory, licensing, and quality requirements.",
    processSteps: [
      { number: "01", title: "Product Concept", description: "Defining formulations, dosage forms, and target volumes." },
      { number: "02", title: "Facility Matching", description: "Identifying WHO-GMP and ISO certified contract manufacturing partners." },
      { number: "03", title: "Packaging & Regulatory", description: "Coordinating compliant labeling, packaging design, and approvals." },
      { number: "04", title: "Production Oversight", description: "Monitoring batch production, quality testing, and release criteria." },
      { number: "05", title: "Warehousing & Supply", description: "Integrating finished goods into your distribution network." },
    ],
    keyOutcomes: [
      "Higher margin capture through private-label brand ownership",
      "Zero capital expenditure on factory infrastructure",
      "Rigorous quality oversight and full batch documentation",
      "Seamless integration with institutional supply chains",
    ],
    iconName: "Factory",
    relatedSlugs: ["vendor-discovery", "medical-supply-delivery", "custom-healthcare-solutions"],
  },

  "accounting-mis": {
    slug: "accounting-mis",
    number: "05",
    categoryKey: "healthcare-admin",
    categoryTitle: "HEALTHCARE ADMINISTRATION",
    title: "Accounting, MIS & Reporting",
    shortDescription: "Turn healthcare data into better decisions through structured accounting support, management information systems and reporting.",
    headline: "Healthcare Financial Intelligence & Operational Reporting",
    fullDescription: "Healthcare operations generate complex financial transactions across vendor payables, patient receivables, insurance settlements, inventory valuation, and departmental operating costs. DavaTrack provides structured healthcare accounting, MIS dashboards, and custom executive reporting.",
    objective: "Total Financial Clarity. Real-Time Operational Visibility.",
    weCanSupport: [
      "Accounting support",
      "Billing management & reconciliation",
      "Sales & revenue reports",
      "Purchase & vendor reports",
      "Inventory valuation reports",
      "Expense tracking & cost control",
      "MIS dashboards & analytics",
      "Management reporting & KPIs",
      "Performance & margin reporting",
      "Customized executive reports",
    ],
    processSteps: [
      { number: "01", title: "Data Stream Audit", description: "Reviewing billing, purchasing, payroll, and banking touchpoints." },
      { number: "02", title: "System Standardization", description: "Aligning chart of accounts and departmental cost centers." },
      { number: "03", title: "Automated Reconciliation", description: "Setting up automated cross-checks between sales and inventory." },
      { number: "04", title: "MIS Dashboard Launch", description: "Providing live visualization of daily margins, collections, and expenses." },
      { number: "05", title: "Monthly Executive Briefs", description: "Actionable financial insights for leadership decision making." },
    ],
    keyOutcomes: [
      "Immediate detection of inventory leakages and billing discrepancies",
      "Accurate real-time gross margin and departmental profitability figures",
      "Audit-ready financial statements and compliant tax preparation",
      "Elimination of manual spreadsheets and fragmented financial records",
    ],
    iconName: "BarChart3",
    relatedSlugs: ["pharmacy-management", "claims-support", "apps-and-software"],
  },

  "apps-and-software": {
    slug: "apps-and-software",
    number: "06",
    categoryKey: "digital-health",
    categoryTitle: "DIGITAL HEALTH",
    title: "Apps, Software & Digital Transformation",
    shortDescription: "Don't change your business to fit software. We build tailored digital systems around your actual healthcare workflows.",
    headline: "Purpose-Built Healthcare Software, Patient Portals & Digital Systems",
    fullDescription: "Off-the-shelf software often forces healthcare organizations to alter clinical and administrative routines. DavaTrack builds bespoke web applications, mobile platforms, patient portals, and automated workflow systems engineered to mirror and enhance your unique operational processes.",
    objective: "Software Engineered For Your Workflows, Not The Other Way Around.",
    weCanSupport: [
      "Mobile applications (iOS & Android)",
      "Web applications & clinical portals",
      "Healthcare management portals",
      "Pharmacy dispensing systems",
      "Hospital departmental solutions",
      "Delivery & dispatch systems",
      "Inventory tracking systems",
      "Reporting dashboards & telemetry",
      "Workflow automation engines",
      "AI-enabled diagnostic & triage tools",
    ],
    processSteps: [
      { number: "01", title: "Workflow Mapping", description: "Shadowing clinical and administrative teams to identify bottlenecks." },
      { number: "02", title: "Architecture & UI/UX", description: "Designing intuitive interfaces that minimize staff click-fatigue." },
      { number: "03", title: "Agile Development", description: "Building robust, HIPAA/data-compliant software modules." },
      { number: "04", title: "Integration & Training", description: "Connecting with existing hardware, EHRs, and onboarding staff." },
      { number: "05", title: "Continuous Evolution", description: "Feature enhancements, security updates, and performance monitoring." },
    ],
    keyOutcomes: [
      "Zero friction adoption thanks to familiar, tailored workflows",
      "Seamless integration between clinical records, billing, and inventory",
      "Secure, cloud-accessible portals for staff, doctors, and patients",
      "Enterprise-grade data security, scalability, and high availability",
    ],
    iconName: "Smartphone",
    relatedSlugs: ["digital-workflows", "patient-engagement", "pharmacy-management"],
  },

  "digital-workflows": {
    slug: "digital-workflows",
    number: "06b",
    categoryKey: "digital-health",
    categoryTitle: "DIGITAL HEALTH",
    title: "Digital Workflows & Healthcare Automation",
    shortDescription: "Connecting fragmented systems, eliminating manual duplicate entries, and automating healthcare operations.",
    headline: "Connected Digital Ecosystems for Frictionless Healthcare Delivery",
    fullDescription: "Healthcare units frequently struggle with siloed software where lab results, prescriptions, billing records, and inventory data don't communicate. DavaTrack bridges these gaps by constructing automated digital bridges and automated pipelines across all systems.",
    objective: "Eliminate Manual Repetition. Connect Disparate Healthcare Data.",
    weCanSupport: [
      "EHR & billing system bridges",
      "Automated prescription routing",
      "Real-time inventory synchronization",
      "Automated SMS/WhatsApp notifications",
      "Clinical alert pipelines",
      "Paper-to-digital document digitization",
      "Custom API integrations",
      "Cloud database consolidation",
    ],
    processSteps: [
      { number: "01", title: "System Audit", description: "Cataloging all existing software, databases, and manual data handoffs." },
      { number: "02", title: "Pipeline Design", description: "Creating automated data triggers, transformations, and fallback rules." },
      { number: "03", title: "API & Bridge Construction", description: "Developing secure middleware and webhook handlers." },
      { number: "04", title: "Stress Testing", description: "Validating data integrity during high-volume clinical operations." },
      { number: "05", title: "Live Monitoring", description: "24/7 automated monitoring of pipeline health and exception handling." },
    ],
    keyOutcomes: [
      "Drastic reduction in manual data entry errors and omissions",
      "Instantaneous cross-departmental record updates",
      "Automated patient communications and test dispatch",
      "Unlocked cross-functional analytics and audit trails",
    ],
    iconName: "GitMerge",
    relatedSlugs: ["apps-and-software", "accounting-mis", "claims-support"],
  },

  "hr-staffing": {
    slug: "hr-staffing",
    number: "07",
    categoryKey: "healthcare-admin",
    categoryTitle: "HEALTHCARE ADMINISTRATION",
    title: "HR & Healthcare Staffing",
    shortDescription: "The right people for the right healthcare operation. Recruitment, hiring and workforce support for healthcare organizations.",
    headline: "Specialized Healthcare Recruitment & Operational Workforce Solutions",
    fullDescription: "Finding reliable, qualified, and motivated healthcare professionals is one of the greatest operational bottlenecks for hospitals, clinics, and pharmacies. DavaTrack manages the entire staffing lifecycle from sourcing and credential vetting to onboarding and payroll support.",
    objective: "Qualified Personnel. Verified Credentials. Dependable Shift Coverage.",
    weCanSupport: [
      "Healthcare recruitment",
      "Candidate sourcing & talent pools",
      "Staff hiring & vetting",
      "Healthcare manpower planning",
      "Registered pharmacy staff",
      "Administrative staff",
      "Operational & logistics staff",
      "Technology & IT personnel",
      "Clinical support personnel",
      "HR process & payroll support",
    ],
    processSteps: [
      { number: "01", title: "Workforce Sizing", description: "Determining exact skillsets, certifications, and shift requirements." },
      { number: "02", title: "Candidate Vetting", description: "Checking pharmacy licenses, academic credentials, and background history." },
      { number: "03", title: "Technical & Cultural Fit", description: "Assessing candidate problem-solving and patient bedside manner." },
      { number: "04", title: "Onboarding & SOP Training", description: "Pre-deployment training on institutional protocols and software." },
      { number: "05", title: "Performance Governance", description: "Ongoing attendance tracking, feedback cycles, and replacement support." },
    ],
    keyOutcomes: [
      "Elimination of understaffed shifts and operational downtime",
      "Verified compliance with professional council regulations",
      "Faster time-to-hire for specialized healthcare roles",
      "Lower employee turnover through structured onboarding",
    ],
    iconName: "UserCheck",
    relatedSlugs: ["pharmacy-management", "accounting-mis", "custom-healthcare-solutions"],
  },

  "claims-support": {
    slug: "claims-support",
    number: "08",
    categoryKey: "pharmacy-care",
    categoryTitle: "PHARMACY & CARE",
    title: "Medical Claims & Health Insurance Support",
    shortDescription: "Better processes for healthcare claims. Technology-enabled and process-oriented support for defined claims and healthcare insurance workflows.",
    headline: "Streamlined Medical Insurance Documentation & Claims Processing",
    fullDescription: "Delayed or rejected insurance claims harm institutional cash flow and create severe patient dissatisfaction. DavaTrack introduces structured documentation protocols, digital tracking, and status follow-up mechanisms to accelerate claim approvals and settlement cycles.",
    objective: "Higher First-Pass Approval. Accelerated Settlements. Less Rejection.",
    weCanSupport: [
      "Claim data management",
      "Documentation workflows & checklists",
      "Real-time claim status tracking",
      "Discrepancy & status management",
      "Payer follow-up coordination",
      "Claims settlement reporting",
      "TPA & insurance coordination",
      "Digital claim submission workflows",
    ],
    complianceNote: "Services are provided within applicable legal, regulatory, and professional requirements.",
    processSteps: [
      { number: "01", title: "Pre-Auth Verification", description: "Ensuring patient eligibility and pre-authorization documentation." },
      { number: "02", title: "Dossier Assembly", description: "Compiling medical summaries, bills, diagnostic reports, and discharge notes." },
      { number: "03", title: "Audit & Scrubbing", description: "Algorithmic and manual pre-submission audit to catch errors." },
      { number: "04", title: "Payer Submission & Tracking", description: "Digital dispatch and continuous follow-up with TPAs/insurers." },
      { number: "05", title: "Reconciliation & Settling", description: "Matching bank receipts with approved claim amounts." },
    ],
    keyOutcomes: [
      "Significant reduction in claim rejection and query rates",
      "Shortened average days in accounts receivable (AR)",
      "Enhanced patient trust during discharge and billing",
      "Transparent audit trails for all insurer communications",
    ],
    iconName: "FileCheck",
    relatedSlugs: ["accounting-mis", "patient-engagement", "digital-workflows"],
  },

  "patient-engagement": {
    slug: "patient-engagement",
    number: "09",
    categoryKey: "pharmacy-care",
    categoryTitle: "PHARMACY & CARE",
    title: "Patient Engagement & Continuity of Care",
    shortDescription: "Care shouldn't end when the patient leaves. Structured post-service engagement systems for communication, feedback and follow-up.",
    headline: "Proactive Follow-Up, Care Continuity & Patient Loyalty Systems",
    fullDescription: "A successful healthcare experience extends beyond clinic or hospital discharge. DavaTrack helps healthcare organizations build automated, compassionate follow-up systems that track treatment compliance, gather actionable patient feedback, schedule follow-ups, and ensure continuity of care.",
    objective: "Better Clinical Outcomes. Lifelong Patient Relationships.",
    weCanSupport: [
      "Post-visit follow-up communication",
      "Automated appointment & dosage reminders",
      "Patient satisfaction & feedback loops",
      "Patient experience tracking & NPS",
      "Care continuity & check-in coordination",
      "Patient relationship management (PRM) systems",
      "Prescription refill alerts",
      "Health education broadcast channels",
    ],
    complianceNote: "Patient communication should be designed and operated in accordance with applicable privacy, consent, and healthcare regulations.",
    processSteps: [
      { number: "01", title: "Visit", description: "Initial clinical consultation, prescription generation, or discharge." },
      { number: "02", title: "Service", description: "Dispensing medicines, procedure execution, or diagnostics." },
      { number: "03", title: "Engagement", description: "Automated check-in via SMS/WhatsApp on recovery status." },
      { number: "04", title: "Feedback", description: "Collecting structured patient experience ratings and clinical notes." },
      { number: "05", title: "Follow-up", description: "Refill scheduling, follow-up booking, and care continuity." },
    ],
    keyOutcomes: [
      "Higher patient retention and repeat consultation rates",
      "Improved treatment adherence and chronic condition management",
      "Real-time alerts on unsatisfied patients before negative reviews",
      "Increased pharmacy refill volume through automated nudges",
    ],
    iconName: "Users",
    relatedSlugs: ["pharmacy-management", "apps-and-software", "claims-support"],
  },

  "custom-healthcare-solutions": {
    slug: "custom-healthcare-solutions",
    number: "10",
    categoryKey: "custom",
    categoryTitle: "CUSTOM SOLUTIONS",
    title: "Custom Healthcare Solutions",
    shortDescription: "If the solution doesn't exist, we build it. Combining technology, supply, people, processes and management around your exact problem.",
    headline: "Tailored Healthcare Engineering & Execution For Unique Challenges",
    fullDescription: "Every healthcare institution faces unique operational friction that cannot be solved by standard templates. Whether you are launching a specialized telemedicine network, scaling an outpatient clinic chain, or restructuring hospital supply pipelines, DavaTrack orchestrates all necessary components.",
    objective: "Start With The Problem. We Orchestrate The Complete Solution.",
    weCanSupport: [
      "Healthcare operational troubleshooting",
      "End-to-end turnkey healthcare project execution",
      "Hybrid technology + physical supply solutions",
      "Institutional workflow standardization & SOPs",
      "Multi-facility expansion support",
      "Regulatory & accreditation workflow readiness",
      "Supply chain and pharmacy turnaround programs",
      "Bespoke data analytics & enterprise intelligence",
    ],
    processSteps: [
      { number: "01", title: "Problem", description: "Deep-dive diagnostic into institutional friction and strategic goals." },
      { number: "02", title: "Assessment", description: "Quantifying resource constraints, costs, regulatory factors, and timelines." },
      { number: "03", title: "Solution Design", description: "Architecting a hybrid model combining technology, people, and supply." },
      { number: "04", title: "Implementation", description: "Hands-on rollout, system configuration, and operational deployment." },
      { number: "05", title: "Improve", description: "Continuous measurement against agreed KPIs and ongoing optimization." },
    ],
    keyOutcomes: [
      "Customized roadmap tailored 100% to your organizational context",
      "Single accountable partner executing both digital and physical operations",
      "Measurable return on investment with defined operational milestones",
      "Long-term scalability and operational resilience",
    ],
    iconName: "Sparkles",
    relatedSlugs: ["medical-supply-delivery", "apps-and-software", "pharmacy-management"],
  },
};

export const ALL_SOLUTIONS_LIST = Object.values(SOLUTIONS_DATA);
