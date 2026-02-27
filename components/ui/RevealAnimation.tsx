"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

const Reveal = ({
  children,
  y = 60,
  x = 0,
  duration = 1,
  delay = 0,
  className,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          once: true, // ⭐ plays only once
        },
      }
    );
  }, [x, y, duration, delay]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default Reveal;
