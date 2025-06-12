"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming you use a Textarea component

export default function EventInquiryForm() {
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

  return (
    <section className="py-16 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="font-serif text-3xl text-amber-400 text-center">
              Plan Your Event
            </CardTitle>
            <p className="text-gray-300 text-center">
              Tell us about your vision and we'll make it a reality
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
                    onChange={(e) => handleInputChange("name", e.target.value)}
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="eventType" className="text-gray-300">
                    Type of Event
                  </Label>
                  <Input
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) =>
                      handleInputChange("eventType", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="date" className="text-gray-300">
                    Event Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className="text-gray-300">
                    Number of Guests
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    value={formData.guests}
                    onChange={(e) =>
                      handleInputChange("guests", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="budget" className="text-gray-300">
                    Estimated Budget
                  </Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
                    }
                  />
                </div>
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
                />
              </div>
              <button
                type="submit"
                className="bg-amber-400 text-gray-900 px-6 py-2 rounded hover:bg-amber-500 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
