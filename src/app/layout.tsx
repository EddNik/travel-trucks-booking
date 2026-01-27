import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks | Rent Your Best Camper",
  description:
    "Find and book the best campervans for your journey across Ukraine.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TravelTrucks | Rent Your Best Camper",
    description:
      "Find and book the best campervans for your journey across Ukraine.",
    url: "https://traveltrucks-booking.vercel.app/",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TravelTrucks Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, inter.variable)}>{children}</body>
    </html>
  );
}
