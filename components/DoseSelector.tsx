"use client";

import { useState } from "react";
import type { Product } from "@/types";
import type { DoseOption } from "@/data/plans";

interface DoseSelectorProps {
  product: Product;
  options: DoseOption[];
  onConfirm: (option: DoseOption) => void;
  onChangeTreatment: () => void;
}

export default function DoseSelector({
  product,
  options,
  onConfirm,
  onChangeTreatment,
}: DoseSelectorProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const selected = options.find((o) => o.id === selectedId) ?? null;
  const hasExtras = options.some((o) => o.extraOption);
  const visibleOptions = showAll
    ? options
    : options.filter((o) => !o.extraOption);

  return (
    <div className="flex flex-col min-h-[calc(100dvh-60px)]">
      {/* Scrollable content */}
      <div className="flex-1 flex flex-col gap-7 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
        {/* Header + options */}
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-5 w-full">
            {/* Title */}
            <h1
              className="text-[24px] font-bold leading-8 text-[#07073d]"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Choose my treatment
            </h1>

            {/* Options panel */}
            <div className="bg-[#f9f9f9] rounded-[8px] p-4 flex flex-col gap-5">
              {/* Product name + pen image */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[14px] font-semibold leading-[22px] text-[#07073d]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {product.name}
                </span>
                <div className="w-[95px] h-[18px] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="h-[95px] w-auto object-contain"
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </div>
              </div>

              {/* See all options CTA */}
              {hasExtras && (
                <div className="flex justify-end">
                  {showAll ? (
                    <span
                      className="text-[16px] font-semibold leading-4 text-[#086a74]/40 underline"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      See all options
                    </span>
                  ) : (
                    <button
                      onClick={() => setShowAll(true)}
                      className="text-[16px] font-semibold leading-4 text-[#086a74] underline cursor-pointer focus-visible:outline-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      See all options
                    </button>
                  )}
                </div>
              )}

              {/* Dose cards */}
              <div className="flex flex-col gap-3">
                {visibleOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedId(option.id)}
                    className={`w-full flex items-center h-[76px] rounded-[8px] overflow-clip text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 ${
                      option.id === selectedId
                        ? "ring-2 ring-[#086a74]"
                        : ""
                    }`}
                  >
                    {/* Colour tag */}
                    <ColorTag colors={option.colors} />

                    {/* Main content */}
                    <div
                      className={`flex-1 flex items-center gap-4 h-full p-4 border border-l-0 border-[#e6e7ed] rounded-r-[8px] ${
                        option.id === selectedId ? "bg-[#f1f8fc]" : "bg-white"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {/* Left: dose + supply info */}
                      <div className="flex-1 flex flex-col gap-0.5">
                        <span className="text-[14px] font-semibold leading-[22px] text-[#07073d]">
                          {option.label}
                          {option.packSize && (
                            <span className="font-normal">
                              {" "}
                              ({option.packSize} pack)
                            </span>
                          )}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] leading-3 text-[#2f345f]">
                            {option.months} month{option.months > 1 ? "s" : ""}{" "}
                            supply
                          </span>
                          {option.badge && (
                            <span className="inline-flex items-center bg-[#e2fbf0] border border-[#007d42] rounded px-1.5 py-0.5 text-[10px] font-medium text-[#007d42] leading-normal">
                              {option.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right: price + savings */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-[14px] leading-6 text-[#07073d]">
                          £{option.price.toFixed(2)}
                        </span>
                        {option.originalPrice && (
                          <span className="text-[12px] leading-5 text-[#989eb5] line-through">
                            £{option.originalPrice.toFixed(2)}
                          </span>
                        )}
                        {option.savingsText && (
                          <span className="inline-flex items-center gap-1 text-[10px] leading-3 text-[#007d42]">
                            {option.savingsText}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.5 3.5h-2v1h2c.28 0 .5.22.5.5s-.22.5-.5.5h-1v-1H4.5v1H4v1h.5v1h-1v1h1v.5h1v-.5h2v-1h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1v1h1v-1h.5v-1H7v-1h1v-1H7v-.5h-1v.5H6Z" fill="#007d42"/>
                              <path d="M6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z" fill="#007d42"/>
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Change treatment link */}
          <button
            onClick={onChangeTreatment}
            className="text-[16px] font-semibold leading-6 text-[#086a74] underline cursor-pointer focus-visible:outline-none py-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Change my treatment preference
          </button>
        </div>

        {/* Divider + payment section */}
        <div className="flex flex-col gap-7">
          <div className="w-full h-px bg-[#e6e7ed]" />
          <PaymentSecuritySection />
        </div>
      </div>

      {/* Sticky bottom drawer */}
      <div className="sticky bottom-0 w-full max-w-[480px] mx-auto border-t border-[#e6e7ed] bg-white">
        {/* Total + Savings */}
        <div className="flex flex-col gap-2 px-5 pt-4">
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
              {selected ? `£${selected.price.toFixed(2)}` : "–"}
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
              {selected && selected.originalPrice
                ? `£${(selected.originalPrice - selected.price).toFixed(2)}`
                : "–"}
            </span>
          </div>
        </div>

        {/* Confirm button */}
        <div className="p-5">
          <button
            onClick={() => selected && onConfirm(selected)}
            disabled={!selected}
            className={`w-full flex items-center justify-center py-4 px-6 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2 ${
              selected
                ? "cursor-pointer opacity-100"
                : "cursor-default opacity-40"
            }`}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

function ColorTag({ colors }: { colors: string[] }) {
  if (colors.length === 1) {
    return (
      <div className="w-2 h-full shrink-0" style={{ backgroundColor: colors[0] }} />
    );
  }
  return (
    <div className="w-2 h-full shrink-0 flex flex-col">
      {colors.map((color, i) => (
        <div key={i} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

function PaymentSecuritySection() {
  return (
    <div
      className="bg-[#f9f9f9] rounded-[8px] flex flex-col gap-3 items-center px-3 py-4"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Shield + text */}
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/shield-icon.svg" alt="" width={16} height={16} />
        <span className="text-[12px] leading-5 text-[#07073d]">
          All payments are secure and encrypted
        </span>
      </div>

      {/* Payment provider icons */}
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/apple pay.svg" alt="Apple Pay" width={32} height={32} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/google pay.svg" alt="Google Pay" width={32} height={32} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/visa.svg" alt="Visa" width={32} height={32} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mastercard.svg" alt="Mastercard" width={32} height={32} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/amex.svg" alt="Amex" width={32} height={32} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/maestro.svg" alt="Maestro" width={32} height={32} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/klarnabadge.svg" alt="Klarna" className="h-[13px] w-[44px]" />
      </div>

      {/* Klarna banner */}
      <div className="w-full bg-[#ffe5ec] rounded flex items-center gap-3 p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/klarnabadge.svg"
          alt="Klarna"
          className="h-[13px] w-[44px] shrink-0"
        />
        <span className="text-[12px] leading-5 text-[#07073d]">
          Pay with Klarna available on bundles
        </span>
      </div>
    </div>
  );
}
