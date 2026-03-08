import type { Product } from "@/types";

export function getRecommendation(
  answers: Record<string, string>,
  products: Product[]
): Product {
  const selectedTags = new Set(Object.values(answers));

  const scored = products
    .map((product) => ({
      product,
      score: product.matchTags.filter((tag) => selectedTags.has(tag)).length,
    }))
    .filter(({ score, product }) => score >= product.minScore)
    .sort((a, b) =>
      b.score !== a.score
        ? b.score - a.score
        : b.product.priority - a.product.priority
    );

  const fallback = products.find((p) => p.id === "default");
  if (!fallback) throw new Error("No default product defined");

  return scored[0]?.product ?? fallback;
}
