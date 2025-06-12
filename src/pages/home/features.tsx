import { Star, Award, Users, Wine } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
          Why Choose The Obsidian Plate
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Seasonal Ingredients
            </h3>
            <p className="text-gray-400 text-sm">
              Fresh, locally-sourced ingredients that change with the seasons
            </p>
          </div>
          <div className="text-center">
            <Wine className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Wine Pairings
            </h3>
            <p className="text-gray-400 text-sm">
              Expertly curated wine selections to complement every dish
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Intimate Ambiance
            </h3>
            <p className="text-gray-400 text-sm">
              Sophisticated atmosphere perfect for special occasions
            </p>
          </div>
          <div className="text-center">
            <Star className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Exceptional Service
            </h3>
            <p className="text-gray-400 text-sm">
              Attentive staff dedicated to creating memorable experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
