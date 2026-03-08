import type { Question } from "@/types";

export const questions: Question[] = [
  {
    id: "q1",
    step: 1,
    text: "How does your skin usually feel by midday?",
    subtext: "Think about a typical day without extra products.",
    choices: [
      { id: "oily", label: "Shiny and oily", tag: "oily" },
      { id: "dry", label: "Tight and dry", tag: "dry" },
      { id: "combination", label: "Oily in some areas, dry in others", tag: "combination" },
      { id: "normal", label: "Comfortable and balanced", tag: "normal" },
    ],
  },
  {
    id: "q2",
    step: 2,
    text: "What is your primary skin concern?",
    choices: [
      { id: "acne", label: "Breakouts and blemishes", tag: "acne" },
      { id: "ageing", label: "Fine lines and loss of firmness", tag: "ageing" },
      { id: "sensitivity", label: "Redness and sensitivity", tag: "sensitivity" },
      { id: "dullness", label: "Dull, uneven skin tone", tag: "dullness" },
    ],
  },
  {
    id: "q3",
    step: 3,
    text: "How does your skin typically react to new products?",
    choices: [
      { id: "reactive", label: "Often reacts — redness or irritation", tag: "reactive" },
      { id: "tolerant", label: "Handles most things well", tag: "tolerant" },
      { id: "unpredictable", label: "Hard to say — it varies", tag: "unpredictable" },
    ],
  },
  {
    id: "q4",
    step: 4,
    text: "What does your current skincare routine look like?",
    choices: [
      { id: "minimal", label: "Minimal — just the basics", tag: "minimal" },
      { id: "moderate", label: "A few targeted products", tag: "moderate" },
      { id: "extensive", label: "Full multi-step routine", tag: "extensive" },
    ],
  },
];

export const totalSteps = questions.length;
