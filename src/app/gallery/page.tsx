"use client";

import { useState } from "react";
import GalleryHeader from "@/pages/gallery/gallery-header";
import CategoryFilter from "@/pages/gallery/category-filter";
import GalleryGrid from "@/pages/gallery/gallery-grid";
import Lightbox from "@/pages/gallery/lightbox";
import GalleryCTA from "@/pages/gallery/gallery-cta";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "dishes", name: "Dishes" },
    { id: "interior", name: "Interior" },
    { id: "events", name: "Events" },
    { id: "behind-scenes", name: "Behind the Scenes" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718095/lunch_2_epqx55.jpg",
      category: "dishes",
      caption: "Obsidian Wagyu with black truffle reduction",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718090/images_16_klyzmt.jpg",
      category: "interior",
      caption: "Main dining room ambiance",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718079/images_14_r942xy.jpg",
      category: "dishes",
      caption: "Emerald Sea Bass with herb crust",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718098/images_17_kipmry.jpg",
      category: "events",
      caption: "Private dining room setup",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718073/images_10_hvfzxs.jpg",
      category: "behind-scenes",
      caption: "Chef preparing signature dish",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718085/images_15_awk2m0.jpg",
      category: "dishes",
      caption: "Golden Soufflé with vanilla ice cream",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718098/images_17_kipmry.jpg",
      category: "interior",
      caption: "Bar area with ambient lighting",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749737618/romantic-man-giving-rose-woman-date_53876-46183_juysmg.jpg",
      category: "events",
      caption: "Wedding reception in Golden Hall",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749737618/classic-luxury-style-restaurant-with-tables-chairs_140725-9390_b7qurr.jpg",
      category: "behind-scenes",
      caption: "Kitchen team in action",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749737617/valentine-s-day-celebration-with-flowers_23-2151917809_szp0fk.jpg",
      category: "dishes",
      caption: "Artisanal cocktail preparation",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718074/images_5_q9wv7o.jpg",
      category: "interior",
      caption: "Chef's table with kitchen view",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718073/images_2_udda58.jpg",
      category: "events",
      caption: "Corporate dinner setup",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === lightboxImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = lightboxImage
    ? filteredImages.find((img) => img.id === lightboxImage)
    : null;

  return (
    <div className="min-h-screen pt-20">
      <GalleryHeader />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <GalleryGrid images={filteredImages} openLightbox={openLightbox} />
      <Lightbox
        currentImage={currentLightboxImage || null}
        closeLightbox={closeLightbox}
        navigateLightbox={navigateLightbox}
      />
      <GalleryCTA />
    </div>
  );
}
