export interface SupplyPlan {
  months: number;
  label: string;
  subtitle: string;
  totalPrice: number;
  pricePerPen?: number;
  recommended?: boolean;
}

export const supplyPlans: SupplyPlan[] = [
  {
    months: 1,
    label: "1 month",
    subtitle: "1 pen • 1 delivery",
    totalPrice: 149,
  },
  {
    months: 2,
    label: "2 months",
    subtitle: "2 pens • 1 delivery",
    totalPrice: 550,
    pricePerPen: 225,
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
  description: string;
  icon: "flat" | "up";
  pricePerPen: number;
  totalPrice: number;
  pens: PenDose[];
}

export const treatmentPlans: Record<number, TreatmentPlan[]> = {
  1: [
    {
      id: "dose-125-1",
      name: "12.5mg",
      description: "Increase your dose",
      icon: "up",
      pricePerPen: 119,
      totalPrice: 279,
      pens: [{ month: 1, dose: "12.5mg", color: "#3774BA" }],
    },
    {
      id: "dose-10-1",
      name: "10mg",
      description: "Keep your dose steady",
      icon: "flat",
      pricePerPen: 119,
      totalPrice: 229,
      pens: [{ month: 1, dose: "10mg", color: "#BB2C7E" }],
    },
    {
      id: "dose-75-1",
      name: "7.5mg",
      description: "Lower your dose",
      icon: "flat",
      pricePerPen: 119,
      totalPrice: 189,
      pens: [{ month: 1, dose: "7.5mg", color: "#347E71" }],
    },
    {
      id: "dose-5-1",
      name: "5mg",
      description: "Lower your dose",
      icon: "flat",
      pricePerPen: 119,
      totalPrice: 169,
      pens: [{ month: 1, dose: "5mg", color: "#402A5B" }],
    },
    {
      id: "dose-25-1",
      name: "2.5mg",
      description: "Lower your dose",
      icon: "flat",
      pricePerPen: 119,
      totalPrice: 149,
      pens: [{ month: 1, dose: "2.5mg", color: "#58595B" }],
    },
  ],
  2: [
    {
      id: "steady-2",
      name: "Stay steady",
      description: "Best if you are experiencing some mild side effects",
      icon: "flat",
      pricePerPen: 225,
      totalPrice: 550,
      pens: [
        { month: 1, dose: "10mg", color: "#BB2C7E" },
        { month: 2, dose: "10mg", color: "#BB2C7E" },
      ],
    },
    {
      id: "gradual-2",
      name: "Gradual increase",
      description: "For users wanting the best bang for their buck",
      icon: "up",
      pricePerPen: 282.5,
      totalPrice: 565,
      pens: [
        { month: 1, dose: "10mg", color: "#BB2C7E" },
        { month: 2, dose: "12.5mg", color: "#3774BA" },
      ],
    },
    {
      id: "full-2",
      name: "Full increase",
      description: "For users wanting the best bang for their buck",
      icon: "up",
      pricePerPen: 296,
      totalPrice: 592,
      pens: [
        { month: 1, dose: "12.5mg", color: "#3774BA" },
        { month: 2, dose: "12.5mg", color: "#3774BA" },
      ],
    },
  ],
  3: [
    {
      id: "steady-3",
      name: "Steady plan",
      description: "For users with a steady weight loss",
      icon: "flat",
      pricePerPen: 89,
      totalPrice: 267,
      pens: [
        { month: 1, dose: "0.25mg", color: "#53c2ab" },
        { month: 2, dose: "0.25mg", color: "#53c2ab" },
        { month: 3, dose: "0.25mg", color: "#53c2ab" },
      ],
    },
    {
      id: "increasing-3",
      name: "Increasing plan",
      description: "For users wanting the best bang for their buck",
      icon: "up",
      pricePerPen: 147,
      totalPrice: 498,
      pens: [
        { month: 1, dose: "0.25mg", color: "#53c2ab" },
        { month: 2, dose: "0.5mg", color: "#a0486b" },
        { month: 3, dose: "1mg", color: "#ac784c" },
      ],
    },
  ],
};

/* ───────────────────────────────────────────────
   Dose options — used by the new DoseSelector
   ─────────────────────────────────────────────── */

export interface DoseOption {
  id: string;
  label: string;
  packSize?: number;
  months: number;
  price: number;
  originalPrice?: number;
  colors: string[];
  badge?: string;
  /** If true, only shown after "See all options" is tapped */
  extraOption?: boolean;
  /** Green savings callout, e.g. "Save £30" */
  savingsText?: string;
  /** Disclaimer shown when card is selected */
  disclaimer?: string;
}

export const doseOptions: Record<string, DoseOption[]> = {
  "mounjaro-kwikpen": [
    {
      id: "mj-25-1",
      label: "2.5mg",
      months: 1,
      price: 169,
      colors: ["#58595B"],
      extraOption: true,
    },
    {
      id: "mj-5-1",
      label: "5mg",
      months: 1,
      price: 199,
      colors: ["#402A5B"],
      extraOption: true,
    },
    {
      id: "mj-75-1",
      label: "7.5mg",
      months: 1,
      price: 249,
      colors: ["#347E71"],
      extraOption: true,
    },
    {
      id: "mj-10-1",
      label: "10mg",
      months: 1,
      price: 279,
      colors: ["#BB2C7E"],
    },
    {
      id: "mj-10-2",
      label: "10mg",
      packSize: 2,
      months: 2,
      price: 550,
      originalPrice: 558,
      colors: ["#BB2C7E"],
      badge: "Bundle deal",
    },
    {
      id: "mj-10-3",
      label: "10mg",
      packSize: 3,
      months: 3,
      price: 650,
      originalPrice: 837,
      colors: ["#BB2C7E"],
      badge: "Bundle deal",
      disclaimer: "This bundle is for patients that are stable and comfortable with 3 months of the same dose.",
    },
    {
      id: "mj-10-125-2",
      label: "10mg + 12.5mg",
      packSize: 2,
      months: 2,
      price: 565,
      originalPrice: 578,
      colors: ["#BB2C7E", "#3774BA"],
      badge: "Bundle deal",
    },
    {
      id: "mj-125-1",
      label: "12.5mg",
      months: 1,
      price: 299,
      colors: ["#3774BA"],
    },
    {
      id: "mj-125-2",
      label: "12.5mg",
      packSize: 2,
      months: 2,
      price: 592,
      originalPrice: 598,
      colors: ["#3774BA"],
      badge: "Bundle deal",
    },
    {
      id: "mj-125-3",
      label: "12.5mg",
      packSize: 3,
      months: 3,
      price: 692,
      originalPrice: 897,
      colors: ["#3774BA"],
      badge: "Bundle deal",
      disclaimer: "This bundle is for patients that are stable and comfortable with 3 months of the same dose.",
    },
  ],
  "wegovy-pen": [
    {
      id: "wg-025-1",
      label: "0.25mg",
      months: 1,
      price: 119,
      colors: ["#53c2ab"],
    },
    {
      id: "wg-05-1",
      label: "0.5mg",
      months: 1,
      price: 139,
      colors: ["#a0486b"],
    },
    {
      id: "wg-1-1",
      label: "1mg",
      months: 1,
      price: 169,
      colors: ["#ac784c"],
    },
  ],
};
