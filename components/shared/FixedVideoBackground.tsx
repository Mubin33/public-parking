"use client";

import Image from "next/image";

export function FixedVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/home/hero.jpeg"
        alt="Parking Garage Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-blue-950/60 bg-linear-to-b from-blue-900/30 to-blue-950/80" aria-hidden />
    </div>
  );
}
