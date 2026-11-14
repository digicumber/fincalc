"use client";

import { useState } from "react";
import { RotateCcwIcon, TrendingUpIcon } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type Field = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
};

const fields: Field[] = [
  {
    id: "contribution",
    label: "Monthly contribution",
    min: 0,
    max: 2000,
    step: 25,
    format: (value) => `${currency.format(value)} / month`,
  },
  {
    id: "rate",
    label: "Annual return",
    min: 0,
    max: 12,
    step: 0.25,
    format: (value) => `${value.toFixed(2)}% a year`,
  },
  {
    id: "years",
    label: "Time horizon",
    min: 1,
    max: 40,
    step: 1,
    format: (value) => `${value} ${value === 1 ? "year" : "years"}`,
  },
];

const defaults = { contribution: 400, rate: 7, years: 20 };

export function ExampleCard() {
  const [values, setValues] = useState(defaults);

  const monthlyRate = values.rate / 100 / 12;
  const months = values.years * 12;
  const growthFactor = Math.pow(1 + monthlyRate, months);
  const futureValue =
    monthlyRate === 0
      ? values.contribution * months
      : values.contribution * ((growthFactor - 1) / monthlyRate);
  const contributions = values.contribution * months;
  const growth = futureValue - contributions;

  const isDefault =
    values.contribution === defaults.contribution &&
    values.rate === defaults.rate &&
    values.years === defaults.years;

  return (
    <Card className="rounded-3xl [--card-spacing:--spacing(7)] sm:[--card-spacing:--spacing(9)]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
            <TrendingUpIcon className="size-5" />
          </span>
          <Badge variant="outline">Example</Badge>
        </div>
        <CardTitle className="mt-4 text-2xl font-semibold tracking-tight">
          Example card
        </CardTitle>
        <CardDescription>
          Move a slider and the projection updates immediately. The figures are
          computed in the browser with monthly compounding and contributions at
          the end of each month.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {fields.map((field) => {
          const value = values[field.id as keyof typeof defaults];

          return (
            <div key={field.id} className="space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <Label>{field.label}</Label>
                <span className="font-mono text-sm font-semibold tabular-nums text-primary">
                  {field.format(value)}
                </span>
              </div>
              <Slider
                aria-label={field.label}
                min={field.min}
                max={field.max}
                step={field.step}
                value={[value]}
                onValueChange={(next) =>
                  setValues((current) => ({
                    ...current,
                    [field.id]: next[0],
                  }))
                }
              />
            </div>
          );
        })}
      </CardContent>

      <CardContent className="space-y-4">
        <Card className="gap-0 rounded-2xl bg-primary text-primary-foreground ring-0">
          <CardContent>
            <p className="text-xs text-primary-foreground/70">
              Projected future value
            </p>
            <p className="mt-0.5 font-mono text-2xl font-semibold tabular-nums">
              {currency.format(futureValue)}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card className="gap-0 rounded-2xl bg-background/60 ring-0">
            <CardContent>
              <p className="text-xs text-muted-foreground">Contributions</p>
              <p className="mt-1 font-mono text-base font-semibold tabular-nums">
                {currency.format(contributions)}
              </p>
            </CardContent>
          </Card>
          <Card className="gap-0 rounded-2xl bg-background/60 ring-0">
            <CardContent>
              <p className="text-xs text-muted-foreground">Compound growth</p>
              <p className="mt-1 font-mono text-base font-semibold tabular-nums text-primary">
                +{currency.format(growth)}
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          type="button"
          variant="outline"
          className="rounded-full"
          onClick={() => setValues(defaults)}
          disabled={isDefault}
        >
          <RotateCcwIcon />
          Reset to defaults
        </Button>
      </CardFooter>
    </Card>
  );
}
