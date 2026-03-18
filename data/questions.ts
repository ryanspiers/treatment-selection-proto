import type { Question } from "@/types";

export const questions: Question[] = [
  {
    id: "q1",
    step: 1,
    text: "This is just an example question?",
    subtext: "We can also have some sub text here too",
    choices: [
      { id: "oily", label: "Answer 1", tag: "oily" },
      { id: "dry", label: "Answer 2", tag: "dry" },
      { id: "combination", label: "Answer 3", tag: "combination" },
      { id: "normal", label: "Answer 4", tag: "normal" },
    ],
  },
];

export const totalSteps = questions.length;
