import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarClockIcon,
  CheckIcon,
  FileSpreadsheetIcon,
  GitCompareArrowsIcon,
  HomeIcon,
  LayersIcon,
  LineChartIcon,
  LockIcon,
  MousePointerClickIcon,
  PercentIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExampleCard } from "@/components/example-card";
import { GrowthPreview, MortgagePreview } from "@/components/previews";
import {
  calculators,
  compoundInterestCalculator,
  mortgageCalculator,
} from "@/lib/calculators";

const glance = [
  {
    value: "2",
    label: "focused calculators",
    detail: "A home loan or long-term growth",
  },
  {
    value: "Full",
    label: "amortisation",
    detail: "Balance and interest, year by year",
  },
  {
    value: "0",
    label: "sign-ups",
    detail: "Open a calculator and start",
  },
  {
    value: "100%",
    label: "in-browser",
    detail: "Your numbers stay on your device",
  },
];

const features = [
  {
    icon: PercentIcon,
    title: "The whole payment, split",
    body: "See principal, interest, property tax and insurance in one clear monthly figure — not a single number you have to reverse-engineer.",
  },
  {
    icon: CalendarClockIcon,
    title: "Amortisation, year by year",
    body: "Expand any point in the loan to see the remaining balance, interest paid and how much of each payment goes to the principal.",
  },
  {
    icon: WalletIcon,
    title: "Extra repayments, visible",
    body: "Add a recurring or one-off extra payment and watch the term shorten and the total interest fall.",
  },
  {
    icon: LayersIcon,
    title: "Contributions vs. growth",
    body: "Compound interest is shown as its own figure, so you always know what you put in and what the market added.",
  },
  {
    icon: GitCompareArrowsIcon,
    title: "Scenarios side by side",
    body: "Change the rate, term, deposit or contribution and compare the outcomes without rebuilding the calculation.",
  },
  {
    icon: LockIcon,
    title: "Private by default",
    body: "Every calculation runs in your browser. There is no account, no upload and no saved history on a server.",
  },
];

const steps = [
  {
    icon: MousePointerClickIcon,
    title: "Choose a calculator",
    body: "Start with the question you are trying to answer: what a home loan will cost, or what steady saving can grow into.",
  },
  {
    icon: SlidersHorizontalIcon,
    title: "Set your assumptions",
    body: "Adjust the price, deposit, rate, term, starting balance and contribution. Nothing is locked behind a default.",
  },
  {
    icon: FileSpreadsheetIcon,
    title: "Read the whole story",
    body: "Follow the charts, schedule and totals to see where the money goes — and what one changed assumption would do.",
  },
];

