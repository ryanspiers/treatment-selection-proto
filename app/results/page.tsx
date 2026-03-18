"use client";

import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";
import { products } from "@/data/products";
import { getRecommendation } from "@/lib/recommendation";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";

export default function ResultsPage() {
  const router = useRouter();
  const { answers } = useQuiz();

  // Wegovy is always the hero card for now
  const hero = products.find((p) => p.id === "wegovy-pen") ?? products[0];
  const alternatives = products.filter(
    (p) => p.id !== hero.id && p.id !== "default"
  );

  function handleSelect(product: Product) {
    router.push(`/plan?product=${product.id}`);
  }

  return (
    <>
      <NavBar
        title="Step 1 of 3: Consultation"
        onBack={() => router.back()}
      />
      <ProductCard
        product={hero}
        alternatives={alternatives}
        onSelect={handleSelect}
      />
    </>
  );
}
