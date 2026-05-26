

import { HomeHero } from "@/components/shared/HomeHero";
import ParkingSection from "@/components/ParkingSection";
import TrustedSection from "@/components/TrustedSection";
import PublicParking from "@/components/PublicParking";
import ThreeStepsSection from "@/components/ThreeStepsSection";
import PricingSection from "@/components/PricingSection";
import VisitUsSection from "@/components/VisitUsSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-white text-[#191919]">
      <HomeHero />
      <ParkingSection />
      <TrustedSection/>
      <PublicParking/>
      <ThreeStepsSection/>
      <PricingSection/>
      <TestimonialsSection/>
      <VisitUsSection/>
      <CTASection/>
    </main>
  );
}
