import { IoFlag } from "react-icons/io5";
import { FiEdit3, FiClipboard, FiTrash2 } from "react-icons/fi";
import { PiCopy } from "react-icons/pi";
import { ReactNode } from "react";
import clsx from "clsx";

export const PopupOption = () => {
  const optionMenu = [
    {
      id: "1",
      icon: <IoFlag color="#2F72E2" size={16} />,
      text: "Set as first page",
    },
    {
      id: "2",
      icon: <FiEdit3 color="#9DA4B2" size={16} />,
      text: "Rename",
    },
    {
      id: "3",
      icon: <FiClipboard color="#9DA4B2" size={16} />,
      text: "Copy",
    },
    {
      id: "4",
      icon: <PiCopy color="#9DA4B2" size={16} />,
      text: "Duplicate",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-xl border-[0.5px] border-[#E1E1E1] min-w-[240px] bg-white shadow-[0_0_1px_rgba(0,0,0,0.5)]">
      <div className="text-base leading-6 font-medium p-3">Settings</div>
      <div className="h-[0.5px] bg-[#E1E1E1] w-full" />
      <div className="flex flex-col gap-y-3.5 p-3">
        {optionMenu.map((item) => (
          <RowItemIcon key={item.id} icon={item.icon} text={item.text} />
        ))}
        <div className="h-[0.5px] bg-[#E1E1E1] w-full" />
        <RowItemIcon
          icon={<FiTrash2 size={16} color="#EF494F" />}
          text="Delete"
          textClassName="text-[#EF494F]"
        />
      </div>
    </div>
  );
};

const RowItemIcon = ({
  icon,
  text,
  textClassName,
  ...props
}: {
  icon: ReactNode;
  text: string;
  textClassName?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex flex-row gap-x-1.5 items-center" {...props}>
      {icon}
      <div className={clsx("text-sm leading-4 font-medium text-[#1A1A1A]", textClassName)}>{text}</div>
    </div>
  );
};
