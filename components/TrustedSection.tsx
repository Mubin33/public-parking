"use client";

import Image from "next/image";

const stats = [
  {
    id: 1,
    icon: "/home/trust1.svg",
    value: "132",
    title: "Car Slots",
    bg: "bg-[#e9ebff]",
    text: "text-[#3341E3]",
  },
  {
    id: 2,
    icon: "/home/trust2.svg",
    value: "98",
    title: "Motor Cycle Slots",
    bg: "bg-[#f8ebe4]",
    text: "text-[#EB7711]",
  },
  {
    id: 3,
    icon: "/home/trust3.svg",
    value: "4",
    title: "Level parking Building",
    bg: "bg-[#fdeff1]",
    text: "text-[#F15856]",
  },
  {
    id: 4,
    icon: "/home/trust4.svg",
    value: "24/7",
    title: "Security Monitoring",
    bg: "bg-[#e9f7f1]",
    text: "text-[#00A861]",
  },
];

export default function TrustedSection() {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-[1400px] px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold text-black md:text-4xl">
            Trusted by Daily Travelers
          </h2>

          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Modern Parking facility built for safety, convenience, and peace of mind
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} rounded-[14px] p-8`}
            >
              <div className="flex h-full min-h-[220px] flex-col justify-between">

                {/* Icon */}
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={111}
                    height={111}
                    className="w-[111px] h-[111px] "
                  />
                </div>

                {/* Bottom Content */}
                <div className="text-right">
                  <h3 className={`text-5xl font-bold ${item.text}`}>
                    {item.value}
                  </h3>

                  <p className="mt-2 text-base font-medium text-[#191919CC]">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}