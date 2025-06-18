import { useState } from "react";
import { CardStep, TCardStep } from "../card-step";
import { Popup } from "../popup";
import { PopupOption } from "../popup-option";

type CardStepPopupProps = {
  isSelected: boolean;
} & TCardStep;

export const CardStepPopup = (props: CardStepPopupProps) => {
  const {
    isSelected = false,
  } = props;

  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <Popup
      position="top"
      isShowPopup={isShowPopup}
      mainComponent={
        <CardStep
          isActive={isSelected}
          onOptionPress={() => setIsShowPopup(!isShowPopup)}
          {...props}
        />
      }
    >
      <PopupOption />
    </Popup>
  );
};
