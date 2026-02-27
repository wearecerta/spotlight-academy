"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About Us", href: "#about-us" },
  { label: "Process", href: "#process" },
];

const handleGetStarted = () => {
  window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:4200/loginpage';
};



const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full  absolute z-50 top-[28px] md:top-[48px] px-(--space-xl)">
        <div className="border-2 py-(--space-sm) px-(--space-xl) border-white bg-white/20 rounded-(--space-xs) max-w360 mx-auto flex justify-between items-center">
          <img
            src="/logo/logo.svg"
            alt="spotlight academy logo"
            className="w-[73px] h-[26px] md:w-[127px] md:h-[46px]"
          />

          {/* nav */}
          <div className="hidden md:flex gap-[24px]">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="font-dm-sans font-medium text-(length:--body-medium-size) "
              >
                {nav.label}
              </Link>
            ))}
          </div>

          {/* button */}
          <button onClick={handleGetStarted} className="hidden md:flex rounded-(--space-xs) bg-(--spotlight-blue) py-(--space-xxs) px-(--space-sm) font-dm-sans font-medium line-[150%] text-white shadow-[-8px_8px_0_0_#000000]">
            Get Started
          </button>

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
      </header>
            {open && <MobileMenu navItems={navItems} open={open} setOpen={setOpen} />}

    </>
  );
};

export default NavBar;
