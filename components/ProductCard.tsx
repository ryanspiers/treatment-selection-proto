"use client";

import { useState } from "react";
import type { Product } from "@/types";
import HeroProductCard from "@/components/HeroProductCard";

const faqs = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Your prescriber will recommend a treatment based on your medical history, current medications, and weight loss goals. The consultation process ensures the treatment is safe and suitable for you.",
  },
  {
    question: "What is the difference between an injection and a pill?",
    answer:
      "Injectable treatments like Wegovy and Mounjaro are taken once weekly via a pre-filled pen. Oral treatments like Wegovy Pill and Orfoglipron are taken daily as a tablet. Both are clinically proven to support weight loss, but some people prefer one method over the other.",
  },
  {
    question: "Can I switch treatments later?",
    answer:
      "Yes, you can switch treatments at any time. If your current treatment isn't working well for you or you experience side effects, your prescriber can help you transition to an alternative option.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most patients begin to see noticeable weight loss within the first 4–8 weeks. Results vary depending on the treatment, dosage, and how closely you follow the recommended diet and exercise plan.",
  },
  {
    question: "Are there any common side effects?",
    answer:
      "The most common side effects include nausea, reduced appetite, and mild digestive discomfort. These typically improve as your body adjusts to the medication over the first few weeks.",
  },
];

interface ProductCardProps {
  product: Product;
  alternatives: Product[];
  onSelect: (product: Product) => void;
}


export default function ProductCard({
  product,
  alternatives,
  onSelect,
}: ProductCardProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(index: number) {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <div className="flex flex-col gap-5 max-w-[480px] mx-auto w-full px-5 py-5 bg-white">
      {/* Heading */}
      <h1
        className="text-[24px] font-bold leading-8 text-[#07073d]"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Choose your treatment
      </h1>

      {/* Hero product card */}
      <div className="flex flex-col gap-5">
        <HeroProductCard product={product} />

        {/* Pricing */}
        <div
          className="flex flex-col items-center gap-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <div className="flex flex-col items-center gap-[2px]">
            <span className="text-[16px] text-[#01011a]">
              <span className="font-semibold">from £{product.price}</span> per pen
            </span>
            <span className="text-[12px] leading-5 text-[#07073d]">
              As part of a 3-month plan
            </span>
          </div>
          <div
            className="flex items-center justify-center gap-1"
          >
            <span className="text-[10px] leading-3 text-[#575d84]">Pay with</span>
{/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/klarnabadge.svg" alt="Klarna" width={44} height={13} />
            <span className="text-[10px] leading-3 text-[#575d84]">available</span>
          </div>
        </div>

        {/* CTA + fine print */}
        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={() => onSelect(product)}
            className="w-full flex items-center justify-center py-4 pl-6 pr-4 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Continue with {product.name}
          </button>
          <span
            className="text-[10px] leading-3 text-[#575d84] text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Per pen prices decreases with longer plans
          </span>
        </div>
      </div>

      {/* Other treatments section */}
      {alternatives.length > 0 && (
        <div className="w-full pb-[74px] mt-3">
          {/* Header */}
          <div
            className="flex items-center gap-2 h-[114px] mb-[-74px] px-3 py-3 rounded-t-[8px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #F1F8FC, white)",
              fontFamily: "var(--font-inter)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 self-start mt-0.5">
              <circle cx="8" cy="8" r="7" fill="#07073d" />
              <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] font-semibold leading-3 text-[#575d84] self-start mt-1">
              You&rsquo;re also eligible for
            </span>
          </div>

          {/* Alt cards */}
          <div className="flex flex-col gap-3 px-2 relative">
            {alternatives.map((alt) => (
              <button
                key={alt.id}
                onClick={() => onSelect(alt)}
                className="w-full h-[96px] border border-[#e6e7ed] rounded-[8px] overflow-hidden flex items-start cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
                style={{
                  backgroundImage: `linear-gradient(88deg, ${alt.gradientFrom || "rgb(220,242,255)"} 1%, white 33%)`,
                }}
              >
                {/* Image area */}
                <div className="shrink-0 w-[80px] h-full flex items-center justify-center overflow-hidden">
                  {alt.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={alt.imageUrl}
                      alt={alt.name}
                      className="object-contain"
                      style={{ height: `${alt.imageScale ?? 100}%` }}
                    />
                  ) : (
                    <div className="w-8 h-16 rounded-full bg-white/60 border border-[#e6e7ed]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center gap-1 px-3 py-5 self-stretch">
                  <div className="flex-1 flex flex-col">
                    <span
                      className="text-[14px] font-semibold leading-[22px] text-[#07073d]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {alt.name}
                    </span>
                    <span
                      className="text-[12px] leading-5 text-[#2f345f]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <span className="font-semibold text-[#07073d]">from £149</span> per pen
                    </span>
                    <span
                      className="text-[10px] leading-3 text-[#575d84]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      1, 2 and 3 month plans
                    </span>
                  </div>

                  {/* Chevron */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="#07073d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* FAQs */}
      <div className="w-full flex flex-col gap-0 mt-3">
        <h2
          className="text-[18px] font-bold leading-6 text-[#07073d] mb-3"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Frequently asked questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#e6e7ed]">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between py-4 text-left cursor-pointer focus-visible:outline-none"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="text-[14px] font-semibold text-[#07073d] pr-4">
                {faq.question}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#07073d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {openFaq === index && (
              <p
                className="text-[13px] leading-5 text-[#575d84] pb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
