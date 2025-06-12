import HeroSection from "@/pages/home/hero-section";
import AboutTeaser from "@/pages/home/about-teaser";
import SignatureDishes from "@/pages/home/signature-dishes";
import Features from "@/pages/home/features";
import Testimonials from "@/pages/home/testimonials";
import ReservationCTA from "@/pages/home/reservation-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutTeaser />
      <SignatureDishes />
      <Features />
      <Testimonials />
      <ReservationCTA />
    </div>
  );
}
