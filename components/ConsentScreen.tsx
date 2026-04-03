"use client";

interface ConsentScreenProps {
  onAgree: () => void;
}

export default function ConsentScreen({ onAgree }: ConsentScreenProps) {
  return (
    <div className="flex flex-col flex-1 px-4 pt-6 pb-8 overflow-y-auto max-w-[480px] mx-auto w-full">
      {/* Heading */}
      <h2
        className="text-[24px] font-semibold leading-8 text-[#07073d] mb-4"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Clinical consent
      </h2>

      {/* Intro + bullet points */}
      <div
        className="flex flex-col gap-4 text-[16px] leading-6 text-[#07073d] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <p>I understand and agree to the following:</p>

        <ul className="flex flex-col gap-2 list-disc pl-6">
          <li>
            I consent to Phlo contacting my GP and accessing my{" "}
            <span className="font-semibold text-[#086a74] underline">
              Summary Care Record
            </span>{" "}
            (or other medical records if required) to verify my medical history
            and medication eligibility, and to inform my GP of any treatment
            received
          </li>
          <li>
            I confirm I have provided honest and accurate information and my
            order is subject to clinical approval by the clinical team.
          </li>
          <li>
            I confirm that I will read the patient information leaflet,
            understand the potential risks and side effects and allergies of
            treatment and agree to discontinue treatment and seek medical
            attention if severe symptoms occur, and to report all side effects to
            the Phlo clinical team.
          </li>
          <li>
            I confirm to take the medicine as directed and follow appropriate
            storage instructions that come with it.
          </li>
          <li>
            I confirm not to combine doses and / or formulations (taking an extra
            strength or mixing different strengths to reach a different weekly
            dose than prescribed). Combining doses can cause dangerous dosing
            errors which can increase risk of side effects and is not licensed or
            recommended.
          </li>
          <li>
            If transferring to our service, I confirm I previously met criteria
            for initiation of treatment and I wish to continue as part of my
            weight loss / maintenance treatment journey.
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e6e7ed] mb-6" />

      {/* Footer + CTA */}
      <div className="flex flex-col items-center gap-5">
        <p
          className="text-[14px] leading-[22px] text-[#07073d] text-center max-w-[320px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          By selecting &lsquo;<strong>Agree and continue</strong>&rsquo; you
          acknowledge that you have read, understood and agree to all of the
          above.
        </p>

        <button
          onClick={onAgree}
          className="w-full flex items-center justify-center gap-2 py-4 pl-6 pr-4 rounded-[360px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Agree and continue
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
    </div>
  );
}
