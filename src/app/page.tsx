"use client";
import { Footer, SelectedScreen } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#faf2d9]">
      <SelectedScreen />
      <Footer />
    </div>
  );
}
