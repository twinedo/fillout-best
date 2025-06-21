import {useMenuStore} from "@/stores";
import { HiChevronDoubleDown } from "react-icons/hi";

export const SelectedScreen = () => {
  const selectedMenu = useMenuStore((state) => state.selectedMenu);

  const baseClassName = `
    flex flex-col justify-center w-full border-[0.5px] border-[#9DA4B259] rounded-2xl gap-[32px] row-start-2 items-center sm:items-start
  `;

  return (
    <main className={baseClassName}>
      {selectedMenu && (
        <div className="flex justify-center items-center w-full min-h-[480px] ">
          <div className="text-7xl">
            This is page of <h1 className="font-bold">{selectedMenu.text}</h1>
          </div>
        </div>
      )}
      {!selectedMenu && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold">Welcome to Fillout</div>
          <div className="text-lg text-gray-600 mb-20">
            Please click &quot;Add Page&quot; below to get started
          </div>
          <HiChevronDoubleDown size={64} className="text-gray-300" />
        </div>
      )}
    </main>
  );
};
