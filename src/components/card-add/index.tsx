import { FiPlus } from "react-icons/fi";
import { Popup } from "../popup";
import { PopupOption } from "../popup-option";
import { useState } from "react";

export const CardAdd = () => {
  const baseClasses = `
    flex cursor-pointer items-center h-8 rounded-lg py-1 px-2.5 gap-2 border-[0.5px] border-[#E1E1E1] text-[#1A1A1A] hover:text-blue-500 hover:border-blue-500
    transition-all duration-200 ease-in-out
  `;

  const [isShowPopup, setIsShowPopup] = useState(false)

  return (
    <Popup
      position="top"
      isShowPopup={isShowPopup}
      mainComponent={
        <div className={baseClasses} onClick={() => setIsShowPopup(!isShowPopup)}>
          <FiPlus size={16} />
          <div className="font-medium">Add page</div>
        </div>
      }
    >
      <PopupOption />
    </Popup>
  );
};
