"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, GlassWater, Wheat } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  dietary?: string[];
  region?: string;
}

interface MenuItemsProps {
  items: MenuItem[];
}

export default function MenuItems({ items }: MenuItemsProps) {
  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case "vegetarian":
        return <Leaf className="h-4 w-4 text-green-500" />;
      case "gluten-free":
        return <Wheat className="h-4 w-4 text-amber-500" />;
      case "dairy-free":
        return <GlassWater className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden hover:border-amber-400 transition-colors duration-300"
            >
              {item.image && (
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-bold text-amber-400">
                    {item.name}
                  </h3>
                  <span className="text-amber-400 font-semibold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.region && (
                  <p className="text-gray-400 text-sm mb-4">
                    <strong>Region:</strong> {item.region}
                  </p>
                )}
                {item.dietary && (
                  <div className="flex space-x-2">
                    {item.dietary.map((diet, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-gray-600 text-gray-300"
                      >
                        <span className="flex items-center space-x-1">
                          {getDietaryIcon(diet)}
                          <span className="text-xs capitalize">
                            {diet.replace("-", " ")}
                          </span>
                        </span>
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
