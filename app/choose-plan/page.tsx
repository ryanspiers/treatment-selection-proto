"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { doseOptions, type DoseOption } from "@/data/plans";
import NavBar from "@/components/NavBar";
import DoseSelector from "@/components/DoseSelector";

function ChoosePlanContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const product = products.find((p) => p.id === productId);
  const options = productId ? doseOptions[productId] ?? [] : [];

  if (!product || options.length === 0) {
    router.push("/choose-treatment");
    return null;
  }

  function handleConfirm(option: DoseOption) {
    console.log("Confirmed:", option.label, "£" + option.price, "for", product!.name);
  }

  return (
    <>
      <NavBar onBack={() => router.back()} progress={0.66} />
      <DoseSelector
        product={product}
        options={options}
        onConfirm={handleConfirm}
        onChangeTreatment={() => router.push("/choose-treatment")}
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
