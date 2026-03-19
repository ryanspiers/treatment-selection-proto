export interface SupplyPlan {
  months: number;
  label: string;
  pricePerMonth: number;
  totalPrice: number;
  originalPerMonth?: number;
  savingsLabel?: string;
  badge?: string;
  recommended?: boolean;
}

export const supplyPlans: SupplyPlan[] = [
  {
    months: 1,
    label: "1 month",
    pricePerMonth: 119,
    totalPrice: 119,
  },
  {
    months: 2,
    label: "2 months",
    pricePerMonth: 99,
    totalPrice: 198,
    originalPerMonth: 119,
    savingsLabel: "Save £40",
  },
  {
    months: 3,
    label: "3 months",
    pricePerMonth: 89,
    totalPrice: 267,
    originalPerMonth: 119,
    savingsLabel: "Save £90",
    badge: "Best value",
    recommended: true,
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
