"use client";

import { useState } from "react";
import type { Product } from "@/types";
import type { SupplyPlan } from "@/data/plans";
import HeroProductCard from "@/components/HeroProductCard";

interface SupplyLengthPickerProps {
  product: Product;
  plans: SupplyPlan[];
  onSelect: (plan: SupplyPlan) => void;
}

export default function SupplyLengthPicker({
  product,
  plans,
  onSelect,
}: SupplyLengthPickerProps) {
  const defaultIndex = plans.findIndex((p) => p.recommended);
  const [selectedIndex, setSelectedIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );

  const selected = plans[selectedIndex];

  return (
    <div className="flex flex-col gap-5 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
      {/* Heading */}
      <h1
        className="text-[24px] font-bold leading-8 text-[#07073d]"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Choose your plan
      </h1>

      {/* Hero product card */}
      <HeroProductCard product={product} />

      {/* Plan cards */}
      <div className="flex flex-col gap-3">
        {plans.map((plan, i) => {
          const isSelected = i === selectedIndex;
          const isRecommended = plan.recommended;

          return (
            <button
              key={plan.months}
              onClick={() => setSelectedIndex(i)}
              className={`relative w-full rounded-[12px] px-5 py-4 text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 ${
                isSelected
                  ? "border-2 border-[#086a74] bg-[rgba(8,106,116,0.04)]"
                  : "border border-[#e6e7ed] bg-white"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-[10px] right-4 bg-[#086a74] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div className="flex items-center gap-3">
                {/* Radio dot */}
                <div
                  className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-[#086a74] bg-[#086a74]"
                      : "border-[#e6e7ed]"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                {/* Duration label */}
                <span className="text-[16px] font-semibold text-[#07073d] flex-1">
                  {plan.label}
                </span>

                {/* Pricing */}
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[16px]">
                    {plan.originalPerMonth && (
                      <span className="line-through text-[#989eb5] text-[14px]">
                        £{plan.originalPerMonth}
                      </span>
                    )}{" "}
                    <span className="font-semibold text-[#07073d]">
                      £{plan.pricePerMonth}
                    </span>
                    <span className="text-[#07073d]"> /mo</span>
                  </span>
                  <span className="text-[12px] text-[#575d84]">
                    £{plan.totalPrice} total
                  </span>
                  {plan.savingsLabel && (
                    <span className="text-[12px] font-semibold text-[#086a74]">
                      {plan.savingsLabel}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2 items-center">
        <button
          onClick={() => onSelect(selected)}
          className="w-full flex items-center justify-center py-4 px-6 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Continue with {selected.label} plan
        </button>
        <span
          className="text-[10px] leading-3 text-[#575d84] text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          You can change your plan at any time
        </span>
      </div>
    </div>
  );
}
