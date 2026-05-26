import Image from "next/image";

const PublicParking = () => {
  const features = [
    {
      title: "AI-Powered IVR Booking",
      description:
        "Enables users to reserve parking spots using simple voice commands. The telephony voice assistant handles real-time cloud inquiries and allocates spaces instantly without app dependencies.",
      image: "/home/p1.png",
    },
    {
      title: "Subscription-Based Billing",
      description:
        "Offers drivers recurring weekly, monthly, or workspace season passes. Automates recurring transactions using integrated digital wallets (GCash & Maya) with absolute zero hardware dependency.",
      image: "/home/p2.png",
    },
    {
      title: "Booking Management",
      description:
        "Seamless cloud platform handles booking creation, confirmation, check-in QR codes, and digital validation tags safely on any device.",
      image: "/home/p3.png",
    },
    {
      title: "Vehicle Management",
      description:
        "Enables parkers to add multiple vehicle registrations, select standard or motorcycle classes, and tag default cars to digital pass wallets.",
      image: "/home/p4.png",
    },
    {
      title: "Smart Rate Estimator",
      description:
        "Forecasts booking costs transparently based on desired check-in duration, peak variables, and promotional codes prior to digital checkout.",
      image: "/home/p5.png",
    },
  ];

  return (
    <section
      className="relative lg:py-20 py-10 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home/publicparking.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#121668]/70"></div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-4xl font-bold text-[#F5F5F5] mb-4">
            What's inside Public Parking?
          </h2>

          <p className="text-lg md:text-xl text-[#F5F5F5] max-w-[900px] mx-auto">
            Every delivered operational capability is cataloged below. Inspect
            purely software-based modules, cloud-native administration, and
            digital verification interfaces.
          </p>
        </div>
        <div className="lg:hidden block ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] p-5 rounded-[24px] shadow-xl overflow-hidden"
            >
              <div className="relative w-full overflow-hidden rounded-[16px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={700}
                  height={600}
                  className="w-full h-[240px] object-cover"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-[22px] font-bold text-[#121668] mb-1">
                  {feature.title}
                </h3>

                <p className="text-[#66677D]  text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="lg:block hidden">

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] p-5 rounded-[24px] shadow-xl overflow-hidden"
            >
              <div className="relative w-full overflow-hidden rounded-[16px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={700}
                  height={600}
                  className="w-full h-[240px] object-cover"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-[22px] font-bold text-[#121668] mb-1">
                  {feature.title}
                </h3>

                <p className="text-[#66677D]  text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards Centered */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] p-5 rounded-[24px] shadow-xl overflow-hidden w-full md:w-[48%] lg:w-[420px]"
            >
              <div className="relative w-full overflow-hidden rounded-[16px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={700}
                  height={600}
                  className="w-full h-[240px] object-cover"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-[22px] font-bold text-[#121668] mb-1">
                  {feature.title}
                </h3>

                <p className="text-[#66677D]  text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default PublicParking;