import type { Choice } from "@/types";

interface ChoiceButtonProps {
  choice: Choice;
  isSelected: boolean;
  onClick: () => void;
}

export default function ChoiceButton({
  choice,
  isSelected,
  onClick,
}: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`w-full flex items-center gap-4 px-4 py-5 rounded text-left cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#086a74] focus-visible:ring-offset-2
        ${
          isSelected
            ? "bg-[#f1f8fc] border-2 border-[#086a74]"
            : "bg-white border border-[#e6e7ed]"
        }`}
    >
      {/* Radio circle */}
      <div
        className={`shrink-0 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center
          ${isSelected ? "border-[#086a74]" : "border-[#d0d0d0]"}`}
      >
        {isSelected && (
          <div className="w-[8px] h-[8px] rounded-full bg-[#086a74]" />
        )}
      </div>

      {/* Label */}
      <span
        className="flex-1 font-semibold text-[16px] leading-6 text-[#07073d]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {choice.label}
      </span>
    </button>
  );
}
