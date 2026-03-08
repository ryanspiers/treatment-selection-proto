"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { QuizState } from "@/types";

interface QuizContextValue extends QuizState {
  setAnswer: (questionId: string, tag: string) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextValue | null>(null);

const STORAGE_KEY = "quiz-answers";

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Restore from sessionStorage on mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) setAnswers(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  // Mirror to sessionStorage on every change
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      // ignore
    }
  }, [answers]);

  function setAnswer(questionId: string, tag: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: tag }));
  }

  function resetQuiz() {
    setAnswers({});
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  return (
    <QuizContext.Provider value={{ answers, setAnswer, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz(): QuizContextValue {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used inside <QuizProvider>");
  return ctx;
}
