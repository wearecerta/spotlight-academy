"use client";
import { Typewriter } from "react-simple-typewriter";

const WeHelpSection = () => {
  return (
    <section className="bg-(--spotlight-bg)">
      <div className="max-w-[1440px] py-[80px] md:min-h-screen mx-auto flex items-center justify-center">
        <div className="md:w-[1000px] w-[350px] h-[404px] md:h-[800px] rounded-[40px] bg-[url('/assets/folderBg.svg')] bg-center bg-contain bg-no-repeat flex justify-center items-center">
          <h2 className="flex flex-col gap-[16px] font-dm-sans font-semibold leading-[110%] text-(length:--h2-size) tracking-[-2.24px] md:tracking-[-4%]">
            <span>We Help you</span>
            <span className="text-(--spotlight-blue)">
              <Typewriter
                words={["Shine", "Grow", "Lead","Succeed"]}
                loop
                cursor
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1500}
              />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WeHelpSection;
