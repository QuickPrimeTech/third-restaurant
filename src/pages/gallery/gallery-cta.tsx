import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GalleryCTA() {
  return (
    <section className="py-16 px-4 bg-gray-800/50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-amber-400 mb-6">
          Experience It Yourself
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          These images only capture a glimpse of what awaits you at The Obsidian
          Plate. Reserve your table and create your own unforgettable memories.
        </p>
        <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
          <Link href="/reservations">Make a Reservation</Link>
        </Button>
      </div>
    </section>
  );
}
