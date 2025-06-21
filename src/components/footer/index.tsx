import { DraggableList } from "../dnd/draggable-list";
import { useCirclePlusStore, useMenuStore, useAddPopupStore } from "@/stores";
import { SortableItem } from "../dnd/sortable-item";
import { CardStepPopup } from "../card-step-popup";
import { LineDashed } from "../line-dashed";
import clsx from "clsx";
import { CircleAdd } from "../circle-add";
import { CardAdd } from "../card-add";
import { CheckPreferences } from "../check-preferences";

export const Footer = () => {
  const { menu, setMenu, setSelectedMenu, selectedMenu } = useMenuStore();
  const { showPlusButton, setShowPlusButton } = useCirclePlusStore();
  const { showAddPopup } = useAddPopupStore();

  const shouldShowAddButton = (index: number) => {
    if (menu.length <= 1) return false;
    if (menu.length % 2 === 1) return index === Math.floor(menu.length / 2);
    return index === (menu.length / 2) - 1;
  };

  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center">
      {menu.length > 0 && (
        <DraggableList items={menu} onReorder={setMenu} gap="gap-1" className="relative">
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
                  onMouseEnter={() => shouldShowAddButton(index) && setShowPlusButton(true)}
                  onMouseLeave={() => !showAddPopup && setShowPlusButton(false)}
                >
                  <LineDashed className={clsx(
                    shouldShowAddButton(index) && showPlusButton ? "min-w-10" : "min-w-5"
                  )} />
                  {shouldShowAddButton(index) && showPlusButton && (
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
  );
};
