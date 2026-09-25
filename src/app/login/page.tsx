"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  FileText,
  Clock,
  ArrowRight,
  HelpCircle,
  QrCode,
  Building2,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { BRAND_COLORS, SITE_CONFIG } from "@/lib/constants";

type PortalRole = "retailer" | "agency";
type AuthMethod = "password" | "otp";

function LoginContent() {
  const searchParams = useSearchParams();
  const initialPortal = searchParams.get("portal") === "agency" ? "agency" : "retailer";

  const [role, setRole] = useState<PortalRole>(initialPortal);
  const [authMethod, setAuthMethod] = useState<AuthMethod>("password");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(30);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Sync state if URL query param changes
  useEffect(() => {
    const p = searchParams.get("portal");
    if (p === "agency" || p === "retailer") {
      setRole(p);
    }
  }, [searchParams]);

  // Handle OTP countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && otpCountdown > 0) {
      timer = setInterval(() => setOtpCountdown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, otpCountdown]);

  const handleRoleChange = (newRole: PortalRole) => {
    setRole(newRole);
    setIsSuccess(false);
    setOtpSent(false);
    setIdentifier("");
    setPassword("");
    setOtp("");
  };

  const handleSendOtp = () => {
    if (!identifier) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setOtpCountdown(30);
    }, 600);
  };

  const handleDemoFill = () => {
    if (role === "retailer") {
      setIdentifier("MH-MZ2-2024-8891");
      setPassword("DavaRetail#2026");
    } else {
      setIdentifier("AGY-DEL-9021");
      setPassword("ApexAgency#2026");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#EDF3F0] text-[#122631] pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background Ambient Reflections */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[400px] rounded-full bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/8 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#CAD7D0]/35 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#266573]/5 blur-[100px]" />

      <div className="max-w-5xl w-full relative z-10 space-y-6">
        {/* Top Navigation Bar in Login View */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#266573] hover:text-[#122631] transition-colors py-1.5 px-3 rounded-full bg-white/80 border border-[#CAD7D0] shadow-sm backdrop-blur-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#266573]" />
            <span>Back to DavaTrack Platform</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#122631]/70">
            <span className="hidden sm:inline">Need technical assistance?</span>
            <button
              onClick={() => setShowHelpModal(true)}
              className="inline-flex items-center gap-1 font-bold text-[#266573] hover:text-[#122631] underline underline-offset-2"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Partner Support</span>
            </button>
          </div>
        </div>

        {/* ============================================================
            MAIN 2-COLUMN SIGN IN CONSOLE
            ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ==========================================================
              LEFT COLUMN: NETWORK SHOWCASE & TRUST CARD (5 Cols)
              ========================================================== */}
          <div className="lg:col-span-5 bg-[#122631] text-white rounded-3xl p-7 sm:p-9 border border-[#266573]/40 shadow-[0_20px_50px_rgba(18,38,49,0.25)] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Inner Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-60 h-60 bg-[#266573]/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-60 h-60 bg-[#6BB0BF]/15 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              {/* Brand Header */}
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-navbar.png"
                  alt="DavaTrack Digital LLP"
                  width={150}
                  height={34}
                  className="h-7 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(107,176,191,0.20)]"
                />
                <span className="text-white/40 text-xs font-mono font-medium pl-2.5 border-l border-white/20">
                  Partner Portal
                </span>
              </div>

              {/* Dynamic Role Showcase Content */}
              {role === "retailer" ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#266573]/30 border border-[#6BB0BF]/30 text-[10px] font-mono font-bold text-[#6BB0BF] uppercase tracking-wider">
                    <Store className="w-3 h-3 text-[#6BB0BF]" />
                    <span>Retail Chemist & Pharmacy Network</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    Real-Time Wholesale Sourcing for Your Pharmacy Counter.
                  </h2>

                  <p className="text-xs text-[#CAD7D0]/80 leading-relaxed">
                    Directly link your pharmacy to verified pharmaceutical agencies, automated batch dispatch, cold-chain temperature telemetry, and daily credit ledgers.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#6BB0BF] flex-shrink-0 mt-0.5" />
                      <span>Order directly from authorized wholesale depot stock</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#6BB0BF] flex-shrink-0 mt-0.5" />
                      <span>Zero stockouts with automated re-order thresholds</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#6BB0BF] flex-shrink-0 mt-0.5" />
                      <span>100% CDSCO QR batch traceability & GST invoices</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#266573]/30 border border-[#6BB0BF]/30 text-[10px] font-mono font-bold text-[#6BB0BF] uppercase tracking-wider">
                    <Truck className="w-3 h-3 text-[#6BB0BF]" />
                    <span>Wholesale Distributor & Depot Hub</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    Streamlined Route Logistics & Retailer Demand Feed.
                  </h2>

                  <p className="text-xs text-[#CAD7D0]/80 leading-relaxed">
                    Broadcast inventory availability, execute optimized delivery corridors, track refrigerated cold-chain transit, and manage retailer credit accounts.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#6BB0BF] flex-shrink-0 mt-0.5" />
                      <span>Live demand feed from 1,500+ verified retail counters</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#6BB0BF] flex-shrink-0 mt-0.5" />
                      <span>Automated vehicle manifest & route sequence generator</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#6BB0BF] flex-shrink-0 mt-0.5" />
                      <span>Instant proof-of-delivery (e-POD) & settlement ledger</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Security Footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#CAD7D0]/70">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6BB0BF]" /> 256-Bit SSL
              </span>
              <span>CDSCO Compliant</span>
              <span>ABDM Ready</span>
            </div>
          </div>

          {/* ==========================================================
              RIGHT COLUMN: INTERACTIVE LOGIN CONSOLE (7 Cols)
              ========================================================== */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-[#CAD7D0] shadow-[0_15px_45px_rgba(18,38,49,0.06)] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header & Role Switcher */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#122631]">
                      Partner Portal Sign In
                    </h1>
                    <p className="text-xs text-[#122631]/70 mt-0.5">
                      Select your partner vertical to access your operations dashboard.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleDemoFill}
                    className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#266573] hover:text-[#122631] px-2.5 py-1 rounded-lg bg-[#EDF3F0] border border-[#CAD7D0] transition-colors"
                    title="Auto-fills sample credentials for testing"
                  >
                    <Zap className="w-3 h-3 text-[#266573]" />
                    <span>Demo Auto-Fill</span>
                  </button>
                </div>

                {/* 2-Role Segmented Selector (Retailer vs Agency ONLY) */}
                <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0]">
                  <button
                    type="button"
                    onClick={() => handleRoleChange("retailer")}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
                      role === "retailer"
                        ? "bg-[#266573] text-white shadow-md border border-[#6BB0BF]/30"
                        : "text-[#122631]/75 hover:text-[#122631] hover:bg-white/80"
                    }`}
                  >
                    <Store className={`w-4 h-4 ${role === "retailer" ? "text-[#6BB0BF]" : "text-[#266573]"}`} />
                    <span>Retailer / Chemist</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleChange("agency")}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold transition-all ${
                      role === "agency"
                        ? "bg-[#266573] text-white shadow-md border border-[#6BB0BF]/30"
                        : "text-[#122631]/75 hover:text-[#122631] hover:bg-white/80"
                    }`}
                  >
                    <Truck className={`w-4 h-4 ${role === "agency" ? "text-[#6BB0BF]" : "text-[#266573]"}`} />
                    <span>Wholesale Agency / Depot</span>
                  </button>
                </div>

                {/* Authentication Method Sub-Toggle (Password vs OTP) */}
                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#266573] font-bold">
                    Sign in with:
                  </div>
                  <div className="inline-flex rounded-lg bg-[#EDF3F0] p-0.5 border border-[#CAD7D0] text-[11px]">
                    <button
                      type="button"
                      onClick={() => setAuthMethod("password")}
                      className={`px-3 py-1 rounded-md font-semibold transition-all ${
                        authMethod === "password" ? "bg-white text-[#122631] shadow-xs" : "text-[#122631]/60"
                      }`}
                    >
                      Password / PIN
                    </button>
                    <button
                      type="button"
                      onClick={() => setAuthMethod("otp")}
                      className={`px-3 py-1 rounded-md font-semibold transition-all ${
                        authMethod === "otp" ? "bg-white text-[#122631] shadow-xs" : "text-[#122631]/60"
                      }`}
                    >
                      Instant Mobile OTP
                    </button>
                  </div>
                </div>
              </div>

              {/* ======================================================
                  SUCCESS STATE BANNER
                  ====================================================== */}
              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-[#EDF3F0] border border-[#266573]/30 text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#266573] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6 text-[#6BB0BF]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#122631]">
                    {role === "retailer" ? "Retail Pharmacy Session Active" : "Agency Depot Session Active"}
                  </h3>
                  <p className="text-xs text-[#122631]/75 max-w-sm mx-auto leading-relaxed">
                    Identity verified for <b className="text-[#122631]">{identifier || "Verified Account"}</b>. Redirecting you to your real-time procurement workspace...
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-bold text-[#266573] hover:underline"
                    >
                      ← Sign in with a different account
                    </button>
                  </div>
                </div>
              ) : (
                /* ====================================================
                    ACTIVE LOGIN FORM
                    ==================================================== */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Identifier (DL No / Mobile / Agency Code) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#122631] uppercase tracking-wider">
                      {role === "retailer"
                        ? authMethod === "otp"
                          ? "Registered Mobile Number"
                          : "Drug License (DL) No. or Mobile"
                        : authMethod === "otp"
                        ? "Agency Registered Mobile"
                        : "Agency Supply Code or GSTIN"}
                    </label>
                    <div className="relative">
                      {role === "retailer" ? (
                        <Store className="w-4 h-4 text-[#266573] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      ) : (
                        <Building2 className="w-4 h-4 text-[#266573] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      )}
                      <input
                        type={authMethod === "otp" ? "tel" : "text"}
                        required
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder={
                          role === "retailer"
                            ? authMethod === "otp"
                              ? "e.g. 98765 43210"
                              : "e.g. MH-MZ2-2024-8891 or 98765 43210"
                            : authMethod === "otp"
                            ? "e.g. 98765 11223"
                            : "e.g. AGY-DEL-9021 or 27AAAAA0000A1Z5"
                        }
                        className="w-full bg-[#EDF3F0]/50 border border-[#CAD7D0] rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#122631] placeholder-[#122631]/40 focus:outline-none focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Field 2: Password Mode OR OTP Mode */}
                  {authMethod === "password" ? (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-[#122631] uppercase tracking-wider">
                          Password / PIN
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowHelpModal(true)}
                          className="text-[11px] text-[#266573] hover:underline font-semibold"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-[#266573] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full bg-[#EDF3F0]/50 border border-[#CAD7D0] rounded-xl pl-10 pr-10 py-3 text-xs sm:text-sm text-[#122631] placeholder-[#122631]/40 focus:outline-none focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20 transition-all font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#122631]/50 hover:text-[#122631]"
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* OTP Mode Fields */
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-[#122631] uppercase tracking-wider">
                          6-Digit OTP
                        </label>
                        {otpSent && (
                          <span className="text-[11px] text-[#266573] font-mono">
                            {otpCountdown > 0 ? `Resend in ${otpCountdown}s` : (
                              <button
                                type="button"
                                onClick={handleSendOtp}
                                className="font-bold underline"
                              >
                                Resend OTP
                              </button>
                            )}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <KeyRound className="w-4 h-4 text-[#266573] absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            maxLength={6}
                            required={otpSent}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder={otpSent ? "Enter 6-digit OTP" : "Click 'Send OTP' first"}
                            disabled={!otpSent}
                            className="w-full bg-[#EDF3F0]/50 border border-[#CAD7D0] rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-[#122631] placeholder-[#122631]/40 focus:outline-none focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20 transition-all font-mono tracking-widest disabled:opacity-50"
                          />
                        </div>

                        {!otpSent && (
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={!identifier || isLoading}
                            className="px-4 py-3 rounded-xl bg-[#266573] hover:bg-[#122631] text-white font-bold text-xs shadow-sm transition-all disabled:opacity-50 whitespace-nowrap"
                          >
                            Send OTP
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#122631]/80 font-medium">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-[#CAD7D0] text-[#266573] focus:ring-[#266573]"
                      />
                      <span>Remember this terminal ID</span>
                    </label>

                    <button
                      type="button"
                      onClick={handleDemoFill}
                      className="sm:hidden text-[11px] font-bold text-[#266573] underline"
                    >
                      Fill Demo
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading || (authMethod === "otp" && !otpSent)}
                    className="w-full py-3.5 px-6 rounded-full bg-[#266573] hover:bg-[#122631] text-white font-bold text-sm shadow-[0_10px_25px_rgba(38,101,115,0.3)] hover:shadow-[0_12px_30px_rgba(18,38,49,0.3)] transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 mt-2 border border-[#6BB0BF]/30"
                  >
                    {isLoading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Verifying Credentials...</span>
                      </span>
                    ) : (
                      <>
                        <span>
                          Sign In to {role === "retailer" ? "Retailer" : "Agency"} Dashboard
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#6BB0BF]" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Bottom Onboarding Prompt */}
              <div className="pt-4 border-t border-[#CAD7D0]/60 text-center space-y-1">
                <p className="text-xs text-[#122631]/70">
                  Not registered on DavaTrack yet?
                </p>
                <Link
                  href="/inquiry"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#266573] hover:text-[#122631] hover:underline"
                >
                  <span>Apply for Retailer Chemist / Wholesale Agency Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ============================================================
          HELP & SUPPORT MODAL (For Forgotten Passwords & Onboarding)
          ============================================================ */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#CAD7D0] shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#CAD7D0]/60">
              <div className="flex items-center gap-2 text-sm font-bold text-[#122631]">
                <HelpCircle className="w-4 h-4 text-[#266573]" />
                <span>Partner Portal Help & Reset</span>
              </div>
              <button
                onClick={() => setShowHelpModal(false)}
                className="p-1 rounded-lg text-[#122631]/60 hover:text-[#122631] hover:bg-[#EDF3F0]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#122631]/80 leading-relaxed">
              <p>
                To reset your <b>Drug License (DL) credentials</b>, <b>Agency Security PIN</b>, or update your registered OTP mobile number, please contact your assigned DavaTrack Operations Coordinator:
              </p>

              <div className="p-3.5 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] space-y-2">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[#266573] font-bold">Email Support:</span>
                  <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-[#122631] font-bold hover:underline">
                    {SITE_CONFIG.contact.supportEmail}
                  </a>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[#266573] font-bold">Desk Helpline:</span>
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-[#122631] font-bold hover:underline">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
                <div className="text-[11px] text-[#122631]/60 pt-1">
                  Operating Hours: Mon – Sat (9:00 AM – 7:00 PM IST)
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-5 py-2 rounded-full bg-[#122631] hover:bg-[#266573] text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#EDF3F0] flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#266573] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
