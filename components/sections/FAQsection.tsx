"use client";
import { useState } from "react";

const faqData = [
  {
    question: "Do I need prior experience?",
    answer:
      "No. Our courses are designed for beginners. You'll start with the basics and build step by step.",
  },
  {
    question: "Are the courses free?",
    answer:
      "Yes! We believe in accessible education. All our courses are completely free to access and learn from.",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "Yes, you will receive a certificate of completion after successfully finishing each course, which can be shared on your CV and social media.",
  },
  {
    question: "How do I access the courses?",
    answer:
      "All our courses are online and can be accessed from any device with an internet connection, including a phone, tablet, or computer.",
  },
];

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-(--spotlight-bg) py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-[1040px] mx-auto">
        {/* Title */}
        <h2 className="text-center text-(--spotlight-blue) font-dm-sans font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-10 sm:mb-14">
          FAQ
        </h2>

        {/* FAQ Pill Items */}
        <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-5">
          {faqData.map((faq, i) => {
            const open = openIndex === i;

            return (
              <div
                key={i}
                className={`w-full bg-white transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.04] overflow-hidden ${
                  open ? "rounded-[24px] sm:rounded-[32px]" : "rounded-full"
                }`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center text-left px-6 sm:px-8 md:px-10 py-4 sm:py-5 cursor-pointer select-none"
                  aria-expanded={open}
                >
                  <span className="font-dm-sans font-medium text-sm sm:text-base md:text-[1.05rem] text-[#1A1A1A] pr-4">
                    {faq.question}
                  </span>

                  {/* Plus / Close Icon */}
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2A3DF7] flex items-center justify-center shrink-0 transition-transform duration-300 shadow-sm ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2.5V13.5M2.5 8H13.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Accordion */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 md:px-10 pb-5 sm:pb-6 pt-1 text-black/70 font-dm-sans text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
