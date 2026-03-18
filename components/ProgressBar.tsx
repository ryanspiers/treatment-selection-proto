interface ProgressBarProps {
  current: number;
  total: number;
  onBack?: () => void;
  onForward?: () => void;
}

export default function ProgressBar({ current, total, onBack, onForward }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="w-full px-5 py-8 bg-white">
      <div className="max-w-[480px] mx-auto flex items-center gap-3">
        {/* Back arrow */}
        <button
          onClick={onBack}
          disabled={!onBack}
          className="shrink-0 w-6 h-6 flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-default focus-visible:outline-none"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="#07073d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Progress bar */}
        <div className="flex-1 h-[4px] bg-[#e6e7ed] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#086a74] rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Forward arrow */}
        <button
          onClick={onForward}
          disabled={!onForward}
          className="shrink-0 w-6 h-6 flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-default focus-visible:outline-none"
          aria-label="Go forward"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="#07073d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
