"use client";

import Image from "next/image";

export default function MenuHeader() {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749718110/lunch_7_kzmfn1.jpg" // Replace with your Cloudinary image
        alt="Menu background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Optional: Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20">
        <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">
          Our Culinary Offerings
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Each dish is crafted with the finest ingredients and presented with
          artistic precision
        </p>
      </div>
    </section>
  );
}
