"use client";

import { useState } from "react";
import clsx from "clsx";

import { useCampersStore } from "../../../../lib/store/campersStore";
import { Equipment, VehicleType, Transmission } from "../../../../types/camper";
import { Button } from "../../../../components/Button/Button";
import css from "./SidebarFilters.module.css";

const EQUIPMENT: { id: Equipment; label: string; icon: string }[] = [
  { id: "AC", label: "AC", icon: "ac" },
  { id: "kitchen", label: "Kitchen", icon: "kitchen" },
  { id: "TV", label: "TV", icon: "tv" },
  { id: "bathroom", label: "Bathroom", icon: "bathroom" },
  { id: "gas", label: "GAS", icon: "gas-stove" },
  { id: "microwave", label: "Microwave", icon: "microwave" },
  { id: "refrigerator", label: "Refrigerator", icon: "fridge" },
  { id: "radio", label: "Radio", icon: "radio" },
  { id: "water", label: "Water", icon: "water" },
];

const TYPE_VEHICLE: { id: VehicleType; label: string; icon: string }[] = [
  { id: "panelTruck", label: "Van", icon: "van" },
  {
    id: "fullyIntegrated",
    label: "Fully Integrated",
    icon: "integrated",
  },
  { id: "alcove", label: "Alcove", icon: "alcove" },
];

export default function CatalogSidebarPage() {
  const { setFilters, getCampers, isLoading } = useCampersStore();

  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [transmission, setTransmission] = useState<Transmission | null>(null);

  const locationChange = (value: string) => {
    const regex = /^[a-zA-Z\s,]*$/;
    if (regex.test(value)) {
      setLocation(value);
    }
  };

  const toggleEquipment = (id: Equipment) => {
    setEquipment((prev) =>
      prev.includes(id)
        ? prev.filter((element) => element !== id)
        : [...prev, id],
    );
  };

  const toggleTransmission = () => {
    setTransmission((prev) => (prev === "automatic" ? null : "automatic"));
  };

  const toggleVehicleType = (type: VehicleType) => {
    setVehicleType((prev) => (prev === type ? null : type));
  };

  const handleSearch = () => {
    setFilters({
      location: location.trim(),
      equipment,
      form: vehicleType,
      transmission,
    });

    getCampers(1);
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.inputBlock}>
        <label htmlFor="location">Location</label>

        <div className={css.inputWrapper}>
          <svg className={css.iconMap} width={20} height={20}>
            <use href="/sprite.svg#map" />
          </svg>

          <input
            id="location"
            className={css.input}
            type="text"
            value={location}
            onChange={(event) => locationChange(event.target.value)}
            placeholder="Kyiv, Kharkiv, Odesa, Lviv, Dnipro, Sumy, Poltava"
          />
        </div>
      </div>
      <div className={css.filterSection}>
        <p className={css.titleSection}>Filters</p>
        <h3 className={css.subtitle}>Vehicle equipment</h3>
        <div className={css.filterGroup}>
          {EQUIPMENT.map((item) => {
            const isActive = equipment.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                className={clsx(css.filterButton, isActive && css.active)}
                onClick={() => toggleEquipment(item.id)}
              >
                <svg className={css.icon} width={32} height={32}>
                  <use href={`/sprite.svg#${item.icon}`} />
                </svg>
                <span>{item.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            className={clsx(
              css.filterButton,
              transmission === "automatic" && css.active,
            )}
            onClick={toggleTransmission}
          >
            <svg className={css.icon} width={32} height={32}>
              <use href={`/sprite.svg#transmission`} />
            </svg>
            <span>Automatic</span>
          </button>
        </div>
        <h3 className={css.subtitle}>Vehicle type</h3>
        <div className={css.filterGroup}>
          {TYPE_VEHICLE.map((item) => {
            const isActive = vehicleType === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={clsx(css.filterButton, isActive && css.active)}
                onClick={() => toggleVehicleType(item.id)}
              >
                <svg className={css.icon} width={32} height={32}>
                  <use href={`/sprite.svg#${item.icon}`} />
                </svg>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={css.searchBtnWrapper}>
        <Button onClick={handleSearch} disabled={isLoading}>
          Search
        </Button>
      </div>
    </aside>
  );
}
