import { FiPlus } from "react-icons/fi";
import { Popup } from "../popup";
import { PopupNewPage } from "../popup-new-page";
import {useAddPopupStore, useCirclePlusStore} from "@/stores";

export const CircleAdd = () => {
  const { showAddPopup, setShowAddPopup } = useAddPopupStore();
  const setShowPlusButton = useCirclePlusStore(
    (state) => state.setShowPlusButton
  );

  const baseClasses =
    "flex cursor-pointer w-4 h-4 rounded-full border bg-white border-[#E1E1E1] flex justify-center items-center border";

  return (
    <Popup
      position="top"
      isShowPopup={showAddPopup}
      mainComponent={
        <div
          className={baseClasses}
          onClick={() => setShowAddPopup(!showAddPopup)}
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
