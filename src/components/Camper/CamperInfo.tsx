"use client";

import { Camper } from "@/types/camper";
import { useState } from "react";
import FeatureList from "../FeatureList/FeatureList";
import VehicleList from "../VehicleList/VehicleList";
import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: Camper;
}

type TabInfo = "features" | "reviews";

const CamperInfo = ({ camper }: CamperInfoProps) => {
  const [activeTab, setActiveTab] = useState<TabInfo>("features");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setActiveTab("features");
          }}
        >
          Features
        </button>
        <button
          onClick={() => {
            setActiveTab("reviews");
          }}
        >
          Reviews
        </button>
      </div>
      <div>
        {activeTab === "features" ? (
          <div key={camper.id} className={css.container}>
            <FeatureList camper={camper} />
            <VehicleList camper={camper} />
          </div>
        ) : (
          camper.reviews.map((review, index) => (
            <div key={index}>
              <p>{review.reviewer_name}</p>
              <p>{review.comment}</p>
              <p>Rating: {review.reviewer_rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CamperInfo;
