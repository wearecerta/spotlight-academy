"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


type Props = {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
};

const AnimatedText = ({ text, className, as: Tag = "h2", delay = 0 }: Props) => {
  const el = useRef<HTMLDivElement>(null);

useEffect(() => {
  const words:any = el.current?.querySelectorAll(".word");

 gsap.fromTo(
  words,
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.6,
    delay, // ✅ THIS enables delay
    ease: "power3.out",
    scrollTrigger: {
      trigger: el.current,
      start: "top 80%",
    },
  }
);

}, []);

  return (
    <Tag className={className}>
      <span ref={el} className="inline-block overflow-hidden">
        {text.split(" ").map((word, i) => (
          <span key={i} className="word inline-block mr-2">
            {word}
          </span>
        ))}
      </span>
    </Tag>
  );
};

export default AnimatedText;
