"use client";

import Link from "next/link";
import { CalculatorIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Calculators", href: "#calculators" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
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

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className="h-9 rounded-full px-3.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-10 rounded-full px-5 sm:inline-flex">
            <a href="#calculators">Start calculating</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card" aria-describedby={undefined}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4 pb-4"
                aria-label="Mobile"
              >
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Button
                      variant="ghost"
                      asChild
                      className="justify-start text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <a href={link.href}>{link.label}</a>
                    </Button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-2">
                    <a href="#calculators">Start calculating</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
