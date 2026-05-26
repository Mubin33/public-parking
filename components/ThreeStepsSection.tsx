"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Reserve Your Slot",
    description:
      "Round the clock space online or buy phone in minutes.",
  },
  {
    number: "02",
    title: "Arrive & Check-In",
    description:
      "Quick vehicle-verification and smooth entry process.",
  },
  {
    number: "03",
    title: "Fly with Peace of Mind",
    description:
      "Enjoy secure parking while your vehicle stays protected 24/7.",
  },
];

export default function ThreeStepsSection() {
  return (
    <section className="bg-[#f5f5f5] py-10 lg:py-20 ">
      <div className="mx-auto max-w-[1400px] px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-[28px] md:text-4xl font-bold text-[#111827] ">
            Three Steps to Full Operation
          </h2>

          <p className="mt-4 text-base text-[#46464D]  leading-6">
            No complex training, no weeks-long setup. Most hotels go live
            with the channel manager in one day.
          </p>

          {/* Steps */}
          <div className="mt-14 relative">
            {/* Vertical Line */}
            <div className="absolute left-[18px] top-6 bottom-6 w-px bg-[#3355FF]"></div>

            <div className="space-y-14">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 relative">

                  {/* Number */}
                  <div className="w-13 h-10 rounded-xl border border-[#3355FF] bg-white flex items-center justify-center text-[#111827] font-semibold text-2xl z-10">
                    {step.number}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0B1C30]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[#46464D] text-base leading-6 ">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[24px] shadow-2xl">
            <Image
              src="/home/steps.png"
              alt="Parking"
              width={700}
              height={800}
              className="w-full h-[620px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}