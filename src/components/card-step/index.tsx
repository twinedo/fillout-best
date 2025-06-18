import { ReactNode, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { clsx } from "clsx";
import { useLongPress } from "@/hooks/useLongPress";

export type TCardStep = {
  containerClassName?: string;
  leftIcon: ReactNode;
  leftIconClassName?: string;
  text: string;
  isActive?: boolean;
  onOptionPress?: () => void;
};

export const CardStep = (props: TCardStep) => {
  const {
    containerClassName,
    leftIcon,
    text = "",
    isActive = false,
    onOptionPress,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleInteraction =  useLongPress({
    onLongPress: () => setIsFocused(true),
    onClick: () => {
      setIsFocused(false);
    },
    delay: 200,
  });

  // Base className
  const baseClasses = `
    flex cursor-pointer items-center h-8 rounded-lg py-1 px-2.5 gap-2
    transition-all duration-200 ease-in-out
  `;

  const stateClasses = {
    background: isActive 
      ? "bg-white" 
      : isFocused 
        ? "bg-white" 
        : "bg-[#9DA4B226] hover:bg-[#9DA4B259]",
    border: isFocused 
      ? "border-[0.5px] border-[#2F72E2]" 
      : isActive ? "border-[0.5px] border-[#E1E1E1]": "",
    shadow: isFocused 
      ? "shadow-[0_0_5px_rgba(47,114,226,0.5)]" 
      : isActive 
        ? "shadow-[0_0_1px_rgba(0,0,0,0.5)]" 
        : "",
  };

  // Icon className
  const iconClasses = clsx(
    "w-5 flex justify-center items-center text-xl",
    (isFocused || isActive) ? "text-yellow-600" : "text-[#8C93A1]",
  );

  // Text className
  const textClasses = clsx(
    "flex text-center font-medium leading-5 text-sm",
    (isActive || isFocused) ? "text-[#1A1A1A]" : "text-[#677289]"
  );

  // Options button styles
  const optionsClasses = clsx(
    "flex justify-center items-center transition-all duration-300 ease-in-out overflow-hidden",
    isActive ? "max-w-8 opacity-100" : "max-w-0 opacity-0"
  );

  return (
    <div
      role="button"
      className={clsx(
        baseClasses,
        stateClasses.background,
        stateClasses.border,
        stateClasses.shadow,
        containerClassName
      )}
      {...handleInteraction}
    >
      {leftIcon && <div className={iconClasses}>{leftIcon}</div>}

      <div className={textClasses}>
        {text}
      </div>

      {isActive && (
        <div 
          className={optionsClasses} 
          onClick={onOptionPress}
          aria-label="More options"
        >
          <FaEllipsisVertical className="text-[#9DA4B2]" />
        </div>
      )}
    </div>
  );
};
