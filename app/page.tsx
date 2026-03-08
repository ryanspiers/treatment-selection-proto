"use client";

import { useRouter } from "next/navigation";
import StartScreen from "@/components/StartScreen";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="max-w-[480px] mx-auto w-full flex-1 flex flex-col px-5 py-8">
      <StartScreen onStart={() => router.push("/quiz/1")} />
    </div>
  );
}
