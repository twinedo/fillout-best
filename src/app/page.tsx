"use client";
import {
  CardAdd,
  CardStepPopup,
  CheckPreferences,
  CircleAdd,
  LineDashed,
} from "@/components";
import clsx from "clsx";
import { DraggableList } from "@/components/dnd/draggable-list";
import { SortableItem } from "@/components/dnd/sortable-item";
import { HiChevronDoubleDown } from "react-icons/hi";
import useMenuStore from "@/stores/menuStore";
import useCirclePlusStore from "@/stores/circlePlus";
import useAddPopupStore from "@/stores/addPopup";

export default function Home() {
  const { menu, setMenu, setSelectedMenu, selectedMenu } = useMenuStore();
  const { showPlusButton, setShowPlusButton } = useCirclePlusStore();

  const { showAddPopup } = useAddPopupStore();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#faf2d9]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {selectedMenu && (
          <div className="border w-4xl h-[480px] flex">
            <div className="text-7xl">
              This is page of <h1 className="font-bold">{selectedMenu.text}</h1>
            </div>
          </div>
        )}
        {!selectedMenu && (
          <div className="flex flex-col items-center gap-4">
            <div className="text-2xl font-bold">Welcome to Fillout</div>
            <div className="text-lg text-gray-600 mb-20">
              Please click &quot;Add Page&quot; below to get started
            </div>
            <HiChevronDoubleDown size={64} className="text-gray-300" />
          </div>
        )}
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-between">
        {menu.length > 0 && (
          <DraggableList
            items={menu}
            onReorder={setMenu}
            gap="gap-1"
            className="relative"
          >
            {(item, index) => (
              <>
                <SortableItem
                  id={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMenu(item);
                  }}
                >
                  <CardStepPopup
                    text={item.text}
                    leftIconKey={item.iconKey}
                    isSelected={selectedMenu?.id === item.id}
                  />
                </SortableItem>

                {index < menu.length - 1 && (
                  <div
                    className="relative"
                    onMouseEnter={() =>
                      (menu.length === 2
                        ? index === 0
                        : index === Math.floor(menu.length / 2)) &&
                      setShowPlusButton(true)
                    }
                    onMouseLeave={() => {
                      if (!showAddPopup) {
                        setShowPlusButton(false);
                      }
                    }}
                  >
                    <LineDashed
                      className={clsx(
                        (menu.length === 2
                          ? index === 0
                          : index === Math.floor(menu.length / 2)) &&
                          showPlusButton
                          ? "min-w-10"
                          : "min-w-5"
                      )}
                    />
                    {(menu.length === 2
                      ? index === 0
                      : index === Math.floor(menu.length / 2)) &&
                      showPlusButton && (
                        <div className="z-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <CircleAdd />
                        </div>
                      )}
                  </div>
                )}
              </>
            )}
          </DraggableList>
        )}
        {menu.length > 0 && <LineDashed />}
        <div className="flex flex-row items-center gap-x-3">
          <CardAdd />
          {menu.length > 0 && <CheckPreferences />}
        </div>
      </footer>
    </div>
  );
}
