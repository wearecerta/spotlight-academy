"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const line2LeftRef = useRef<HTMLDivElement>(null);
  const line2RightRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const helpMarkerRef = useRef<SVGPathElement>(null);
  const useMarkerRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let played = false;

    const playEntrance = () => {
      if (played) return;
      played = true;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Text entrance
      tl.fromTo(
        title1Ref.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 }
      )
        .fromTo(
          [line2LeftRef.current, line2RightRef.current],
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 },
          "-=0.6"
        )
        // 2. Student image floats up smoothly
        .fromTo(
          studentRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power2.out" },
          "-=0.7"
        )
        // 3. Subtext fades in
        .fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        );

      // 4. Animate marker paths drawing in
      if (helpMarkerRef.current) {
        try {
          const len1 = helpMarkerRef.current.getTotalLength();
          gsap.fromTo(
            helpMarkerRef.current,
            { strokeDasharray: len1, strokeDashoffset: len1, opacity: 0 },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 1.3,
              ease: "power2.inOut",
            }
          );
        } catch {
          gsap.to(helpMarkerRef.current, { opacity: 1, duration: 0.5 });
        }
      }

      if (useMarkerRef.current) {
        try {
          const len2 = useMarkerRef.current.getTotalLength();
          gsap.fromTo(
            useMarkerRef.current,
            { strokeDasharray: len2, strokeDashoffset: len2, opacity: 0 },
            {
              strokeDashoffset: 0,
              opacity: 1,
              duration: 1.0,
              delay: 0.2,
              ease: "power2.inOut",
            }
          );
        } catch {
          gsap.to(useMarkerRef.current, { opacity: 1, duration: 0.5 });
        }
      }
    };

    // Listen for loading screen finish or fallback timer
    window.addEventListener("loadingComplete", playEntrance);
    const fallbackTimer = setTimeout(playEntrance, 1600);

    return () => {
      window.removeEventListener("loadingComplete", playEntrance);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen pt-[166px] bg-[url('/patterns/hero-pattern.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      {/* Background paper texture overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F5F6FA99] to-[#F5F6FA]" />

      {/* Main hero typography & content wrapper */}
      <div className="relative w-full  min-h-[90vh] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex-1 flex flex-col  z-10">
        
        {/* Row 1: "You Have Potential." */}
        <div className="w-full flex justify-center md:justify-end mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          <h2
            ref={title1Ref}
            className="text-[#646A79] font-dm-sans font-normal text-3xl sm:text-5xl md:text-5xl lg:text-[6.4vw]  tracking-tight leading-[1.08] select-none text-center md:text-right"
          >
            You Have Potential.
          </h2>
        </div>

        {/* Row 2: "We Help You" [Student centered between] "Use It." */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-baseline justify-between relative z-10 gap-4 md:gap-0">
          
          {/* Left: "We Help You" */}
          <div
            ref={line2LeftRef}
            className="flex items-baseline gap-2.5 sm:gap-3.5 md:gap-3 lg:gap-4 xl:gap-5 text-black font-dm-sans font-bold text-4xl sm:text-6xl md:text-[5vw] lg:text-[9vw] tracking-tight leading-none select-none shrink-0"
          >
            <span>We</span>

            {/* "Help" with looped pen marker SVG */}
            <span className="relative inline-block px-1">
              <span className="relative z-10">Help</span>
              <svg
                viewBox="0 0 396 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-[25%] -bottom-[30%] -left-[8%] -right-[18%] w-[116%] h-[140%] pointer-events-none select-none z-20 overflow-visible"
              >
                <path
                  ref={helpMarkerRef}
                  d="M198.482 173.32C198.482 173.32 19.1645 180.906 3.67308 97.4609C1.98706 88.379 2.17732 80.2343 3.86642 72.9277M3.86642 72.9277C17.697 13.1006 132.019 9.47404 139.613 7.78395C143.645 6.88671 202.548 10.0523 262.599 19.8056M3.86642 72.9277C8.88479 130.054 110.514 147.418 182.215 153.814C266.982 161.375 384.771 138.642 393.29 80.3925C397.779 49.7008 329.477 30.6678 262.599 19.8056M3.86642 72.9277C3.73823 71.4685 3.67308 69.9833 3.67308 68.4716C3.67308 7.78395 137.097 -0.885736 196.158 3.44912C214.16 4.77042 238.064 11.3274 262.599 19.8056M262.599 19.8056C318.557 39.1419 377.798 68.4716 377.798 68.4716"
                  stroke="#0079FF"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span>You</span>
          </div>

          {/* Center: Gap where the student stands, safely between the two text groups */}
          <div className="relative self-end pt-64 hidden md:flex items-center justify-center shrink-0 w-20 md:w-24 lg:w-32 xl:w-40 ">
            <div
              ref={studentRef}
              className="absolute  left-1/2 -translate-x-1/2 w-[340px] md:w-[390px] lg:w-[550px]  pointer-events-none select-none z-10 flex justify-center"
            >
              <img
                src="/assets/herro-img.png"
                alt="Spotlight Academy Student"
                className="w-full h-auto object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)] select-none"
              />
            </div>
          </div>

          {/* Right: "Use It." */}
          <div
            ref={line2RightRef}
            className="flex items-baseline gap-2.5 sm:gap-3.5 md:gap-3 lg:gap-4 xl:gap-5 text-black font-dm-sans font-bold text-4xl sm:text-6xl md:text-[5vw] lg:text-[9vw]  tracking-tight leading-none select-none shrink-0"
          >
            {/* "Use" with zig-zag underline pen marker SVG */}
            <span className="relative inline-block">
              <span className="relative z-10">Use</span>
              <svg
                viewBox="0 0 276 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 sm:-bottom-2 md:-bottom-3 left-[-5%] w-[112%] h-auto pointer-events-none select-none z-20 overflow-visible"
              >
                <path
                  ref={useMarkerRef}
                  d="M272.845 2.49997L0.103619 3.27067L240.242 13.2515L20.8068 34.8915L244.217 53.556"
                  stroke="#0063D1"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span>It.</span>
          </div>
        </div>

        {/* Row 3: "Beyond Classroom / Beyond Certificate" subtext */}
        <div
          ref={subtextRef}
          className="w-full flex justify-center md:justify-end mt-8 sm:mt-12 md:mt-14 lg:mt-16 pr-0 md:pr-2 lg:pr-4 relative z-10"
        >
          <div className="flex flex-col font-dm-sans leading-tight text-center md:text-left select-none">
            <span className="text-[#0C0C0E] font-medium text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] tracking-tight">
              Beyond Classroom
            </span>
            <span className="text-[#646A79] font-normal text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] tracking-tight pl-0 md:pl-8 lg:pl-10 mt-1">
              Beyond Certificate
            </span>
          </div>
        </div>

        {/* Mobile-only Student Image (centered below text on small screens) */}
        <div className="md:hidden flex justify-center mt-6 -mb-10 pointer-events-none">
          <img
            src="/assets/herro-img.png"
            alt="Spotlight Academy Student"
            className="w-[260px] sm:w-[300px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)] select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;