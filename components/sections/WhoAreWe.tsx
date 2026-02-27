import React from "react";
import AnimatedText from "../ui/AnimatiedText";

const WhoAreWe = () => {
  return (
    <section
      id="about-us"
      className="relative bg-[url('/patterns/hero-pattern.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6FA] via-[#F5F6FA99] to-[#F5F6FA] z-0" />

      <div className="relative z-10 max-w-360 mx-auto py-(--section-margin-y) px-(--section-margin-x) flex flex-col gap-(--space-xxxl)">
        <AnimatedText text="Who Are We?
" className="flex flex-col gap-[16px] font-dm-sans font-semibold leading-[110%] text-(length:--h2-size) tracking-[-2.24px] md:tracking-[-4%]"/>
          {/* Who Are We ??
        </h2> */}

        <div className="bg-(--spotlight-light-gray) rounded-(--radius-medium) p-(--space-xl) md:p-(--space-xxxl) flex flex-col gap-(--space-lg)">
          <AnimatedText text="Upskilling Ethiopian Graduates for Real Opportunities" className="font-dm-sans font-semibold text-(length:--h3-size) leading-(--h3-line) tracking-[-1.6px] md:tracking-[-4%]"/>
            {/* Upskilling Ethiopian Graduates for Real Opportunities
          </h3> */}
          <p className="font-dm-sans text-(length:--body-large-size)">
            Spotlight Academy provides practical courses in Digital
            Entrepreneurship, Programming, Marketing, and Business
            Communication. Learn at your own pace , track
            your progress, and earn certificates that open doors to jobs and
            entrepreneurial success. We believe in hands-on learning, community
            support, and building skills that matter.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[120px] md:gap-(--space-xxl)">
          {/* mission+ vision */}
          <div className="flex flex-col md:flex-row gap-[120px] items-center justify-center">
            <div className="p-(--space-xl)  w-[316px] md:w-[407px]  flex-1 rotate-12 flex flex-col gap-[32px] bg-(--spotlight-blue) shadow-[-8px_8px_0_0_#000000]">
              {/* pin icon */}
              <img
                src="/assets/pin.png"
                alt="pin icon"
                className="absolute rotate-12 -top-8 left-1/2  w-[50px] h-[70px] z-10"
              />
              <p className="font-accent text-white text-(length:--accent-large-size) tracking-[2%]">
                Mission
              </p>
              <p className="text-(length:--body-large-size) text-white">
                To empower Ethiopian graduates with job-ready digital and
                business skills for real career opportunities.
              </p>
            </div>

            <div className="p-(--space-xl) w-[316px] md:w-[407px] flex-1 -rotate-12  flex flex-col gap-[32px] bg-(--spotlight-blue) shadow-[-8px_8px_0_0_#000000]">

                      {/* pin icon */}
             <img
                src="/assets/pin.png"
                alt="pin icon"
                className="absolute rotate-12 -top-8 left-1/2  w-[50px] h-[70px] z-10"
              />
              <p className="font-accent text-white text-(length:--accent-large-size) tracking-[2%]">
                Vision
              </p>
              <p className="text-(length:--body-large-size) text-white">
                To become Ethiopia's leading hub for practical, accessible, and
                future-focused learning.
              </p>
            </div>
          </div>

          {/* value */}
          <div className="p-(--space-xl) rotate-12 md:-rotate-12  w-[316px] md:w-[407px]  relative flex flex-col gap-[32px] bg-(--spotlight-blue) shadow-[-8px_8px_0_0_#000000]">
             {/* pin icon */}
              <img
                src="/assets/pin.png"
                alt="pin icon"
                className="absolute rotate-12 -top-8 left-1/2  w-[50px] h-[70px] z-10"
              />
              <p className="font-accent text-white text-(length:--accent-large-size) tracking-[2%]">
                Value
              </p>
              <p className="text-(length:--body-large-size) text-white">
                Hands-on learning, real skills, and a supportive community to help you grow.
              </p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
