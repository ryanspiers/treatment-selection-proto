"use client";

import { useState } from "react";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col flex-1 justify-center gap-8 px-4 pb-8 max-w-[480px] mx-auto w-full">
      {/* Heading */}
      <div className="flex flex-col gap-2 text-center">
        <h1
          className="text-[28px] font-semibold leading-9 text-[#07073d]"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Let&rsquo;s get started
        </h1>
        <p
          className="text-[16px] leading-6 text-[#2f345f]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Enter your email to start the consultation
        </p>
      </div>

      {/* Input + T&C + CTA */}
      <div className="flex flex-col gap-4">
        {/* Floating label email input */}
        <div className="relative w-full">
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            className="w-full h-[48px] border border-[#086a74] rounded px-3 text-[16px] text-[#07073d] bg-white focus:outline-none focus:ring-2 focus:ring-[#086a74] focus:ring-offset-0"
            style={{ fontFamily: "var(--font-inter)" }}
          />
          <label
            htmlFor="email"
            className="absolute -top-[11px] left-3 bg-white px-1 text-[12px] leading-5 text-[#086a74]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Email address
          </label>
        </div>

        {/* T&C */}
        <p
          className="text-[12px] leading-[18px] text-[#2f345f] text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          By proceeding, you agree to Phlo Clinic&rsquo;s{" "}
          <span className="font-semibold text-[#086a74]">Terms &amp; Conditions</span>
          {" "}and{" "}
          <span className="font-semibold text-[#086a74]">Privacy Policy</span>
        </p>

        {/* Get started button */}
        <button
          onClick={onStart}
          disabled={email.trim() === ""}
          className="w-full flex items-center justify-center gap-2 py-4 pl-6 pr-4 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Get started
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="w-[120px] h-px bg-[#e6e7ed] mx-auto" />

      {/* Returning user section */}
      <div className="flex flex-col gap-6">
        <div className="bg-[#e9eefa] rounded-[8px] flex items-center justify-between px-3 py-3">
          <span
            className="font-semibold text-[16px] leading-6 text-[#07073d]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ordered with us before?
          </span>
          <button
            className="bg-white border border-[#07073d] rounded-[40px] px-6 py-3 font-semibold text-[16px] leading-4 text-[#07073d] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Log in
          </button>
        </div>

        <button
          className="text-[#086a74] underline font-semibold text-[16px] leading-4 text-center cursor-pointer focus-visible:outline-none w-full"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Forgotten password?
        </button>
      </div>
    </div>
  );
}
