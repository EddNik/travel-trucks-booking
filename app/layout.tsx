import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Header } from "../components/Header/Header";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description:
    "Find and book the best campervans for your journey across Ukraine.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TravelTrucks",
    description:
      "Find and book the best campervans for your journey across Ukraine.",
    url: "https://travel-trucks-booking-snowy.vercel.app/",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/hero-bg.webp",
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
      <body className={clsx(inter.className, inter.variable)}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "10px",
              maxWidth: "100%",
            },
          }}
        />
      </body>
    </html>
  );
}
