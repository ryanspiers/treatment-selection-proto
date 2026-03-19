export interface SupplyPlan {
  months: number;
  label: string;
  subtitle: string;
  totalPrice: number;
  pricePerPen?: number;
  badge?: {
    text: string;
    type: "success" | "info";
  };
  bullets: string[];
  muted?: boolean;
  recommended?: boolean;
}

export const supplyPlans: SupplyPlan[] = [
  {
    months: 3,
    label: "3 months",
    subtitle: "3 pens • 1 delivery",
    totalPrice: 267,
    pricePerPen: 89,
    badge: { text: "Best value – lowest per pen price", type: "success" },
    bullets: [
      "Price locked for 3 months",
      "No monthly reordering needed",
    ],
    recommended: true,
  },
  {
    months: 2,
    label: "2 months",
    subtitle: "2 pens • 1 delivery",
    totalPrice: 196,
    pricePerPen: 98,
    badge: { text: "Save £15 per pen vs 1 month plan", type: "info" },
    bullets: [],
  },
  {
    months: 1,
    label: "1 month",
    subtitle: "1 pen • 1 delivery",
    totalPrice: 113,
    bullets: [
      "Re-order required every month",
      "£24 more per pen compared to 3 month plan",
    ],
    muted: true,
  },
];

export interface PenDose {
  month: number;
  dose: string;
  color: string;
}

export interface TreatmentPlan {
  id: string;
  name: string;
  pricePerPen: number;
  totalPrice: number;
  savingsLabel?: string;
  pens: PenDose[];
}

const doseColors: Record<string, string> = {
  "2.5mg": "#58595b",
  "5mg": "#402a5b",
  "7.5mg": "#347e71",
};

export const treatmentPlans: Record<number, TreatmentPlan[]> = {
  1: [
    {
      id: "maintenance-1",
      name: "Maintenance plan",
      pricePerPen: 149,
      totalPrice: 149,
      pens: [{ month: 1, dose: "2.5mg", color: doseColors["2.5mg"] }],
    },
    {
      id: "increasing-1",
      name: "Increasing plan",
      pricePerPen: 149,
      totalPrice: 149,
      pens: [{ month: 1, dose: "2.5mg", color: doseColors["2.5mg"] }],
    },
  ],
  2: [
    {
      id: "maintenance-2",
      name: "Maintenance plan",
      pricePerPen: 109,
      totalPrice: 436,
      savingsLabel: "Save £40",
      pens: [
        { month: 1, dose: "2.5mg", color: doseColors["2.5mg"] },
        { month: 2, dose: "2.5mg", color: doseColors["2.5mg"] },
      ],
    },
    {
      id: "increasing-2",
      name: "Increasing plan",
      pricePerPen: 129,
      totalPrice: 516,
      savingsLabel: "Save £80",
      pens: [
        { month: 1, dose: "2.5mg", color: doseColors["2.5mg"] },
        { month: 2, dose: "5mg", color: doseColors["5mg"] },
      ],
    },
  ],
  3: [
    {
      id: "maintenance-3",
      name: "Maintenance plan",
      pricePerPen: 92.33,
      totalPrice: 597,
      savingsLabel: "Save £80",
      pens: [
        { month: 1, dose: "2.5mg", color: doseColors["2.5mg"] },
        { month: 2, dose: "2.5mg", color: doseColors["2.5mg"] },
        { month: 3, dose: "2.5mg", color: doseColors["2.5mg"] },
      ],
    },
    {
      id: "increasing-3",
      name: "Increasing plan",
      pricePerPen: 119,
      totalPrice: 798,
      savingsLabel: "Save £198",
      pens: [
        { month: 1, dose: "2.5mg", color: doseColors["2.5mg"] },
        { month: 2, dose: "5mg", color: doseColors["5mg"] },
        { month: 3, dose: "7.5mg", color: doseColors["7.5mg"] },
      ],
    },
  ],
};
