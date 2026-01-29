import { create } from "zustand";
import { Camper, Filters } from "../../types/camper";
import { getCampers } from "../api";

const initialFilter: Filters = {
  location: "",
  equipment: [],
  form: "panelTruck",
  transmission: "manual",
};

interface CampersState {
  campers: Camper[];
  isLoading: boolean;
  error: string | null;

  page: number;
  total: number;
  filters: Filters;

  setFilters: (newFilters: Partial<Filters>) => void;
  resetFilters: () => void;
  fetchCampers: (page?: number) => Promise<void>;
  handleLoadMore: () => void;
}

export const useCampersStore = create<CampersState>((set, get) => ({
  campers: [],
  isLoading: false,
  error: null,
  page: 1,
  total: 0,
  filters: initialFilter,

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
      page: 1,
      campers: [],
    })),

  resetFilters: () =>
    set({
      filters: initialFilter,
      page: 1,
    }),

  fetchCampers: async (page = 1) => {
    const { filters, campers } = get();
    set({ isLoading: true, error: null });

    try {
      const data = await getCampers(page, 5, filters);

      set({
        campers: page === 1 ? data.items : [...campers, ...data.items],
        total: data.total,
        page,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      set({ error: "Failed to fetch campers", isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },

  handleLoadMore: async () => {
    const { page, fetchCampers } = get();
    await fetchCampers(page + 1);
  },
}));
