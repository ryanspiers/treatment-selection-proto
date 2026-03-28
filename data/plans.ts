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
