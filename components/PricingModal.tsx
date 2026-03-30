"use client";

import { useEffect } from "react";

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
}

const doses = [
  { label: "0.25mg", color: "#53C2AB", oneMonth: 149, twoMonth: 139, threeMonth: 129 },
  { label: "0.5mg", color: "#A0486B", oneMonth: 169, twoMonth: 159, threeMonth: 149 },
  { label: "1mg", color: "#AC784C", oneMonth: 189, twoMonth: 179, threeMonth: 169 },
  { label: "1.7mg", color: "#29709A", oneMonth: 209, twoMonth: 199, threeMonth: 189 },
  { label: "2.4mg", color: "#4F5961", oneMonth: 229, twoMonth: 219, threeMonth: 209 },
  { label: "7.2mg", color: "#4F5961", oneMonth: 249, twoMonth: 239, threeMonth: 229 },
];

export default function PricingModal({ open, onClose }: PricingModalProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
    <style>{`
      @keyframes slideUp {
        from { transform: translateY(40px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-[fadeIn_200ms_ease-out]"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="relative w-full max-w-[480px] bg-white rounded-t-[8px] border border-[#e6e7ed] flex flex-col gap-5 pt-6 pb-8 px-5 max-h-[90dvh] overflow-y-auto animate-[slideUp_250ms_ease-out]">
        {/* Header + description */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-[24px] font-semibold leading-8 text-[#07073d]"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            How pricing works
          </h2>
          <p
            className="text-[12px] leading-5 text-[#07073d]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Your monthly dose rises gradually over your plan. Longer supply
            lengths offer a lower price per pen — helping you save as your
            treatment progresses.
          </p>
        </div>

        {/* Pricing table */}
        <div className="border border-[#e6e7ed] rounded-[8px] overflow-clip">
          {/* Table header */}
          <div className="bg-[#07073d] flex gap-[10px] items-center justify-center p-2">
            <div className="flex-1 text-center">
              <span
                className="text-[12px] font-semibold leading-4 text-white"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                Wegovy
              </span>
            </div>
            <div className="flex-1 text-center">
              <span
                className="text-[12px] font-semibold leading-4 text-white"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                1 Month
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[2px] items-center">
              <span
                className="text-[12px] font-semibold leading-4 text-white"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                2 Months
              </span>
              <span
                className="text-[10px] font-medium leading-normal text-[#07073d] bg-gradient-to-br from-[#88F3C4] to-[#e2fbf0] px-[6px] py-[2px] rounded-[4px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Save £10/m
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-[2px] items-center">
              <span
                className="text-[12px] font-semibold leading-4 text-white"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                3 Months
              </span>
              <span
                className="text-[10px] font-medium leading-normal text-[#07073d] bg-gradient-to-br from-[#88F3C4] to-[#e2fbf0] px-[6px] py-[2px] rounded-[4px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Save £20/m
              </span>
            </div>
          </div>

          {/* Table rows */}
          {doses.map((dose, i) => (
            <div
              key={dose.label}
              className={`flex gap-[10px] items-center justify-center h-[50px] p-2 border-b border-[#e6e7ed] last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
              }`}
            >
              {/* Dose badge */}
              <div className="flex-1 flex justify-center">
                <span
                  className="text-[10px] font-medium leading-normal text-white px-[6px] py-[2px] rounded-[4px]"
                  style={{ backgroundColor: dose.color, fontFamily: "var(--font-inter)" }}
                >
                  {dose.label}
                </span>
              </div>

              {/* 1 Month price */}
              <div className="flex-1 text-center">
                <span
                  className="text-[12px] font-semibold leading-4 text-[#07073d]"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  £{dose.oneMonth}
                </span>
              </div>

              {/* 2 Month price */}
              <div className="flex-1 flex flex-col gap-[2px] items-center">
                <span
                  className="text-[10px] leading-3 text-[#989eb5] line-through"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  £{dose.oneMonth}
                </span>
                <span
                  className="text-[12px] font-semibold leading-4 text-[#07073d]"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  £{dose.twoMonth}
                </span>
              </div>

              {/* 3 Month price */}
              <div className="flex-1 flex flex-col gap-[2px] items-center">
                <span
                  className="text-[10px] leading-3 text-[#989eb5] line-through"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  £{dose.oneMonth}
                </span>
                <span
                  className="text-[12px] font-semibold leading-4 text-[#07073d]"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  £{dose.threeMonth}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          className="text-[10px] leading-4 text-[#575d84]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Each pen contains 4 weekly doses (one per week) and lasts 4 weeks.
          Prices shown are per pen per month.
        </p>

        {/* Got it button */}
        <button
          onClick={onClose}
          className="w-full flex items-center justify-center py-4 px-6 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Got it
        </button>
      </div>
    </div>
    </>
  );
}
