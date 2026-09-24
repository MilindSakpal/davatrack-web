"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Mail, ShieldCheck, Sparkles, Building2, Store, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

type PortalType = "hospital" | "pharmacy" | "vendor";

export default function LoginPage() {
  const [portal, setPortal] = useState<PortalType>("hospital");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#EDF3F0] text-[#122631] pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-gradient-to-b from-[#6BB0BF]/15 via-[#266573]/5 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#CAD7D0]/30 blur-[120px]" />

      <div className="max-w-md w-full relative z-10 space-y-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#266573] hover:text-[#122631] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#266573]" />
          <span>Back to DavaTrack Digital</span>
        </Link>

        {/* Portal Card */}
        <div className="bg-white border border-[#CAD7D0] rounded-[32px] p-8 sm:p-9 shadow-[0_20px_60px_rgba(18,38,49,0.08)] space-y-7">
          
          {/* Logo & Header */}
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#266573]/10 border border-[#266573]/20 text-[11px] font-bold text-[#266573]">
              <Sparkles className="w-3.5 h-3.5 text-[#266573]" />
              <span>Partner Operations Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#122631] pt-2">
              Sign In to DavaTrack
            </h1>
            <p className="text-xs text-[#122631]/70">
              Access your real-time procurement ledger, pharmacy workflows & reports.
            </p>
          </div>

          {/* Portal Selector Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] text-xs font-semibold">
            <button
              type="button"
              onClick={() => setPortal("hospital")}
              className={`py-2 px-2 rounded-xl transition-all ${portal === "hospital" ? "bg-[#122631] text-white shadow-sm" : "text-[#122631]/70 hover:text-[#122631]"}`}
            >
              Hospital
            </button>
            <button
              type="button"
              onClick={() => setPortal("pharmacy")}
              className={`py-2 px-2 rounded-xl transition-all ${portal === "pharmacy" ? "bg-[#122631] text-white shadow-sm" : "text-[#122631]/70 hover:text-[#122631]"}`}
            >
              Pharmacy
            </button>
            <button
              type="button"
              onClick={() => setPortal("vendor")}
              className={`py-2 px-2 rounded-xl transition-all ${portal === "vendor" ? "bg-[#122631] text-white shadow-sm" : "text-[#122631]/70 hover:text-[#122631]"}`}
            >
              Vendor
            </button>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#EDF3F0] border border-[#CAD7D0] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#266573]/10 text-[#266573] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#122631]">Authentication Verification</h3>
              <p className="text-xs text-[#122631]/70 leading-relaxed">
                Security token sent to your registered institutional credentials. Please check your authenticator or institutional email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs text-[#266573] hover:underline font-bold"
              >
                Sign In with different account
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#122631] uppercase tracking-wider">
                  Partner Email / ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#266573] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@hospital.com"
                    className="w-full bg-[#EDF3F0]/40 border border-[#CAD7D0] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#122631] placeholder-[#122631]/40 focus:outline-none focus:border-[#266573] focus:ring-1 focus:ring-[#266573] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#122631] uppercase tracking-wider">
                    Password
                  </label>
                  <a href="#" className="text-[11px] text-[#266573] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#266573] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#EDF3F0]/40 border border-[#CAD7D0] rounded-2xl pl-10 pr-4 py-3 text-sm text-[#122631] placeholder-[#122631]/40 focus:outline-none focus:border-[#266573] focus:ring-1 focus:ring-[#266573] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#122631] hover:bg-[#266573] text-white font-bold text-sm shadow-[0_10px_25px_rgba(18,38,49,0.25)] transition-all active:scale-95"
              >
                Sign In to {portal.charAt(0).toUpperCase() + portal.slice(1)} Portal
              </button>
            </form>
          )}

          {/* Footer note */}
          <div className="pt-4 border-t border-[#CAD7D0]/60 text-center text-xs text-[#122631]/60">
            <span>Need institutional onboarding? </span>
            <Link href="/inquiry" className="text-[#266573] font-bold hover:underline">
              Request partner access
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
