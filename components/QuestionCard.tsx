import type { Question, Choice } from "@/types";
import ChoiceButton from "./ChoiceButton";

interface QuestionCardProps {
  question: Question;
  selectedChoiceTag: string | null;
  onSelect: (choice: Choice) => void;
  onNext: () => void;
  isLast: boolean;
}

export default function QuestionCard({
  question,
  selectedChoiceTag,
  onSelect,
  onNext,
  isLast,
}: QuestionCardProps) {
  return (
    <div className="flex flex-col flex-1 px-4 pt-6 pb-8 max-w-[480px] mx-auto w-full">
      {/* Question text */}
      <h2
        className="text-[24px] font-semibold leading-8 text-[#07073d] mb-6"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        {question.text}
      </h2>

      {/* Answer choices */}
      <div className="flex flex-col gap-3 flex-1">
        {question.choices.map((choice) => (
          <ChoiceButton
            key={choice.id}
            choice={choice}
            isSelected={selectedChoiceTag === choice.tag}
            onClick={() => onSelect(choice)}
          />
        ))}
      </div>

      {/* CTA button — sticky to bottom of viewport */}
      <div className="sticky bottom-0 pt-4 pb-0 bg-[#f9f9f9]">
        <button
          onClick={onNext}
          disabled={!selectedChoiceTag}
          className="w-full py-4 px-6 rounded-[40px] bg-[#07073d] text-white font-semibold text-[16px] leading-4 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07073d] focus-visible:ring-offset-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {isLast ? "See my recommendation" : "Continue"}
        </button>
      </div>
    </div>
  );
}
