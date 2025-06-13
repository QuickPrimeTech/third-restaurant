"use client";

import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  caption: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  openLightbox: (imageId: number) => void;
}

export default function GalleryGrid({
  images = [],
  openLightbox,
}: GalleryGridProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {images.length === 0 ? (
          <p className="text-center text-gray-400">No images available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption || "Gallery image"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={false}
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
