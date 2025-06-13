import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  caption: string;
}

interface LightboxProps {
  currentImage: GalleryImage | null;
  closeLightbox: () => void;
  navigateLightbox: (direction: "prev" | "next") => void;
}

export default function Lightbox({
  currentImage,
  closeLightbox,
  navigateLightbox,
}: LightboxProps) {
  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={closeLightbox}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <button
          onClick={() => navigateLightbox("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => navigateLightbox("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative w-full h-[80vh]">
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.caption}
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
          <p className="text-center font-medium">{currentImage.caption}</p>
        </div>
      </div>
    </div>
  );
}
