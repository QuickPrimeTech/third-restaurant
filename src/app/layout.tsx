import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "The Obsidian Plate - An Unforgettable Culinary Journey",
  description:
    "Experience refined elegance and exceptional cuisine at The Obsidian Plate. Book your table for an unforgettable dining experience.",
  openGraph: {
    title: "The Obsidian Plate - An Unforgettable Culinary Journey",
    description:
      "Experience refined elegance and exceptional cuisine at The Obsidian Plate. Book your table for an unforgettable dining experience.",
    url: "https://third-restaurant.vercel.app/",
    siteName: "The Obsidian Plate",
    images: [
      {
        url: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1750696183/OpenGraphImage_ck9ub8.png",
        width: 1200,
        height: 630,
        alt: "The Obsidian Plate - An Unforgettable Culinary Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Obsidian Plate - An Unforgettable Culinary Journey",
    description:
      "Experience refined elegance and exceptional cuisine at The Obsidian Plate. Book your table for an unforgettable dining experience.",
    images: [
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1750696183/OpenGraphImage_ck9ub8.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-gray-900 text-gray-100`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
