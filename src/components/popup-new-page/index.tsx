import { useState } from "react";
import clsx from "clsx";
import { Popup } from "../popup";
import { PopupInputFormName } from "../popup-input-form-name";
import {useMenuStore} from "@/stores";
import { v4 as uuidv4 } from 'uuid';
import { iconMap } from "@/assets/icons";
import { dataPopupNewPages } from "@/utils/constants";

type PopupNewPageProps = {
  onClose?: () => void;
};

export const PopupNewPage = (props: PopupNewPageProps) => {
  const { onClose } = props;
  const setMenu = useMenuStore((state) => state.setMenu)
  const menu = useMenuStore((state) => state.menu)
  const [optionMenu, setOptionMenu] = useState(dataPopupNewPages);

  const onClickItem = (index: number) => {
    const updated = optionMenu.map((item, i) => ({
      ...item,
      isShowPopup: i === index ? !item.isShowPopup : false,
    }));
    setOptionMenu(updated);
  };

  const onSubmitName = (name: string, index: number) => {
    const newItem = {
      id: uuidv4(),
      text: name,
      iconKey: optionMenu[index].iconKey,
    };
    setMenu([...menu, newItem]);
    onClickItem(index);
    onClose?.()
  };

  return (
    <div className="relative rounded-xl border-[0.5px] border-[#E1E1E1] min-w-[240px] bg-white shadow-[0_0_1px_rgba(0,0,0,0.5)]">
      <div className="text-base leading-6 font-medium p-3">
        Choose a page type
      </div>
      <div className="h-[0.5px] bg-[#E1E1E1] w-full" />
      <div className="flex flex-col gap-y-3.5 p-3">
        {optionMenu.map((item, index) => (
          <Popup
            key={item.id}
            position="right"
            isShowPopup={item.isShowPopup}
            mainComponent={
              <RowItemIcon
                key={item.id}
                iconKey={item.iconKey}
                text={item.text}
                subtitle={item.subtitle}
                onClick={() => onClickItem(index)}
              />
            }
          >
            <PopupInputFormName
              onSave={(name) => onSubmitName(name, index)}
              onCancel={() => onClickItem(index)}
              selectedPopup={optionMenu.find((val) => val.isShowPopup)?.text}
            />
          </Popup>
        ))}
      </div>
    </div>
  );
};

const RowItemIcon = ({
  iconKey,
  text,
  textClassName,
  subtitle,
  ...props
}: {
  iconKey: string;
  text: string;
  textClassName?: string;
  subtitle: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="cursor-pointer flex flex-row gap-x-3 items-center"
      {...props}
    >
      {iconMap[iconKey] }
      <div className="flex flex-col gap-y-2">
        <div
          className={clsx(
            "text-sm leading-4 font-medium text-[#1A1A1A]",
            textClassName
          )}
        >
          {text}
        </div>
        <div
          className={clsx(
            "text-sm leading-2 font-medium text-[#555555]",
            textClassName
          )}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};
