"use client";

import type React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
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
import { MapPin, Phone, Mail, Clock, Car, Users, Heart } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will respond within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const faqItems = [
    {
      question: "Do you offer valet parking?",
      answer:
        "Yes, complimentary valet parking is available Tuesday through Saturday evenings.",
    },
    {
      question: "Is the restaurant wheelchair accessible?",
      answer:
        "Absolutely. We are fully wheelchair accessible with accessible restrooms and seating options.",
    },
    {
      question: "Do you allow pets?",
      answer:
        "We welcome service animals. Unfortunately, we cannot accommodate pets in our dining areas.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24 hours notice for cancellations. Same-day cancellations may incur a fee.",
    },
  ];

  const mapCenter = {
    lat: 40.7128, // Example coordinates (NYC), replace with your location
    lng: -74.006,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // Ensure your .env.local has this
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4 text-center">
        <h1 className="font-serif text-5xl font-bold text-amber-400 mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We&apos;re here to assist you with reservations, inquiries, and any
          questions about your dining experience
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-400 flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-white font-semibold">The Obsidian Plate</p>
                  <p className="text-gray-300">123 Culinary Boulevard</p>
                  <p className="text-gray-300">Downtown District</p>
                  <p className="text-gray-300">Metropolitan City, MC 12345</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-400 flex items-center">
                  <Phone className="h-6 w-6 mr-2" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-white font-semibold">General Inquiries</p>
                  <p className="text-amber-400">(555) 123-4567</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Reservations</p>
                  <p className="text-amber-400">(555) 123-4567</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Private Events</p>
                  <p className="text-amber-400">(555) 123-4568</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-400 flex items-center">
                  <Mail className="h-6 w-6 mr-2" />
                  Email Addresses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-white font-semibold">General Inquiries</p>
                  <p className="text-amber-400">info@obsidianplate.com</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Reservations</p>
                  <p className="text-amber-400">
                    reservations@obsidianplate.com
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold">Private Events</p>
                  <p className="text-amber-400">events@obsidianplate.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-400 flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Tuesday - Thursday</span>
                  <span className="text-white">5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Friday - Saturday</span>
                  <span className="text-white">5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white">5:00 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday</span>
                  <span className="text-amber-400">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-400">
                  Send Us a Message
                </CardTitle>
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

                  <div>
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("subject", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reservation">
                          Reservation Inquiry
                        </SelectItem>
                        <SelectItem value="event">Private Event</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="general">
                          General Question
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Please share your message or inquiry..."
                      className="bg-gray-700 border-gray-600 text-white"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-amber-400">
                  Find Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                  {isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={{ width: "100%", height: "100%" }}
                      center={mapCenter}
                      zoom={14}
                    >
                      <Marker position={mapCenter} />
                    </GoogleMap>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-300">Loading map...</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="font-serif text-4xl font-bold text-amber-400 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Car className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Parking
              </h3>
              <p className="text-gray-300 text-sm">
                Complimentary valet parking available Tuesday-Saturday evenings.
                Street parking also available.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Accessibility
              </h3>
              <p className="text-gray-300 text-sm">
                Fully wheelchair accessible with accessible restrooms and
                accommodating seating arrangements.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Special Occasions
              </h3>
              <p className="text-gray-300 text-sm">
                Let us know about birthdays, anniversaries, or special
                celebrations when making your reservation.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
