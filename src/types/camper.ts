export type VehicleType = "panelTruck" | "fullyIntegrated" | "alcove";
export type Engine = "petrol" | "diesel" | "hybrid";
export type Transmission = "automatic" | "manual";

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: VehicleType;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: CamperGallery[];
  reviews: CamperReviews[];
}

interface CamperGallery {
  thumb: string;
  original: string;
}

export interface CamperReviews {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type Equipment =
  | "AC"
  | "Kitchen"
  | "TV"
  | "Bathroom"
  | "Gas"
  | "Microwave"
  | "Refrigerator"
  | "Radio"
  | "Water";

export interface Filters {
  location: string;
  equipment: Equipment[];
  form: VehicleType | null;
  transmission: Transmission | null;
}

export interface Booking {
  name: string;
  email: string;
  date: string;
  comment: string;
}
