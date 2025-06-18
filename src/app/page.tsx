"use client";
import { CardAdd, CardStepPopup, CircleAdd, LineDashed } from "@/components";
import { ReactNode, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import clsx from "clsx";
import { DraggableList } from "@/components/dnd/draggable-list";
import { SortableItem } from "@/components/dnd/sortable-item";

type ItemTab = {
  id: string;
  text: string;
  icon: ReactNode;
};

export default function Home() {
  const [selectedPage, setSelectedPage] = useState<ItemTab>({
    id: "1",
    text: "Info",
    icon: <AiOutlineInfoCircle color="#F59D0E" size={16} />,
  });

  const [menus, setMenus] = useState([
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
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start border">
        <div className="border w-4xl h-[480px] flex">
            <div className="text-7xl">This is page of <h1 className="font-bold">{selectedPage.text}</h1></div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
        <DraggableList
          items={menus}
          onReorder={setMenus}
          gap="gap-1"
          className="relative"
        >
          {(item, index) => (
            <>
              <SortableItem
                id={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPage(item);
                }}
              >
                <CardStepPopup
                  text={item.text}
                  leftIcon={item.icon}
                  isSelected={selectedPage.id === item.id}
                />
              </SortableItem>

              {index < menus.length - 1 && (
                <div className="relative">
                  <LineDashed
                    className={clsx(
                      index === 1 && showPlusButton ? "min-w-10" : "min-w-5"
                    )}
                    onMouseEnter={() => setShowPlusButton(index === 1)}
                  />
                  {index === 1 && showPlusButton && (
                    <div
                      className="bg-white z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      onMouseLeave={() => setShowPlusButton(false)}
                    >
                      <CircleAdd />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </DraggableList>
        <LineDashed />
        <CardAdd />
      </footer>
    </div>
  );
}
