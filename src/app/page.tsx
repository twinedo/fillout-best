"use client";
import { CardAdd, CardStepPopup, CircleAdd, LineDashed } from "@/components";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import clsx from "clsx";

type ItemTab = {
  id: string;
  text: string;
  icon: ReactNode;
};

export default function Home() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const [selectedPage, setSelectedPage] = useState<ItemTab>({
    id: "1",
    text: "Info",
    icon: <AiOutlineInfoCircle color="#F59D0E" size={16} />,
  });

  const [menus] = useState([
    {
      id: "1",
      text: "Info",
      icon: <AiOutlineInfoCircle size={16} />,
    },
    {
      id: "2",
      text: "Details",
      icon: <IoDocumentTextOutline size={16} />,
    },
    {
      id: "3",
      text: "Other",
      icon: <IoDocumentTextOutline size={16} />,
    },
    {
      id: "4",
      text: "Ending",
      icon: <IoIosCheckmarkCircleOutline size={16} />,
    },
  ]);

  const [showPlusButton, setShowPlusButton] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <button onClick={() => setIsButtonActive(!isButtonActive)}>
          setIsButtonActive
        </button>
        <div className="relative flex flex-row items-center">
          {menus.map((item, index) => (
            <div key={item.id} className="flex relative">
              <CardStepPopup
                key={item.id}
                text={item.text}
                leftIcon={item.icon}
                isSelected={selectedPage.id === item.id}
                onClick={() => setSelectedPage(item)}
              />
              {menus.length - 1 && (
                <div className="relative">
                  <LineDashed
                    className={clsx(
                      index === 1 && showPlusButton ? "min-w-10" : "min-w-5"
                    )}
                    onMouseEnter={() => {
                      if (index === 1) {
                        setShowPlusButton(true);
                        console.log("cak");
                      } else {
                        setShowPlusButton(false);
                      }
                    }}
                  />
                  {index === 1 && showPlusButton && (
                    <div className="bg-white z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" onMouseLeave={() => {
                      if (index === 1) {
                        setShowPlusButton(false);
                      } else {
                        setShowPlusButton(false);
                      }
                    }}>
                      <CircleAdd />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <CardAdd />
        </div>
      </footer>
    </div>
  );
}