const faqs = [
  {
    question: "How accurate are the results?",
    answer:
      "The calculators use standard amortisation and compound-interest formulas. Real-world figures can differ slightly because of lender fees, rounding, variable rates and the exact day interest is charged, so treat every result as a planning estimate rather than a quote.",
  },
  {
    question: "Can I include extra mortgage repayments?",
    answer:
      "Yes. Add recurring or one-off extra repayments to see how a shorter term changes your total interest and payoff date. The amortisation schedule updates alongside the headline repayment.",
  },
  {
    question: "What does the mortgage repayment include?",
    answer:
      "You get principal and interest as the core repayment, with optional property tax and insurance on top. The monthly breakdown, total interest and full amortisation schedule are shown together so the number never appears without context.",
  },
  {
    question: "How are compound interest contributions handled?",
    answer:
      "Your starting balance and regular contributions both compound at the frequency you choose — monthly, quarterly or annually. The projection keeps contributions and growth separate, and shows the year-by-year path as well as the final value.",
  },
  {
    question: "Do you store the numbers I enter?",
    answer:
      "No. Everything runs locally in your browser. There is no account, no server-side history and no upload of your financial details.",
  },
  {
    question: "Can I compare two scenarios?",
    answer:
      "Yes. Duplicate a scenario and change one assumption at a time — a lower rate, a shorter term, a larger deposit or a different contribution — to see which lever matters most.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_72%)]"
        />
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="rise relative">
            <Badge
              variant="outline"
              className="border-brand/20 bg-card/70 text-brand"
            >
              <SparklesIcon className="size-3.5" />
              Mortgage + compound interest
            </Badge>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4.5rem]">
              Make the biggest numbers{" "}
              <span className="font-serif font-normal italic text-brand">
                feel simple.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              See exactly what a mortgage will cost you and how compound
              interest can grow your savings — with schedules, charts and
              comparisons that show their working.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-brand px-6 text-white hover:bg-brand-dark"
              >
                <a href="#calculators">
                  Explore the calculators
                  <ArrowRightIcon />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-line bg-card/70 px-6"
              >
                <a href="#example">Try the live example</a>
              </Button>
            </div>
            <ul className="mt-8 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "What will my monthly repayment be?",
                "How much interest will I pay in total?",
                "What will steady saving grow into?",
                "How do extra repayments change the loan?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <CheckIcon className="size-2.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise relative" style={{ animationDelay: "120ms" }}>
            <div
              aria-hidden="true"
              className="absolute -top-8 -right-6 size-32 rounded-full bg-mint/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-8 size-44 rounded-full bg-sun/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-6 -bottom-4 h-full rounded-3xl border border-line bg-card/50"
            />
            <div className="relative mx-auto max-w-md">
              <MortgagePreview />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="At a glance"
        className="border-b border-line bg-card"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {glance.map((item) => (
            <div key={item.label} className="bg-card px-6 py-8 sm:px-8">
              <p className="font-serif text-4xl leading-none text-brand">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold tracking-tight text-ink">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="calculators"
        aria-labelledby="calculators-heading"
        className="border-b border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge
                variant="outline"
                className="border-brand/20 bg-brand-soft/60 text-brand"
              >
                The calculators
              </Badge>
              <h2
                id="calculators-heading"
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
              >
                Two questions.{" "}
                <span className="italic text-brand">Two clear answers.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              No dashboards to learn and no blank spreadsheets. Each calculator
              gives you the headline result first, then the detail that explains
              it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {calculators.map((calculator) => {
              const Icon =
                calculator.slug === "mortgage-calculator"
                  ? HomeIcon
                  : LineChartIcon;

              return (
                <Card
                  key={calculator.slug}
                  className="group flex flex-col gap-0 overflow-hidden rounded-3xl py-0 ring-1 ring-ink/10 [--card-spacing:--spacing(5)] transition-shadow hover:shadow-xl hover:shadow-ink/5 sm:[--card-spacing:--spacing(7)]"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-line bg-brand-soft/60 px-5 py-5 sm:px-7">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                          {calculator.eyebrow}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">
                          {calculator.inputs} → {calculator.answers}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRightIcon className="size-4 shrink-0 text-brand/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <CardHeader className="pt-7">
                    <CardTitle className="font-serif text-3xl font-normal tracking-tight">
                      {calculator.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base leading-relaxed">
                      {calculator.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {calculator.description}
                    </p>
                    <Separator className="my-6" />
                    <ul className="space-y-3">
                      {calculator.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                            <CheckIcon className="size-3" />
                          </span>
                          <span className="text-foreground/80">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="mt-auto flex-col items-start gap-3 border-t border-line bg-muted/30 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                    <span className="text-xs text-muted-foreground">
                      {calculator.inputs} · {calculator.answers}
                    </span>
                    <Button
                      asChild
                      className="w-full rounded-full bg-brand px-5 text-white hover:bg-brand-dark sm:w-auto"
                    >
                      <Link href={calculator.href}>
                        Open calculator
                        <ArrowRightIcon />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-heading"
        className="border-b border-line bg-card"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="border-brand/20 bg-brand-soft/60 text-brand"
            >
              Why FinCalc
            </Badge>
            <h2
              id="features-heading"
              className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
            >
              Built to show{" "}
              <span className="italic text-brand">its working.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A headline payment is only useful if you can see what sits behind
              it. Every chart, table and total is there so you can check the
              logic — and trust the answer.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="rounded-3xl bg-paper ring-1 ring-ink/10 [--card-spacing:--spacing(6)] transition-colors hover:bg-brand-soft/30"
              >
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <feature.icon className="size-5" />
                  </span>
                  <CardTitle className="mt-4 text-lg font-semibold tracking-tight">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {feature.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mt-6 overflow-hidden rounded-3xl bg-brand-dark py-0 text-paper ring-0">
            <div className="grid items-center gap-10 px-7 py-10 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
              <div>
                <Badge
                  variant="outline"
                  className="border-white/20 bg-white/5 text-mint"
                >
                  <TrendingUpIcon className="size-3.5" />
                  Compound growth
                </Badge>
                <h3 className="mt-5 max-w-md font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
                  Growth you can see, not just a final number.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
                  The compound interest calculator keeps your contributions and
                  the growth they generate separate, so the result feels less
                  like a prediction and more like a plan.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-paper/80">
                  {[
                    "Projects the balance year by year",
                    "Shows contributions and compound growth separately",
                    "Lets you compare rates, horizons and contributions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                        <CheckIcon className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <GrowthPreview />
            </div>
          </Card>
        </div>
      </section>

      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="border-b border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="border-brand/20 bg-brand-soft/60 text-brand"
            >
              How it works
            </Badge>
            <h2
              id="how-it-works-heading"
              className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
            >
              From question to{" "}
              <span className="italic text-brand">confident number.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Three steps, no finance degree required. Change any assumption as
              often as you like — the result updates with it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="rounded-3xl bg-card ring-1 ring-ink/10 [--card-spacing:--spacing(7)]"
              >
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-serif text-4xl leading-none text-brand/20">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="example"
        aria-labelledby="example-heading"
        className="border-b border-line bg-ink text-paper"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
          <div>
            <Badge
              variant="outline"
              className="border-white/20 bg-white/5 text-mint"
            >
              <SparklesIcon className="size-3.5" />
              Live example
            </Badge>
            <h2
              id="example-heading"
              className="mt-5 max-w-lg font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
            >
              Move a slider.{" "}
              <span className="italic text-mint">Watch the maths change.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
              This is a working piece of the compound interest calculator. Drag
              the contribution, return or time horizon and the future value,
              contributions and compound growth recalculate immediately.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-paper/80">
              {[
                "Monthly contributions, compounded monthly",
                "Contributions and growth shown as separate figures",
                "Reset any time to return to the default example",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-8 h-11 rounded-full border-white/20 bg-white/5 px-6 text-paper hover:bg-white/10 hover:text-paper"
            >
              <Link href={compoundInterestCalculator.href}>
                Open the compound calculator
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>

          <ExampleCard />
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="border-b border-line bg-card"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
          <div>
            <Badge
              variant="outline"
              className="border-brand/20 bg-brand-soft/60 text-brand"
            >
              FAQ
            </Badge>
            <h2
              id="faq-heading"
              className="mt-4 max-w-sm font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
            >
              Answers before you{" "}
              <span className="italic text-brand">calculate.</span>
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              The assumptions behind the numbers, and what FinCalc does — and
              does not — do with your data.
            </p>

            <Card className="mt-8 max-w-sm rounded-3xl bg-brand-soft/60 py-0 ring-0">
              <CardContent className="space-y-2 py-5">
                <p className="text-sm font-semibold tracking-tight">
                  Still have a question?
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The calculators themselves are the best place to see how each
                  assumption changes the result.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="h-auto justify-start p-0 text-sm font-semibold text-brand"
                >
                  <a href="#calculators">
                    Choose a calculator
                    <ArrowRightIcon />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Accordion
            type="single"
            collapsible
            className="self-start rounded-3xl border border-line bg-paper px-5 sm:px-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Badge
            variant="outline"
            className="border-brand/20 bg-card/70 text-brand"
          >
            Ready when you are
          </Badge>
          <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Start with the number that{" "}
            <span className="italic text-brand">matters.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Run a mortgage, project your savings, or do both. No account, no
            setup — just a clearer view of the money ahead.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full bg-brand px-6 text-white hover:bg-brand-dark"
            >
              <Link href={mortgageCalculator.href}>
                Open mortgage calculator
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-line bg-card/70 px-6"
            >
              <Link href={compoundInterestCalculator.href}>
                Open compound calculator
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Free to use · No sign-up · Estimates only, not financial advice
          </p>
        </div>
      </section>
    </>
  );
}
