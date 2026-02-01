import { Camper } from "../../types/camper";
import css from "./VehicleList.module.css";

const VehicleList = ({ camper }: { camper: Camper }) => {
  return (
    <>
      <h3 className={css.vehicleTitle}>Vehicle details</h3>
      <ul className={css.vehicleList}>
        <li className={css.vehicleItem}>
          <p className={css.vehicleInfo}>Form</p>
          <p className={css.vehicleInfo}>{camper.form}</p>
        </li>
        <li className={css.vehicleItem}>
          <p className={css.vehicleInfo}>Length</p>
          <p className={css.vehicleInfo}>{camper.length}</p>
        </li>
        <li className={css.vehicleItem}>
          <p className={css.vehicleInfo}>Width</p>
          <p className={css.vehicleInfo}>{camper.width}</p>
        </li>
        <li className={css.vehicleItem}>
          <p className={css.vehicleInfo}>Height</p>
          <p className={css.vehicleInfo}>{camper.height}</p>
        </li>
        <li className={css.vehicleItem}>
          <p className={css.vehicleInfo}>Tank</p>
          <p className={css.vehicleInfo}>{camper.tank}</p>
        </li>
        <li className={css.vehicleItem}>
          <p className={css.vehicleInfo}>Consumption</p>
          <p className={css.vehicleInfo}>{camper.consumption}</p>
        </li>
      </ul>
    </>
  );
};

export default VehicleList;
