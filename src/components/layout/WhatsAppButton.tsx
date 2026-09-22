"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const isConfigured = Boolean(whatsappNumber && whatsappNumber.trim().length > 5);

  const defaultMessage = encodeURIComponent(
    "Hello DavaTrack Digital! I would like to discuss a healthcare solution requirement."
  );
  
  const whatsappUrl = isConfigured
    ? `https://wa.me/${whatsappNumber}?text=${defaultMessage}`
    : "#";

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={cn(
          "hidden sm:flex items-center gap-2 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-navy-700/60 transition-all duration-200 pointer-events-none origin-right",
          isHovered
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-95"
        )}
      >
        <span>Chat with us</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
      </div>

      {/* Floating Button */}
      {isConfigured ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-13 h-13 p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
          aria-label="Chat with DavaTrack on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-2xl bg-emerald-400 opacity-30 group-hover:animate-ping -z-10"></span>
          <MessageCircle className="w-6 h-6 transition-transform duration-200 group-hover:rotate-6" />
        </a>
      ) : (
        <button
          disabled
          title="WhatsApp number not configured"
          className="flex items-center justify-center w-13 h-13 p-3.5 rounded-2xl bg-slate-300 text-slate-500 cursor-not-allowed opacity-60 shadow-md"
          aria-label="WhatsApp unavailable"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </aside>
  );
}
