import Link from "next/link";
import { CalculatorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { calculators } from "@/lib/calculators";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Button
              variant="ghost"
              asChild
              className="h-auto gap-2.5 px-2 py-1 text-[15px] font-semibold tracking-tight hover:bg-transparent"
            >
              <Link href="/">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <CalculatorIcon className="size-4" />
                </span>
                FinCalc
              </Link>
            </Button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Two focused financial calculators that show their working — so you
              can plan a mortgage or project compound growth with confidence.
            </p>
          </div>

          <nav aria-label="Calculators">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Calculators
            </h2>
            <ul className="mt-3 flex flex-col items-start gap-1">
              {calculators.map((calc) => (
                <li key={calc.slug}>
                  <Button
                    variant="link"
                    asChild
                    className="h-auto p-0 text-sm font-normal text-foreground hover:text-primary"
                  >
                    <Link href={calc.href}>{calc.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Product
            </h2>
            <ul className="mt-3 flex flex-col items-start gap-1">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Button
                    variant="link"
                    asChild
                    className="h-auto p-0 text-sm font-normal text-foreground hover:text-primary"
                  >
                    <a href={link.href}>{link.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="mt-12" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FinCalc. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Estimates only — FinCalc is a planning tool, not financial or tax
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
