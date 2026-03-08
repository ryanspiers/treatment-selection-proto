interface NavBarProps {
  onBack: () => void;
  title: string;
}

export default function NavBar({ onBack, title }: NavBarProps) {
  return (
    <div className="sticky top-0 z-10 bg-white w-full h-[60px] flex items-center px-4 gap-4">
      <button
        onClick={onBack}
        aria-label="Go back"
        className="shrink-0 w-6 h-6 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] rounded"
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
      <span
        className="flex-1 font-semibold text-[16px] leading-6 text-[#07073d]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {title}
      </span>
    </div>
  );
}
