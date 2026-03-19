"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { supplyPlans } from "@/data/plans";
import NavBar from "@/components/NavBar";
import SupplyLengthPicker from "@/components/SupplyLengthPicker";
import type { SupplyPlan } from "@/data/plans";

function PlanContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const product = products.find((p) => p.id === productId);

  if (!product) {
    router.push("/results");
    return null;
  }

  function handlePlanSelect(plan: SupplyPlan) {
    router.push(`/choose-plan?product=${product!.id}&months=${plan.months}`);
  }

  return (
    <>
      <NavBar onBack={() => router.back()} progress={0.66} />
      <SupplyLengthPicker
        product={product}
        plans={supplyPlans}
        onSelect={handlePlanSelect}
        onChangeProduct={() => router.push("/results")}
      />
    </>
  );
}

export default function PlanPage() {
  return (
    <Suspense>
      <PlanContent />
    </Suspense>
  );
}
