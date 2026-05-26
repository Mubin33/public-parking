"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/home/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">

          {/* Left Section */}
          <div>
            {/* Logo */}
            <Image
              src="/home/logo.png"
              alt="Public Parking"
              width={180}
              height={60}
              className="w-auto h-auto"
            />

            <p className="text-white/90 text-sm mt-6  leading-6">
              With ParKing, you spend less time looking for parking
              and more time where it matters.
            </p>

            {/* Links + Contact */}
            <div className="flex gap-5 md:gap-16 mt-12">

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-bold text-base md:text-xl uppercase">
                  Quick Link
                </h3>

                <ul className="space-y-3 mt-6">
                  <li>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white transition"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white transition"
                    >
                      Book Now
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-bold text-base md:text-xl uppercase">
                  Contact Us
                </h3>

                <div className="space-y-5 mt-6">

                  <div className="flex items-center gap-3">
                    <Mail className="text-white w-5 h-5" />

                    <a
                      href="mailto:hello@publicparking.com"
                      className="text-white/90 hover:text-white"
                    >
                      hello@publicparking.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-white w-5 h-5" />

                    <a
                      href="tel:09088864892"
                      className="text-white/90 hover:text-white"
                    >
                      0908 886 4892
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div></div>

          {/* Right Section */}
          <div className="flex flex-col ">

       <div className="mt-5 md:mt-0">
             <h3 className="text-[#F5F5F5] font-bold text-lg  uppercase ">
              Subscribe
            </h3>

            {/* Subscribe Box */}
            <div className="bg-white rounded-xl flex items-center overflow-hidden mt-6 w-full max-w-[420px]">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-2 md:px-6 py-4 outline-none text-[#B2373099]"
              />

              <button className="bg-[#0F172A] text-white px-2 md:px-6 py-3 rounded-lg mr-2 text-sm md:text-base  font-semibold hover:bg-black transition">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-white/90 text-sm mt-5">
              Subscribe to get all the updates
            </p>
       </div>

            {/* Social Icons */}
            <div className="flex items-center ml-25 gap-6 mt-12">
              <a
                href="#"
                className="text-white hover:scale-110 transition"
              >
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="#FEFEFE" />
                </svg>

              </a>

              <a
                href="#"
                className="text-white hover:scale-110 transition"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.488 14.0895L15.25 20.4385H22.25L14.392 9.96048L20.93 2.43848H18.28L13.163 8.32448L8.75 2.43848H1.75L9.26 12.4535L2.32 20.4385H4.97L10.488 14.0895ZM16.25 18.4385L5.75 4.43848H7.75L18.25 18.4385H16.25Z" fill="#FEFEFE" />
                </svg>

              </a>

              <a
                href="#"
                className="text-white hover:scale-110 transition"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 1.43848H16.2C19.4 1.43848 22 4.03848 22 7.23848V15.6385C22 17.1767 21.3889 18.652 20.3012 19.7397C19.2135 20.8274 17.7383 21.4385 16.2 21.4385H7.8C4.6 21.4385 2 18.8385 2 15.6385V7.23848C2 5.70022 2.61107 4.22497 3.69878 3.13726C4.78649 2.04955 6.26174 1.43848 7.8 1.43848ZM7.6 3.43848C6.64522 3.43848 5.72955 3.81776 5.05442 4.49289C4.37928 5.16802 4 6.0837 4 7.03848V15.8385C4 17.8285 5.61 19.4385 7.6 19.4385H16.4C17.3548 19.4385 18.2705 19.0592 18.9456 18.3841C19.6207 17.7089 20 16.7933 20 15.8385V7.03848C20 5.04848 18.39 3.43848 16.4 3.43848H7.6ZM17.25 4.93848C17.5815 4.93848 17.8995 5.07017 18.1339 5.30459C18.3683 5.53901 18.5 5.85696 18.5 6.18848C18.5 6.52 18.3683 6.83794 18.1339 7.07236C17.8995 7.30678 17.5815 7.43848 17.25 7.43848C16.9185 7.43848 16.6005 7.30678 16.3661 7.07236C16.1317 6.83794 16 6.52 16 6.18848C16 5.85696 16.1317 5.53901 16.3661 5.30459C16.6005 5.07017 16.9185 4.93848 17.25 4.93848ZM12 6.43848C13.3261 6.43848 14.5979 6.96526 15.5355 7.90294C16.4732 8.84062 17 10.1124 17 11.4385C17 12.7646 16.4732 14.0363 15.5355 14.974C14.5979 15.9117 13.3261 16.4385 12 16.4385C10.6739 16.4385 9.40215 15.9117 8.46447 14.974C7.52678 14.0363 7 12.7646 7 11.4385C7 10.1124 7.52678 8.84062 8.46447 7.90294C9.40215 6.96526 10.6739 6.43848 12 6.43848ZM12 8.43848C11.2044 8.43848 10.4413 8.75455 9.87868 9.31716C9.31607 9.87976 9 10.6428 9 11.4385C9 12.2341 9.31607 12.9972 9.87868 13.5598C10.4413 14.1224 11.2044 14.4385 12 14.4385C12.7956 14.4385 13.5587 14.1224 14.1213 13.5598C14.6839 12.9972 15 12.2341 15 11.4385C15 10.6428 14.6839 9.87976 14.1213 9.31716C13.5587 8.75455 12.7956 8.43848 12 8.43848Z" fill="#FEFEFE" />
                </svg>

              </a>
            </div>

            {/* Copyright */}
            <p className="text-white font-semibold mt-8 text-sm  ">
              © 2026 Public Parking All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}