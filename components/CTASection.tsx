"use client";

import { toast } from "sonner";

export default function CTASection() {
     const handleClick=()=>{
        toast.success("Booked successfully!");
    }
  return (
    <section className="bg-[#f2f2f2] py-20 px-4">
      <div
        className="max-w-[1200px] mx-auto rounded-[28px] overflow-hidden relative"
        style={{
          backgroundImage: "url('/home/cta.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
     

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
          
          <h2 className="text-white text-[28px] md:text-5xl font-bold leading-tight max-w-4xl">
            Book Your Airport Parking Now
            <br />
            & Travel Worry- Free
          </h2>

          <p className="text-white/90 text-lg mt-8">
            Enjoy 24/7 secure parking just minutes away from NAIA Terminal 3
          </p>

          <button onClick={handleClick} className="mt-10 bg-white text-[#121668] hover:scale-105 cursor-pointer transition-all duration-300 font-semibold px-8 py-[14px] rounded-2xl shadow-lg">
            Book Your Parking Slot
          </button>
        </div>
      </div>
    </section>
  );
}