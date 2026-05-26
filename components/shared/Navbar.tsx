"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About us", href: "#about-us" },
  { label: "Book Now", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-4 lg:top-6 z-50 w-full px-4 sm:px-6">
      <div className="mx-auto max-w-[1400px] rounded-[24px] border border-white/15 bg-[#3355FF99]  shadow-xl">
        <div className="flex items-center justify-between gap-6 px-6 py-2 lg:py-[30px] sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/home/logo.png"
              alt="Public Parking"
              width={140}
              height={45}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 text-base font-semibold text-white/90 lg:flex"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-[#FC681E] font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Phone + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Phone Contact */}
            <a
              href="tel:+13314015793"
              className="flex items-center gap-3  transition-opacity hover:opacity-90 shrink-0"
            >
              <span className="flex p-[10px] items-center justify-center rounded-[4px]  bg-[#FF7A00] text-white shadow-md">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6508 18.0332C16.0583 21.8132 6.89478 12.7322 10.5008 8.93717C12.7028 6.61967 10.2158 3.97217 8.83878 2.02367C6.25428 -1.62883 0.582782 3.41417 0.753782 6.62267C1.29828 16.7417 12.2438 28.7327 22.8428 27.6857C26.1578 27.3587 29.9678 21.3707 26.1653 19.1822C24.2633 18.0872 21.6518 15.9272 19.6508 18.0317M17.2508 0.75017C20.0356 0.75017 22.7063 1.85642 24.6754 3.82555C26.6445 5.79468 27.7508 8.4654 27.7508 11.2502M17.2508 6.75017C18.4443 6.75017 19.5888 7.22428 20.4328 8.06819C21.2767 8.9121 21.7508 10.0567 21.7508 11.2502" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </span>
              <span className="hidden text-left sm:block">
                <span className="block text-[0.75rem] font-medium tracking-wide text-[#F9C00E]">
                  24/7 Emergency Services
                </span>
                <span className="block text-base font-bold text-white leading-tight">
                  (331) 401-5793
                </span>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center size-10 rounded-full transition-colors hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="size-6 text-white" />
              ) : (
                <Menu className="size-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav
            className="border-t border-white/15 bg-blue-900/90 backdrop-blur-lg lg:hidden rounded-b-3xl overflow-hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-2.5 text-sm sm:text-base font-semibold text-white/95 transition-colors hover:bg-white/10 hover:text-[#FC681E]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
