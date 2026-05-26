"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The intuitive design and smart features of Capable made it easy to find meaningful connections.",
  },
  {
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I love how Capable helps me stay in touch with friends and meet new people.",
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "With Capable, I've expanded my network and found genuine connections.",
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "Capable’s features are fantastic for both meeting new people and staying connected.",
  },
  {
    name: "Laura Martinez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I'm amazed at how Capable’s advanced privacy controls enhanced my experience.",
  },
  {
    name: "James Taylor",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    review:
      "The community support and engaging multimedia sharing made it my favorite platform.",
  },
];

function TestimonialCard({
  name,
  image,
  review,
}: {
  name: string;
  image: string;
  review: string;
}) {
  return (
    <div className="relative w-[360px] min-h-[220px] rounded-[22px] border border-[#E5E7EB] bg-[#F8FAFC] p-7 shadow-sm overflow-hidden">
      
      {/* Dotted Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-linear(#000 0.7px, transparent 0.7px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Quote Icon */}
      <div className="absolute top-5 right-5 z-10">
        <Quote className="w-6 h-6 text-black fill-black" />
      </div>

      <div className="relative z-10">
        
        {/* User */}
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            width={52}
            height={52}
            className="rounded-full object-cover"
          />

          <div>
            <h3 className="text-lg font-bold text-[#1B1B1B]">
              {name}
            </h3>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FFC107] text-sm">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5E7EB] my-5"></div>

        {/* Review */}
        <p className="text-[#4B5563] leading-7 text-[15px]">
          {review}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-10 lg:py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 relative">
        
        {/* Heading */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-[28px] md:text-4xl font-bold text-[#111827]">
            Real Stories From Happy Customers
          </h2>
        </div>
<div className="hidden lg:block">

        {/* Left Blur */}
        <div className="absolute left-0 top-0 z-20 h-full w-[220px] bg-linear-to-r from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent pointer-events-none" />

        {/* Right Blur */}
        <div className="absolute right-0 top-0 z-20 h-full w-[220px] bg-linear-to-l from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent pointer-events-none" />
</div>

        {/* First Row */}
        <Marquee speed={40} pauseOnHover gradient={false}>
          <div className="flex gap-8 mr-8">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </div>
        </Marquee>

        {/* Second Row */}
        <div className="mt-8">
          <Marquee
            speed={40}
            direction="right"
            pauseOnHover
            gradient={false}
          >
            <div className="flex gap-8 mr-8">
              {testimonials.map((item, index) => (
                <TestimonialCard key={index} {...item} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}