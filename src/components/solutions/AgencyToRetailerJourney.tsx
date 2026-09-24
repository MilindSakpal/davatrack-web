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
  const getRoadPoint = (t: number) => {
    const clampedT = Math.max(0, Math.min(1, t));
    const x = 500 + Math.sin(clampedT * Math.PI * 2.2 - 0.9) * 260;
    const y = 66 + clampedT * 1452;
    return { x, y };
  };

  // Generate mathematically accurate curved road path for Desktop
  const desktopRoadPath = useMemo(() => {
    let path = "";
    const samples = 80;
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
    const yPct = (currentPt.y / 1650) * 100;

    return { xPct, yPct, angle: angleDeg };
  };

  const { xPct: riderX, yPct: riderY, angle: riderAngle } = getRiderState();

  return (
    <section className="w-full py-4 sm:py-8">
      <div 
        ref={containerRef}
        className="w-full bg-[#EDF3F0] rounded-[36px] sm:rounded-[48px] p-4 sm:p-8 lg:p-12 border-2 border-[#CAD7D0] shadow-[0_20px_60px_rgba(18,38,49,0.06)] relative overflow-hidden text-[#122631]"
      >
        {/* Ambient atmospheric lighting in palette colors */}
        <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6BB0BF]/20 rounded-full blur-[150px]" />
        <div className="pointer-events-none absolute top-1/2 right-6 w-[550px] h-[550px] bg-[#266573]/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute bottom-10 left-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        
        {/* Subtle engineering grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(38,101,115,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,101,115,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_75%,transparent_100%)]" />

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
        <div className="relative min-h-[1450px] sm:min-h-[1550px] lg:min-h-[1650px] w-full max-w-[1320px] mx-auto">
          
          {/* ============================================================
              SVG ROAD GRAPHIC (Z-INDEX 0)
              - Mobile: Straight vertical road along the LEFT side (x=80)
              - Desktop: Smooth winding curved road
              ============================================================ */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 1650" 
            preserveAspectRatio="none"
            fill="none"
          >
            {isMobile ? (
              // STRAIGHT VERTICAL HIGHWAY ON MOBILE (ALONG LEFT SIDE AT x=80)
              <>
                {/* Outer Road Bed Shoulder */}
                <path
                  d="M 80,40 L 80,1600"
                  stroke="#CAD7D0"
                  strokeWidth="70"
                  strokeLinecap="round"
                />
                {/* Dark Asphalt Surface */}
                <path
                  d="M 80,40 L 80,1600"
                  stroke="#162831"
                  strokeWidth="56"
                  strokeLinecap="round"
                />
                {/* Yellow Dashed Center Line */}
                <path
                  d="M 80,40 L 80,1600"
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
              ANIMATED 3D DELIVERY BIKER (Z-INDEX 10)
              Center anchored directly onto yellow road line
              ============================================================ */}
          <div 
            className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2"
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
              STAGE 1: CENTRAL AGENCY WAREHOUSE (Z-INDEX 20)
              - Left: Story Card (Taller height, shifted upside, shifted left)
              - Middle: Wide open road corridor (lg:col-span-4)
              - Right: Warehouse Hub Graphic Card (shifted right)
              ============================================================ */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2 pl-14 sm:pl-20 lg:pl-0">
            
            {/* Story Card on Far Left (Solid White Background for perfect contrast) */}
            <div className="lg:col-span-4 max-w-md mr-auto w-full bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-9 lg:p-10 border border-[#CAD7D0] shadow-[0_12px_36px_rgba(18,38,49,0.07)] space-y-5 sm:space-y-6 -mt-4 sm:-mt-8 lg:-mt-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF3F0] border border-[#CAD7D0] text-[#266573] text-xs font-mono font-bold shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#266573] animate-ping" />
                  <span>STAGE 1: CENTRAL PHARMA AGENCY</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#122631] leading-tight">
                  Direct Stocking &amp; Batch Verification
                </h3>

                <p className="text-xs sm:text-sm text-[#122631]/75 leading-relaxed">
                  Stock is batched directly from primary drug manufacturers into our temperature-controlled central C&amp;F agency warehouse. Each carton is scanned and sealed for direct courier dispatch.
                </p>
              </div>

              {/* Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] shadow-xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#122631]">CDSCO QR Barcode</div>
                    <div className="text-[10px] text-[#266573] font-mono font-semibold">100% Genuine Track</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] shadow-xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#122631]">Tamper-Proof Seal</div>
                    <div className="text-[10px] text-emerald-700 font-mono font-semibold">Zero Diversion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Middle Road Corridor (Col-span 4 - road & bike pass completely free) */}
            <div className="hidden lg:block lg:col-span-4" />

            {/* Warehouse Hub Graphic Card on Far Right (Solid bg-white, z-20) */}
            <div className="lg:col-span-4 max-w-md ml-auto w-full flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#CAD7D0] hover:border-[#266573]/50 transition-all shadow-[0_15px_40px_rgba(18,38,49,0.08)] w-full relative overflow-hidden">
                
                {/* Header of Agency Hub */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#CAD7D0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#122631] text-[#6BB0BF] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#122631]">DavaTrack Central Hub</h4>
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#266573] font-bold">Main C&amp;F Warehouse &amp; Depot</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[#266573] text-[9px] sm:text-[10px] font-mono font-bold">
                    DISPATCH READY
                  </span>
                </div>

                {/* Warehouse Bay Graphic */}
                <div className="mt-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#122631]/80">
                    <span className="font-mono flex items-center gap-1.5 text-[#266573] font-bold text-[11px] sm:text-xs">
                      <Package className="w-3.5 h-3.5" />
                      Manifest: #DT-EXP-8842
                    </span>
                    <span className="text-emerald-700 font-bold font-mono text-[11px]">100% Inspected</span>
                  </div>

                  {/* Visual Pallets with Medicine boxes */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="bg-white p-2 sm:p-3 rounded-xl border border-[#CAD7D0] text-center shadow-xs">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#266573]/10 text-[#266573] flex items-center justify-center mx-auto mb-1">
                        <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#122631] block">Antibiotics</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-[#266573]">Tier 1 Brands</span>
                    </div>

                    <div className="bg-white p-2 sm:p-3 rounded-xl border border-[#CAD7D0] text-center shadow-xs">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-cyan-500/10 text-cyan-700 flex items-center justify-center mx-auto mb-1">
                        <ThermometerSnowflake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#122631] block">Insulin &amp; Bio</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-cyan-700">Cold-Chain</span>
                    </div>

                    <div className="bg-white p-2 sm:p-3 rounded-xl border border-[#CAD7D0] text-center shadow-xs">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center mx-auto mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#122631] block">Surgicals</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-emerald-700">Sterile Box</span>
                    </div>
                  </div>

                  {/* SLA Callout */}
                  <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] border-t border-[#CAD7D0] text-[#122631]/80">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#266573]" />
                      SLA: <strong className="text-[#122631]">&lt; 25 Mins</strong>
                    </span>
                    <span className="text-emerald-700 font-bold font-mono">Courier Assigned ✓</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ============================================================
              STAGE 2 CHECKPOINTS: ROAD TRANSIT (Z-INDEX 20)
              - Shifted outward to far left & far right margins
              - Center track completely visible
              ============================================================ */}
          <div className="relative z-20 py-28 sm:py-44 pointer-events-none pl-14 sm:pl-20 lg:pl-0 space-y-20 lg:space-y-0">
            
            {/* Milestone Graphic 1: Cold Chain Sensor Bubble (Far Right Flank) */}
            <div className="w-full max-w-sm ml-auto lg:mr-0 pointer-events-auto bg-white rounded-3xl p-5 sm:p-6 border border-[#CAD7D0] shadow-[0_15px_40px_rgba(18,38,49,0.08)] lg:mb-24 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-700 shadow-xs flex-shrink-0">
                  <ThermometerSnowflake className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#122631]">Cold-Chain Guard (2°C - 8°C)</div>
                  <div className="text-[10px] font-mono text-cyan-700 font-bold">Live Thermal Telemetry</div>
                </div>
              </div>
              <p className="text-xs text-[#122631]/75 leading-relaxed">
                Insulated thermal crates with active temperature sensors ensure zero spoilage of sensitive biologics and vaccines.
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-[#CAD7D0] flex items-center justify-between text-[10px] font-mono text-[#266573]">
                <span>SENSOR #TC-44</span>
                <span className="font-bold text-[#122631] bg-[#EDF3F0] px-2.5 py-0.5 rounded-full border border-[#CAD7D0]">4.2°C STABLE</span>
              </div>
            </div>

            {/* Milestone Graphic 2: Direct Expressway Bypass (Far Left Flank on desktop) */}
            <div className="w-full max-w-sm ml-auto lg:ml-0 lg:mr-auto pointer-events-auto bg-white rounded-3xl p-5 sm:p-6 border border-[#CAD7D0] shadow-[0_15px_40px_rgba(18,38,49,0.08)] hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-700 shadow-xs flex-shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#122631]">Direct Express Corridor</div>
                  <div className="text-[10px] font-mono text-emerald-700 font-bold">Zero Middleman Delays</div>
                </div>
              </div>
              <p className="text-xs text-[#122631]/75 leading-relaxed">
                Bypassing secondary brokers and regional depot stops. The courier rides straight to the pharmacy counter.
              </p>
              <div className="mt-3.5 pt-2.5 border-t border-[#CAD7D0] flex items-center justify-between text-[10px] font-mono text-emerald-700">
                <span>TRANSIT STATUS</span>
                <span className="font-bold text-[#122631] bg-[#EDF3F0] px-2.5 py-0.5 rounded-full border border-[#CAD7D0]">EXPRESS PRIORITY</span>
              </div>
            </div>

          </div>

          {/* ============================================================
              STAGE 3: RETAIL PHARMACY COUNTER HANDOVER (Z-INDEX 20)
              - Left: Pharmacy Storefront Graphic Card (shifted left)
              - Middle: Wide open road corridor (lg:col-span-4)
              - Right: Story text wrapped in solid white card (shifted right)
              ============================================================ */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 pl-14 sm:pl-20 lg:pl-0">
            
            {/* Pharmacy Storefront Graphic Card on Far Left (Solid bg-white, z-20) */}
            <div className="lg:col-span-4 max-w-md mr-auto w-full flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-500 hover:border-emerald-600 transition-all shadow-[0_15px_40px_rgba(18,38,49,0.08)] w-full relative overflow-hidden">
                
                {/* Header of Retailer */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#CAD7D0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 shadow-sm flex-shrink-0">
                      <Store className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#122631]">Retail Chemist &amp; Hospital</h4>
                      <span className="text-[10px] sm:text-[11px] font-mono text-emerald-700 font-bold">Dispensary &amp; Receiving Desk</span>
                    </div>
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500 text-white text-[9px] sm:text-[10px] font-mono font-black flex items-center gap-1 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                    DELIVERED
                  </span>
                </div>

                {/* Handover Details Graphic */}
                <div className="mt-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#122631]">
                    <span className="font-mono text-[#266573] font-bold text-[11px] sm:text-xs">Invoice: #INV-2026-901</span>
                    <span className="text-emerald-700 font-bold font-mono text-[11px]">Stock Synced ✓</span>
                  </div>

                  {/* Restocked Display Shelves */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-emerald-500/40 shadow-xs flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-sm sm:text-base flex-shrink-0 shadow-xs">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#122631]">Zero Stockout Gap Achieved</div>
                      <div className="text-[10px] sm:text-[11px] text-[#122631]/75 mt-0.5 leading-snug">
                        Immediate availability for walk-ins and hospital prescription fulfillment.
                      </div>
                    </div>
                  </div>

                  {/* Handover Metric Cards */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#CAD7D0] text-center shadow-xs">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#266573] block">Digital Receipt</span>
                      <span className="text-xs font-extrabold text-[#122631]">Instant Sync</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#CAD7D0] text-center shadow-xs">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#266573] block">Margin Retained</span>
                      <span className="text-xs font-extrabold text-emerald-700">100% Direct</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Wide Middle Road Corridor (Col-span 4 - road & bike finish completely free) */}
            <div className="hidden lg:block lg:col-span-4 order-2" />

            {/* Story Card on Far Right (Solid White Card for high contrast & clarity) */}
            <div className="lg:col-span-4 max-w-md ml-auto w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#CAD7D0] shadow-[0_12px_36px_rgba(18,38,49,0.07)] space-y-4 order-1 lg:order-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF3F0] border border-[#CAD7D0] text-emerald-700 text-xs font-mono font-bold shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>STAGE 3: RETAIL PHARMACY COUNTER</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#122631] leading-tight">
                Instant Handover &amp; Immediate Patient Care
              </h3>

              <p className="text-xs sm:text-sm text-[#122631]/75 leading-relaxed">
                The courier arrives directly at the retailer&apos;s dispensary desk. Invoices are digitally validated with one scan, stock is recorded in real time, and patients never experience a missing prescription.
              </p>

              {/* Graphical Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="p-3 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] shadow-xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#122631]">Stock Restocked</div>
                    <div className="text-[10px] text-emerald-700 font-mono font-semibold">Zero Shelf Delay</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] shadow-xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#266573]/15 text-[#266573] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#122631]">Guaranteed Margins</div>
                    <div className="text-[10px] text-[#266573] font-mono font-semibold">C&amp;F Agency Direct</div>
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
