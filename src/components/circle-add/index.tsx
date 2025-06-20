import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Popup } from "../popup";
import { PopupNewPage } from "../popup-new-page";
import useCirclePlusStore from "@/stores/circlePlus";
import useAddPopupStore from "@/stores/addPopup";

export const CircleAdd = () => {
  const {showAddPopup, setShowAddPopup} = useAddPopupStore();
  const [isShowPopup, setIsShowPopup] = useState(false);
  const setShowPlusButton = useCirclePlusStore(
    (state) => state.setShowPlusButton
  );

  const baseClasses = "flex cursor-pointer w-4 h-4 rounded-full border bg-white border-[#E1E1E1] flex justify-center items-center border"
  // console.log("CircleAdd rendered", showAddPopup);

  return (
    <Popup
      position="top"
      isShowPopup={showAddPopup}
      mainComponent={
        <div
          className={baseClasses}
          onClick={() => {
            // setShowAddPopup(!showAddPopup)
            setShowAddPopup(!showAddPopup);
          }}
          // {...props}
        >
          <FiPlus size={8} color="black" />
        </div>
      }
    >
      <PopupNewPage
        onClose={() => {
          setShowAddPopup(false);
          setShowPlusButton(false);
        }}
      />
    </Popup>
  );
};
