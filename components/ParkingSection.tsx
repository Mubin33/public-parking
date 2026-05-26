import Image from "next/image";

export default function ParkingSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto py-10 lg:py-20 px-4 md:px-8 overflow-visible  my-6">
      {/* Background Slanted Card (desktop only, absolute) */}
      <div className="absolute inset-y-0 right-0 w-[80%] hidden md:block z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full text-[#EFF2FE] fill-current drop-shadow-sm"
        >
          <path d="M 0,14 C 0,11 3,9 8,8 L 92,0 C 97,-1 100,1 100,5 L 100,95 C 100,99 97,101 92,100 L 8,92 C 3,91 0,89 0,86 Z" />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12 lg:gap-16">
        {/* Left Column: Image */}
        <div className="md:col-span-6 flex justify-center md:justify-start">
          <div className="relative w-full">
            <Image
              src="/home/parking.png"
              alt="Parking"
              width={700}
              height={600}
              className="h-full w-full "
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="md:col-span-6 text-left space-y-6 md:py-12 md:pr-6">
          {/* Mobile Background Card (applied directly as styled div for mobile responsiveness) */}
          <div className="md:hidden absolute inset-0 -z-10 md:bg-[#EFF2FE] rounded-[24px] p-6" />

          <div className="space-y-4 relative z-10 p-4 md:p-0">
            <h2 className="text-[28px] lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Smart Parking Starts Here
            </h2>

            <p className="text-sm md:text-base font-semibold text-gray-800 leading-relaxed uppercase tracking-wide">
              Hourly, Overnight & Monthly Parking Available. We are 100% CASHLESS. Choose Your Vehicle Type Sign the Contract Enjoy Worry- Free Parking Inquire Now
            </p>

            <div className="space-y-4 text-xs md:text-sm text-gray-500 font-medium leading-relaxed">
              <p>
                In a city like Parañaque, where finding safe and long-term parking can be difficult and time consuming, ParKing offers a better way. We provide monthly parking slots that are accessible, secure, and affordable designed for professionals and vehicle owners who need convenience and peace of mind.
              </p>
              <p>
                Our facility is built to withstand the Philippines' weather. Steel-covered parking slots and 24/7 security cameras ensure your vehicle is protected rain or shine, day or night.
              </p>
              <p>
                With ParKing, you spend less time looking for parking and more time where it matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
