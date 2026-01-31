import { Camper } from "@/types/camper";

import css from "./FeatureList.module.css";
import SpriteIcon from "../SpriteIcon/SpriteIcon";

const FeatureList = ({ camper }: { camper: Camper }) => {
  return (
    <>
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
            <SpriteIcon
              id="kitchen"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>Kitchen</span>
          </li>
        )}
        {camper.bathroom && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="bathroom"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>Bathroom</span>
          </li>
        )}
        {camper.AC && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="ac"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>AC</span>
          </li>
        )}
        {camper.TV && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="tv"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>TV</span>
          </li>
        )}
        {camper.radio && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="radio"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>Radio</span>
          </li>
        )}
        {camper.refrigerator && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="fridge"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>Refrigerator</span>
          </li>
        )}
        {camper.microwave && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="microwave"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>Microwave</span>
          </li>
        )}
        {camper.gas && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="gas-stove"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>GAS</span>
          </li>
        )}
        {camper.water && (
          <li className={css.featureItem}>
            <SpriteIcon
              id="water"
              width={20}
              height={20}
              className={css.spriteIcon}
            />
            <span>Water</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default FeatureList;
