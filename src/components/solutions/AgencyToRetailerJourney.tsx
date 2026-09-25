"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  Building2, 
  Store, 
  CheckCircle2, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Sparkles, 
  Package, 
  Navigation, 
  Clock, 
  Check, 
  QrCode, 
  Shield, 
  Activity, 
  ArrowDown, 
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AgencyToRetailerJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);

  // Screen size detection for mobile vs desktop road layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll detection: computes progress and detects scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const currentY = window.scrollY;

      // Track scroll direction with hysteresis threshold
      if (Math.abs(currentY - lastScrollY.current) > 6) {
        setScrollDirection(currentY > lastScrollY.current ? "down" : "up");
        lastScrollY.current = currentY;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollable = rect.height - windowHeight * 0.45;
      const currentPassed = -rect.top + windowHeight * 0.2;
      
      let progress = currentPassed / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parametric Road Coordinates in standard viewBox (1000 x 1650)
  // Smooth Catmull-Rom spline passing cleanly through all checkpoints and joining Card 4:
  // 1. Central Agency (Top Left, x=280) -> 2. Logistics Hub (Top Right, x=720) -> 
  // 3. Cold-Chain Highway (Mid Left, x=270) -> 4. Swoops RIGHT directly joining Card 4 (x=585, y=1300)
  const getRoadPoint = (t: number) => {
    const clampedT = Math.max(0, Math.min(1, t));
    const controlPoints = [
      { x: 150, y: -100 },  // P_-1: Entry tangent
      { x: 280, y: 70 },    // P_0:  Stage 1 (Central Agency - Top Left)
      { x: 720, y: 440 },   // P_1:  Stage 2 (Logistics Hub - Top Right)
      { x: 270, y: 880 },   // P_2:  Stage 3 (Cold-Chain Guard - Mid Left)
      { x: 310, y: 1140 },  // P_3:  Turn apex sweeping rightward toward Card 4
      { x: 585, y: 1300 },  // P_4:  Joint directly into Card 4's left border
      { x: 800, y: 1340 },  // P_5:  Exit tangent pointing rightwards into Card 4
    ];

    const numSegments = 4;
    const u = clampedT * numSegments;
    const i = Math.min(Math.floor(u), numSegments - 1);
    const s = u - i;

    const p0 = controlPoints[i];
    const p1 = controlPoints[i + 1];
    const p2 = controlPoints[i + 2];
    const p3 = controlPoints[i + 3];

    const s2 = s * s;
    const s3 = s2 * s;

    const x = 0.5 * (
      (2 * p1.x) +
      (-p0.x + p2.x) * s +
      (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * s2 +
      (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * s3
    );

    const y = 0.5 * (
      (2 * p1.y) +
      (-p0.y + p2.y) * s +
      (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * s2 +
      (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * s3
    );

    return { x, y };
  };

  // Generate mathematically accurate curved road path for Desktop
  const desktopRoadPath = useMemo(() => {
    let path = "";
    const samples = 100;
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const { x, y } = getRoadPoint(t);
      if (i === 0) path += `M ${x.toFixed(1)},${y.toFixed(1)}`;
      else path += ` L ${x.toFixed(1)},${y.toFixed(1)}`;
    }
    return path;
  }, []);

  // Calculate rider position and exact road tangent angle
  const getRiderState = () => {
    if (isMobile) {
      // Mobile: Straight vertical path along the left rail (x = 8%)
      const xPct = 8;
      const yPct = Math.min(92, Math.max(4, scrollProgress * 88 + 4));
      // In +X base orientation: 90 deg = straight down, -90 deg = straight up
      const angle = scrollDirection === "down" ? 90 : -90;
      return { xPct, yPct, angle };
    }

    // Desktop: Finite-difference tangent vector along the yellow center line
    const delta = 0.02;
    const tCurrent = scrollProgress;
    const tNext = Math.min(1, tCurrent + delta);
    const tPrev = Math.max(0, tCurrent - delta);

    const currentPt = getRoadPoint(tCurrent);
    const nextPt = getRoadPoint(tNext);
    const prevPt = getRoadPoint(tPrev);

    // Vector along the road from prev to next
    const dx = nextPt.x - prevPt.x;
    const dy = nextPt.y - prevPt.y;

    // In standard screen coords (+X right, +Y down):
    // Math.atan2(dy, dx) computes angle from +X axis (0 deg = pointing right)
    let angleDeg = 0;
    if (scrollDirection === "down") {
      angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
    } else {
      angleDeg = Math.atan2(-dy, -dx) * (180 / Math.PI);
    }

    // Percentage of container width/height
    const xPct = (currentPt.x / 1000) * 100;
    const yPct = (currentPt.y / 1420) * 100;

    return { xPct, yPct, angle: angleDeg };
  };

  const { xPct: riderX, yPct: riderY, angle: riderAngle } = getRiderState();

  return (
    <section className="w-full py-4 sm:py-6">
      <div 
        ref={containerRef}
        className="w-full bg-[#EDEDE5] rounded-[36px] sm:rounded-[48px] p-4 sm:p-8 lg:p-10 pb-6 sm:pb-8 border-2 border-[#CAD7D0] shadow-[0_20px_60px_rgba(18,38,49,0.06)] relative overflow-hidden text-[#122631]"
      >
        {/* Ambient atmospheric lighting in palette colors */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6BB0BF]/20 rounded-full blur-[150px]" />
        <div className="pointer-events-none absolute top-1/2 right-6 w-[550px] h-[550px] bg-[#266573]/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-10 left-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />

        {/* ============================================================
            SECTION HEADER
            ============================================================ */}
        <div className="relative z-30 text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-14">
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#CAD7D0] text-[#266573] text-xs font-mono uppercase tracking-wider font-extrabold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
            <span>Interactive Supply Pipeline</span>
          </div> */}

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#122631] tracking-tight leading-tight">
            Agency to Retailer Supply Pipeline
          </h2>

          <p className="text-xs sm:text-base text-[#122631]/75 max-w-2xl mx-auto leading-relaxed">
            Follow our verified cold-chain delivery flow from the central pharma C&amp;F agency warehouse directly to the retail pharmacy dispensary.
          </p>
        </div>

        {/* ============================================================
            MAIN JOURNEY CANVAS CONTAINER (EXPANDED TO max-w-[1300px])
            ============================================================ */}
        <div className="relative min-h-[1250px] sm:min-h-[1350px] lg:min-h-[1420px] w-full max-w-[1320px] mx-auto pb-4">
          
          {/* ============================================================
              SVG ROAD GRAPHIC (Z-INDEX 0)
              - Mobile: Straight vertical road along the LEFT side (x=80)
              - Desktop: Smooth winding curved road
              ============================================================ */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 1420" 
            preserveAspectRatio="none"
            fill="none"
          >
            {isMobile ? (
              // STRAIGHT VERTICAL HIGHWAY ON MOBILE (ALONG LEFT SIDE AT x=80)
              <>
                {/* Outer Road Bed Shoulder */}
                <path
                  d="M 80,40 L 80,1380"
                  stroke="#CAD7D0"
                  strokeWidth="70"
                  strokeLinecap="round"
                />
                {/* Dark Asphalt Surface */}
                <path
                  d="M 80,40 L 80,1380"
                  stroke="#162831"
                  strokeWidth="56"
                  strokeLinecap="round"
                />
                {/* Yellow Dashed Center Line */}
                <path
                  d="M 80,40 L 80,1380"
                  stroke="#F2C037"
                  strokeWidth="3.5"
                  strokeDasharray="14 14"
                  strokeLinecap="round"
                />
              </>
            ) : (
              // WINDING CURVED HIGHWAY ON DESKTOP (Parametrically synchronized)
              <>
                {/* Outer Road Bed Shoulder */}
                <path
                  d={desktopRoadPath}
                  stroke="#CAD7D0"
                  strokeWidth="104"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dark Asphalt Surface */}
                <path
                  d={desktopRoadPath}
                  stroke="#162831"
                  strokeWidth="84"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Road Curb Edge lines */}
                <path
                  d={desktopRoadPath}
                  stroke="#6BB0BF"
                  strokeWidth="78"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.25"
                />
                {/* Inner Asphalt */}
                <path
                  d={desktopRoadPath}
                  stroke="#1E3642"
                  strokeWidth="68"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Yellow Dashed Center Line */}
                <path
                  d={desktopRoadPath}
                  stroke="#F2C037"
                  strokeWidth="4"
                  strokeDasharray="18 20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>

          {/* ============================================================
              ANIMATED 3D DELIVERY BIKER (Z-INDEX 30 - ALWAYS VISIBLE ON TOP)
              Center anchored directly onto yellow road line
              ============================================================ */}
          <div 
            className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${riderY}%`,
              left: `${riderX}%`,
            }}
          >
            {/* Status Tooltip floating independently above */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#122631] text-white border border-[#6BB0BF] px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold shadow-[0_6px_20px_rgba(18,38,49,0.35)] flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>
                {scrollProgress < 0.22 
                  ? "📦 Dispatching from Agency" 
                  : scrollProgress > 0.82 
                  ? "✅ Handing to Retail Chemist" 
                  : "🏍️ On the Road to Pharmacy"}
              </span>
            </div>

            {/* 3D Delivery Motorcycle (Drawn facing RIGHTWARD at 0 deg) */}
            <div 
              className="relative flex items-center justify-center origin-center transition-transform duration-75 ease-out"
              style={{
                transform: `rotate(${riderAngle}deg)`,
              }}
            >
              <svg 
                className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)]" 
                viewBox="0 0 140 140" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glowing Headlight Beam Cone Projecting Forward (+X direction, x=96..138) */}
                  <linearGradient id="headlightBeamCone" x1="96" y1="70" x2="138" y2="70" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFF275" stopOpacity="0.95" />
                    <stop offset="35%" stopColor="#6BB0BF" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#6BB0BF" stopOpacity="0" />
                  </linearGradient>

                  {/* 3D Golden Helmet Gradient */}
                  <radialGradient id="helmetSphereH" cx="40%" cy="38%" r="58%">
                    <stop offset="0%" stopColor="#FFF099" />
                    <stop offset="55%" stopColor="#F2C037" />
                    <stop offset="100%" stopColor="#A67C00" />
                  </radialGradient>

                  {/* Dark Visor Tint with Specular Reflection on Forward (+X) Side */}
                  <linearGradient id="visorGlassH" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#122631" />
                    <stop offset="60%" stopColor="#6BB0BF" />
                    <stop offset="100%" stopColor="#081014" />
                  </linearGradient>

                  {/* 3D Medicine Delivery Box Top Face */}
                  <linearGradient id="crateGreenTop" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>

                  {/* Metallic Bike Chassis */}
                  <linearGradient id="chassisTealH" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#14363d" />
                    <stop offset="50%" stopColor="#266573" />
                    <stop offset="100%" stopColor="#387e8e" />
                  </linearGradient>
                </defs>

                {/* Ground Cast Shadow */}
                <ellipse cx="70" cy="70" rx="52" ry="24" fill="#000000" fillOpacity="0.38" filter="blur(5px)" />

                {/* ============================================================
                    FRONT (+X): GLOWING HEADLIGHT BEAM SHINING FORWARD (x=96..138)
                    ============================================================ */}
                <polygon points="96,62 96,78 138,98 138,42" fill="url(#headlightBeamCone)" />

                {/* REAR (-X): REAR WHEEL & FENDER (x=10..36) */}
                <rect x="10" y="65" width="26" height="10" rx="5" fill="#152933" stroke="#266573" strokeWidth="2" />
                <rect x="14" y="68" width="18" height="4" rx="2" fill="#6BB0BF" />
                {/* Red Rear Taillight */}
                <rect x="14" y="66" width="3.5" height="8" rx="1.5" fill="#EF4444" />

                {/* ============================================================
                    REAR CARRIER (-X): 3D INSULATED MEDICINE DELIVERY BOX (x=20..52)
                    ============================================================ */}
                <g>
                  {/* Box Frame Base */}
                  <rect x="20" y="46" width="32" height="48" rx="4" fill="#047857" stroke="#122631" strokeWidth="1.5" />
                  {/* Box Luminous Green Top Face */}
                  <rect x="22" y="48" width="28" height="44" rx="3" fill="url(#crateGreenTop)" />
                  {/* 3D Bevel Highlights */}
                  <line x1="50" y1="48" x2="50" y2="92" stroke="#065f46" strokeWidth="2" />
                  <line x1="22" y1="92" x2="50" y2="92" stroke="#065f46" strokeWidth="2" />
                  
                  {/* Bold White Medical Cross Emblem on Box */}
                  <rect x="28" y="66" width="16" height="8" rx="1" fill="#FFFFFF" />
                  <rect x="32" y="62" width="8" height="16" rx="1" fill="#FFFFFF" />
                  <rect x="29.5" y="67" width="13" height="6" rx="0.5" fill="#10B981" />
                  <rect x="33" y="63.5" width="6" height="13" rx="0.5" fill="#10B981" />
                </g>

                {/* ============================================================
                    MOTORCYCLE CHASSIS & FAIRING (x=36..100)
                    ============================================================ */}
                <path 
                  d="M 36 58 L 36 82 L 75 86 L 100 78 L 100 62 L 75 54 Z" 
                  fill="url(#chassisTealH)" 
                  stroke="#122631" 
                  strokeWidth="2" 
                />

                {/* ============================================================
                    RIDER BODY & JACKET (Leaning forward towards +X)
                    ============================================================ */}
                <ellipse cx="64" cy="70" rx="15" ry="20" fill="#122631" stroke="#266573" strokeWidth="2" />
                {/* Reflective Safety Stripes */}
                <path d="M 58 58 L 74 66 M 58 82 L 74 74" stroke="#6BB0BF" strokeWidth="2.5" strokeLinecap="round" />

                {/* Rider Arms Extending Forward to Handlebars */}
                <path d="M 62 52 L 88 46" stroke="#122631" strokeWidth="5" strokeLinecap="round" />
                <path d="M 62 88 L 88 94" stroke="#122631" strokeWidth="5" strokeLinecap="round" />

                {/* Handlebars & Chrome Mirrors on Forward Edge */}
                <line x1="90" y1="44" x2="90" y2="96" stroke="#CAD7D0" strokeWidth="4" strokeLinecap="round" />
                <rect x="88" y="42" width="4" height="7" rx="1" fill="#122631" />
                <rect x="88" y="91" width="4" height="7" rx="1" fill="#122631" />
                {/* Forward-Angled Dual Mirrors */}
                <ellipse cx="85" cy="40" rx="3" ry="4" fill="#6BB0BF" stroke="#122631" strokeWidth="1" />
                <ellipse cx="85" cy="100" rx="3" ry="4" fill="#6BB0BF" stroke="#122631" strokeWidth="1" />

                {/* ============================================================
                    FRONT WHEEL & LED PROJECTOR HEADLIGHT (x=96..122)
                    ============================================================ */}
                <rect x="96" y="65" width="26" height="10" rx="5" fill="#152933" stroke="#266573" strokeWidth="2" />
                <rect x="100" y="68" width="18" height="4" rx="2" fill="#6BB0BF" />
                {/* Front Mudguard Fairing */}
                <path d="M 92 60 L 92 80 L 106 77 L 106 63 Z" fill="#266573" stroke="#6BB0BF" strokeWidth="1.5" />
                {/* Glowing LED Projector Headlight */}
                <circle cx="104" cy="70" r="5" fill="#FFFBEB" stroke="#F2C037" strokeWidth="2" />
                <circle cx="104" cy="70" r="2.5" fill="#FFFFFF" />

                {/* ============================================================
                    3D HELMET & FACE VISOR (Facing Directly FORWARD towards +X)
                    ============================================================ */}
                {/* Spherical Helmet Shell */}
                <circle cx="62" cy="70" r="13" fill="url(#helmetSphereH)" stroke="#FFFFFF" strokeWidth="1.5" />
                {/* Center Aerodynamic Ridge */}
                <path d="M 50 70 L 72 70" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" />
                {/* Dark Tinted 3D Visor Looking Directly Forward (Towards +X) */}
                <path d="M 66 61 Q 75 70 66 79 Q 68 70 66 61 Z" fill="url(#visorGlassH)" stroke="#122631" strokeWidth="1.2" />
                {/* Visor Glare Specular Highlight */}
                <path d="M 67 63 Q 71 67 68 71" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.85" />
              </svg>
            </div>
          </div>

          {/* ============================================================
              STAGE 1 & 2: CENTRAL PHARMA AGENCY & DEPOT (TOP ROWS)
              - Left: Stage 01 Central Agency Card (Top Left)
              - Middle: Wide Open Road Corridor
              - Right: Stage 02 Central Logistics Hub Card (Moved slightly downside)
              ============================================================ */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 pl-14 sm:pl-20 lg:pl-0">
            
            {/* Card 1: Stage 01 Central Pharma Agency (Left Flank, Top) */}
            <div className="lg:col-span-5 max-w-lg mr-auto w-full -mt-2 sm:-mt-6 lg:-mt-8">
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/60 p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_rgba(18,38,49,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)]"
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      rgba(255,255,255,0.45) 0%,
                      rgba(255,255,255,0.15) 45%,
                      rgba(18,38,49,0.06) 100%
                    ),
                    #6EBCBF
                  `,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/40" />
                <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/70" />

                <div className="relative z-10 space-y-4 text-[#122631]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white bg-[#122631] border border-[#122631]/20 px-3 py-1 rounded-full shadow-sm">
                      #01 • CENTRAL AGENCY
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631] tracking-tight leading-snug">
                    Direct Stocking &amp; Batch Verification
                  </h3>

                  <p className="text-xs sm:text-sm text-[#122631]/85 leading-relaxed font-medium">
                    Stock is batched directly from primary drug manufacturers into our temperature-controlled central C&amp;F agency warehouse. Each carton is scanned and sealed for direct courier dispatch.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">CDSCO Barcode</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">100% Genuine Track</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Tamper-Proof Seal</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">Zero Diversion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Highway Corridor (2 cols) */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Card 2: Stage 02 Central Hub (Right Flank, moved slightly downside) */}
            <div className="lg:col-span-5 max-w-lg ml-auto w-full mt-8 sm:mt-16 lg:mt-24">
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/60 p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_rgba(18,38,49,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)]"
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      rgba(255,255,255,0.45) 0%,
                      rgba(255,255,255,0.15) 45%,
                      rgba(18,38,49,0.06) 100%
                    ),
                    #6EBCBF
                  `,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/40" />
                <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/70" />

                <div className="relative z-10 space-y-4 text-[#122631]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white bg-[#122631] border border-[#122631]/20 px-3 py-1 rounded-full shadow-sm">
                      #02 • LOGISTICS DEPOT
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631] tracking-tight leading-snug">
                    DavaTrack Hub &amp; Express Courier Transit
                  </h3>

                  <p className="text-xs sm:text-sm text-[#122631]/85 leading-relaxed font-medium">
                    Automated packing manifest and instant rider assignment from the main depot. Stock is cross-checked and assigned to priority delivery corridors.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <Package className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Manifest Verified</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">100% Inspected</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">SLA: &lt; 25 Mins</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">Courier Assigned ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================
              STAGE 3: HIGHWAY TRANSIT CHECKPOINT (MIDDLE ROW - ON LEFT BLANK SPACE)
              - Positioned comfortably in the mid-left open corridor (y~880)
              ============================================================ */}
          <div className="relative z-20 pt-16 sm:pt-24 lg:pt-28 pb-8 pl-14 sm:pl-20 lg:pl-0">
            
            {/* Card 3: Stage 03 Cold-Chain Guard (Left Flank Blank Space) */}
            <div className="w-full max-w-lg mr-auto lg:ml-0 lg:mr-auto">
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/60 p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_rgba(18,38,49,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)]"
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      rgba(255,255,255,0.45) 0%,
                      rgba(255,255,255,0.15) 45%,
                      rgba(18,38,49,0.06) 100%
                    ),
                    #6EBCBF
                  `,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/40" />
                <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/70" />

                <div className="relative z-10 space-y-4 text-[#122631]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white bg-[#122631] border border-[#122631]/20 px-3 py-1 rounded-full shadow-sm">
                      #03 • HIGHWAY TRANSIT
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631] tracking-tight leading-snug">
                    Cold-Chain Guard (2°C – 8°C) &amp; Priority Highway
                  </h3>

                  <p className="text-xs sm:text-sm text-[#122631]/85 leading-relaxed font-medium">
                    Insulated thermal crates with active IoT telemetry ensure zero spoilage of sensitive biologics, riding straight to the pharmacy without middleman delays.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <ThermometerSnowflake className="w-4 h-4 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">4.2°C Stable</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">Live Sensor #TC-44</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <Navigation className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Direct Route</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">Zero Middleman</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================
              STAGE 4: RETAIL PHARMACY COUNTER HANDOVER (BOTTOM ROW - DELIVERED AT ROAD TERMINUS)
              - Road terminates seamlessly connected into the left side of Card 4 (y~1300)
              ============================================================ */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-16 sm:pt-24 lg:pt-28 pb-2 sm:pb-4 pl-14 sm:pl-20 lg:pl-0">
            
            {/* Card 4: Stage 04 Retail Pharmacy Counter Handover (Right Flank) */}
            <div className="lg:col-span-5 max-w-lg ml-auto w-full lg:col-start-8">
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/60 p-6 sm:p-8 lg:p-9 shadow-[0_16px_40px_rgba(18,38,49,0.10)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(18,38,49,0.20)]"
                style={{
                  background: `
                    linear-gradient(
                      145deg,
                      rgba(255,255,255,0.45) 0%,
                      rgba(255,255,255,0.15) 45%,
                      rgba(18,38,49,0.06) 100%
                    ),
                    #6EBCBF
                  `,
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.45)_0%,transparent_60%)]" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/40" />
                <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-white/70" />

                <div className="relative z-10 space-y-4 text-[#122631]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white bg-[#122631] border border-[#122631]/20 px-3 py-1 rounded-full shadow-sm">
                      #04 • PHARMACY COUNTER
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631] tracking-tight leading-snug">
                    Instant Handover &amp; Immediate Patient Care
                  </h3>

                  <p className="text-xs sm:text-sm text-[#122631]/85 leading-relaxed font-medium">
                    The courier arrives directly at the retailer dispensary desk. Invoices are digitally validated with one scan, stock is recorded in real time, and patients never experience a missing prescription.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Stock Restocked</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">Zero Stockout Gap</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/70 bg-white/80 hover:bg-white text-[#122631] transition-all backdrop-blur-md shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                        <Store className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Instant Digital Sync</div>
                        <div className="text-[10px] text-[#122631]/70 font-mono">Invoice #INV-2026-901</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
