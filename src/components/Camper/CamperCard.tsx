"use client"; // Важливо для роботи хуків

import { useSelectedCampersStore } from "@/lib/store/selectedCampersStore";
import Image from "next/image";
import Link from "next/link";
import css from "./CamperCard.module.css";
import { Camper } from "@/types/camper";
import { FaStar } from "react-icons/fa";

import SpriteIcon from "../SpriteIcon/SpriteIcon";
import { Button } from "@/components/Button/Button";
import clsx from "clsx";
import cssBtn from "../Button/Button.module.css";

interface CamperCardProps {
  camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
  const { selectedCampers, toggleCamper } = useSelectedCampersStore();

  const isSelected = selectedCampers.some(
    (existCamper) => existCamper.id === camper.id,
  );

  const formattedPrice = `€${camper.price.toFixed(2)}`;

  const truncateText = (text?: string, limit: number = 100): string =>
    text && text.length > limit ? text.slice(0, limit) + "…" : text || "";

  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={camper.gallery[0].thumb}
          alt={camper.name}
          fill
          className={css.image}
          priority={false}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.priceGroup}>
              <span className={css.price}>{formattedPrice}</span>
              <button
                onClick={() => toggleCamper(camper)}
                className={css.heartBtn}
                type="button"
              >
                <SpriteIcon
                  id="heart"
                  width={24}
                  height={24}
                  className={isSelected ? css.heartActive : ""}
                />
              </button>
            </div>
          </div>

          <div className={css.subHeader}>
            <div className={css.ratingWrapper}>
              <SpriteIcon
                id="icon-star"
                width={16}
                height={16}
                className={css.starIcon}
              />
              <span className={css.ratingText}>
                <FaStar color="gold" style={{ marginRight: "4px" }} />
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>

            <div className={css.locationWrapper}>
              <SpriteIcon id="map" width={16} height={16} />
              <span>{camper.location}</span>
            </div>
          </div>
        </div>
        <p className={css.description}>
          {truncateText(camper.description, 100)}
        </p>

        <ul className={css.featuresList}>
          <li className={css.featureItem}>
            <SpriteIcon id="transmission" width={20} height={20} />
            <span>{camper.transmission}</span>
          </li>
          <li className={css.featureItem}>
            <SpriteIcon id="petrol" width={20} height={20} />
            <span>{camper.engine}</span>
          </li>
          {camper.kitchen && (
            <li className={css.featureItem}>
              <SpriteIcon id="kitchen" width={20} height={20} />
              <span>Kitchen</span>
            </li>
          )}
          {camper.AC && (
            <li className={css.featureItem}>
              <SpriteIcon id="ac" width={20} height={20} />
              <span>AC</span>
            </li>
          )}
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          className={clsx(css.heroBtn, cssBtn.btnBase, cssBtn.primary)}
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
