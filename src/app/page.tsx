"use client";
import { Footer, SelectedScreen } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#faf2d9]">
      <Image src={"/fillout-logo-dark.png"} alt="logo" width={115} height={30} />
      <SelectedScreen />
      <Footer />
    </div>
  );
}
