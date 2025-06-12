import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749718102/lunch_4_ffpkw4.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-amber-400 mb-6">
          The Obsidian Plate
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          An Unforgettable Culinary Journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900"
          >
            <Link href="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
