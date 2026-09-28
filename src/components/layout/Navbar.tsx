"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  LogIn,
  Truck,
  Store,
  Cpu,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dropdown navigation items for the Primary Solutions category.
 * Only Supply Chain & Delivery is active and clickable.
 * The other 3 solutions remain visible in the dropdown but are disabled.
 */
const SOLUTIONS_DROPDOWN = [
  {
    title: "Supply Chain & Delivery",
    icon: Truck,
    href: "/solutions/medical-supply-delivery",
    enabled: true,
  },
  {
    title: "Pharmacy Management",
    icon: Store,
    href: "/solutions/pharmacy-management",
    enabled: false,
  },
  {
    title: "Apps & Software Systems",
    icon: Cpu,
    href: "/solutions/apps-and-software",
    enabled: false,
  },
  {
    title: "Healthcare Administration",
    icon: BarChart3,
    href: "/solutions/accounting-mis",
    enabled: false,
  },
];

/**
 * Main Global Floating Capsule Navbar.
 * Features:
 * - Responsive scroll detection.
 * - Solutions dropdown (with Supply Chain active and others disabled).
 * - Direct 'About Us' and 'Contact Us' navigation.
 * - Mobile navigation drawer.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const handleMouseEnterSolutions = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 300); // 300ms buffer
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-4 sm:px-6 lg:px-8",
        isScrolled ? "pt-3 pb-3" : "pt-5 pb-5"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-300 ease-out flex items-center justify-between gap-4 px-5 sm:px-6 py-2.5 relative z-50",
          "bg-[#6EBCBF] border border-white/60 shadow-[0_12px_36px_rgba(18,38,49,0.12)]"
        )}
      >
        {/* ============================================================
            LEFT: BRAND LOGO
            ============================================================ */}
        <Link
          href="/"
          className="flex items-center group focus-visible:outline-none rounded-full py-1 px-1.5 flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="DavaTrack Digital LLP"
            width={160}
            height={36}
            priority
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* ============================================================
            CENTER: FLOATING PILL CAPSULE NAVIGATION
            ============================================================ */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-white/90 shadow-xs rounded-full px-4 py-1.5 relative">
          
          {/* 1. Home Link */}
          <Link
            href="/"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors",
              pathname === "/" ? "text-white bg-[#122631]" : "text-[#122631]/80 hover:text-[#122631] hover:bg-white"
            )}
          >
            Home
          </Link>

          {/* 2. Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterSolutions}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/solutions"
              className={cn(
                "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors",
                pathname.startsWith("/solutions") ? "text-white bg-[#122631]" : "text-[#122631]/80 hover:text-[#122631] hover:bg-white"
              )}
            >
              <span>Solutions</span>
              <ChevronDown className={cn("w-3.5 h-3.5 text-[#122631]/70 transition-transform duration-200", solutionsOpen && "rotate-180 text-[#266573]")} />
            </Link>

            {/* Simple Solutions Dropdown */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-200 origin-top z-50",
                solutionsOpen
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              )}
            >
              {/* Invisible Hover Bridge */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-transparent" />

              <div className="bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(18,38,49,0.18)] border border-white/80 space-y-1">
                {SOLUTIONS_DROPDOWN.map((item) => {
                  const IconComp = item.icon;
                  if (item.enabled) {
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-[#122631] hover:bg-[#EEF4F3] hover:text-[#266573] transition-colors"
                      >
                        <IconComp className="w-4 h-4 flex-shrink-0 text-[#266573]" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.title}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#122631]/45 cursor-not-allowed select-none"
                    >
                      <div className="flex items-center gap-2.5">
                        <IconComp className="w-4 h-4 flex-shrink-0 text-[#122631]/35" />
                        <span>{item.title}</span>
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/5 text-[#122631]/40">
                        Soon
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. About Us Link */}
          <Link
            href="/about"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors",
              pathname === "/about" ? "text-white bg-[#122631]" : "text-[#122631]/80 hover:text-[#122631] hover:bg-white"
            )}
          >
            About Us
          </Link>

          {/* 4. Contact Us */}
          <Link
            href="/inquiry"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors",
              pathname === "/inquiry" ? "text-white bg-[#122631]" : "text-[#122631]/80 hover:text-[#122631] hover:bg-white"
            )}
          >
            Contact Us
          </Link>

        </nav>

        {/* ============================================================
            RIGHT: ACTION BUTTONS (Sign In & Book a Demo)
            ============================================================ */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          
          {/* Partner Sign In */}
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#122631] hover:bg-[#266573] text-white font-bold text-xs shadow-md transition-all active:scale-95 border border-white/20"
          >
            <LogIn className="w-3.5 h-3.5 text-[#6BB0BF]" />
            <span className="hidden xs:inline sm:inline">Sign In</span>
            <span className="xs:hidden sm:hidden">Login</span>
          </Link>

          {/* Book a demo */}
          <Link
            href="/inquiry"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-white hover:bg-[#EEF4F3] text-[#122631] font-bold text-xs shadow-xs transition-all active:scale-95 border border-white/80"
          >
            Book a demo
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/60 text-[#122631] hover:bg-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

        {/* ============================================================
          MOBILE NAVIGATION DRAWER
          ============================================================ */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-24 z-50 bg-[#6EBCBF] rounded-3xl border border-white/60 p-6 shadow-2xl space-y-5 text-[#122631] animate-in fade-in slide-in-from-top-4 duration-200">
          
          <div className="space-y-2">
            <Link
              href="/"
              className="block p-3 rounded-xl text-sm font-bold text-[#122631] hover:bg-white/40 transition-colors"
            >
              Home
            </Link>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold text-[#122631] hover:bg-white/40 transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileSolutionsOpen && "rotate-180 text-[#266573]")} />
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {SOLUTIONS_DROPDOWN.map((item) => {
                    if (item.enabled) {
                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block p-2 rounded-lg text-xs text-[#122631] hover:bg-white/40 font-bold"
                        >
                          {item.title}
                        </Link>
                      );
                    }
                    return (
                      <div
                        key={item.title}
                        className="flex items-center justify-between p-2 rounded-lg text-xs text-[#122631]/50 cursor-not-allowed select-none font-medium"
                      >
                        <span>{item.title}</span>
                        <span className="text-[9px] font-mono uppercase bg-black/5 px-1.5 py-0.5 rounded text-[#122631]/40">
                          Soon
                        </span>
                      </div>
                    );
                  })}
                  <Link
                    href="/solutions"
                    className="block p-2 rounded-lg text-xs text-[#266573] hover:underline font-bold"
                  >
                    View All Solutions →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block p-3 rounded-xl text-sm font-bold text-[#122631] hover:bg-white/40 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/inquiry"
              className="block p-3 rounded-xl text-sm font-bold text-[#122631] hover:bg-white/40 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Portal Access Box for Retailer & Agency */}
          <div className="pt-4 border-t border-black/10 space-y-3">
            <div className="text-[11px] font-mono text-[#122631] uppercase tracking-wider font-extrabold">
              Partner Sign In Portals
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/login?portal=retailer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#122631] hover:bg-[#266573] text-white font-bold text-xs shadow-md text-center"
              >
                <Store className="w-3.5 h-3.5 text-[#6BB0BF]" />
                <span>Retailer Sign In</span>
              </Link>
              <Link
                href="/login?portal=agency"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-[#EEF4F3] text-[#122631] font-bold text-xs border border-white/80 text-center"
              >
                <Truck className="w-3.5 h-3.5 text-[#266573]" />
                <span>Agency Sign In</span>
              </Link>
            </div>
            
            <Link
              href="/inquiry"
              className="w-full py-3 rounded-full bg-[#122631] text-white hover:bg-[#266573] font-extrabold text-xs text-center shadow-lg block"
            >
              Book a Demo
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
