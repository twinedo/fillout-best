import clsx from "clsx";
import { ReactNode } from "react";

type Position = "top" | "bottom" | "left" | "right";

type PopupProps = {
  mainComponent: ReactNode;
  children: ReactNode;
  position?: Position;
  isShowPopup?: boolean;
};

const POSITION_CLASSES: Record<Position, string> = {
  top: "bottom-[calc(100%+10px)] left-0",
  bottom: "top-[calc(100%+10px)] left-0",
  left: "right-[calc(100%+10px)] top-1/2 -translate-y-1/2",
  right: "left-[calc(100%+10px)] top-1/2 -translate-y-1/2",
};

export const Popup = ({
  mainComponent,
  children,
  position = "top",
  isShowPopup = false,
}: PopupProps) => {
  const positionClass = POSITION_CLASSES[position];

  return (
    <div className="relative inline-block">
      {mainComponent}
      
      {isShowPopup && (
        <div
          className={clsx(
            "absolute z-50 min-w-max rounded-xl shadow-lg bg-white",
            "transition-all duration-200 ease-in-out",
            positionClass,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};