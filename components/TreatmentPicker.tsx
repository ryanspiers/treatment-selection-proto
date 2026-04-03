"use client";

import { useState } from "react";
import type { Product } from "@/types";
import type { DoseOption } from "@/data/plans";

interface TreatmentPickerProps {
  treatments: Product[];
  doseOptions: Record<string, DoseOption[]>;
  onSelect: (product: Product) => void;
}

export default function TreatmentPicker({
  treatments,
  doseOptions,
  onSelect,
}: TreatmentPickerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = treatments.find((t) => t.id === selectedId) ?? null;

  return (
    <div className="flex flex-col min-h-[calc(100dvh-60px)]">
      {/* Scrollable content */}
      <div className="flex-1 flex flex-col gap-5 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1
            className="text-[24px] font-bold leading-8 text-[#07073d]"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            Choose my treatment
          </h1>
          <p
            className="text-[14px] leading-[22px] text-[#2f345f]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            If approved, our prescribing pharmacists can provide clinically
            effective treatments.
          </p>
        </div>

        {/* Treatment cards */}
        <div className="flex flex-col gap-5">
          {treatments.map((treatment) => (
            <button
              key={treatment.id}
              onClick={() => setSelectedId(treatment.id)}
              className={`w-full flex items-center h-[120px] rounded-[8px] overflow-clip text-left cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2 ${
                treatment.id === selectedId
                  ? "bg-[#f1f8fc] border-2 border-[#086a74]"
                  : "bg-white border border-[#e6e7ed]"
              }`}
            >
              {/* Image area */}
              <CardImage productId={treatment.id} />

              {/* Right content */}
              <div
                className="flex-1 flex flex-col gap-2 justify-center px-3 py-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {/* Discount tag */}
                <span className="inline-flex items-center gap-0.5 self-start bg-[#e2fbf0] border border-[#007d42] rounded px-1.5 py-0.5 text-[10px] font-medium text-[#007d42] leading-normal">
                  Discount applied
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 0.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm-0.667 5L1.667 4l.467-.467L3.333 4.73l2.533-2.533.467.47-3 3Z"
                      fill="#007d42"
                    />
                  </svg>
                </span>

                {/* Treatment name */}
                <span className="text-[16px] font-semibold leading-6 text-[#07073d]">
                  {treatment.name}
                </span>

                {/* Price */}
                <span className="text-[12px] leading-5 text-[#07073d]">
                  Starting from{" "}
                  <span className="font-bold">
                    £{Math.min(
                      ...(doseOptions[treatment.id] ?? []).map((o) => o.price)
                    )}
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e6e7ed]" />

        {/* Payment security section */}
        <PaymentSecuritySection />
      </div>

      {/* Sticky bottom button */}
      <div className="sticky bottom-0 w-full max-w-[480px] mx-auto bg-white p-5">
        <button
          onClick={() => selected && onSelect(selected)}
          disabled={!selected}
          className={`w-full flex items-center justify-center py-4 px-6 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2 ${
            selected ? "cursor-pointer opacity-100" : "cursor-default opacity-40"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const cardImages: Record<string, string> = {
  "wegovy-pen": "/wegovycard.png",
  "mounjaro-kwikpen": "/mjcard.png",
};

function CardImage({ productId }: { productId: string }) {
  const src = cardImages[productId] ?? "/wegovycard.png";
  return (
    <div className="w-[94px] h-[120px] shrink-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
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
