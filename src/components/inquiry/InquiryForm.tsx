"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Phone, 
  Mail, 
  User, 
  FileText, 
  HelpCircle,
  RefreshCcw,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const HEALTHCARE_SEGMENTS = [
  "Pharmacy",
  "Hospital",
  "Clinic",
  "Diagnostic Centre",
  "Government Healthcare",
  "Private Healthcare",
  "Corporate / Industrial Healthcare",
  "Healthcare Startup",
  "Other",
];

const CAPABILITY_INTERESTS = [
  "Medical Supply & Delivery",
  "Vendor Discovery & Procurement",
  "Pharmacy Management",
  "Contract Manufacturing",
  "Apps & Software Development",
  "HR & Healthcare Staffing",
  "Accounting & MIS Reporting",
  "Medical Claims Support",
  "Patient Engagement",
  "Custom Healthcare Solution",
];

interface FormData {
  name: string;
  designation: string;
  organization: string;
  phone: string;
  email: string;
  segment: string;
  requirement: string;
  selectedInterests: string[];
}

interface FormErrors {
  name?: string;
  organization?: string;
  phone?: string;
  email?: string;
  segment?: string;
  requirement?: string;
}

export function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    designation: "",
    organization: "",
    phone: "",
    email: "",
    segment: "",
    requirement: "",
    selectedInterests: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.selectedInterests.includes(interest);
      if (exists) {
        return {
          ...prev,
          selectedInterests: prev.selectedInterests.filter((i) => i !== interest),
        };
      } else {
        return {
          ...prev,
          selectedInterests: [...prev.selectedInterests, interest],
        };
      }
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Please enter your organization or facility name.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid phone number (minimum 8 digits).";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please describe your healthcare requirement or operational challenge.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Submission (Ready for CRM / Email webhook integration)
    setTimeout(() => {
      const generatedRef = "DT-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      designation: "",
      organization: "",
      phone: "",
      email: "",
      segment: "",
      requirement: "",
      selectedInterests: [],
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#CAD7D0] shadow-[0_4px_20px_rgba(18,38,49,0.04)] text-center space-y-6 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#EDEDE5] text-[#266573] flex items-center justify-center mx-auto ring-8 ring-[#CAD7D0]/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-[#266573]">
            Requirement Successfully Logged
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#122631]">
            Thank You, {formData.name}
          </h3>
          <p className="text-sm text-[#122631]/70 max-w-md mx-auto">
            Your healthcare operational requirement has been recorded with reference <b className="text-[#122631] font-bold">{referenceId}</b>.
          </p>
        </div>

        <div className="bg-[#EDEDE5] p-5 rounded-2xl border border-[#CAD7D0] text-left space-y-3 text-xs text-[#122631]/80">
          <div className="flex justify-between border-b border-[#CAD7D0]/60 pb-2">
            <span className="font-semibold text-[#122631]">Organization:</span>
            <span className="font-bold text-[#122631]">{formData.organization}</span>
          </div>
          <div className="flex justify-between border-b border-[#CAD7D0]/60 pb-2">
            <span className="font-semibold text-[#122631]">Segment:</span>
            <span className="font-bold text-[#122631]">{formData.segment || "Healthcare Unit"}</span>
          </div>
          <div className="flex justify-between border-b border-[#CAD7D0]/60 pb-2">
            <span className="font-semibold text-[#122631]">Contact Phone:</span>
            <span className="font-bold text-[#122631]">{formData.phone}</span>
          </div>
          <div>
            <span className="font-semibold text-[#122631] block mb-1">Requirement Overview:</span>
            <p className="text-[#122631]/90 italic bg-white p-3 rounded-lg border border-[#CAD7D0]">
              “{formData.requirement}”
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl border border-[#CAD7D0] bg-white text-[#122631] font-semibold text-xs hover:bg-[#EDEDE5] transition-colors"
          >
            Submit Another Requirement
          </button>
          <a
            href="/"
            className="px-6 py-2.5 rounded-xl bg-[#122631] text-white font-semibold text-xs hover:bg-[#266573] transition-colors"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#CAD7D0] shadow-[0_4px_20px_rgba(18,38,49,0.04)] space-y-8"
    >
      <div className="space-y-2 pb-4 border-b border-[#CAD7D0]/60">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#122631]">
          Requirement Intake Form
        </h3>
        <p className="text-xs sm:text-sm text-[#122631]/70">
          Fields marked with <span className="text-rose-500 font-bold">*</span> are required for our solutions team to analyze your requirement.
        </p>
      </div>

      {/* Multi-Select Capability Tags */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#122631]">
          Areas of Interest (Optional)
        </label>
        <div className="flex flex-wrap gap-2">
          {CAPABILITY_INTERESTS.map((interest) => {
            const isSelected = formData.selectedInterests.includes(interest);
            return (
              <button
                type="button"
                key={interest}
                onClick={() => toggleInterest(interest)}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 border text-left",
                  isSelected
                    ? "bg-[#122631] text-white border-[#122631] shadow-xs"
                    : "bg-[#EDEDE5] text-[#122631] hover:bg-[#CAD7D0]/50 border-[#CAD7D0]"
                )}
              >
                {isSelected ? "✓ " : "+ "}
                {interest}
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#122631]">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. Dr. Rajesh Kumar"
              className={cn(
                "w-full px-4 py-3 rounded-xl border text-sm text-[#122631] outline-none transition-all placeholder:text-[#122631]/40",
                errors.name
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-[#CAD7D0] bg-[#EDEDE5]/30 focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20"
              )}
            />
          </div>
          {errors.name && (
            <p className="text-[11px] font-semibold text-rose-600 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Designation */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#122631]">
            Designation
          </label>
          <input
            type="text"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            placeholder="e.g. Medical Director / Operations Head"
            className="w-full px-4 py-3 rounded-xl border border-[#CAD7D0] bg-[#EDEDE5]/30 text-sm text-[#122631] outline-none focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20 transition-all placeholder:text-[#122631]/40"
          />
        </div>

        {/* Organization */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#122631]">
            Organization / Facility Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => {
              setFormData({ ...formData, organization: e.target.value });
              if (errors.organization) setErrors({ ...errors, organization: undefined });
            }}
            placeholder="e.g. Apollo Diagnostics / Care Pharmacy"
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-sm text-[#122631] outline-none transition-all placeholder:text-[#122631]/40",
              errors.organization
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-[#CAD7D0] bg-[#EDEDE5]/30 focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20"
            )}
          />
          {errors.organization && (
            <p className="text-[11px] font-semibold text-rose-600 mt-1">
              {errors.organization}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#122631]">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="+91 98765 43210"
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-sm text-[#122631] outline-none transition-all placeholder:text-[#122631]/40",
              errors.phone
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-[#CAD7D0] bg-[#EDEDE5]/30 focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20"
            )}
          />
          {errors.phone && (
            <p className="text-[11px] font-semibold text-rose-600 mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#122631]">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="you@organization.com"
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-sm text-[#122631] outline-none transition-all placeholder:text-[#122631]/40",
              errors.email
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-[#CAD7D0] bg-[#EDEDE5]/30 focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20"
            )}
          />
          {errors.email && (
            <p className="text-[11px] font-semibold text-rose-600 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Healthcare Segment */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#122631]">
            Healthcare Segment
          </label>
          <select
            value={formData.segment}
            onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#CAD7D0] bg-[#EDEDE5]/30 text-sm text-[#122631] outline-none focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20 transition-all cursor-pointer"
          >
            <option value="">Select healthcare segment...</option>
            {HEALTHCARE_SEGMENTS.map((seg) => (
              <option key={seg} value={seg}>
                {seg}
              </option>
            ))}
          </select>
        </div>

        {/* Your Requirement Textarea */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="block text-xs font-bold text-[#122631]">
            Your Requirement or Operational Challenge <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.requirement}
            onChange={(e) => {
              setFormData({ ...formData, requirement: e.target.value });
              if (errors.requirement) setErrors({ ...errors, requirement: undefined });
            }}
            placeholder="Describe your requirement, e.g. We need scheduled pharmaceutical restocking, pharmacy management support for our 3 retail outlets, or custom clinical workflow software..."
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-sm text-[#122631] outline-none transition-all placeholder:text-[#122631]/40 resize-y min-h-[120px]",
              errors.requirement
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-[#CAD7D0] bg-[#EDEDE5]/30 focus:border-[#266573] focus:ring-2 focus:ring-[#266573]/20"
            )}
          ></textarea>
          {errors.requirement && (
            <p className="text-[11px] font-semibold text-rose-600 mt-1">
              {errors.requirement}
            </p>
          )}
        </div>

      </div>

      {/* Submit Action */}
      <div className="pt-4 border-t border-[#CAD7D0]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#122631]/70 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#266573] flex-shrink-0" />
          <span>Strict confidentiality. Your data is never shared.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#122631] hover:bg-[#266573] text-white font-bold text-sm shadow-[0_10px_25px_rgba(18,38,49,0.25)] transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4 animate-spin" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4 text-[#6BB0BF]" />
              Submit Requirement
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
