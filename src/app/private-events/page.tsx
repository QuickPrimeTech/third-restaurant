"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Calendar, Star, Wine, Utensils, Music } from "lucide-react";

export default function PrivateEventsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    budget: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event inquiry submitted:", formData);
    alert(
      "Thank you! Your private event inquiry has been submitted. Our events coordinator will contact you within 24 hours."
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749737617/valentine-s-day-celebration-with-flowers_23-2151917809_szp0fk.jpg",
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
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749737618/romantic-man-giving-rose-woman-date_53876-46183_juysmg.jpg",
      description:
        "Elegant space for larger gatherings, weddings, and corporate events.",
    },
    {
      name: "Chef&apos;s Table",
      capacity: "6-8 guests",
      features: [
        "Kitchen view",
        "Chef interaction",
        "Wine pairing",
        "Exclusive menu",
      ],
      image:
        "https://res.cloudinary.com/dhlyei79o/image/upload/v1749737618/classic-luxury-style-restaurant-with-tables-chairs_140725-9390_b7qurr.jpg",
      description:
        "An exclusive culinary experience with front-row seats to our kitchen.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Corporate Dinner",
      text: "The Obsidian Plate exceeded all expectations for our company&rsquo;s annual dinner. The service was impeccable and the food was extraordinary.",
      rating: 5,
    },
    {
      name: "Michael &amp; Emma",
      event: "Wedding Reception",
      text: "Our wedding reception was absolutely perfect. The team handled every detail with care and professionalism.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dhlyei79o/image/upload/v1749737618/classic-luxury-style-restaurant-with-tables-chairs_140725-9390_b7qurr.jpg" // Replace with your own Cloudinary image URL
          alt="Event background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Optional: Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content */}
        <div className="relative z-20">
          <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">
            Host Your Unforgettable Event
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From intimate celebrations to grand occasions, The Obsidian Plate
            provides the perfect setting for your most important moments
          </p>
        </div>
      </section>

      {/* Event Spaces */}
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
                  <Image
                    width={1200}
                    height={900}
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

      {/* Customization Options */}
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
                  Curated wine pairings, signature cocktails, and premium
                  beverage selections for your event.
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
                  Live music arrangements, DJ services, and audiovisual
                  equipment for presentations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
                    &quot;{testimonial.text}&quot;
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

      {/* Inquiry Form */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="font-serif text-3xl text-amber-400 text-center">
                Plan Your Event
              </CardTitle>
              <p className="text-gray-300 text-center">
                Tell us about your vision and we&apos;ll make it a reality
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventType" className="text-gray-300">
                      Event Type
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("eventType", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">
                          Corporate Dinner
                        </SelectItem>
                        <SelectItem value="wedding">
                          Wedding Reception
                        </SelectItem>
                        <SelectItem value="birthday">
                          Birthday Celebration
                        </SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="holiday">Holiday Party</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-gray-300">
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-gray-300">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={(e) =>
                        handleInputChange("guests", e.target.value)
                      }
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-gray-300">
                    Estimated Budget (Optional)
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                      <SelectItem value="20k-plus">$20,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requirements" className="text-gray-300">
                    Special Requirements
                  </Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) =>
                      handleInputChange("requirements", e.target.value)
                    }
                    placeholder="Dietary restrictions, decorations, entertainment, AV needs, etc."
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Submit Event Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-amber-400 mb-8">
            Ready to Plan Your Event?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Our dedicated events coordinator is here to help bring your vision
            to life
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Events Coordinator
                </h3>
                <p className="text-gray-300 text-sm mb-2">Alexandra Martinez</p>
                <p className="text-amber-400">events@obsidianplate.com</p>
                <p className="text-amber-400">(555) 123-4568</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Response Time</h3>
                <p className="text-gray-300 text-sm mb-2">Within 24 hours</p>
                <p className="text-amber-400">Monday - Friday</p>
                <p className="text-amber-400">9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
