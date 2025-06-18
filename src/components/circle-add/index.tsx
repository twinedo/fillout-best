import { ComponentPropsWithoutRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { PopupOption } from "../popup-option";
import { Popup } from "../popup";

export const CircleAdd = (props: ComponentPropsWithoutRef<"div">) => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <Popup
      position="top"
      isShowPopup={isShowPopup}
      mainComponent={
        <div
          className="w-4 h-4 rounded-full border border-[#E1E1E1] flex justify-center items-center"
          onClick={() => setIsShowPopup(!isShowPopup)}
          {...props}
        >
          <FiPlus size={8} />
        </div>
      }
    >
      <PopupOption />
    </Popup>
  );
};
