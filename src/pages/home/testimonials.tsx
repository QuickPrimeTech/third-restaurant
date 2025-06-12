import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "An absolutely extraordinary dining experience. Every dish was a masterpiece.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      text: "The ambiance is unmatched. Perfect for special occasions.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      text: "Exceptional service and the most incredible flavors I've ever experienced.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-amber-400 font-semibold">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
