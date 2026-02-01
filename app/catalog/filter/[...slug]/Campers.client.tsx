"use client";

import { useEffect, useRef } from "react";
import { useCampersStore } from "../../../../lib/store/campersStore";
import { Button } from "../../../../components/Button/Button";
import css from "./page.module.css";
import Loader from "../../../../components/Loader/Loader";
import CamperCard from "../../../../components/Camper/CamperCard";
import toast from "react-hot-toast";

export default function CampersClient() {
  const { campers, getCampers, handleLoadMore, isLoading, total, error } =
    useCampersStore();

  const prevLoading = useRef(isLoading);
  const showLoadMore = campers.length < total && !isLoading;

  useEffect(() => {
    if (campers.length === 0) {
      getCampers(1);
    }
  }, []);

  useEffect(() => {
    const isFinishedLoading =
      prevLoading.current === true && isLoading === false;
    if (isFinishedLoading && campers.length === 0 && !error) {
      toast.error("No campers found.");
    }
    prevLoading.current = isLoading;
  }, [isLoading, campers.length, error]);

  return (
    <section className={css.listSection}>
      {isLoading && campers.length === 0 && <Loader />}

      {error && <p className={css.error}>{error}</p>}

      {campers.length > 0 && (
        <>
          <ul className={css.list}>
            {campers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </ul>

          {isLoading && campers.length > 0 && <Loader />}

          {showLoadMore && (
            <div onClick={handleLoadMore}>
              <Button
                className={css.loadMoreBtn}
                type="button"
                variant="loader"
              >
                Load more
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
