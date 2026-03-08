interface ConsentScreenProps {
  onAgree: () => void;
}

export default function ConsentScreen({ onAgree }: ConsentScreenProps) {
  return (
    <div className="flex flex-col flex-1 px-4 pt-6 pb-8 overflow-y-auto">
      {/* Heading */}
      <h2
        className="text-[24px] font-semibold leading-8 text-[#07073d] mb-3"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Clinical consent
      </h2>

      <p
        className="text-[16px] leading-6 text-[#07073d] mb-4"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        I understand and agree to the following:
      </p>

      {/* Consent items */}
      <ul
        className="list-disc pl-5 flex flex-col gap-4 text-[16px] leading-6 text-[#07073d] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <li>
          I consent for Phlo contacting my GP to verify the information provided
          and to <strong>inform them of any treatment received.</strong>
        </li>
        <li>I am aged between 18–85.</li>
        <li>
          I consent to Phlo accessing my{" "}
          <a
            href="https://digital.nhs.uk/services/summary-care-records-scr/summary-care-records-scr-information-for-patients"
            className="text-[#086a74] underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Summary Care Record
          </a>{" "}
          to verify my medical history and medication eligibility. If I
          don&apos;t have a Summary Care Record I will be required to contact my
          GP and provide a copy of my medical record.
        </li>
        <li>
          I confirm I will read the patient information leaflet provided with the
          medicine which includes more information including side effects. I
          understand increasing the dose of my medicine may result in side
          effects like vomiting, diarrhoea or constipation. Rarely, hospital
          treatment is needed for side effects. I agree to report all side
          effects to Phlo Clinical Team.
        </li>
        <li>
          I understand that there is a risk of allergic reaction or side effects
          with weight loss medication and that I should seek medical attention
          and discontinue the treatment if I experience severe symptoms.
        </li>
        <li>
          I understand I will stop using the treatment if I experience{" "}
          <strong>prolonged stomach pain or a sustained increase in heart rate</strong>.
        </li>
        <li>
          I confirm I will follow all storage instructions that come with the
          medicine.
        </li>
        <li>
          I confirm not to combine doses (taking an extra strength or mixing
          different strengths to reach a higher weekly dose) and will only use
          the pen prescribed by Phlo. Combining doses can cause dangerous dosing
          errors which can increase risk of side effects and is not licensed or
          recommended.
        </li>
        <li>
          I understand that if I am switching between weight loss injectable
          medications, I must stop my old medication and wait{" "}
          <strong>at least 10 days</strong> before starting the new medication.
          This &lsquo;washout&rsquo; period is required to reduce the risk of
          side effects or interactions between treatments.
        </li>
        <li>
          I confirm I understand my order is subject to clinical approval by the
          Phlo Clinical Team, and I have provided honest and accurate information
          throughout.
        </li>
      </ul>

      {/* Divider */}
      <div className="w-full h-px bg-[#e6e7ed] mb-5" />

      {/* Footer + CTA */}
      <div className="flex flex-col items-center gap-5">
        <p
          className="text-[14px] leading-[22px] text-[#07073d] text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          By selecting &lsquo;<strong>Agree and continue</strong>&rsquo; you
          acknowledge that you have read, understood and agree to all of the
          above.
        </p>

        <button
          onClick={onAgree}
          className="w-full flex items-center justify-center gap-2 py-4 pl-6 pr-4 rounded-[40px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
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
