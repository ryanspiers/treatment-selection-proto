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
