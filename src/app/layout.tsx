import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FinCalc — Mortgage repayment & compound interest calculators",
    template: "%s · FinCalc",
  },
  description:
    "Understand what a home loan really costs and how compound interest grows your savings. Clear monthly breakdowns, amortisation schedules and side-by-side projections — free and private.",
  applicationName: "FinCalc",
  keywords: [
    "mortgage calculator",
    "mortgage repayment calculator",
    "home loan calculator",
    "amortisation schedule",
    "compound interest calculator",
    "savings calculator",
    "investment growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
