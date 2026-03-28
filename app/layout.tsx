import type { Metadata, Viewport } from "next";
import { Work_Sans, Inter } from "next/font/google";
import Script from "next/script";
import { QuizProvider } from "@/context/QuizContext";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Skin Quiz — Find Your Match",
  description:
    "Answer 4 quick questions to find the right skincare product for your skin type and concerns.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${inter.variable} bg-white`}
      >
        <QuizProvider>
          <main className="min-h-dvh flex flex-col">
            <div className="w-full flex-1 flex flex-col">
              {children}
            </div>
          </main>
        </QuizProvider>
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
