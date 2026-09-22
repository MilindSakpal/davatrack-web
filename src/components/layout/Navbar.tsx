"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/Icons";
import { SOLUTIONS_MEGA_MENU, PRIMARY_NAV_LINKS } from "@/data/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setMegaMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-4 sm:px-6 lg:px-8",
        isScrolled ? "pt-2.5 pb-2.5" : "pt-4 pb-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl transition-all duration-300 ease-out",
          isScrolled
            ? "glass-nav-stuck py-2.5 px-4 sm:px-6 shadow-nav"
            : "glass-nav py-3.5 px-5 sm:px-7 shadow-soft"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center text-white font-black text-lg shadow-sm border border-navy-400/30 group-hover:bg-navy-700 transition-colors">
              <span className="text-white">D</span>
              <span className="text-cyan-accent text-sm -ml-0.5">T</span>
            </div>
            <div className="flex flex-col">
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-navy leading-none">
                Dava<span className="text-blue-accent">Track</span>
              </div>
              <div className="text-[9px] font-bold tracking-[0.25em] text-muted uppercase mt-0.5">
                DIGITAL LLP
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {PRIMARY_NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                        isActive || megaMenuOpen
                          ? "text-navy bg-navy-50/80 shadow-xs"
                          : "text-ink hover:text-navy hover:bg-navy-50/50"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-muted transition-transform duration-200",
                          megaMenuOpen && "transform rotate-180 text-blue-accent"
                        )}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[860px] max-w-[92vw] transition-all duration-250 ease-out origin-top",
                        megaMenuOpen
                          ? "opacity-100 visible translate-y-0 pointer-events-auto"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-border shadow-navy/15">
                        <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/70">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-blue-accent">
                              Healthcare Solutions & Execution
                            </div>
                            <div className="text-base font-bold text-navy">
                              Explore Our 4 Solution Domains
                            </div>
                          </div>
                          <Link
                            href="/solutions"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-blue-accent transition-colors bg-navy-50 px-3 py-1.5 rounded-lg"
                          >
                            <span>View All Solutions</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* 4 Categories Mega Grid */}
                        <div className="grid grid-cols-2 gap-5">
                          {SOLUTIONS_MEGA_MENU.map((category) => (
                            <div
                              key={category.title}
                              className="rounded-xl p-3.5 bg-surface-soft/60 border border-border-subtle hover:border-blue-accent/20 transition-colors"
                            >
                              <div className="text-[11px] font-extrabold uppercase tracking-widest text-navy-600 mb-2.5 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-accent"></span>
                                {category.title}
                              </div>
                              <div className="space-y-1.5">
                                {category.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow-xs transition-all duration-150"
                                  >
                                    <div className="p-1.5 rounded-md bg-navy-50 text-blue-accent group-hover/item:bg-navy group-hover/item:text-white transition-colors mt-0.5">
                                      <DynamicIcon
                                        name={item.icon}
                                        className="w-4 h-4"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs font-bold text-navy group-hover/item:text-blue-accent transition-colors truncate">
                                        {item.title}
                                      </div>
                                      <div className="text-[11px] text-muted truncate">
                                        {item.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Banner */}
                        <div className="mt-4 pt-3.5 border-t border-border/60 flex items-center justify-between text-xs text-muted">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
                            Need a custom combination? We build bespoke healthcare workflows.
                          </span>
                          <Link
                            href="/solutions/custom-healthcare-solutions"
                            className="font-bold text-navy hover:text-blue-accent transition-colors"
                          >
                            Custom Healthcare Solutions →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "text-navy bg-navy-50/80 shadow-xs"
                      : "text-ink hover:text-navy hover:bg-navy-50/50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/inquiry"
              variant="primary"
              size="sm"
              icon="arrow"
              className="rounded-xl shadow-xs"
            >
              Discuss Your Requirement
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-50 text-navy hover:bg-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen / Slide Mobile Menu Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-x-4 top-20 bottom-4 z-40 bg-white/98 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-border overflow-y-auto transition-all duration-300 ease-out flex flex-col",
          mobileMenuOpen
            ? "opacity-100 scale-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-4 invisible pointer-events-none"
        )}
      >
        <div className="space-y-3 flex-1">
          <Link
            href="/"
            className={cn(
              "block px-4 py-3 rounded-xl text-base font-bold transition-colors",
              pathname === "/" ? "bg-navy text-white" : "text-navy hover:bg-navy-50"
            )}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={cn(
              "block px-4 py-3 rounded-xl text-base font-bold transition-colors",
              pathname === "/about" ? "bg-navy text-white" : "text-navy hover:bg-navy-50"
            )}
          >
            About Us
          </Link>

          {/* Collapsible Mobile Solutions Section */}
          <div className="rounded-xl border border-border/80 overflow-hidden bg-surface-soft/40">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-navy"
            >
              <span>Solutions</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted transition-transform duration-200",
                  mobileSolutionsOpen && "transform rotate-180 text-blue-accent"
                )}
              />
            </button>

            {mobileSolutionsOpen && (
              <div className="px-3 pb-4 pt-1 space-y-4 border-t border-border/50">
                {SOLUTIONS_MEGA_MENU.map((cat) => (
                  <div key={cat.title} className="space-y-1">
                    <div className="text-[10px] font-extrabold tracking-wider text-muted uppercase px-2">
                      {cat.title}
                    </div>
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-navy hover:bg-white hover:text-blue-accent"
                      >
                        <DynamicIcon name={item.icon} className="w-3.5 h-3.5 text-blue-accent" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/solutions"
                  className="block text-center py-2 text-xs font-bold text-blue-accent bg-blue-accent/10 rounded-lg mt-2"
                >
                  Explore All Solutions →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/testimonials"
            className={cn(
              "block px-4 py-3 rounded-xl text-base font-bold transition-colors",
              pathname === "/testimonials"
                ? "bg-navy text-white"
                : "text-navy hover:bg-navy-50"
            )}
          >
            Testimonials
          </Link>
        </div>

        {/* Mobile Bottom CTA */}
        <div className="pt-5 border-t border-border space-y-2 mt-4">
          <Button
            href="/inquiry"
            variant="primary"
            size="md"
            icon="arrow"
            className="w-full justify-center text-sm py-3.5 rounded-xl shadow-md"
          >
            Discuss Your Requirement
          </Button>
          <p className="text-center text-[11px] text-muted pt-1">
            Healthcare Solutions & Execution Partner
          </p>
        </div>
      </div>
    </header>
  );
}
