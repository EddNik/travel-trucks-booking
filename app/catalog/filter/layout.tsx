import clsx from "clsx";
import css from "./LayoutCatalog.module.css";

interface CatalogLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function CatalogLayout({
  children,
  sidebar,
}: CatalogLayoutProps) {
  return (
    <section className={clsx("layoutContainer", css.catalogContainer)}>
      <aside className={css.sidebarWrapper}>{sidebar}</aside>
      <main className={css.catalogWrapper}>{children}</main>
    </section>
  );
}
