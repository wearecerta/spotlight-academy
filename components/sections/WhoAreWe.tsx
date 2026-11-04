import React from "react";

const WhoAreWe = () => {
  return (
    <section
      className="relative bg-[url('/patterns/hero-pattern.jpg')] bg-cover bg-center pb-24 md:pb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6FA] via-[#F5F6FA99] to-[#F5F6FA] z-0" />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-8 md:px-(--section-margin-x) flex flex-col items-center">
        <div className="flex flex-col items-center gap-[120px] md:gap-(--space-xxl) w-full">
          {/* Mission + Vision */}
          <div className="flex flex-col md:flex-row gap-[80px] md:gap-[120px] items-center justify-center">
            <div className="p-(--space-xl) w-[300px] sm:w-[316px] md:w-[407px] flex-1 rotate-6 md:rotate-12 flex flex-col gap-[28px] md:gap-[32px] bg-(--spotlight-blue) shadow-[-8px_8px_0_0_#000000] relative rounded-2xl">
              {/* pin icon */}
              <img
                src="/assets/pin.png"
                alt="pin icon"
                className="absolute rotate-12 -top-8 left-1/2 -translate-x-1/2 w-[50px] h-[70px] z-10"
              />
              <p className="font-accent text-white text-(length:--accent-large-size) tracking-[2%]">
                Mission
              </p>
              <p className="text-(length:--body-large-size) text-white font-dm-sans leading-relaxed">
                To empower Ethiopian graduates with job-ready digital and
                business skills for real career opportunities.
              </p>
            </div>

            <div className="p-(--space-xl) w-[300px] sm:w-[316px] md:w-[407px] flex-1 -rotate-6 md:-rotate-12 flex flex-col gap-[28px] md:gap-[32px] bg-(--spotlight-blue) shadow-[-8px_8px_0_0_#000000] relative rounded-2xl">
              {/* pin icon */}
              <img
                src="/assets/pin.png"
                alt="pin icon"
                className="absolute rotate-12 -top-8 left-1/2 -translate-x-1/2 w-[50px] h-[70px] z-10"
              />
              <p className="font-accent text-white text-(length:--accent-large-size) tracking-[2%]">
                Vision
              </p>
              <p className="text-(length:--body-large-size) text-white font-dm-sans leading-relaxed">
                To become Ethiopia's leading hub for practical, accessible, and
                future-focused learning.
              </p>
            </div>
          </div>

          {/* Value */}
          <div className="p-(--space-xl) rotate-6 md:-rotate-12 w-[300px] sm:w-[316px] md:w-[407px] relative flex flex-col gap-[28px] md:gap-[32px] bg-(--spotlight-blue) shadow-[-8px_8px_0_0_#000000] rounded-2xl">
            {/* pin icon */}
            <img
              src="/assets/pin.png"
              alt="pin icon"
              className="absolute rotate-12 -top-8 left-1/2 -translate-x-1/2 w-[50px] h-[70px] z-10"
            />
            <p className="font-accent text-white text-(length:--accent-large-size) tracking-[2%]">
              Value
            </p>
            <p className="text-(length:--body-large-size) text-white font-dm-sans leading-relaxed">
              Hands-on learning, real skills, and a supportive community to help you grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
