import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davatrack.com"),
  title: {
    default: "DavaTrack Digital LLP | Healthcare Solutions & Execution Partner",
    template: "%s | DavaTrack Digital LLP",
  },
  description:
    "DavaTrack helps healthcare organizations manage medical supply, pharmacy operations, technology, staffing, accounting, manufacturing coordination, claims support, and patient engagement.",
  keywords: [
    "Healthcare Solutions",
    "Medical Supply Chain",
    "Pharmacy Management",
    "Healthcare Technology",
    "Healthcare Staffing",
    "Medicine Manufacturing",
    "Healthcare MIS",
    "Medical Claims Support",
    "DavaTrack Digital",
  ],
  authors: [{ name: "DavaTrack Digital LLP" }],
  creator: "DavaTrack Digital LLP",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davatrack.com",
    title: "DavaTrack Digital LLP | Healthcare Solutions & Execution Partner",
    description:
      "DavaTrack helps healthcare organizations manage medical supply, pharmacy operations, technology, staffing, accounting, manufacturing coordination, claims support, and patient engagement.",
    siteName: "DavaTrack Digital LLP",
  },
  twitter: {
    card: "summary_large_image",
    title: "DavaTrack Digital LLP | Healthcare Solutions & Execution Partner",
    description:
      "DavaTrack helps healthcare organizations manage medical supply, pharmacy operations, technology, staffing, accounting, manufacturing coordination, claims support, and patient engagement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06366F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-ink antialiased selection:bg-blue-accent/20 selection:text-navy selection:text-navy-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
