"use client";

import Gallery from "../../../components/Camper/Gallery";
import CamperInfo from "../../../components/Camper/CamperInfo";
import SpriteIcon from "../../../components/SpriteIcon/SpriteIcon";
import { useParams } from "next/navigation";
import { getCamperById } from "../../../lib/api";
import css from "./CamperDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { FaStar } from "react-icons/fa";

function CamperDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: camper,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
    refetchOnMount: false,
  });

  if (!camper) {
    return <div>Camper not found</div>;
  }

  const formattedPrice = `€${camper.price.toFixed(2)}`;

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={error} />}
      <div className={css.container}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>

          <div className={css.subHeader}>
            <div className={css.ratingWrapper}>
              <span className={css.ratingText}>
                <FaStar color="var(--rating)" style={{ marginRight: "4px" }} />
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </div>

            <div className={css.locationWrapper}>
              <SpriteIcon id="map" width={16} height={16} />
              <span>{camper.location}</span>
            </div>
          </div>
          <div className={css.priceGroup}>
            <span className={css.price}>{formattedPrice}</span>
          </div>
        </div>

        <Gallery gallery={camper.gallery} />

        <p className={css.description}>{camper.description}</p>

        <CamperInfo camper={camper} />
      </div>
    </>
  );
}

export default CamperDetailsClient;
