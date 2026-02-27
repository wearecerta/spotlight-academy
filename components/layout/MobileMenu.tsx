"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";


const MobileMenu = ({ navItems, open, setOpen }: any) => {
  const itemsRef = useRef<HTMLAnchorElement[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null);

  itemsRef.current = [];

  const addToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };


  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      menuRef.current,
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 0.5,
        ease: "power3.out",
      },
    ).fromTo(
      itemsRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: {
          each: 0.05,
          from: "start",
        },
        ease: "power3.out",
      },
    );
  }, []);

const handleGetStarted = () => {
  window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:4200/loginpage';
};




  return (
    <div className="md:hidden w-full fixed top-0 py-[28px] md:py-[48px] px-(--space-xl) h-screen z-50 bg-[url('/patterns/hero-pattern.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-linear-to-b from-[#F5F6FA99] to-[#F5F6FA]" />

      <div
        ref={menuRef}
        className="border-2 relative z-50 py-(--space-sm) px-(--space-xl) border-white bg-white/20 rounded-(--space-xs) max-w360 mx-auto flex flex-col justify-between h-full "
      >
        <div className="flex justify-between items-center">
          <img
            src="/logo/logo.svg"
            alt="spotlight academy logo"
            className="w-[73px] h-[26px] md:w-[127px] md:h-[46px]"
          />

          {!open ? (
            <svg
              onClick={() => setOpen(true)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
            >
              <path
                d="M4 5H20"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19H20"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setOpen(false)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
            >
              <path
                d="M18 6L6 18"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* nav items */}

        <div className="flex flex-col items-end gap-(--space-xxxl)">
          <div className="flex flex-col items-end gap-(--space-xs)">
            {navItems.map((nav: any, index: number) => (
              <Link
                onClick={() => setOpen(false)}
                key={index}
                href={nav.href}
                ref={addToRefs}
                className=""
              >
                <h4 className="font-medium text-(length:--h4-size) leading-(--h4-line) tracking-[-1.28px]">
                  {nav.label || ""}
                </h4>
              </Link>
            ))}
          </div>

          {/* button */}
          <button onClick={handleGetStarted} className="w-fit flex rounded-(--space-xs) bg-(--spotlight-blue) py-(--space-xxs) px-(--space-sm) font-dm-sans font-medium line-[150%] text-white shadow-[-8px_8px_0_0_#000000]">
            Get Started
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
