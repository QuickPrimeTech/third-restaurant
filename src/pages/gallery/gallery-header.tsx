import Image from "next/image";
export default function GalleryHeader() {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749718071/images_4_t8l5rp.jpg" // Replace with your actual Cloudinary image URL
        alt="Visual journey background"
        fill
        className="object-cover z-0 "
        priority
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20">
        <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">
          A Visual Journey
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover the artistry and elegance that defines The Obsidian Plate
          through our curated gallery
        </p>
      </div>
    </section>
  );
}
