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
  Sparkles, 
  LogIn,
  Truck,
  Store,
  Cpu,
  BarChart3,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dropdown navigation items for the Primary Solutions category.
 * Used in both desktop floating capsule menu and mobile drawer accordion.
 */
const SOLUTIONS_DROPDOWN = [
  {
    title: "Supply Chain & Delivery",
    icon: Truck,
    href: "/solutions/medical-supply-delivery",
    color: "text-[#6BB0BF]",
  },
  {
    title: "Pharmacy Management",
    icon: Store,
    href: "/solutions/pharmacy-management",
    color: "text-[#6BB0BF]",
  },
  {
    title: "Apps & Software Systems",
    icon: Cpu,
    href: "/solutions/apps-and-software",
    color: "text-[#6BB0BF]",
  },
  {
    title: "Healthcare Administration",
    icon: BarChart3,
    href: "/solutions/accounting-mis",
    color: "text-[#6BB0BF]",
  },
];

/**
 * Main Global Floating Capsule Navbar.
 * Features:
 * - Responsive scroll detection (condenses padding on scroll).
 * - Interactive desktop hover dropdowns with safety delay bridges.
 * - Mobile navigation drawer with nested solutions accordion.
 * - Direct action CTAs for Partner Login and Consultation Booking.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
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
    setCompanyOpen(false);
  }, [pathname]);

  const handleMouseEnterSolutions = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setSolutionsOpen(true);
    setCompanyOpen(false);
  };

  const handleMouseEnterCompany = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setCompanyOpen(true);
    setSolutionsOpen(false);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      setCompanyOpen(false);
    }, 300); // 300ms generous buffer
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
          "bg-[#122631] border border-[#266573]/40 shadow-[0_12px_36px_rgba(0,0,0,0.4)]"
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
            src="/logo-navbar.png"
            alt="DavaTrack Digital LLP"
            width={160}
            height={36}
            priority
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(107,176,191,0.25)]"
          />
        </Link>

        {/* ============================================================
            CENTER: FLOATING PILL CAPSULE NAVIGATION
            ============================================================ */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#122631] border border-[#266573]/30 rounded-full px-4 py-1.5 relative">
          
          {/* 1. Home Link */}
          <Link
            href="/"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
              pathname === "/" ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10"
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
                "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                pathname.startsWith("/solutions") ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <span>Solutions</span>
              <ChevronDown className={cn("w-3.5 h-3.5 text-white/60 transition-transform duration-200", solutionsOpen && "rotate-180 text-[#6BB0BF]")} />
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

              <div className="bg-[#122631] rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[#266573]/40 space-y-1">
                {SOLUTIONS_DROPDOWN.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#6BB0BF] transition-colors"
                    >
                      <IconComp className={cn("w-4 h-4 flex-shrink-0", item.color)} />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Customers (Testimonials) */}
          <Link
            href="/testimonials"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
              pathname === "/testimonials" ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10"
            )}
          >
            Customers
          </Link>

          {/* 4. Company (About & Stories) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterCompany}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                companyOpen ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              <span>Company</span>
              <ChevronDown className={cn("w-3.5 h-3.5 text-white/60 transition-transform duration-200", companyOpen && "rotate-180 text-[#6BB0BF]")} />
            </button>

            {/* Company Dropdown */}
            <div
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 transition-all duration-200 origin-top z-50",
                companyOpen
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              )}
            >
              {/* Invisible Hover Bridge */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-transparent" />

              <div className="bg-[#122631] rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[#266573]/40 space-y-1">
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#6BB0BF] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#6BB0BF]" />
                  <span>About DavaTrack</span>
                </Link>
                <Link
                  href="/testimonials"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-white/10 hover:text-[#6BB0BF] transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-[#6BB0BF]" />
                  <span>Customer Stories</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 5. Contact Us (Direct Top-Level Link replacing Resources) */}
          <Link
            href="/inquiry"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
              pathname === "/inquiry" ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10"
            )}
          >
            Contact Us
          </Link>

        </nav>

        {/* ============================================================
            RIGHT: ACTION BUTTONS (Sign In & Book a Demo)
            ============================================================ */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          
          {/* Partner Sign In (Always visible on mobile & desktop) */}
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#266573] hover:bg-[#1f525e] text-white font-bold text-xs shadow-[0_0_15px_rgba(38,101,115,0.45)] transition-all active:scale-95 border border-[#6BB0BF]/20"
          >
            <LogIn className="w-3.5 h-3.5 text-[#6BB0BF]" />
            <span className="hidden xs:inline sm:inline">Sign In</span>
            <span className="xs:hidden sm:hidden">Login</span>
          </Link>

          {/* Book a demo (Crisp White Pill Button) */}
          <Link
            href="/inquiry"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-white hover:bg-[#CAD7D0] text-[#122631] font-bold text-xs shadow-md transition-all active:scale-95"
          >
            Book a demo
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
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
        <div className="lg:hidden fixed inset-x-4 top-24 z-50 bg-[#122631] rounded-3xl border border-[#266573]/40 p-6 shadow-2xl space-y-5 animate-in fade-in slide-in-from-top-4 duration-200">
          
          <div className="space-y-2">
            <Link
              href="/"
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Home
            </Link>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", mobileSolutionsOpen && "rotate-180 text-[#6BB0BF]")} />
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {SOLUTIONS_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2 rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/solutions"
                    className="block p-2 rounded-lg text-xs text-[#6BB0BF] hover:underline font-bold"
                  >
                    View All Solutions →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/testimonials"
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Customers
            </Link>

            <Link
              href="/about"
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              About DavaTrack
            </Link>

            <Link
              href="/inquiry"
              className="block p-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Portal Access Box for Retailer & Agency */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="text-[11px] font-mono text-[#6BB0BF] uppercase tracking-wider font-bold">
              Partner Sign In Portals
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/login?portal=retailer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#266573] hover:bg-[#1f525e] text-white font-bold text-xs shadow-md text-center"
              >
                <Store className="w-3.5 h-3.5 text-[#6BB0BF]" />
                <span>Retailer Sign In</span>
              </Link>
              <Link
                href="/login?portal=agency"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/20 text-center"
              >
                <Truck className="w-3.5 h-3.5 text-[#6BB0BF]" />
                <span>Agency Sign In</span>
              </Link>
            </div>
            
            <Link
              href="/inquiry"
              className="w-full py-3 rounded-full bg-white text-[#122631] hover:bg-[#CAD7D0] font-extrabold text-xs text-center shadow-lg block"
            >
              Book a Demo
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
