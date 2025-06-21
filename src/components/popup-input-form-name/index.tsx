import { useState } from "react";

type PopupInputFormNameProps = {
  onSave: (name: string) => void;
  onCancel: () => void;
  selectedPopup?: string;
};

export const PopupInputFormName = (props: PopupInputFormNameProps) => {
  const { onSave, onCancel, selectedPopup } = props;
  const [name, setName] = useState("");

  const baseClassName = `
  relative overflow-hidden rounded-xl border-[0.5px] border-[#E1E1E1] min-w-[240px] bg-white shadow-[0_0_1px_rgba(0,0,0,0.5)] px-4
  `;

  return (
    <div className={baseClassName}>
      <div className="text-base leading-6 font-medium p-3">
        Input {selectedPopup} Name
      </div>
      <input
        className="rounded-xl border-[0.5px] border-[#E1E1E1] p-3"
        placeholder={`${selectedPopup} Name`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex flex-row gap-x-3 items-center p-3 cursor-pointer">
        <div className="" onClick={onCancel}>
          Cancel
        </div>
        <div
          className="rounded-xl bg-green-500 text-white font-bold px-3 py-1 cursor-pointer"
          onClick={() => onSave(name)}
        >
          Save
        </div>
      </div>
    </div>
  );
};
