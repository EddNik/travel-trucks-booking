import Link from "next/link";
import { clsx } from "clsx";
import css from "./Hero.module.css";
import cssBtn from "../Button/Button.module.css";

export const Hero = () => {
  return (
    <section className={clsx(css.section, "layoutContainer")}>
      <div className={css.heroContainer}>
        <div className={css.titleWrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link
          href={"/catalog"}
          className={clsx(css.heroBtn, cssBtn.btnBase, cssBtn.primary)}
        >
          View Now
        </Link>
      </div>
    </section>
  );
};
