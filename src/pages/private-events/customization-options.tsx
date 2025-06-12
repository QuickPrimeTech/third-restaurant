import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Wine, Music } from "lucide-react";

export default function CustomizationOptions() {
  return (
    <section className="py-16 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
          Customization Options
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Utensils className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Custom Menus
              </h3>
              <p className="text-gray-300 text-sm">
                Work with our chef to create a personalized menu that reflects
                your taste and dietary requirements.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Wine className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Beverage Packages
              </h3>
              <p className="text-gray-300 text-sm">
                Curated wine pairings, signature cocktails, and premium beverage
                selections for your event.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Music className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Entertainment
              </h3>
              <p className="text-gray-300 text-sm">
                Live music arrangements, DJ services, and audiovisual equipment
                for presentations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
