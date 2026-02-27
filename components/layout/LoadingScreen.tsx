"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const progressObj = useRef({ value: 80});

  useEffect(() => {
    // slow believable progress to ~85 while loading
    const fakeTween = gsap.to(progressObj.current, {
      value: 80,
      duration: 1,
      ease: "power1.out",
      onUpdate: () => setProgress(Math.floor(progressObj.current.value)),
    });

    const handleLoad = () => {
      fakeTween.kill();

      // smooth finish to 100 during the 2s delay
      gsap.to(progressObj.current, {
        value: 100,
        duration: 1,
        ease: "power2.out",
        onUpdate: () => setProgress(Math.floor(progressObj.current.value)),
        onComplete: () => {
          gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
              window.dispatchEvent(new CustomEvent("loadingComplete"));
            },
          });
        },
      });
    };

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <section
      ref={loaderRef}
      className="fixed inset-0 z-[99999] h-screen bg-[url('/patterns/bgPattern.webp')] bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#F5F6FA99] to-[#F5F6FA]" />

      <div className="flex z-10 flex-col items-center justify-center gap-4">
        <p className="font-accent text-[36px]">Coming Up...</p>
        <p className="font-accent text-[24px]">{progress}%</p>
      </div>
    </section>
  );
};

export default LoadingScreen;
