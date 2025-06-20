import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ItemTab = {
  id: string;
  text: string;
  iconKey: string;
};

type MenuState = {
  menu: ItemTab[];
  selectedMenu: ItemTab | undefined;
  savePreference: boolean;
  setMenu: (menus: ItemTab[]) => void;
  setSelectedMenu: (menu: ItemTab) => void;
  toggleSavePreference: (value: boolean) => void;
};

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      menu: [],
      selectedMenu: undefined,
      savePreference: false,

      setMenu: (menus) => {
        set({ menu: menus });
        if (!get().savePreference) {
          // persist will automatically sync
          localStorage.removeItem("menu-storage");
        }
      },

      setSelectedMenu: (menu) => {
        set({ selectedMenu: menu });
        if (!get().savePreference) {
          localStorage.removeItem("menu-storage");
        }
      },

      toggleSavePreference: (value) => {
        set({ savePreference: value });
        if (!value) {
          localStorage.removeItem("fillout-menu-storage");
        }
      },
    }),
    {
      name: "fillout-menu-storage",
      partialize: (state) =>
        state.savePreference
          ? { menu: state.menu, selectedMenu: state.selectedMenu, savePreference: state.savePreference }
          : { savePreference: state.savePreference },
    }
  )
);
export default useMenuStore;