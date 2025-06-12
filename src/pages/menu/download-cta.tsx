import { Button } from "@/components/ui/button";

export default function DownloadCTA() {
  return (
    <section className="py-12 px-4 text-center border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl font-bold text-amber-400 mb-4">
          Take Our Menu With You
        </h2>
        <p className="text-gray-300 mb-6">
          Download a printable version of our complete menu
        </p>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          Download PDF Menu
        </Button>
      </div>
    </section>
  );
}
