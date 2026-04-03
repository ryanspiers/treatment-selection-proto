"use client";

import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { doseOptions } from "@/data/plans";
import NavBar from "@/components/NavBar";
import TreatmentPicker from "@/components/TreatmentPicker";
import type { Product } from "@/types";

const treatments = products.filter(
  (p) => p.id === "wegovy-pen" || p.id === "mounjaro-kwikpen"
);

export default function ChooseTreatmentPage() {
  const router = useRouter();

  function handleSelect(product: Product) {
    router.push(`/choose-plan?product=${product.id}`);
  }

  return (
    <>
      <NavBar onBack={() => router.back()} progress={0.33} />
      <TreatmentPicker treatments={treatments} doseOptions={doseOptions} onSelect={handleSelect} />
    </>
  );
}
