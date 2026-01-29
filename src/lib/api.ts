import { Camper, Filters } from "../types/camper";
import axios from "axios";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

interface CamperResponse {
  items: Camper[];
  total: number;
}

export const getCampers = async (
  page: number,
  limit: number = 5,
  filters?: Filters,
): Promise<CamperResponse> => {
  const { location, form, transmission, equipment } = filters || {};

  const options = {
    params: {
      ...(location && { location }),
      ...(form && { form }),
      ...(transmission && { transmission }),
      ...equipment?.reduce(
        (setEquip, equip) => ({ ...setEquip, [equip]: true }),
        {},
      ),
      page,
      limit,
    },
  };

  const { data } = await api.get<CamperResponse>("/campers", options);
  try {
    return {
      items: data.items,
      total: data.total,
    };
  } catch (error) {
    throw error;
  }
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const { data } = await api.get<Camper>(`/campers/${id}`);
  return data;
};
