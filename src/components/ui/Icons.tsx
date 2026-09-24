"use client";

import React from "react";
import {
  Truck,
  Search,
  Factory,
  PackageCheck,
  HeartPulse,
  Store,
  Users,
  FileCheck,
  Cpu,
  Smartphone,
  GitMerge,
  Building2,
  BarChart3,
  UserCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Activity,
  PhoneCall,
  Clock,
  Compass,
  FileText,
  Workflow,
  Check,
  Menu,
  X,
  Send,
  MessageCircle,
  HelpCircle,
  Stethoscope,
  Boxes,
  LineChart,
} from "lucide-react";

export type IconName =
  | "Truck"
  | "Search"
  | "Factory"
  | "PackageCheck"
  | "HeartPulse"
  | "Store"
  | "Users"
  | "FileCheck"
  | "Cpu"
  | "Smartphone"
  | "GitMerge"
  | "Building2"
  | "BarChart3"
  | "UserCheck"
  | "Sparkles"
  | "ArrowRight"
  | "ArrowUpRight"
  | "ChevronDown"
  | "ChevronRight"
  | "CheckCircle2"
  | "ShieldCheck"
  | "Layers"
  | "Activity"
  | "PhoneCall"
  | "Clock"
  | "Compass"
  | "FileText"
  | "Workflow"
  | "Check"
  | "Menu"
  | "X"
  | "Send"
  | "MessageCircle"
  | "HelpCircle"
  | "Stethoscope"
  | "Boxes"
  | "LineChart";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Search,
  Factory,
  PackageCheck,
  HeartPulse,
  Store,
  Users,
  FileCheck,
  Cpu,
  Smartphone,
  GitMerge,
  Building2,
  BarChart3,
  UserCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Activity,
  PhoneCall,
  Clock,
  Compass,
  FileText,
  Workflow,
  Check,
  Menu,
  X,
  Send,
  MessageCircle,
  HelpCircle,
  Stethoscope,
  Boxes,
  LineChart,
};

/**
 * Props for dynamic Lucide icon rendering by name string.
 */
export interface DynamicIconProps {
  /** Name of the icon matching Lucide icon names */
  name: string;
  /** Tailwind class for sizing/colors (defaults to "w-5 h-5") */
  className?: string;
  /** Explicit pixel size */
  size?: number;
}

/**
 * Dynamic Lucide Icon component.
 * Allows rendering icons dynamically from data config files (e.g. solutions.ts, navigation.ts).
 * Falls back gracefully to `Sparkles` if an unknown icon name is provided.
 */
export function DynamicIcon({ name, className = "w-5 h-5", size }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
}
