import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function EventSpaces() {
  const eventSpaces = [
    {
      name: "The Obsidian Room",
      capacity: "12-20 guests",
      features: [
        "Private bar",
        "Customizable lighting",
        "AV equipment",
        "Dedicated service staff",
      ],
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Our intimate private dining room perfect for business dinners and special celebrations.",
    },
    {
      name: "The Golden Hall",
      capacity: "30-50 guests",
      features: [
        "Full buyout option",
        "Live music setup",
        "Custom menu options",
        "Valet parking",
      ],
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Elegant space for larger gatherings, weddings, and corporate events.",
    },
    {
      name: "Chef's Table",
      capacity: "6-8 guests",
      features: [
        "Kitchen view",
        "Chef interaction",
        "Wine pairing",
        "Exclusive menu",
      ],
      image: "/placeholder.svg?height=300&width=400",
      description:
        "An exclusive culinary experience with front-row seats to our kitchen.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
          Our Event Spaces
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {eventSpaces.map((space, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={space.image || "/placeholder.svg"}
                  alt={space.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-amber-400 mb-2">
                  {space.name}
                </h3>
                <p className="text-amber-300 font-medium mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {space.capacity}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {space.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">
                    Key Features:
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {space.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
