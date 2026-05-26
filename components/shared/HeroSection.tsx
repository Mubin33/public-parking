import { Car, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/shared/QuoteForm";

export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-1 items-center py-10 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] w-[90%] items-center gap-12 lg:grid-cols-12">
        {/* Left Column - Hero Content */}
        <div className="space-y-6 lg:col-span-7 text-left">
          <h1 className="text-3xl md:text-4xl xl:text-[56px] font-bold tracking-tight text-white leading-[1.15] ">
            Your Safe, Hassle-Free &
            <br />
            Cashless 24/7 Parking near
            <br />
            the Airport
          </h1>

          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/80 font-medium ">
            Secure, flood-free, and fully monitored parking with hourly, overnight, and monthly options just minutes from the airport.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-lg bg-[#FC681E] px-8 text-base font-bold text-white hover:scale-105 transition-colors  gap-2"
            >
              <Link href="#quote">
                <Car className="size-5 shrink-0" />
                Book Parking
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-2 border-white/80 hover:bg-white/10 hover:text-white rounded-lg px-8 text-base font-bold text-white transition-colors"
            >
              <Link href="#services">View Rates</Link>
            </Button>
          </div>
        </div>

        {/* Right Column - Reservation Card Form */}
        <div id="quote" className="flex justify-center md:justify-start lg:justify-end lg:col-span-5 w-full">
          <QuoteForm />
        </div>
      </div>

  
    </section>
  );
}
