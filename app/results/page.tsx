"use client";

import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { products } from "@/data/products";
import { getRecommendation } from "@/lib/recommendation";
import ProductCard from "@/components/ProductCard";

export default function ResultsPage() {
  const router = useRouter();
  const { answers, resetQuiz } = useQuiz();

  const recommendation = getRecommendation(answers, products);

  function handleRetake() {
    resetQuiz();
    router.push("/");
  }

  return (
    <ProductCard product={recommendation} onRetake={handleRetake} />
  );
}
