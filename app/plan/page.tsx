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
    console.log("Selected plan:", plan.months, "months for", product!.name);
  }

  return (
    <>
      <NavBar title="Step 2 of 3: Choose plan" onBack={() => router.back()} />
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
