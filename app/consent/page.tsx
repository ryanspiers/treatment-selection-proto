"use client";

import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import ConsentScreen from "@/components/ConsentScreen";

export default function ConsentPage() {
  const router = useRouter();

  return (
    <>
      <NavBar onBack={() => router.back()} progress={0.33} />
      <ConsentScreen onAgree={() => router.push("/results")} />
    </>
  );
}
