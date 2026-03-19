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
  description: string;
  icon: "flat" | "up";
  pricePerPen: number;
  totalPrice: number;
  pens: PenDose[];
}

export const treatmentPlans: Record<number, TreatmentPlan[]> = {
  1: [
    {
      id: "dose-025-1",
      name: "0.25mg",
      description: "1 Wegovy FlexTouch Pen",
      icon: "flat",
      pricePerPen: 89,
      totalPrice: 89,
      pens: [{ month: 1, dose: "0.25mg", color: "#53c2ab" }],
    },
    {
      id: "dose-05-1",
      name: "0.5mg",
      description: "1 Wegovy FlexTouch Pen",
      icon: "up",
      pricePerPen: 147,
      totalPrice: 139,
      pens: [{ month: 1, dose: "0.5mg", color: "#a0486b" }],
    },
  ],
  2: [
    {
      id: "steady-2",
      name: "Steady plan",
      description: "For users with a steady weight loss",
      icon: "flat",
      pricePerPen: 89,
      totalPrice: 178,
      pens: [
        { month: 1, dose: "0.25mg", color: "#53c2ab" },
        { month: 2, dose: "0.25mg", color: "#53c2ab" },
      ],
    },
    {
      id: "increasing-2",
      name: "Increasing plan",
      description: "For users wanting the best bang for their buck",
      icon: "up",
      pricePerPen: 129,
      totalPrice: 258,
      pens: [
        { month: 1, dose: "0.25mg", color: "#53c2ab" },
        { month: 2, dose: "0.5mg", color: "#a0486b" },
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
