"use client";
import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={clsx(css.header, "layoutContainer")}>
      <div className={css.headerContainer}>
        <Link href="/" aria-label="Home">
          <Image
            src="/img/Logo.svg"
            alt="TravelTrucks Logo"
            width={136}
            height={16}
            priority
          />
        </Link>

        <nav aria-label="Main Navigation Home Catalog">
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link
                href="/"
                className={clsx(css.navLink, pathname === "/" && css.active)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/catalog"
                className={clsx(
                  css.navLink,
                  pathname === "/catalog" && css.active,
                )}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
