import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function SignatureDishes() {
  const signatureDishes = [
    {
      name: "Obsidian Wagyu",
      description:
        "Premium A5 Wagyu beef with black truffle reduction and seasonal vegetables",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718095/lunch_2_epqx55.jpg",
    },
    {
      name: "Emerald Sea Bass",
      description:
        "Pan-seared Chilean sea bass with emerald herb crust and saffron foam",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718110/lunch_7_kzmfn1.jpg",
    },
    {
      name: "Golden Soufflé",
      description:
        "Decadent chocolate soufflé with gold leaf and vanilla bean ice cream",
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718114/lunch_3_xbgap9.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
          Signature Creations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 overflow-hidden hover:border-amber-400 transition-colors duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  width={900}
                  height={1200}
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-amber-400 mb-3">
                  {dish.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Link href="/menu">Explore Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
