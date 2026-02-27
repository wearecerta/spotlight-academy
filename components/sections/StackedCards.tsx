"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";


const cardData=[
  {
    title:"Learn With Purpose",
    descriptions:"We don’t believe in passive learning. Every lesson is designed to help you apply real skills, solve real problems, and move closer to your goals with confidence.",
    bgImg:"/assets/card1bg.svg",
    text:"white"
  },
    {
    title:"Mentorship That Matters",
    descriptions:"You’re not learning alone. Our mentors guide, challenge, and support you throughout your journey so you grow faster and smarter.",
        bgImg:"/assets/card2bg.svg",
            text:"white"


  },
    {
    title:"Skills for the Real World",
    descriptions:"We focus on practical knowledge that employers actually value. What you learn here is meant to be used, not just remembered.",
        bgImg:"/assets/card3bg.svg",
            text:"black"


  },
  {
    title:"A Community That Pushes You Forward",
    descriptions:"Surround yourself with people who are learning, building, and improving just like you. Growth happens faster when you’re not alone.",
        bgImg:"/assets/card4bg.svg",
            text:"black"


  },
]

gsap.registerPlugin(ScrollTrigger);

const StackCards = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const container = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    
    // Set initial positions
    cards.forEach((card: any, i: number) => {
      gsap.set(card, {
        y: isMobile? i *15 :i * 30, // Increased spacing between cards
        scale: 1 - i * 0.03, // More subtle scale difference
        zIndex: cards.length - i,
        opacity: 1
      });
    });

    // Create the scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        scrub: 1, // Smooth scrubbing
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    // Animate cards up one by one
    cards.forEach((card:any, i:number) => {
            if (i < cards.length - 1) { // Keep last card visible

        tl.to(card, {
          y: isMobile?"-1000":"-200vh", 
          
          scale:1.2,
          duration: 2,
          ease: "sine.inOut",
        }, i * 1);}
      
    }
  );

 



    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="relative bg-white min-h-screen  overflow-hidden">
      <div 
        ref={container} 
        className="relative h-screen contain-size flex items-center justify-center"
      >
        <div className="relative w-[90cqw] h-[60cqh] md:w-[50cqw] md:h-[70cqh]">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="card absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start bg-contain bg-center bg-no-repeat"
              style={{
                transformOrigin: 'center center',
                willChange: 'transform, opacity',
                backgroundImage:`url(${card.bgImg})`
              }}
            >
              <div className={`w-[70cqw] md:w-[30cqw]  mx-auto flex flex-col gap-[2cqw] text-${card.text}`} >

              <h3 className="font-semibold text-[7cqw] md:text-[2.5cqw] tracking-[-4%] leading-(--h3-line)">
                {card.title||""}
              </h3>
              <p className="text-[3.5cqw] md:text-[1cqw] leading-[150%]">
               {card.descriptions||""}
              </p>
              </div>
          
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default StackCards;