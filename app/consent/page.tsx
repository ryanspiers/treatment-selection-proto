"use client";

import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import ConsentScreen from "@/components/ConsentScreen";

export default function ConsentPage() {
  const router = useRouter();

  return (
    <>
      <NavBar title="Check in" onBack={() => router.back()} />
      <ConsentScreen onAgree={() => router.push("/results")} />
    </>
  );
}
