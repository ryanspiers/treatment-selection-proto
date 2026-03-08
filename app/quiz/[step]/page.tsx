"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions, totalSteps } from "@/data/questions";
import { useQuiz } from "@/context/QuizContext";
import NavBar from "@/components/NavBar";
import QuestionCard from "@/components/QuestionCard";
import type { Choice } from "@/types";

export default function QuizStepPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step: stepParam } = use(params);
  const router = useRouter();
  const { answers, setAnswer } = useQuiz();

  const stepNumber = parseInt(stepParam, 10);

  // Guard: redirect if step is out of range
  useEffect(() => {
    if (isNaN(stepNumber) || stepNumber < 1 || stepNumber > totalSteps) {
      router.replace("/quiz/1");
    }
  }, [stepNumber, router]);

  const question = questions[stepNumber - 1];
  const [selected, setSelected] = useState<Choice | null>(null);

  // Restore previously selected choice when navigating back
  useEffect(() => {
    if (!question) return;
    const savedTag = answers[question.id];
    if (savedTag) {
      const match = question.choices.find((c) => c.tag === savedTag) ?? null;
      setSelected(match);
    } else {
      setSelected(null);
    }
  }, [question, answers]);

  if (!question) return null;

  function handleBack() {
    if (stepNumber <= 1) {
      router.push("/");
    } else {
      router.back();
    }
  }

  function handleNext() {
    if (!selected) return;
    setAnswer(question.id, selected.tag);

    if (stepNumber === totalSteps) {
      router.push("/consent");
    } else {
      router.push(`/quiz/${stepNumber + 1}`);
    }
  }

  return (
    <>
      <NavBar title={`Step ${stepNumber} of ${totalSteps}`} onBack={handleBack} />
      <QuestionCard
        question={question}
        selectedChoiceTag={selected?.tag ?? null}
        onSelect={setSelected}
        onNext={handleNext}
        isLast={stepNumber === totalSteps}
      />
    </>
  );
}
