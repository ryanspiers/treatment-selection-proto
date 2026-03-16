"use client";

import { useState } from "react";

interface ConsentScreenProps {
  onAgree: () => void;
}

interface ConsentCard {
  title: string;
  body: string;
  iconBg: string;
  icon: React.ReactNode;
}

interface ConsentGroup {
  tag: string;
  tagBg: string;
  tagText: string;
  cards: ConsentCard[];
}

const consentGroups: ConsentGroup[] = [
  {
    tag: "Your data",
    tagBg: "#e9eefa",
    tagText: "#003d88",
    cards: [
      {
        title: "We will access your medical records",
        body: "Phlo contacting my GP and accessing my Summary Care Record (or other medical records if required) to verify my medical history and medication eligibility, and to inform my GP of any treatment received.",
        iconBg: "#e9eefa",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4.667 1.333h4L12 4.667v9.333a.667.667 0 01-.667.667H4.667A.667.667 0 014 14V2a.667.667 0 01.667-.667z"
              stroke="#003d88"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M6 8h4M6 10.667h4M6 5.333h1.333" stroke="#003d88" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    tag: "Your safety",
    tagBg: "#e2fbf0",
    tagText: "#007d42",
    cards: [
      {
        title: "You understand the risks",
        body: "I confirm I have provided honest and accurate information and my order is subject to clinical approval by the clinical team.",
        iconBg: "#e2fbf0",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1.333l5.333 2.334V7.33c0 3.26-2.276 6.31-5.333 7.337-3.057-1.028-5.333-4.078-5.333-7.337V3.667L8 1.333z"
              stroke="#007d42"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M6 8l1.333 1.333L10 6.667" stroke="#007d42" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Take as directed \u2013 don\u2019t mix doses",
        body: "I confirm that I will read the patient information leaflet, understand the potential risks and side effects and allergies of treatment and agree to discontinue treatment and seek medical attention if severe symptoms occur, and to report all side effects to the Phlo clinical team.\n\nI confirm to take the medicine as directed and follow appropriate storage instructions that come with it.",
        iconBg: "#fef3e0",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="3" y="2.667" width="10" height="10.667" rx="1" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.667 1.333v2.667M5.333 1.333v2.667M3 6.667h10" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10.667" cy="12" r="2.667" fill="white" stroke="#b45309" strokeWidth="1.2" />
            <path d="M10.667 10.667V12h1.333" stroke="#b45309" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    tag: "Transfer patients",
    tagBg: "#def4f7",
    tagText: "#086a74",
    cards: [
      {
        title: "You met previous treatment criteria",
        body: "If transferring to our service, I confirm I previously met criteria for initiation of treatment and I wish to continue as part of my weight loss / maintenance treatment journey.",
        iconBg: "#def4f7",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4.667 1.333h4L12 4.667v9.333a.667.667 0 01-.667.667H4.667A.667.667 0 014 14V2a.667.667 0 01.667-.667z"
              stroke="#086a74"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M6 8h4M6 10.667h4M6 5.333h1.333" stroke="#086a74" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
];

export default function ConsentScreen({ onAgree }: ConsentScreenProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col flex-1 px-4 pt-6 pb-8 overflow-y-auto max-w-[480px] mx-auto w-full">
      {/* Heading */}
      <h2
        className="text-[24px] font-semibold leading-8 text-[#07073d] mb-3"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        Before we continue
      </h2>
      <p
        className="text-[14px] leading-[22px] text-[#2f345f] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Please review these 4 short points. They exist to protect you and ensure
        we&rsquo;re providing your treatment safely.
      </p>

      {/* Consent groups */}
      <div className="flex flex-col gap-6">
        {consentGroups.map((group) => (
          <div key={group.tag} className="flex flex-col gap-3">
            {/* Category tag */}
            <span
              className="self-start text-[12px] font-medium leading-normal px-2 py-[3px] rounded"
              style={{
                fontFamily: "var(--font-inter)",
                backgroundColor: group.tagBg,
                color: group.tagText,
              }}
            >
              {group.tag}
            </span>

            {/* Cards */}
            {group.cards.map((card) => {
              const key = `${group.tag}-${card.title}`;
              const isExpanded = expanded[key] ?? false;

              return (
                <div
                  key={key}
                  className="bg-white border border-[#e6e7ed] rounded-[8px] p-4 flex gap-4 items-start"
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    {card.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col gap-2">
                    <h3
                      className="text-[14px] font-semibold leading-[22px] text-[#07073d]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-[12px] leading-5 text-[#2f345f] whitespace-pre-wrap ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {card.body}
                    </p>
                    <button
                      onClick={() => toggleExpand(key)}
                      className="self-start flex items-center gap-2 text-[14px] font-semibold leading-[22px] text-[#086a74] cursor-pointer focus-visible:outline-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {isExpanded ? "Less details" : "Full details"}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#086a74"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e6e7ed] my-6" />

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
