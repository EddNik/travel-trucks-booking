"use client";

import { Camper } from "../../types/camper";
import { useState } from "react";
import FeatureList from "../FeatureList/FeatureList";
import VehicleList from "../VehicleList/VehicleList";
import css from "./CamperInfo.module.css";
import clsx from "clsx";
import BookingForm from "../BookingForm/BookingForm";
import { FaStar } from "react-icons/fa";

interface CamperInfoProps {
  camper: Camper;
}

type TabInfo = "features" | "reviews";

const CamperInfo = ({ camper }: CamperInfoProps) => {
  const [activeTab, setActiveTab] = useState<TabInfo>("features");

  return (
    <div>
      <div className={css.featureTabs}>
        <button
          className={clsx(css.tabBtn, activeTab === "features" && css.active)}
          onClick={() => {
            setActiveTab("features");
          }}
        >
          Features
        </button>
        <button
          className={clsx(css.tabBtn, activeTab === "reviews" && css.active)}
          onClick={() => {
            setActiveTab("reviews");
          }}
        >
          Reviews
        </button>
      </div>
      <div className={css.container}>
        {activeTab === "features" ? (
          <div key={camper.id} className={css.featuresContainer}>
            <FeatureList camper={camper} />
            <VehicleList camper={camper} />
          </div>
        ) : (
          <div className={css.reviewsContainer}>
            {camper.reviews.map((review, index) => (
              <div key={index}>
                <div className={css.reviewInfo}>
                  <div className={css.capitalLetter}>
                    <p className={css.userName}>{review.reviewer_name[0]}</p>
                  </div>

                  <div className={css.ratingHeader}>
                    <p className={css.reviewerName}>{review.reviewer_name}</p>
                    <div className={css.ratingStars}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={16}
                          color={
                            i < review.reviewer_rating
                              ? "var(--rating)"
                              : "var(--badges"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={css.comment}>{review.comment}</p>
              </div>
            ))}
          </div>
        )}

        <BookingForm />
      </div>
    </div>
  );
};

export default CamperInfo;
