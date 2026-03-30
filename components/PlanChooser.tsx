"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { treatmentPlans, type TreatmentPlan } from "@/data/plans";
import PricingModal from "./PricingModal";

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.33 4.67h1.34V6H7.33V4.67ZM7.33 7.33h1.34v4H7.33v-4ZM8 1.33A6.67 6.67 0 1 0 14.67 8 6.68 6.68 0 0 0 8 1.33Zm0 12A5.33 5.33 0 1 1 13.33 8 5.34 5.34 0 0 1 8 13.33Z"
        fill="#003d88"
      />
    </svg>
  );
}

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
  const allPlans = treatmentPlans[months] || [];
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAllStrengths, setShowAllStrengths] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const selectedPlan = allPlans.find((p) => p.id === selectedId) ?? null;

  const plans = months === 1 && !showAllStrengths ? allPlans.slice(0, 2) : allPlans;

  return (
    <div className="flex flex-col min-h-[calc(100dvh-60px)]">
      {/* Scrollable content */}
      <div className="flex-1 flex flex-col gap-8 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
        {/* Heading */}
        <h1
          className="text-[24px] font-bold leading-8 text-[#07073d]"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          What is your goal?
        </h1>

        {/* Plans + quote */}
        <div className="flex flex-col gap-8">
          {/* Plans section */}
          <div className="flex flex-col gap-5 items-center">
            {/* Plan cards */}
            <div className="flex flex-col gap-4 w-full">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedId(plan.id)}
                  className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 rounded-[8px]"
                >
                  <PlanCard plan={plan} isSelected={plan.id === selectedId} />
                </button>
              ))}
            </div>

            {/* Show lower strengths - outlined button */}
            {months === 1 && !showAllStrengths && (
              <button
                onClick={() => setShowAllStrengths(true)}
                className="w-full h-[48px] flex items-center justify-center px-6 py-4 rounded-[360px] border border-[#07073d] bg-white text-[14px] font-semibold leading-[22px] text-[#07073d] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Show lower strengths
              </button>
            )}

            {/* How does pricing work? */}
            <button
              onClick={() => setShowPricingModal(true)}
              className="flex items-center gap-2 cursor-pointer focus-visible:outline-none"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="text-[14px] font-semibold leading-[22px] text-[#003d88] underline">
                How does pricing work?
              </span>
              <InfoIcon />
            </button>
          </div>

          {/* Klarna banner */}
          <div className="px-3">
            <div className="w-full bg-[#ffe5ec] rounded-[4px] flex items-center gap-3 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/klarnabadge.svg"
                alt="Klarna"
                className="h-[13px] w-[44px] shrink-0"
              />
              <span
                className="text-[12px] leading-5 text-[#07073d]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Klarna now available on Phlo Clinic
              </span>
            </div>
          </div>

          {/* Pharmacist quote card */}
          <div className="px-3">
            <div
              className="w-full bg-[#def4f7] rounded-[8px] flex flex-col gap-3 px-3 py-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-white shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dennis.png"
                    alt="Dennis Ouko"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] leading-3 font-semibold text-[#07073d]">
                    Dennis Ouko GPhC
                  </span>
                  <span className="text-[10px] leading-3 font-semibold text-[#2f345f]">
                    Superintendent Pharmacist
                  </span>
                </div>
              </div>
              <span className="text-[12px] leading-5 text-[#07073d]">
                &ldquo;Some guidance from Dennis about how patients that choose a
                bundle tend to lose my weight than those that choose one pen&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky bottom drawer */}
      <div className="sticky bottom-0 w-full max-w-[480px] mx-auto border-t border-[#e6e7ed] bg-white">
        {/* Total + Savings — hidden until a plan is selected */}
        {selectedPlan && <div className="flex flex-col gap-2 px-5 pt-4">
          <div className="flex items-center justify-between">
            <span
              className="text-[20px] font-semibold leading-7 text-[#07073d]"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Total
            </span>
            <span
              className="text-[20px] font-semibold leading-7 text-[#07073d]"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              {selectedPlan ? `£${selectedPlan.totalPrice}` : "–"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span
              className="text-[14px] leading-[22px] text-[#007d42]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Savings
            </span>
            <span
              className="text-[14px] leading-[22px] text-[#007d42]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {selectedPlan ? `£${selectedPlan.pens.length * 20}` : "–"}
            </span>
          </div>
        </div>}

        {/* Confirm button */}
        <div className="p-5">
          <button
            onClick={() => selectedPlan && onSelect(selectedPlan)}
            disabled={!selectedPlan}
            className={`w-full flex items-center justify-center py-4 px-6 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2 ${
              selectedPlan ? "cursor-pointer opacity-100" : "cursor-default opacity-40"
            }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Confirm
          </button>
        </div>
      </div>

      <PricingModal open={showPricingModal} onClose={() => setShowPricingModal(false)} />
    </div>
  );
}

function PlanCard({
  plan,
  isSelected,
}: {
  plan: TreatmentPlan;
  isSelected: boolean;
}) {
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
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span
                className="text-[14px] font-semibold leading-[22px] text-[#2f345f]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {plan.name}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={plan.icon === "flat" ? "/trending-flat.svg" : "/trending-up.svg"}
                alt=""
                width={20}
                height={20}
              />
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
            <span
              className="text-[12px] leading-5 text-[#575d84]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              £{plan.pricePerPen % 1 === 0 ? plan.pricePerPen : plan.pricePerPen.toFixed(2)} /pen
            </span>
          </div>
        </div>
      </div>

      {/* Bottom dose dots strip */}
      <div className="bg-[#f9f9f9] flex items-center justify-center gap-3 px-5 py-3">
        {plan.pens.map((pen, i) => (
          <div key={i} className="flex flex-col gap-1 items-center">
            <div
              className="w-[10px] h-[10px] rounded-full"
              style={{ backgroundColor: pen.color }}
            />
            <span
              className="text-[10px] leading-3 text-[#575d84]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {pen.dose}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
