"use client";

import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import StartScreen from "@/components/StartScreen";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <NavBar title="Step 1 of 3: Consultation" onBack={() => {}} />
      <StartScreen onStart={() => router.push("/quiz/1")} />
    </>
  );
}
