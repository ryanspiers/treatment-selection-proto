"use client";

import { useState } from "react";
import type { Product } from "@/types";
import type { SupplyPlan } from "@/data/plans";
import { treatmentPlans, type TreatmentPlan } from "@/data/plans";

interface SupplyLengthPickerProps {
  product: Product;
  plans: SupplyPlan[];
  onSelect: (plan: SupplyPlan) => void;
  onChangeProduct?: () => void;
}

export default function SupplyLengthPicker({
  product,
  plans,
  onSelect,
  onChangeProduct,
}: SupplyLengthPickerProps) {
  const defaultIndex = plans.findIndex((p) => p.recommended);
  const [selectedIndex, setSelectedIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );

  const selected = plans[selectedIndex];
  const currentTreatmentPlans = treatmentPlans[selected.months] || [];

  return (
    <div className="flex flex-col gap-6 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
      {/* Heading */}
      <h1
        className="text-[24px] font-bold leading-8 text-[#07073d]"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Choose your plan
      </h1>

      {/* Product context strip */}
      <div
        className="w-full rounded-[12px] overflow-hidden p-5"
        style={{
          backgroundImage: `linear-gradient(178deg, ${product.gradientFrom || "rgb(220,242,255)"} 7%, white 93%)`,
        }}
      >
        <div
          className="backdrop-blur-sm bg-white/60 border border-[#e6e7ed] rounded-[8px] flex items-center justify-between px-5 py-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="text-[14px] font-semibold leading-[22px] text-[#07073d]">
            {product.name}
          </span>
          <button
            onClick={onChangeProduct}
            className="text-[12px] leading-5 text-[#086a74] cursor-pointer focus-visible:outline-none"
          >
            Change
          </button>
        </div>
      </div>

      {/* Month selector */}
      <div
        className="flex flex-col gap-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <span className="text-[12px] leading-5 text-[#2f345f]">
          Number of months supply
        </span>
        <div className="flex gap-[11px]">
          {plans.map((plan, i) => {
            const isSelected = i === selectedIndex;
            return (
              <button
                key={plan.months}
                onClick={() => setSelectedIndex(i)}
                className={`flex-1 flex items-center justify-center py-4 rounded-[4px] cursor-pointer text-[14px] leading-[22px] text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 ${
                  isSelected
                    ? "bg-[#f1f8fc] border-[1.5px] border-[#086a74] font-semibold text-[#07073d]"
                    : "bg-[#f9f9f9] border border-[#e6e7ed] font-normal text-[#575d84]"
                }`}
              >
                {plan.months}
              </button>
            );
          })}
        </div>
      </div>

      {/* Treatment plan cards */}
      <div className="flex flex-col gap-2">
        <span
          className="text-[12px] leading-5 text-[#2f345f]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Plans
        </span>
        <div className="flex flex-col gap-2">
          {currentTreatmentPlans.map((tp) => (
            <PlanCard key={tp.id} plan={tp} />
          ))}
        </div>
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
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: TreatmentPlan }) {
  return (
    <div className="w-full">
      {/* Top section */}
      <div className="bg-white border border-[#e6e7ed] rounded-t-[8px] p-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span
              className="text-[14px] leading-[22px] text-[#2f345f]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {plan.name}
            </span>
            <div className="flex items-center gap-1">
              <span
                className="text-[24px] font-semibold leading-8 text-[#07073d]"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                £{plan.pricePerPen.toFixed(2)}
              </span>
              <span
                className="text-[14px] leading-[22px] text-[#575d84]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                / pen
              </span>
            </div>
            <span
              className="text-[10px] leading-3 text-[#2f345f]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              £{plan.totalPrice} total
            </span>
          </div>
          {plan.savingsLabel && (
            <span
              className="text-[10px] font-medium text-[#07073d] px-1.5 py-0.5 rounded-[4px]"
              style={{
                backgroundImage:
                  "linear-gradient(-35deg, rgb(226, 251, 240) 0%, rgb(136, 243, 196) 100%)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {plan.savingsLabel}
            </span>
          )}
        </div>
      </div>

      {/* Bottom pen doses strip */}
      <div className="bg-[#f9f9f9] border-b border-l border-r border-[#e6e7ed] rounded-b-[8px] flex gap-3 items-center px-3 pt-2 pb-3">
        {plan.pens.map((pen, i) => (
          <div key={i} className="flex-1 flex flex-col gap-1.5 items-center">
            <span
              className="text-[10px] leading-3 text-[#575d84]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Month {pen.month}
            </span>
            <span
              className="w-full text-center text-[10px] font-medium text-white px-1.5 py-0.5 rounded-[4px]"
              style={{
                backgroundColor: pen.color,
                fontFamily: "var(--font-inter)",
              }}
            >
              {pen.dose}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
