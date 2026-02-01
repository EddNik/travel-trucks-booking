import { getCamperById } from "@/lib/api";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CamperDetailsClient from "./CamperDetails.client";
import css from "./CamperDetails.module.css";
import clsx from "clsx";

interface PageProps {
  params: Promise<{ id: string }>;
}
// Функція для генерації метаданих (опціонально)
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const camper = await getCamperById(id);
  return {
    title: `${camper.name} | TravelTrucks`,
    description: `${camper.description.slice(0, 30)}`,
  };
}

export default async function CamperDetailsPage({ params }: PageProps) {
  // Завантажуємо дані на сервері

  const queryClient = new QueryClient();
  const id = (await params).id;

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className={"layoutContainer"}>
        <CamperDetailsClient />
      </section>
    </HydrationBoundary>
  );
}
