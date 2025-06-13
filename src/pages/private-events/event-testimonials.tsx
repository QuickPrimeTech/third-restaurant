import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function EventTestimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Corporate Dinner",
      text: "The Obsidian Plate exceeded all expectations for our company's annual dinner. The service was impeccable and the food was extraordinary.",
      rating: 5,
    },
    {
      name: "Michael & Emma",
      event: "Wedding Reception",
      text: "Our wedding reception was absolutely perfect. The team handled every detail with care and professionalism.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
                  {"“"}
                  {testimonial.text}
                  {"”"}
                </p>
                <div>
                  <p className="text-amber-400 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
