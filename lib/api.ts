import { Booking, Camper, Filters } from "../types/camper";
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
  const { location, form, transmission, equipment, engine } = filters || {};

  const options = {
    params: {
      ...(location && { location }),
      ...(form && { form }),
      ...(transmission && { transmission }),
      ...(engine && { engine }),

      ...equipment?.reduce(
        (setEquip, equip) => ({ ...setEquip, [equip]: true }),
        {},
      ),
      page,
      limit,
    },
  };

  try {
    const { data } = await api.get<CamperResponse>("/campers", options);

    return {
      items: data.items,
      total: data.total,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { items: [], total: 0 };
    }
    throw error;
  }
};
export const getCamperById = async (id: string): Promise<Camper> => {
  try {
    const { data } = await api.get(`/campers/${id}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error(`Camper with id ${id} not found`);
    }
    throw error;
  }
};

export async function bookCamper(newBooking: Booking): Promise<Booking> {
  try {
    const { data } = await api.post<Booking>("/campers/booking", newBooking);
    return data;
  } catch (error) {
    throw error;
  }
}
