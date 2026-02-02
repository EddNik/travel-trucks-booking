import { getCamperById } from "../../../lib/api";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CamperDetailsClient from "./CamperDetails.client";

interface PageProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const camper = await getCamperById(id);
  return {
    title: `${camper.name} | TravelTrucks`,
    description:
      camper.description.length > 160
        ? `${camper.description.slice(0, 157)}...`
        : camper.description,
    openGraph: {
      title: `${camper.name}`,
      description:
        camper.description.length > 160
          ? `${camper.description.slice(0, 157)}...`
          : camper.description,
      url: `https://travel-trucks-booking-smoky.vercel.app/${id}`,
      siteName: "TravelTrucks",
      images: [
        {
          url:
            camper.gallery?.[0]?.thumb ||
            "https://travel-trucks-booking-smoky.vercel.app/img/hero-bg.webp",
          width: 1200,
          height: 630,
          alt: "TravelTrucks Image",
        },
      ],
    },
  };
}

export default async function CamperDetailsPage({ params }: PageProps) {
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
