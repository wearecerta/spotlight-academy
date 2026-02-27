import Link from "next/link";
import Reveal from "../ui/RevealAnimation";

const Footer = () => {
  return (
    <footer className="min-h-screen flex justify-center items-center bg-(--spotlight-bg) p-(--space-sm) ">
      <div className=" contain-inline-size w-full rounded-(--radius-large) md:rounded-[3cqi] bg-(--spotlight-blue) flex flex-col gap-(--space-xxxl) md:gap-[2cqi] py-(--section-margin-y) px-(--space-lg) md:py-[2cqi] md:px-[2cqi] ">

        {/* mobile only */}
          <h1 className="w-full flex justify-center md:hidden text-center text-[8cqi] md:text-[10cqi] text-white font-bold leading-[100%] tracking-[-4%]">
          Spotlight Academy
        </h1>

{/* mobile only */}
        <div className="flex md:hidden  flex-col justify-center gap-[1cqi]">
          {/* social medias */}
          <div className="flex  items-center justify-center gap-(--space-xs)">
            {/* facebook */}
            <Link href={"https://web.facebook.com/profile.php?id=61573818333149#"} target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 1.28852e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.28855e-07 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM11.2305 5C9.4263 5.00001 8.79102 5.90997 8.79102 7.43945V8.56445H7.66699V10.4395H8.79102V15.8799H11.042V10.4395H12.5439L12.7432 8.56445H11.042L11.0449 7.62598C11.0449 7.13703 11.0917 6.875 11.7939 6.875H12.7324V5H11.2305Z"
                fill="white"
              />
            </svg>
            </Link>

            {/* insta */}
            <Link href={"https://www.instagram.com/spotlight.academy_et/"} target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 1.28852e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.28855e-07 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 4.66699C8.55232 4.66699 8.37029 4.67335 7.80176 4.69922C7.23401 4.72522 6.84593 4.81441 6.50684 4.94629C6.15616 5.08247 5.85886 5.26512 5.5625 5.56152C5.26583 5.85797 5.08296 6.15617 4.94629 6.50684C4.81418 6.84593 4.72476 7.23353 4.69922 7.80078C4.67377 8.36967 4.66699 8.55159 4.66699 10C4.66699 11.4481 4.67345 11.6296 4.69922 12.1982C4.72533 12.766 4.81452 13.1541 4.94629 13.4932C5.08257 13.8438 5.26515 14.1412 5.56152 14.4375C5.85779 14.7341 6.1554 14.9175 6.50586 15.0537C6.84516 15.1856 7.2332 15.2748 7.80078 15.3008C8.36968 15.3267 8.55165 15.333 10 15.333C11.4482 15.333 11.6296 15.3267 12.1982 15.3008C12.7657 15.2748 13.1539 15.1855 13.4932 15.0537C13.8438 14.9175 14.1412 14.7342 14.4375 14.4375C14.7341 14.1411 14.9171 13.8438 15.0537 13.4932C15.1848 13.1541 15.2741 12.7664 15.3008 12.1992C15.3263 11.6303 15.333 11.4485 15.333 10C15.333 8.55159 15.3263 8.36967 15.3008 7.80078C15.2741 7.23333 15.1847 6.84581 15.0537 6.50684C14.917 6.15605 14.7342 5.85797 14.4375 5.56152C14.1409 5.26498 13.8442 5.08237 13.4932 4.94629C13.1532 4.81445 12.7649 4.72521 12.1973 4.69922C11.6289 4.67335 11.4474 4.667 10 4.66699Z"
                fill="white"
              />
              <path
                d="M9.52179 5.62695C9.66374 5.62673 9.82238 5.62695 10.0003 5.62695C11.4243 5.62695 11.5933 5.63265 12.1556 5.6582C12.6756 5.68198 12.9578 5.7688 13.1458 5.8418C13.3947 5.93846 13.5725 6.05357 13.7591 6.24023C13.9456 6.42679 14.0607 6.60486 14.1575 6.85352C14.2305 7.04128 14.3174 7.32385 14.3411 7.84375C14.3667 8.40594 14.3724 8.57498 14.3724 9.99805C14.3724 11.421 14.3667 11.5905 14.3411 12.1523C14.3174 12.6723 14.2305 12.9548 14.1575 13.1426C14.0609 13.3915 13.9458 13.5693 13.7591 13.7559C13.5724 13.9425 13.3948 14.0576 13.1458 14.1543C12.958 14.2276 12.6756 14.3141 12.1556 14.3379C11.5934 14.3634 11.4243 14.3691 10.0003 14.3691C8.57636 14.3691 8.40723 14.3634 7.84503 14.3379C7.32525 14.3139 7.04287 14.2273 6.8548 14.1543C6.60607 14.0577 6.42808 13.9424 6.24152 13.7559C6.05485 13.5692 5.93899 13.3916 5.8421 13.1426C5.7691 12.9548 5.68218 12.6723 5.65851 12.1523C5.63295 11.5902 5.62823 11.4212 5.62823 9.99707C5.62823 8.57303 5.63296 8.40481 5.65851 7.84277C5.68227 7.32309 5.76913 7.04054 5.8421 6.85254C5.93873 6.60375 6.05498 6.42585 6.24152 6.23926C6.42814 6.05264 6.60601 5.93672 6.8548 5.83984C7.04276 5.76653 7.32525 5.68016 7.84503 5.65625C8.33699 5.63403 8.52801 5.62709 9.52179 5.62598V5.62695ZM10.0003 7.26074C8.48782 7.26085 7.26202 8.48749 7.26202 10C7.26225 11.5123 8.48797 12.7382 10.0003 12.7383C11.5127 12.7383 12.7384 11.5124 12.7386 10C12.7386 8.48743 11.5129 7.26074 10.0003 7.26074ZM12.7181 6.52539C12.4267 6.58512 12.2075 6.84332 12.2073 7.15234C12.2073 7.50554 12.4938 7.79273 12.847 7.79297C13.2003 7.79297 13.4876 7.50568 13.4876 7.15234C13.4874 6.79915 13.2002 6.5127 12.847 6.5127L12.7181 6.52539Z"
                fill="white"
              />
              <path
                d="M10.0005 8.22266C10.9823 8.22266 11.7783 9.01855 11.7783 10.0005C11.7783 10.9822 10.9823 11.7782 10.0005 11.7782C9.01861 11.7782 8.22272 10.9822 8.22272 10.0005C8.22272 9.01855 9.01861 8.22266 10.0005 8.22266Z"
                fill="white"
              />
            </svg>
            </Link>

            {/* linkedin */}
            <Link href={"https://www.linkedin.com/company/spotlightlearning/"} target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 1.28852e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.28855e-07 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM4.80078 15.0918H7.06641V8.28223H4.80078V15.0918ZM12.6309 8.12207C11.4277 8.12207 10.8887 8.78345 10.5879 9.24707V8.28223H8.32129C8.35116 8.92115 8.32129 15.0918 8.32129 15.0918H10.5879V11.2891C10.5879 11.0856 10.6022 10.882 10.6621 10.7363C10.8259 10.3299 11.1992 9.90919 11.8252 9.90918C12.6455 9.90918 12.9735 10.5335 12.9736 11.4482V15.0918H15.2393V11.1875C15.2393 9.09624 14.1219 8.12224 12.6309 8.12207ZM5.94922 5C5.17409 5 4.66717 5.50833 4.66699 6.17578C4.66699 6.82946 5.15835 7.35333 5.91895 7.35352H5.93359C6.72379 7.35352 7.21582 6.82958 7.21582 6.17578C7.20096 5.50846 6.72407 5.0002 5.94922 5Z"
                fill="white"
              />
            </svg>
            </Link>

       {/* tiktok */}
                        <Link href={"https://www.tiktok.com/@spotlight.learning"} target="_blank">
<svg
  width="28"
  height="28"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM14.1436 4.375H11.9087V11.875C11.9087 13.5309 10.6105 14.875 9.01172 14.875C7.41289 14.875 6.11475 13.5309 6.11475 11.875C6.11475 10.2191 7.41289 8.875 9.01172 8.875V6.625C6.51367 6.625 4.48047 8.72109 4.48047 11.3125C4.48047 13.9039 6.51367 16 9.01172 16C11.5098 16 13.543 13.9039 13.543 11.3125V7.14062C14.1719 7.6375 14.9463 7.9375 15.7998 7.9375V5.6875C14.8867 5.6875 14.1436 4.9375 14.1436 4.375Z"
    fill="white"
  />
</svg>
    </Link>

      
          </div>

          <div className="flex flex-col justify-center gap-[16px]  text-(length:--body-medium-size) md:text-[1cqi] items-center text-white">
            <Link href={"tel:+251943014532"} className="w-full text-center ">
              +251 94 301 4532
            </Link>
            <div className="flex flex-col  items-center w-full ">
              <p className="text-center">Head Office:</p>

              <p className="text-center">7th Floor, Office No 705, DH Geda Bldg.</p>
              <p className="text-center">Bole Airport Road, Addis Ababa, Ethiopia</p>
            </div>
            <Link
              href={"mailto:info@spotlightacademy.io"}
              className="w-full text-center md:text-end"
            >
              info@spotlightacademy.io
            </Link>
          </div>
        </div>

{/* //////// */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3cqi]">
          <Reveal className="hidden md:flex justify-center flex-col w-full gap-[2cqi] text-white rounded-(--radius-medium) border border-white/40 p-[3cqi]">
            <p className="font-medium text-[1.5cqi] leading-[120%] tracking-[-4%]">
              Quick Links
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href={"#home"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                Home
              </Link>
              <Link
                href={"#courses"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                Courses
              </Link>

              <Link
                href={"#about-us"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                About Us
              </Link>

              <Link
                href={"#faq"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                FAQ
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="hidden md:flex flex-col justify-center w-full gap-[2cqi] text-white rounded-(--radius-medium) border border-white/40 p-[3cqi]">
            <p className="font-medium text-[1.5cqi] leading-[120%] tracking-[-4%]">
              Courses
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href={"#"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                Basics of Digital Entrepreneurship
              </Link>
              <Link
                href={"#"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                Programming Essentials
              </Link>

              <Link
                href={"#"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                Fundamentals of Digital Marketing
              </Link>

              <Link
                href={"#"}
                className="text-[1cqi] leading-(--body-small-line)"
              >
                Business Communications
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.6} className="flex flex-col w-full gap-(--space-xs) md:gap-[2cqi] text-white rounded-(--radius-small) md:rounded-(--radius-medium) bg-white py-[40px]  px-[24px] md:p-[3cqi]">
            <p className="font-medium text-[24px] md:text-[1.5cqi] leading-[120%] tracking-[-4%] text-(--spotlight-blue) ">
              Send Us a Message
            </p>
            <div className="flex flex-col gap-[16px]">
              <div>
                {/* name and email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-(--space-sm) text-black">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#F5F6FA] outline-none md:text-[1cqi] p-(--space-xs) md:p-[1cqi]"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-[#F5F6FA] outline-none md:text-[1cqi] p-(--space-xs) md:p-[1cqi]"
                  />
                </div>
              </div>
              <textarea
                rows={2}
                placeholder="Message"
                className="bg-[#F5F6FA] resize-none outline-none text-black md:text-[1cqi] p-(--space-xs) md:p-[1cqi]"
              />
              {/* button */}
              <button className="flex items-center justify-center rounded-(--space-xs) bg-(--spotlight-blue) py-(--space-xxs) md:py-[0.5cqi] md:text-[1cqi] px-[1cqi] font-dm-sans font-medium line-[150%] text-white shadow-[-8px_8px_0_0_#000000]">
                Send
              </button>
            </div>
          </Reveal>
        </div>

        <h1 className="w-full justify-center hidden md:flex text-center text-[8cqi] md:text-[10cqi] text-white font-bold leading-[100%] tracking-[-4%]">
          Spotlight Academy
        </h1>

        <div className="hidden md:flex  flex-col justify-center gap-[1cqi]">
          {/* social medias */}
          <div className="flex  items-center justify-center gap-(--space-xs)">
            {/* facebook */}
            <Link href={"https://web.facebook.com/profile.php?id=61573818333149#"} target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M10 0C15.5228 1.28852e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.28855e-07 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM11.2305 5C9.4263 5.00001 8.79102 5.90997 8.79102 7.43945V8.56445H7.66699V10.4395H8.79102V15.8799H11.042V10.4395H12.5439L12.7432 8.56445H11.042L11.0449 7.62598C11.0449 7.13703 11.0917 6.875 11.7939 6.875H12.7324V5H11.2305Z"
                fill="white"
                />
            </svg>
                </Link>

            {/* insta */}
            <Link href={"https://www.instagram.com/spotlight.academy_et/"} target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.5228 1.28852e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.28855e-07 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 4.66699C8.55232 4.66699 8.37029 4.67335 7.80176 4.69922C7.23401 4.72522 6.84593 4.81441 6.50684 4.94629C6.15616 5.08247 5.85886 5.26512 5.5625 5.56152C5.26583 5.85797 5.08296 6.15617 4.94629 6.50684C4.81418 6.84593 4.72476 7.23353 4.69922 7.80078C4.67377 8.36967 4.66699 8.55159 4.66699 10C4.66699 11.4481 4.67345 11.6296 4.69922 12.1982C4.72533 12.766 4.81452 13.1541 4.94629 13.4932C5.08257 13.8438 5.26515 14.1412 5.56152 14.4375C5.85779 14.7341 6.1554 14.9175 6.50586 15.0537C6.84516 15.1856 7.2332 15.2748 7.80078 15.3008C8.36968 15.3267 8.55165 15.333 10 15.333C11.4482 15.333 11.6296 15.3267 12.1982 15.3008C12.7657 15.2748 13.1539 15.1855 13.4932 15.0537C13.8438 14.9175 14.1412 14.7342 14.4375 14.4375C14.7341 14.1411 14.9171 13.8438 15.0537 13.4932C15.1848 13.1541 15.2741 12.7664 15.3008 12.1992C15.3263 11.6303 15.333 11.4485 15.333 10C15.333 8.55159 15.3263 8.36967 15.3008 7.80078C15.2741 7.23333 15.1847 6.84581 15.0537 6.50684C14.917 6.15605 14.7342 5.85797 14.4375 5.56152C14.1409 5.26498 13.8442 5.08237 13.4932 4.94629C13.1532 4.81445 12.7649 4.72521 12.1973 4.69922C11.6289 4.67335 11.4474 4.667 10 4.66699Z"
                fill="white"
              />
              <path
                d="M9.52179 5.62695C9.66374 5.62673 9.82238 5.62695 10.0003 5.62695C11.4243 5.62695 11.5933 5.63265 12.1556 5.6582C12.6756 5.68198 12.9578 5.7688 13.1458 5.8418C13.3947 5.93846 13.5725 6.05357 13.7591 6.24023C13.9456 6.42679 14.0607 6.60486 14.1575 6.85352C14.2305 7.04128 14.3174 7.32385 14.3411 7.84375C14.3667 8.40594 14.3724 8.57498 14.3724 9.99805C14.3724 11.421 14.3667 11.5905 14.3411 12.1523C14.3174 12.6723 14.2305 12.9548 14.1575 13.1426C14.0609 13.3915 13.9458 13.5693 13.7591 13.7559C13.5724 13.9425 13.3948 14.0576 13.1458 14.1543C12.958 14.2276 12.6756 14.3141 12.1556 14.3379C11.5934 14.3634 11.4243 14.3691 10.0003 14.3691C8.57636 14.3691 8.40723 14.3634 7.84503 14.3379C7.32525 14.3139 7.04287 14.2273 6.8548 14.1543C6.60607 14.0577 6.42808 13.9424 6.24152 13.7559C6.05485 13.5692 5.93899 13.3916 5.8421 13.1426C5.7691 12.9548 5.68218 12.6723 5.65851 12.1523C5.63295 11.5902 5.62823 11.4212 5.62823 9.99707C5.62823 8.57303 5.63296 8.40481 5.65851 7.84277C5.68227 7.32309 5.76913 7.04054 5.8421 6.85254C5.93873 6.60375 6.05498 6.42585 6.24152 6.23926C6.42814 6.05264 6.60601 5.93672 6.8548 5.83984C7.04276 5.76653 7.32525 5.68016 7.84503 5.65625C8.33699 5.63403 8.52801 5.62709 9.52179 5.62598V5.62695ZM10.0003 7.26074C8.48782 7.26085 7.26202 8.48749 7.26202 10C7.26225 11.5123 8.48797 12.7382 10.0003 12.7383C11.5127 12.7383 12.7384 11.5124 12.7386 10C12.7386 8.48743 11.5129 7.26074 10.0003 7.26074ZM12.7181 6.52539C12.4267 6.58512 12.2075 6.84332 12.2073 7.15234C12.2073 7.50554 12.4938 7.79273 12.847 7.79297C13.2003 7.79297 13.4876 7.50568 13.4876 7.15234C13.4874 6.79915 13.2002 6.5127 12.847 6.5127L12.7181 6.52539Z"
                fill="white"
              />
              <path
                d="M10.0005 8.22266C10.9823 8.22266 11.7783 9.01855 11.7783 10.0005C11.7783 10.9822 10.9823 11.7782 10.0005 11.7782C9.01861 11.7782 8.22272 10.9822 8.22272 10.0005C8.22272 9.01855 9.01861 8.22266 10.0005 8.22266Z"
                fill="white"
              />
            </svg>
            </Link>

            {/* linkedin */}
            <Link href={"https://www.linkedin.com/company/spotlightlearning/"} target="_blank">
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M10 0C15.5228 1.28852e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 1.28855e-07 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM4.80078 15.0918H7.06641V8.28223H4.80078V15.0918ZM12.6309 8.12207C11.4277 8.12207 10.8887 8.78345 10.5879 9.24707V8.28223H8.32129C8.35116 8.92115 8.32129 15.0918 8.32129 15.0918H10.5879V11.2891C10.5879 11.0856 10.6022 10.882 10.6621 10.7363C10.8259 10.3299 11.1992 9.90919 11.8252 9.90918C12.6455 9.90918 12.9735 10.5335 12.9736 11.4482V15.0918H15.2393V11.1875C15.2393 9.09624 14.1219 8.12224 12.6309 8.12207ZM5.94922 5C5.17409 5 4.66717 5.50833 4.66699 6.17578C4.66699 6.82946 5.15835 7.35333 5.91895 7.35352H5.93359C6.72379 7.35352 7.21582 6.82958 7.21582 6.17578C7.20096 5.50846 6.72407 5.0002 5.94922 5Z"
                fill="white"
                />
            </svg>

                </Link>
            {/* tiktok */}
            <Link href={"https://www.tiktok.com/@spotlight.learning"} target="_blank">
<svg
  width="32"
  height="32"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM14.1436 4.375H11.9087V11.875C11.9087 13.5309 10.6105 14.875 9.01172 14.875C7.41289 14.875 6.11475 13.5309 6.11475 11.875C6.11475 10.2191 7.41289 8.875 9.01172 8.875V6.625C6.51367 6.625 4.48047 8.72109 4.48047 11.3125C4.48047 13.9039 6.51367 16 9.01172 16C11.5098 16 13.543 13.9039 13.543 11.3125V7.14062C14.1719 7.6375 14.9463 7.9375 15.7998 7.9375V5.6875C14.8867 5.6875 14.1436 4.9375 14.1436 4.375Z"
    fill="white"
  />
</svg>
    </Link>


       
          </div>

          <div className="flex justify-center gap-[16px]  text-(length:--body-medium-size) md:text-[1cqi] items-center text-white">
            <Link href={"tel:+251943014532"} className="w-full">
              +251 94 301 4532
            </Link>
            <div className="flex flex-col  items-center w-full ">
              <p className="text-center">Head Office:</p>

              <p className="text-center">7th Floor, Office No 705, DH Geda Bldg.</p>
              <p className="text-center">Bole Airport Road, Addis Ababa, Ethiopia</p>
            </div>
            <Link
              href={"mailto:info@spotlightacademy.io"}
              className="w-full text-center md:text-end"
            >
              info@spotlightacademy.io
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
