"use client";

import { toast } from "sonner";

const pricingPlans = [
  {
    title: "Hourly Parking",
    price: "25",
    duration: "/per hr",
    description: "Perfect for quick pick-ups and short stays",
    features: [
      "Minimum 2 hours",
      "Ideal for quick errands & pickups",
      "Safe & secured parking",
      "24/7 CCTV monitoring",
      "Elevator payments",
    ],
    popular: false,
  },
  {
    title: "Overnight Parking",
    price: "450",
    duration: "/per night",
    description: "Ideal for overnight flights and long weekends",
    features: [
      "Up to 24 hours",
      "Perfect for overnight trips",
      "Safe & secured parking",
      "24/7 CCTV monitoring",
      "Cashless payments",
    ],
    popular: true,
  },
  {
    title: "Professional",
    price: "4,000",
    duration: "/per month",
    description: "Best for frequent travelers and long-term parking",
    features: [
      "Unlimited access.",
      "Ideal for long-term parking",
      "Safe & secured parking",
      "Elevator & PWD access",
      "Priority customer support",
    ],
    popular: false,
  },
];

export default function PricingSection() {
    const handleClick=()=>{
        toast.success("Booked successfully!");
    }
  return (
    <section className="bg-linear-to-b from-[#225896] to-[#0B1C30] py-10 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[28px] md:text-4xl font-bold">
            Affordable Rates for Every Traveler
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-[#f7f7f7] rounded-[24px] p-8 shadow-xl"
            >
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-[#5f72ff] text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Title */}
              <p className="text-[#5C77FF] text-lg font-semibold">
                {plan.title}
              </p>

              {/* Price */}
              <div className="flex items-end mt-4">
                <h3 className="text-[40px] font-bold text-[#161c3d]">
                  P {plan.price}
                </h3>
                <span className="text-[#707075] ml-2 mb-1 text-sm">
                  {plan.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#707075] text-sm mt-4 leading-6">
                {plan.description}
              </p>

              {/* Button */}
              <button onClick={handleClick} className="w-full mt-8 bg-[#3355FF] hover:bg-[#3f52f5] hover:scale-105 cursor-pointer transition-all duration-300 text-white py-[14px] rounded-xl font-medium">
                Book Now
              </button>

              {/* Features */}
              <ul className="mt-8 space-y-5">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#66677D] "
                  >
                    {/* Check Icon */}
                    <div className="w-5 h-5 rounded-full bg-[#F6F7F8] flex items-center justify-center  text-gray-600">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#F6F7F8"/>
<path d="M7 13.9545L9.5 16.5L17 8.5" stroke="#66677D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    </div>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}