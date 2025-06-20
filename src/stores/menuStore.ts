import { ReactNode } from "react";
import { create } from "zustand";

export type ItemTab = {
  id: string;
  text: string;
  icon: ReactNode;
};

type MenuState = {
  menu: ItemTab[];
  setMenu: (menus: ItemTab[]) => void;
  setSelectedMenu: (menu: ItemTab) => void;
  selectedMenu: ItemTab | undefined;
};

const initialMenuState = {
  menu: [],
  selectedMenu: undefined,
};

const useMenuStore = create<MenuState>()((set) => ({
  menu: initialMenuState.menu,
  setMenu: (menus) => set({ menu: menus }),
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
  selectedMenu: initialMenuState.selectedMenu,
}));

export default useMenuStore;
