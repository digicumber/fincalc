/**
 * Single source of truth for the calculators advertised on the landing page.
 *
 * The `href` values point at routes that will host the calculators. When those
 * pages are built, nothing else on the landing page needs to change.
 */

export type Calculator = {
  slug: string;
  href: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  highlights: string[];
  inputs: string;
  answers: string;
};

export const mortgageCalculator: Calculator = {
  slug: "mortgage-calculator",
  href: "/mortgage-calculator",
  name: "Mortgage Repayment Calculator",
  shortName: "Mortgage repayment",
  eyebrow: "Loans & home buying",
  tagline:
    "See what a home loan really costs — every month and over the full term.",
  description:
    "Enter the price, deposit, interest rate and term to get your monthly repayment, total interest and a complete amortisation schedule. Add taxes, insurance and extra repayments to see the whole picture.",
  highlights: [
    "Monthly payment split into principal, interest, taxes and insurance",
    "Full amortisation schedule you can expand year by year",
    "Compare rates, terms and deposits side by side",
    "See how much time and interest extra repayments save you",
  ],
  inputs: "8 inputs",
  answers: "Payment, total interest, payoff date",
};

export const compoundInterestCalculator: Calculator = {
  slug: "compound-interest-calculator",
  href: "/compound-interest-calculator",
  name: "Compound Interest Calculator",
  shortName: "Compound interest",
  eyebrow: "Saving & investing",
  tagline:
    "Turn a starting balance and a regular contribution into a projected future value.",
  description:
    "Model how your money grows with compound growth and steady contributions. Choose your compounding frequency, adjust the rate and horizon, and see what you put in next to what the market added.",
  highlights: [
    "Starting balance, regular contributions, rate and time horizon",
    "Monthly, quarterly or annual compounding",
    "Contributions and compound growth, shown as separate figures",
    "Year-by-year growth table and side-by-side scenarios",
  ],
  inputs: "5 inputs",
  answers: "Future value, growth, contribution split",
};

export const calculators: Calculator[] = [
  mortgageCalculator,
  compoundInterestCalculator,
];
