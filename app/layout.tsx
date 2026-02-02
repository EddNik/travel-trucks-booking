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
  keywords: [
    "оренда кемперів",
    "кемпери україна",
    "бронювання кемперів",
    "подорожі",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    title: "TravelTrucks — Оренда кемперів",
    description:
      "Find and book the best campervans for your journey across Ukraine. - Знайдіть та забронюйте найкращі кемпери для подорожей Україною.",
    url: "https://travel-trucks-booking-smoky.vercel.app/",
    siteName: "TravelTrucks",
    images: [
      {
        url: "/img/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "TravelTrucks",
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
      <head>
        <link
          rel="preconnect"
          href="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"
        />
        <link
          rel="dns-prefetch"
          href="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"
        />
      </head>
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
