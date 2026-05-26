"use client";

import { MapPin } from "lucide-react";

export default function VisitUsSection() {
    return (
        <section
            className="relative overflow-hidden py-20 px-4 md:px-8"
            style={{
                backgroundImage: "url('/home/visit.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >


            <div className="relative mx-auto max-w-[1400px] px-4">

                {/* Heading */}
                <h2 className="text-center text-[#F5F5F5] text-[28px] md:text-4xl font-bold mb-14">
                    Visit Us Today
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

                    {/* Left Side */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="bg-white rounded-[24px] px-8 py-7 w-full max-w-[520px] shadow-2xl">

                            <div className="flex items-start gap-5">

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-[#0F1B3D] flex items-center justify-center shrink-0">
                                    <MapPin className="text-white w-6 h-6" />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#1F1F1F] leading-tight">
                                        Conveniently Located
                                    </h3>

                                    <p className="text-[#3157FF] text-[24px] font-bold leading-tight mt-1">
                                        Near NAIA
                                    </p>

                                    <p className="text-[#3B3B3B] text-xl mt-3">
                                        Pascor Drive, Paranaque City
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Map */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="rounded-[18px] overflow-hidden shadow-2xl w-full max-w-[600px] h-[519px]">

                            <iframe
                                src="https://www.google.com/maps?q=1095%20E%2075th%20St,%20Naperville,%20IL%2060565,%20USA&output=embed"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0 grayscale-10"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}