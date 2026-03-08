interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-stone-400 mb-4">
          Skin Quiz
        </p>
        <h1 className="text-4xl font-bold text-stone-900 leading-tight mb-4">
          Find your perfect skincare match
        </h1>
        <p className="text-stone-500 text-base leading-relaxed">
          Answer 4 quick questions and we&rsquo;ll recommend the right product
          for your skin type and concerns.
        </p>
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 rounded-xl bg-stone-800 text-white text-base font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-2"
      >
        Start quiz
      </button>
    </div>
  );
}
