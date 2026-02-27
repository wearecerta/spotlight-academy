"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import Reveal from "../ui/RevealAnimation";

const InfoSection = () => {
  const leftText = useRef(null);
  const rightText = useRef(null);
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(leftText.current, {
        x: isMobile ? -400 : -800, // move left
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(rightText.current, {
        x: isMobile ? 400 : 800, // move right
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[url('/patterns/hero-pattern.jpg')] bg-cover bg-center"
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6FA] via-[#F5F6FA99] to-[#F5F6FA] z-0 pointer-events-none" />

      {/* content */}
      <div className="relative min-h-screen z-10 flex flex-col gap-(--space-xxxl) justify-center items-center overflow-hidden p-(--space-xxl)">
        <div className="space-y-4">
          <h3
            ref={leftText}
            className="uppercase text-(--spotlight-dark-gray) font-semibold text-(length:--h3-size) leading-(--h3-line) tracking-[-2.24px] md:tracking-[-4%] whitespace-nowrap"
          >
            Industry-Focused Learning . Real World Projects . Expert Mentors
            Industry-Focused Learning . Real World Projects . Expert Mentors
          </h3>

          <h3
            ref={rightText}
            className="uppercase text-(--spotlight-dark-gray) font-semibold text-(length:--h3-size) leading-(--h3-line) tracking-[-2.24px] md:tracking-[-4%]  whitespace-nowrap"
          >
            Industry-Focused Learning . Real World Projects . Expert Mentors
            Industry-Focused Learning . Real World Projects . Expert Mentors
          </h3>
        </div>

        <div className="flex flex-col md:flex-row max-w-360 gap-[32] md:gap-[40px]">
          <Reveal>
            
          <div className="flex flex-col gap-[8px] md:gap-[24px]">
            <h4 className="text-(--spotlight-black) font-medium text-[24px] tracking-[-4%]">
              Learn by Doing
            </h4>
            <p className="text-(length:--body-medium-size) text-(--spotlight-black)">
              We focus on practical experience, not just theory. Students work
              on real projects that build confidence and professional skills.
            </p>
          </div>
          </Reveal>
<Reveal delay={0.3}>

          <div className="flex flex-col gap-[8px]">
            <h4 className="text-(--spotlight-black)  font-medium  text-[24px] tracking-[-4%]">
              Guidance from Experts
            </h4>
            <p className="text-(length:--body-medium-size) text-(--spotlight-black)">
              Our mentors are industry professionals who provide insights,
              feedback, and support throughout your learning journey.
            </p>
          </div>
</Reveal>
<Reveal delay={0.6}>

          <div className="flex flex-col gap-[8px]">
            <h4 className="text-(--spotlight-black) font-medium  text-[24px] tracking-[-4%]">
              Career-Focused Approach
            </h4>
            <p className="text-(length:--body-medium-size) text-(--spotlight-black)">
              Every course is designed to prepare you for real opportunities
              helping you build a strong portfolio and stand out in the job
              market.
            </p>
          </div>
</Reveal>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
