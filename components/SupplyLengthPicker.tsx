"use client";

import { useState } from "react";
import type { Product } from "@/types";
import type { SupplyPlan } from "@/data/plans";
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

interface SupplyLengthPickerProps {
  product: Product;
  plans: SupplyPlan[];
  onSelect: (plan: SupplyPlan) => void;
  onChangeProduct?: () => void;
  showProductStrip?: boolean;
}

export default function SupplyLengthPicker({
  product,
  plans,
  onSelect,
  onChangeProduct,
  showProductStrip = false,
}: SupplyLengthPickerProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const selected = selectedIndex !== null ? plans[selectedIndex] : null;

  return (
    <div className="flex flex-col gap-8 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
      {/* Heading */}
      <h1
        className="text-[24px] font-bold leading-8 text-[#07073d]"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        How many months?
      </h1>

      {/* Product context strip */}
      {showProductStrip && (
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
      )}

      {/* Month selector cards */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[20px]">
          {plans.map((plan, i) => (
            <MonthCard
              key={plan.months}
              plan={plan}
              isSelected={i === selectedIndex}
              onClick={() => setSelectedIndex(i)}
            />
          ))}

          {/* How does pricing work? */}
          <div className="flex justify-center">
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

      {/* CTA */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => selected && onSelect(selected)}
          disabled={!selected}
          className={`w-full flex items-center justify-center py-4 px-6 rounded-[360px] font-semibold text-[16px] leading-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2 ${
            selected
              ? "bg-[#07073d] text-white cursor-pointer opacity-100"
              : "bg-[#07073d] text-white cursor-default opacity-40"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {selected ? `See ${selected.months} month plans` : "Continue"}
        </button>
      </div>

      <PricingModal open={showPricingModal} onClose={() => setShowPricingModal(false)} />
    </div>
  );
}

function MonthCard({
  plan,
  isSelected,
  onClick,
}: {
  plan: SupplyPlan;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full flex items-start justify-between px-6 py-4 rounded-[8px] text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 ${
        isSelected
          ? "bg-[#f1f8fc] border-2 border-[#086a74]"
          : "bg-white border border-[#e6e7ed]"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* "Most popular" badge */}
      {plan.recommended && (
        <span className="absolute top-[-13px] right-[24px] bg-[#086a74] text-white text-[12px] font-medium px-2 py-[3px] rounded-[4px] whitespace-nowrap">
          Most popular
        </span>
      )}

      {/* Left: label + subtitle */}
      <div className="flex flex-col gap-1">
        <span
          className={`text-[14px] font-semibold leading-[22px] ${
            isSelected ? "text-[#2f345f]" : "text-[#2f345f]"
          }`}
        >
          {plan.label}
        </span>
        <span className="text-[12px] leading-5 text-[#2f345f]">
          {plan.subtitle}
        </span>
      </div>

      {/* Right: pricing */}
      <div className="flex flex-col items-end shrink-0">
        <span className="text-[10px] leading-3 text-[#2f345f]">from</span>
        <span
          className={`text-[16px] font-semibold leading-6 ${
            isSelected ? "text-[#07073d]" : "text-[#2f345f]"
          }`}
        >
          £{plan.totalPrice}
        </span>
        {plan.pricePerPen && (
          <span className="text-[12px] leading-5 text-[#575d84]">
            £{plan.pricePerPen} /pen
          </span>
        )}
      </div>
    </button>
  );
}
