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
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-card text-center space-y-6 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-blue-accent">
            Requirement Successfully Logged
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Thank You, {formData.name}
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto">
            Your healthcare operational requirement has been recorded with reference <b className="text-navy font-bold">{referenceId}</b>.
          </p>
        </div>

        <div className="bg-surface-soft p-5 rounded-2xl border border-border text-left space-y-3 text-xs text-muted">
          <div className="flex justify-between border-b border-border/70 pb-2">
            <span className="font-semibold text-navy">Organization:</span>
            <span className="font-bold text-navy-800">{formData.organization}</span>
          </div>
          <div className="flex justify-between border-b border-border/70 pb-2">
            <span className="font-semibold text-navy">Segment:</span>
            <span className="font-bold text-navy-800">{formData.segment || "Healthcare Unit"}</span>
          </div>
          <div className="flex justify-between border-b border-border/70 pb-2">
            <span className="font-semibold text-navy">Contact Phone:</span>
            <span className="font-bold text-navy-800">{formData.phone}</span>
          </div>
          <div>
            <span className="font-semibold text-navy block mb-1">Requirement Overview:</span>
            <p className="text-navy-700 italic bg-white p-3 rounded-lg border border-border">
              “{formData.requirement}”
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Button
            onClick={handleReset}
            variant="outline"
            size="md"
            className="rounded-xl"
          >
            Submit Another Requirement
          </Button>
          <Button
            href="/"
            variant="primary"
            size="md"
            className="rounded-xl"
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-card space-y-8"
    >
      <div className="space-y-2 pb-4 border-b border-border">
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
          Requirement Intake Form
        </h3>
        <p className="text-xs sm:text-sm text-muted">
          Fields marked with <span className="text-rose-500 font-bold">*</span> are required for our solutions team to analyze your requirement.
        </p>
      </div>

      {/* Multi-Select Capability Tags */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
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
                    ? "bg-navy text-white border-navy shadow-xs"
                    : "bg-surface-soft text-navy-700 hover:bg-navy-50 border-border"
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
          <label className="block text-xs font-bold text-navy-800">
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
                "w-full px-4 py-3 rounded-xl border text-sm text-ink outline-none transition-all placeholder:text-muted/60",
                errors.name
                  ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                  : "border-border bg-white focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20"
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
          <label className="block text-xs font-bold text-navy-800">
            Designation
          </label>
          <input
            type="text"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            placeholder="e.g. Medical Director / Operations Head"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink outline-none focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 transition-all placeholder:text-muted/60"
          />
        </div>

        {/* Organization */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-navy-800">
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
              "w-full px-4 py-3 rounded-xl border text-sm text-ink outline-none transition-all placeholder:text-muted/60",
              errors.organization
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-border bg-white focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20"
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
          <label className="block text-xs font-bold text-navy-800">
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
              "w-full px-4 py-3 rounded-xl border text-sm text-ink outline-none transition-all placeholder:text-muted/60",
              errors.phone
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-border bg-white focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20"
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
          <label className="block text-xs font-bold text-navy-800">
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
              "w-full px-4 py-3 rounded-xl border text-sm text-ink outline-none transition-all placeholder:text-muted/60",
              errors.email
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-border bg-white focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20"
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
          <label className="block text-xs font-bold text-navy-800">
            Healthcare Segment
          </label>
          <select
            value={formData.segment}
            onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink outline-none focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 transition-all cursor-pointer"
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
          <label className="block text-xs font-bold text-navy-800">
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
              "w-full px-4 py-3 rounded-xl border text-sm text-ink outline-none transition-all placeholder:text-muted/60 resize-y min-h-[120px]",
              errors.requirement
                ? "border-rose-400 bg-rose-50/30 focus:ring-2 focus:ring-rose-300"
                : "border-border bg-white focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20"
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
      <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-muted flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <span>Strict confidentiality. Your data is never shared.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 rounded-xl shadow-md"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4 animate-spin" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Submit Requirement
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
