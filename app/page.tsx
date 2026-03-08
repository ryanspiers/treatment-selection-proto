"use client";

import { useRouter } from "next/navigation";
import StartScreen from "@/components/StartScreen";

export default function HomePage() {
  const router = useRouter();

  return (
    <StartScreen onStart={() => router.push("/quiz/1")} />
  );
}
