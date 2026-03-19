"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { treatmentPlans, type TreatmentPlan } from "@/data/plans";

interface PlanChooserProps {
  product: Product;
  months: number;
  onChangeProduct?: () => void;
  onChangeMonths?: () => void;
  onSelect: (plan: TreatmentPlan) => void;
}

export default function PlanChooser({
  product,
  months,
  onChangeProduct,
  onChangeMonths,
  onSelect,
}: PlanChooserProps) {
  const plans = treatmentPlans[months] || [];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedPlan = plans.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="flex flex-col gap-8 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
      {/* Heading */}
      <h1
        className="text-[24px] font-bold leading-8 text-[#07073d]"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Choose your plan
      </h1>

      {/* Product + months context strip */}
      <div
        className="w-full rounded-[12px] overflow-hidden p-5"
        style={{
          backgroundImage: `linear-gradient(178deg, ${product.gradientFrom || "rgb(220,242,255)"} 7%, white 93%)`,
        }}
      >
        <div
          className="backdrop-blur-sm bg-white/60 border border-[#e6e7ed] rounded-[8px] flex flex-col gap-[10px] py-3 overflow-hidden"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <div className="flex items-center justify-between px-5">
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
          <div className="flex items-center justify-between px-5">
            <span className="text-[14px] leading-[22px] text-[#2f345f]">
              {months} month plan
            </span>
            <button
              onClick={onChangeMonths}
              className="text-[12px] leading-5 text-[#086a74] cursor-pointer focus-visible:outline-none"
            >
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="flex flex-col gap-3">
        <span
          className="text-[14px] leading-[22px] text-[#2f345f]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Plans
        </span>
        <div className="flex flex-col gap-4">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedId(plan.id)}
              className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 rounded-[8px]"
            >
              <PlanCard plan={plan} isSelected={plan.id === selectedId} isSingleMonth={months === 1} />
            </button>
          ))}
        </div>
      </div>

      {/* Klarna banner */}
      {months === 3 && (
        <div
          className="w-full bg-[#ffe5ec] rounded-[4px] flex items-center gap-1.5 p-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="text-[12px] leading-5 text-[#07073d]">Pay with</span>
          <div className="bg-[#ffb3c7] rounded-[4px] p-0.5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/klarnabadge.svg" alt="Klarna" width={40} height={9} />
          </div>
          <span className="text-[12px] leading-5 text-[#07073d]">available on 3 month plans</span>
        </div>
      )}

      {/* 1-month upsell card */}
      {months === 1 && (
        <div
          className="w-full bg-[#f9f9f9] border border-[#e6e7ed] rounded-[8px] flex flex-col gap-5 items-center px-3 py-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <div className="flex gap-3 items-start justify-center w-full">
            <div className="w-10 h-10 rounded-full bg-[#bee9ed] shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/alistair-murray.png"
                alt="Alistair Murray"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-[12px] leading-5 text-[#07073d]">
                Patients that choose a 3 month plan over a 1 month plan lose weight at a rate of up to 15% faster.
              </span>
              <span className="text-[10px] leading-3 font-semibold text-[#2f345f]">
                Alistair Murray GPhC, COO at Phlo
              </span>
            </div>
          </div>
          <button
            onClick={onChangeMonths}
            className="text-[12px] leading-5 font-semibold text-[#086a74] cursor-pointer focus-visible:outline-none"
          >
            See 3 month plan options
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="flex flex-col gap-2 items-center">
        <button
          onClick={() => selectedPlan && onSelect(selectedPlan)}
          disabled={!selectedPlan}
          className={`w-full flex items-center justify-center py-4 px-6 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2 ${
            selectedPlan ? "cursor-pointer opacity-100" : "cursor-default opacity-40"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {selectedPlan ? `Continue with ${selectedPlan.name}` : "Continue"}
        </button>
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  isSelected,
  isSingleMonth,
}: {
  plan: TreatmentPlan;
  isSelected: boolean;
  isSingleMonth?: boolean;
}) {
  const showPerPen = !isSingleMonth || plan.totalPrice !== plan.pricePerPen;

  return (
    <div
      className={`w-full rounded-[8px] overflow-clip ${
        isSelected
          ? "border-[1.5px] border-[#086a74]"
          : "border border-[#e6e7ed]"
      }`}
    >
      {/* Top section */}
      <div
        className={`p-4 ${
          isSelected
            ? "bg-[#f1f8fc] border-b-[1.5px] border-[#086a74]"
            : "bg-white border-b border-[#e6e7ed]"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span
                className="text-[14px] font-semibold leading-[22px] text-[#2f345f]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {plan.name}
              </span>
              {!isSingleMonth && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={plan.icon === "flat" ? "/trending-flat.svg" : "/trending-up.svg"}
                  alt=""
                  width={20}
                  height={20}
                />
              )}
            </div>
            <span
              className="text-[12px] leading-5 text-[#575d84]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {plan.description}
            </span>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <span
              className="text-[24px] font-semibold leading-8 text-[#07073d]"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              £{plan.totalPrice}
            </span>
            {showPerPen && (
              <span
                className="text-[12px] leading-5 text-[#575d84]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                £{plan.pricePerPen} /pen
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom pen doses strip */}
      <div className="bg-[#f9f9f9] flex gap-3 items-center px-3 pt-2 pb-3">
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
