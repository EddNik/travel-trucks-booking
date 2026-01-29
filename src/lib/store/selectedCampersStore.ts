import { Camper } from "../../types/camper";
import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

interface SelectedCampers {
  selectedCampers: Camper[];
  toggleCamper: (camper: Camper) => void; // додавання/видалення кемпера з обраних
  clearSelectedCampers: () => void; // очищення обраних кемперів
}
export const useSelectedCampersStore = create<SelectedCampers>()(
  persist(
    (set) => ({
      selectedCampers: [],

      toggleCamper: (camper: Camper) =>
        set((state) => {
          const isSelected = state.selectedCampers.some(
            (camperInState) => camperInState.id === camper.id,
          );
          if (isSelected) {
            return {
              selectedCampers: state.selectedCampers.filter(
                (camperInState) => camperInState.id !== camper.id,
              ),
            };
          } else {
            return {
              selectedCampers: [...state.selectedCampers, camper],
            };
          }
        }),

      clearSelectedCampers: () => set({ selectedCampers: [] }),
    }),
    {
      name: "selected-campers-storage", // Ім'я для збереження в localStorage
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
