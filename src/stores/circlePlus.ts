import { create } from "zustand";

interface CirclePlusState {
  showPlusButton: boolean;
  setShowPlusButton: (newValue: boolean) => void;
}

const useCirclePlusStore = create<CirclePlusState>()((set) => ({
  showPlusButton: false,
  setShowPlusButton: (newValue?: boolean) =>
    set((state) => ({ showPlusButton: newValue || !state.showPlusButton })),
}));

export default useCirclePlusStore;
