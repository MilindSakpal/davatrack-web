# DavaTrack Digital LLP — Web Platform

> **The Healthcare Solutions & Operational Execution Partner**  
> Uniting **Supply, Technology, People, Processes, Management, and Execution** into a dependable operational backbone for hospitals, pharmacy chains, diagnostic networks, and digital health enterprises.

---

## 📑 Table of Contents
1. [Tech Stack & Architecture](#-tech-stack--architecture)
2. [Project Directory Map](#-project-directory-map)
3. [Brand Design System & Color Tokens](#-brand-design-system--color-tokens)
4. [Developer "How-To" Guides](#-developer-how-to-guides)
   - [1. How to Add or Modify a Solution Page](#1-how-to-add-or-modify-a-solution-page)
   - [2. How to Update Navigation & Mega Menu](#2-how-to-update-navigation--mega-menu)
   - [3. How to Add or Update Testimonials](#3-how-to-add-or-update-testimonials)
   - [4. How to Update Company Info & Global Constants](#4-how-to-update-company-info--global-constants)
   - [5. How the Agency-to-Retailer Journey Animation Works](#5-how-the-agency-to-retailer-journey-animation-works)
5. [Available Scripts](#-available-scripts)
6. [Design Guidelines & Coding Standards](#-design-guidelines--coding-standards)

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Dynamic Routing)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom brand design tokens
- **Animations**: [GSAP 3](https://greensock.com/gsap/) & CSS Keyframe GPU transitions
- **Icons**: [Lucide React](https://lucide.dev/) (rendered dynamically via `<DynamicIcon />`)
- **Utility Helpers**: `clsx` and `tailwind-merge` (`cn` helper)

---

## 📁 Project Directory Map

```text
davatrack-web/
├── src/
│   ├── app/                               # Next.js 14 App Router Pages
│   │   ├── layout.tsx                     # Root HTML wrapper, Google Inter font, Navbar & Footer
│   │   ├── page.tsx                       # Homepage (Hero, Experience, Process, CTAs)
│   │   ├── about/page.tsx                 # About DavaTrack story & leadership pillars
│   │   ├── inquiry/page.tsx               # Interactive consultation & requirement form
│   │   ├── login/page.tsx                 # Partner operations & client portal access
│   │   ├── testimonials/page.tsx          # Full client stories, filters, & performance metrics
│   │   ├── solutions/
│   │   │   ├── page.tsx                   # All Solutions index & category overview
│   │   │   └── [slug]/page.tsx            # Dynamic Solution detail view (10+ solutions)
│   │   ├── robots.ts                      # SEO search bot crawler instructions
│   │   └── sitemap.ts                     # Automated XML sitemap generation
│   │
│   ├── components/                        # Modular React Components
│   │   ├── home/                          # Homepage sections (Hero, CTASection, FocusAreas, etc.)
│   │   ├── layout/                        # Global chrome: Navbar, Footer, WhatsAppButton
│   │   ├── inquiry/                       # Inquiry consultation interactive form
│   │   ├── solutions/                     # Interactive visualizers & journey animations:
│   │   │   ├── AgencyToRetailerJourney.tsx # Scroll-driven road path & animated delivery bike
│   │   │   ├── SupplyChainAnimation.tsx   # Supply chain node network visualizer
│   │   │   ├── SupplyChainDeliverables.tsx# Core deliverables grid
│   │   │   └── SupplyChainImplementationWorkflow.tsx # Phased implementation timeline
│   │   └── ui/                            # Atomic UI primitives:
│   │       ├── Button.tsx                 # Unified Button & Next Link with variants
│   │       ├── Badge.tsx                  # Status pill badges with optional animated pulse dot
│   │       └── Icons.tsx                  # Dynamic Lucide icon lookup with Sparkles fallback
│   │
│   ├── data/                              # Single Sources of Truth (Data Layer)
│   │   ├── solutions.ts                   # All 10 Solutions, descriptions, objectives, & steps
│   │   ├── mosaicSolutions.ts             # 4 Core Solution Domains & pinwheel vectors
│   │   ├── navigation.ts                  # Header mega menu & footer directory links
│   │   └── testimonials.ts                # Client quotes, hospital segments, & performance metrics
│   │
│   ├── lib/                               # System Helpers & Configuration
│   │   ├── constants.ts                   # Global brand colors, company contacts, pillars, & standards
│   │   ├── utils.ts                       # `cn()` Tailwind class merge utility
│   │   └── gsap/animations.ts             # GSAP ScrollTrigger helpers & entrance timelines
│   │
│   └── styles/
│       └── globals.css                    # CSS variables, glassmorphism, animations, & scrollbars
│
├── tailwind.config.ts                     # Tailwind theme extensions & brand color tokens
├── tsconfig.json                          # TypeScript configuration & path aliases (@/*)
└── package.json                           # Dependencies and build scripts
```

---

## 🎨 Brand Design System & Color Tokens

The visual identity is built on a clean, sober healthcare palette:

| Token Name | Hex Code | Tailwind Class Alias | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Primary / Dark Slate** | `#122631` | `bg-brand-primary`, `text-brand-primary` | Main titles, high-contrast typography, dark surface accents |
| **Secondary / Ocean Teal** | `#266573` | `bg-brand-secondary`, `text-brand-secondary` | Primary action buttons, badge borders, active category cards |
| **Accent / Sky Cyan** | `#6BB0BF` | `bg-brand-accent`, `text-brand-accent` | Glowing accents, pill tags, interactive highlights |
| **Background / Soft Sage**| `#EDF3F0` | `bg-brand-bg`, `text-brand-bg` | Global page background, light surface cards |
| **Border / Muted Sage** | `#CAD7D0` | `border-brand-border`, `bg-brand-border`| Subtle card borders, dividers, road guides |

### Using Color Tokens in Code:
```tsx
import { BRAND_COLORS } from "@/lib/constants";

// In Tailwind classes:
<div className="bg-brand-bg border border-brand-border text-brand-primary">
  <span className="text-brand-secondary font-bold">Verified Supply</span>
</div>

// In inline styles, Canvas, or GSAP:
gsap.to(".my-element", { color: BRAND_COLORS.secondary });
```

---

## 🛠️ Developer "How-To" Guides

### 1. How to Add or Modify a Solution Page
All solutions are statically generated from `src/data/solutions.ts`.

1. Open `src/data/solutions.ts`.
2. Add or modify an object in `SOLUTIONS_DATA`:
   ```ts
   {
     slug: "cold-chain-logistics",
     number: "11",
     categoryKey: "supply-chain",
     categoryTitle: "SUPPLY CHAIN",
     title: "Cold Chain Logistics & Monitoring",
     shortDescription: "Active IoT temperature tracking for vaccines and biologics.",
     headline: "Temperature-Controlled Pharmaceutical Distribution",
     fullDescription: "Detailed breakdown of the logistics service...",
     weCanSupport: [
       "Continuous 2-8°C data logging",
       "Validated thermal insulated shippers",
       "Real-time excursion SMS & email alerts"
     ],
     keyOutcomes: [
       "Zero cold-chain breakage incidents",
       "100% CDSCO temperature audit compliance"
     ],
     iconName: "ThermometerSnowflake",
     relatedSlugs: ["medical-supply-delivery", "vendor-discovery"]
   }
   ```
3. The page will immediately be available at `/solutions/cold-chain-logistics` with automated metadata, breadcrumb-free sober header, and interconnected capabilities.

---

### 2. How to Update Navigation & Mega Menu
Navigation is configured centrally in two places:
1. **Header Mega Menu & Footer**: `src/data/navigation.ts` (`SOLUTIONS_MEGA_MENU`, `PRIMARY_NAV_LINKS`, `FOOTER_LINKS`).
2. **Desktop Navbar Dropdown**: `src/components/layout/Navbar.tsx` (`SOLUTIONS_DROPDOWN`).

---

### 3. How to Add or Update Testimonials
1. Open `src/data/testimonials.ts`.
2. Add a new item to `TESTIMONIALS_DATA`:
   ```ts
   {
     id: "t5",
     quote: "DavaTrack transformed our hospital's pharmacy fill rate within 60 days.",
     highlight: "99.8% pharmacy order fulfillment rate across 3 centers",
     role: "Chief Operating Officer",
     organizationType: "Super-Specialty Cardiac Center",
     segment: "Hospital",
     metrics: [
       { label: "Fill Rate", value: "99.8%" },
       { label: "Lead Time", value: "-60%" }
     ]
   }
   ```
3. It will automatically appear on both `/testimonials` and the homepage `<TestimonialsPreview />` carousel.

---

### 4. How to Update Company Info & Global Constants
Global contact numbers, emails, addresses, and compliance statements are located in `src/lib/constants.ts`:
```ts
export const SITE_CONFIG = {
  name: "DavaTrack Digital LLP",
  contact: {
    email: "contact@davatrack.com",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    address: "Healthcare Operations Hub, India",
    workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  },
  // ...
};
```

---

### 5. How the Agency-to-Retailer Journey Animation Works
The interactive delivery route is rendered by `src/components/solutions/AgencyToRetailerJourney.tsx`:
- **Progress Tracking**: Tracks `window.scrollY` against container bounds to normalize progress strictly between `0` and `1`.
- **Direction Hysteresis**: Detects whether the user is scrolling up or down to orient the bike heading (`scrollDirection`).
- **Road Geometry**: Computes an SVG `<path>` with cubic bezier curves (`d="M 500 40 C ..."`).
- **Flank Layout**: Checkpoints are positioned on the Left and Right flanks with a dedicated center corridor ensuring the animated bike is **never covered or hidden**.
- **Z-Index Layering**: The delivery bike operates on `z-30` above all background cards.

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server on `http://localhost:3000` |
| `npm run build` | Compiles TypeScript and builds the production-ready Next.js application |
| `npm run start` | Starts the Next.js production server |
| `npm run lint` | Runs Next.js ESLint checks |
| `npx tsc --noEmit` | Runs strict TypeScript type checking across all files without emitting output |

---

## 📐 Design Guidelines & Coding Standards

1. **Sober & Authoritative Aesthetic**:
   - Avoid neon/terminal styles or dark hacker aesthetics on healthcare pages.
   - Use light surfaces (`#EDF3F0`, `#FFFFFF`) with crisp borders (`#CAD7D0`) and `#266573` / `#6BB0BF` accents.
2. **Zero Breadcrumbs**:
   - Do not add breadcrumb trails on detail pages. Keep headers focused directly on the category badge, solution title, and value proposition.
3. **Responsive Mobile-First Design**:
   - Ensure all grids use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-X` patterns.
   - Touch targets for interactive pills and buttons must be at least `44px` tall.
4. **Clean Component Interfaces**:
   - Always export typed prop interfaces for reusable components.
   - Keep data files decoupled from UI rendering logic.
