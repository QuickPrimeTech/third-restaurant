import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-bold text-amber-400">
              The Obsidian Plate
            </div>
            <p className="text-gray-400 text-sm">
              An unforgettable culinary journey through refined elegance and
              exceptional cuisine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/reservations"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/private-events"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Private Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Culinary Boulevard</li>
              <li className="text-gray-400">Downtown District</li>
              <li className="text-gray-400">Metropolitan City, MC 12345</li>
              <li className="text-amber-400">(555) 123-4567</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Tuesday - Thursday: 5:00 PM - 10:00 PM
              </li>
              <li className="text-gray-400">
                Friday - Saturday: 5:00 PM - 11:00 PM
              </li>
              <li className="text-gray-400">Sunday: 5:00 PM - 9:00 PM</li>
              <li className="text-gray-400">Monday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 The Obsidian Plate. All rights reserved.
          </p>
          <div>
            <Link
              href="https://quickprimetech.vercel.app/"
              className="text-gray-400 hover:text-amber-400 transition-colors mr-4"
            >
              Created by Quickprimetech
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://www.instagram.com/quickprimetech?igsh=MWNiMmRwZDNndHNsZQ=="
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/share/1CFGZntN2J/"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
