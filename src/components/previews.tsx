"use client";

import { ArrowRightIcon } from "lucide-react";
import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Illustrative product snapshots used on the landing page.
 * These are static previews of the calculators — not working calculators.
 */

export function MortgagePreview() {
  const split = [
    {
      label: "Principal & interest",
      value: "$1,924",
      pct: 68,
      dot: "bg-brand",
      bar: "[&_[data-slot=progress-indicator]]:bg-brand",
    },
    {
      label: "Property tax",
      value: "$182",
      pct: 19,
      dot: "bg-mint",
      bar: "[&_[data-slot=progress-indicator]]:bg-mint",
    },
    {
      label: "Insurance",
      value: "$78",
      pct: 13,
      dot: "bg-sun",
      bar: "[&_[data-slot=progress-indicator]]:bg-sun",
    },
  ];

  const schedule = [
    { year: "Year 1", balance: "$413,860", interest: "$26,140" },
    { year: "Year 15", balance: "$268,410", interest: "$18,470" },
    { year: "Year 30", balance: "$0", interest: "$1,180" },
  ];

  return (
    <Card className="rounded-3xl bg-card shadow-xl shadow-ink/10 [--card-spacing:--spacing(6)]">
      <CardHeader>
        <CardTitle className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Monthly repayment
        </CardTitle>
        <p className="font-mono text-4xl font-semibold tracking-tight tabular-nums">
          $2,184
        </p>
        <CardAction>
          <Badge variant="secondary">30-year fixed</Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex h-2.5 gap-1">
          {split.map((row) => (
            <Progress
              key={row.label}
              value={row.pct}
              className={`h-full shrink-0 ${row.bar}`}
              style={{ width: `${row.pct}%` }}
              aria-label={`${row.label}: ${row.pct}%`}
            />
          ))}
        </div>

        <ul className="space-y-2.5">
          {split.map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2.5 text-muted-foreground">
                <span className={`size-2 rounded-full ${row.dot}`} />
                {row.label}
              </span>
              <span className="font-mono tabular-nums">{row.value}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border bg-background/70 p-1">
          <Table>
            <TableHeader>
              <TableRow className="border-0 hover:bg-transparent">
                <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Amortisation
                </TableHead>
                <TableHead className="text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Balance
                </TableHead>
                <TableHead className="text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Interest
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((row) => (
                <TableRow key={row.year} className="hover:bg-transparent">
                  <TableCell className="text-muted-foreground">
                    {row.year}
                  </TableCell>
                  <TableCell className="text-right font-mono tabular-nums">
                    {row.balance}
                  </TableCell>
                  <TableCell className="text-right font-mono tabular-nums text-muted-foreground">
                    {row.interest}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-xs text-muted-foreground">
          Loan $420,000 · 6.25% · 30 years · illustrative figures
        </p>
      </CardContent>
    </Card>
  );
}

const growthData = [
  { year: 0, balance: 0, contributions: 0 },
  { year: 5, balance: 28000, contributions: 24000 },
  { year: 10, balance: 68000, contributions: 48000 },
  { year: 15, balance: 122000, contributions: 72000 },
  { year: 20, balance: 186420, contributions: 96000 },
];

const chartConfig = {
  balance: {
    label: "Total balance",
    color: "var(--brand)",
  },
  contributions: {
    label: "Contributions",
    color: "var(--sun)",
  },
} satisfies ChartConfig;

export function GrowthPreview() {
  return (
    <Card className="rounded-3xl bg-card shadow-xl shadow-ink/10 [--card-spacing:--spacing(6)]">
      <CardHeader>
        <CardTitle className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Projected value
        </CardTitle>
        <p className="font-mono text-4xl font-semibold tracking-tight tabular-nums">
          $186,420
        </p>
        <CardAction>
          <Badge variant="secondary">Monthly compounding</Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-5">
        <ChartContainer config={chartConfig} className="aspect-auto h-32 w-full">
          <ComposedChart
            data={growthData}
            margin={{ top: 6, right: 6, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-balance)"
                  stopOpacity={0.28}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-balance)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 5" />
            <XAxis dataKey="year" hide />
            <YAxis hide domain={[0, "dataMax"]} />
            <Area
              dataKey="balance"
              type="monotone"
              stroke="var(--color-balance)"
              strokeWidth={2.5}
              fill="url(#growthFill)"
            />
            <Line
              dataKey="contributions"
              type="monotone"
              stroke="var(--color-contributions)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </ComposedChart>
        </ChartContainer>

        <ChartLegend
          content={<ChartLegendContent className="justify-start gap-5 text-xs" />}
        />

        <div className="grid grid-cols-2 gap-3">
          <Card className="gap-0 rounded-2xl bg-background/70 ring-0">
            <CardContent>
              <p className="text-xs text-muted-foreground">You contributed</p>
              <p className="mt-1 font-mono text-lg font-semibold tabular-nums">
                $96,000
              </p>
            </CardContent>
          </Card>
          <Card className="gap-0 rounded-2xl bg-secondary ring-0">
            <CardContent>
              <p className="text-xs text-secondary-foreground/70">
                Growth earned
              </p>
              <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-secondary-foreground">
                +$90,420
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowRightIcon className="size-3.5" />
          $400/mo · 7% a year · 20 years · illustrative figures
        </p>
      </CardContent>
    </Card>
  );
}
