"use client";

import { Typewriter } from "react-simple-typewriter";
import Reveal from "../ui/RevealAnimation";

const WeHelpSection = () => {
  return (
    <section
      id="about-us"
      className="relative bg-(--spotlight-bg) py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
        {/* Top Centered Typing Headline */}
        <Reveal y={25} className="w-full flex justify-center text-center">
          <h2 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[#0C0C0E] leading-tight flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5">
            <span>We Help you</span>
            <span className="text-[#2B44E7] inline-flex items-center min-w-[130px] sm:min-w-[170px] md:min-w-[210px] text-left">
              <Typewriter
                words={["Succeed", "Lead", "Shine", "Grow"]}
                loop
                cursor
                cursorStyle="|"
                cursorBlinking
                cursorColor="#2B44E7"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1600}
              />
            </span>
          </h2>
        </Reveal>

        {/* Content: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Overlapping Images */}
          <Reveal
            x={-30}
            y={20}
            className="lg:col-span-6 w-full max-w-[560px] mx-auto lg:max-w-none"
          >
            <div className="relative pb-16 sm:pb-20 md:pb-24 pr-4 sm:pr-8">
              {/* Image 1: Base top-right image */}
              <div className="w-[82%] sm:w-[80%] aspect-4/3 ml-auto overflow-hidden rounded-[22px] sm:rounded-[28px] md:rounded-[32px] shadow-lg bg-black/10">
                <img
                  src="/wehelpyou1.jpg"
                  alt="Spotlight Academy Environment"
                  className="w-full h-full object-cover  hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Image 2: Foreground bottom-left image with crisp white frame */}
              <div className="absolute left-0 bottom-0 w-[50%] sm:w-[56%] z-10 bg-(--spotlight-bg) p-2 sm:p-2.5 md:p-3 rounded-[24px] sm:rounded-[30px] md:rounded-[36px] ">
                <div className="overflow-hidden aspect-1/1 rounded-[18px] sm:rounded-[24px] md:rounded-[28px] bg-black/10">
                  <img
                    src="/wehelpyou2.jpg"
                    alt="Classroom Learning Experience"
                    className="w-full h-full object-cover  hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Text Content */}
          <Reveal
            x={30}
            y={20}
            delay={0.15}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Header: "Who We Are?" */}
            <h3 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-[#0C0C0E] mb-4 sm:mb-6 leading-tight">
              <span>Who We </span>
              <span className="text-[#2B44E7]">Are?</span>
            </h3>

            {/* Subtitle */}
            <h4 className="font-dm-sans font-bold text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] text-[#0C0C0E] tracking-tight leading-snug mb-4 sm:mb-5 max-w-lg">
              Upskilling Ethiopian Graduates for Real Opportunities
            </h4>

            {/* Description Paragraph */}
            <p className="font-dm-sans text-sm sm:text-base md:text-[1.05rem] text-[#4A4D57] leading-relaxed font-normal max-w-xl">
              Spotlight Academy provides practical courses in Digital
              Entrepreneurship, Programming, Marketing, and Business
              Communication. Learn at your own pace , track your progress, and
              earn certificates that open doors to jobs and entrepreneurial
              success. We believe in hands-on learning, community support, and
              building skills that matter.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WeHelpSection;