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

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className = "w-5 h-5", size }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
}
