interface NavBarProps {
  onBack: () => void;
  progress?: number; // 0–1
}

export default function NavBar({ onBack, progress }: NavBarProps) {
  return (
    <div className="sticky top-0 z-10 bg-white w-full">
      <div className="max-w-[480px] mx-auto h-[56px] flex items-center px-4 relative">
        <button
          onClick={onBack}
          aria-label="Go back"
          className="shrink-0 w-6 h-6 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] rounded z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#086a74"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Centred logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/phlo-icon.svg" alt="" width={24} height={23} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/phlo-wordmark.svg" alt="Phlo Clinic" width={86} height={19} />
        </div>
      </div>
      {/* Progress bar */}
      {progress !== undefined && (
        <div className="flex w-full">
          <div
            className="h-1 bg-[#07073d] transition-all duration-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
          <div className="flex-1 h-1 bg-[#def4f7]" />
        </div>
      )}
    </div>
  );
}
