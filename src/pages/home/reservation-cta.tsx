import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReservationCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-amber-400 mb-6">
          Ready for an Extraordinary Experience?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Reserve your table today and embark on a culinary journey like no
          other.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          <Link href="/reservations">Book Your Table</Link>
        </Button>
      </div>
    </section>
  );
}
