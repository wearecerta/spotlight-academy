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
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i: any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-white">
      <div className=" mx-auto py-(--section-margin-y) px-(--section-margin-x) rounded-t-(--radius-large) bg-(--spotlight-bg)">
        <h2 className="flex max-w-360 mx-auto text-(--spotlight-dark-gray) flex-col gap-[16px] font-dm-sans font-semibold leading-[110%] text-(length:--h2-size) tracking-[-2.24px] md:tracking-[-4%]">
          FAQ
        </h2>

        <div className="flex flex-col max-w-360 mx-auto">
          {faqData.map((faq, i) => {
            const open = openIndex === i;

            return (
              <div key={i} className="border-b border-(--spotlight-light-gray)">
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between text-(length:--body-medium-size)  items-center py-[40px] text-left"
                >
                  <p>{faq.question}</p>

                  {/* Icon */}
                  <div className="bg-(--spotlight-blue)  p-[10px] flex justify-center items-center rounded-full shrink-0">
                    <svg
                      className={`transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M27.025 13.825H0.625M13.825 27.025V0.625"
                        stroke="white"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr] pb-[40px]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden px-(--space-xs) text-(--spotlight-dark-gray)/80 max-w-[700px]">
                    {faq.answer}
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
