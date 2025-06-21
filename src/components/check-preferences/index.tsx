import useMenuStore from "@/stores/menuStore";
import { TbSquareCheckFilled, TbSquareDashed } from "react-icons/tb";

export const CheckPreferences = () => {
  const { savePreference, toggleSavePreference } = useMenuStore();
  return (
    <div className="flex flex-row items-center gap-x-3  text-sm">
      {savePreference ? (
        <TbSquareCheckFilled
          size={16}
          color="black"
          onClick={() => toggleSavePreference(false)}
        />
      ) : (
        <TbSquareDashed
          size={16}
          color="#9DA4B2"
          onClick={() => toggleSavePreference(true)}
        />
      )}
      <span
        className="cursor-pointer hover:text-blue-500"
        onClick={() => toggleSavePreference(!savePreference)}
      >
        Save menu preference
      </span>
    </div>
  );
};
