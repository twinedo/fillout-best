import { create } from "zustand";

interface AddPopupState {
  showAddPopup: boolean;
  setShowAddPopup: (newValue: boolean) => void;
}

const useAddPopupStore = create<AddPopupState>()((set) => ({
  showAddPopup: false,
  setShowAddPopup: (newValue?: boolean) =>
    set((state) => ({ showAddPopup: newValue || !state.showAddPopup })),
}));

export default useAddPopupStore;
