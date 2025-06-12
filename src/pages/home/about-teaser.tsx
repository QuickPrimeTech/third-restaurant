import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function AboutTeaser() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At The Obsidian Plate, we believe that dining is an art form.
              Every dish is crafted with precision, passion, and the finest
              ingredients sourced from around the world. Our commitment to
              culinary excellence creates an atmosphere where memories are made
              and flavors are never forgotten.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              width={1200}
              height={1200}
              src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749718109/images_20_abljer.jpg"
              alt="Chef preparing food"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
