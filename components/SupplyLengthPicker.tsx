"use client";

import { useState } from "react";
import type { Product } from "@/types";
import type { SupplyPlan } from "@/data/plans";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected = selectedIndex !== null ? plans[selectedIndex] : null;

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

      {/* Month selector cards */}
      <div
        className="flex flex-col gap-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <span className="text-[12px] leading-5 text-[#2f345f]">
          Number of months supply
        </span>
        <div className="flex flex-col gap-4">
          {plans.map((plan, i) => (
            <MonthCard
              key={plan.months}
              plan={plan}
              isSelected={i === selectedIndex}
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2 items-center">
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
  const textColor = plan.muted ? "text-[#575d84]" : "text-[#2f345f]";
  const priceColor = plan.muted ? "text-[#575d84]" : "text-[#07073d]";

  return (
    <button
      onClick={onClick}
      className={`w-full flex flex-col gap-3 px-5 py-4 rounded-[8px] text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 ${
        isSelected
          ? "bg-[#f1f8fc] border-2 border-[#086a74]"
          : plan.muted
            ? "bg-[#f9f9f9] border border-[#e6e7ed]"
            : "bg-white border border-[#e6e7ed]"
      }`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Top row: label + pricing */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className={`text-[14px] font-semibold leading-[22px] ${textColor}`}>
            {plan.label}
          </span>
          <span className={`text-[12px] leading-5 ${textColor}`}>
            {plan.subtitle}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-end">
            <span className={`text-[10px] leading-3 ${textColor}`}>from</span>
            <span className={`text-[16px] font-semibold leading-6 ${priceColor}`}>
              £{plan.totalPrice}
            </span>
          </div>
          {plan.pricePerPen && (
            <span className="text-[12px] leading-5 text-[#575d84]">
              £{plan.pricePerPen} /pen
            </span>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e6e7ed]" />

      {/* Badge */}
      {plan.badge && (
        <span
          className={`self-start inline-flex items-center gap-1 text-[12px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${
            plan.badge.type === "success"
              ? "bg-[#e2fbf0] text-[#007d42]"
              : "bg-[#e9eefa] text-[#003d88]"
          }`}
        >
          {plan.badge.text}
        </span>
      )}

      {/* Bullet points */}
      <ul className={`list-disc ml-[18px] text-[12px] leading-5 ${plan.muted ? "text-[#575d84]" : textColor}`}>
        {plan.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </button>
  );
}
