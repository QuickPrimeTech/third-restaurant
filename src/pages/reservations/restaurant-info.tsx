import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Phone, Mail, Users } from "lucide-react";

export default function RestaurantInfo() {
  return (
    <div className="space-y-8">
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

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-amber-400">
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-2">
              Cancellation Policy
            </h4>
            <p className="text-gray-300 text-sm">
              Please provide at least 24 hours notice for cancellations.
              Same-day cancellations may incur a fee.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Dress Code</h4>
            <p className="text-gray-300 text-sm">
              Smart casual to formal attire. We recommend business casual or
              cocktail attire for the optimal experience.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Large Parties</h4>
            <p className="text-gray-300 text-sm">
              Parties of 9 or more require special arrangements. Please contact
              us directly for private event options.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-amber-400">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-amber-400" />
            <div>
              <p className="text-white font-medium">Reservations</p>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-amber-400" />
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-gray-300">reservations@obsidianplate.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-amber-400" />
            <div>
              <p className="text-white font-medium">Private Events</p>
              <p className="text-gray-300">events@obsidianplate.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
