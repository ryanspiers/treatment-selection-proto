"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import NavBar from "@/components/NavBar";
import PlanChooser from "@/components/PlanChooser";
import type { TreatmentPlan } from "@/data/plans";

function ChoosePlanContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const months = Number(searchParams.get("months")) || 3;

  const product = products.find((p) => p.id === productId);

  if (!product) {
    router.push("/results");
    return null;
  }

  function handlePlanSelect(plan: TreatmentPlan) {
    console.log("Selected plan:", plan.name, plan.totalPrice, "for", product!.name);
  }

  return (
    <>
      <NavBar title="Step 3 of 3: Choose plan" onBack={() => router.back()} />
      <PlanChooser
        product={product}
        months={months}
        onChangeProduct={() => router.push("/results")}
        onChangeMonths={() => router.back()}
        onSelect={handlePlanSelect}
      />
    </>
  );
}

export default function ChoosePlanPage() {
  return (
    <Suspense>
      <ChoosePlanContent />
    </Suspense>
  );
}
