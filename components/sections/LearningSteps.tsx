import AnimatedText from "../ui/AnimatiedText";
import Reveal from "../ui/RevealAnimation";

const LearningSteps = () => {
  return (
    <section id="process" className="bg-(--spotlight-black)">
      <div className="max-w-360 mx-auto px-(--section-margin-x) py-(--section-margin-y)">
        <div className="flex flex-col gap-(--space-xxxl)">
          {/* <h2 className="flex flex-col gap-[16px] font-dm-sans text-white font-semibold leading-[110%] text-(length:--h3-size) tracking-[-4%]">
            Your learning journey in 4 simple steps{" "}
          </h2> */}

<AnimatedText

text="Your learning journey in 4 simple steps"
  className="flex flex-col gap-[16px] font-dm-sans text-white font-semibold leading-[110%] text-(length:--h3-size) tracking-[-2.24px] md:tracking-[-4%]"

/>
          {/* row 1 */}
          <div className="flex pl-(--section-margin-x) md:p-0 flex-col md:flex-row gap-(--space-xxl) md:gap-[136px] items-center">
            {/* left content */}
            <div className="flex flex-col flex-1 border md:flex-row  ">

              <Reveal className="flex flex-1 z-10 h-fit flex-col gap-[18px] md:gap-[28px] shadow-[-16px_16px_0_0_#0063D1] pt-(--space-lg) pb-(--space-xl) px-(--space-sm) rounded-(--radius-small) bg-white">
                <p className="font-semibold tracking-[2%] text-(length:--accent-small-size)">
                  Sign Up
                </p>
                <p className="text-(length:--body-large-size)">
                  Create your free account and set up your profile in just a few
                  minutes.
                </p>
              </Reveal>

              <Reveal className="flex flex-1 md:rotate-12 mt-(--space-xxxl) md:mt-[120px] flex-col gap-[18px] md:gap-[28px] shadow-[-16px_16px_0_0_#0063D1] pt-(--space-lg) pb-(--space-xl) px-(--space-sm) rounded-(--radius-small) bg-white">
                <p className="font-semibold tracking-[2%] text-(length:--accent-small-size)">
                  Choose Your Course{" "}
                </p>
                <p className="text-(length:--body-large-size)">
                  Pick from Entrepreneurship, Programming, Digital Marketing, or
                  Business Communication.
                </p>
              </Reveal>
            </div>

            {/* right */}

            <Reveal className=" hidden md:flex flex-1 flex-col gap-[40px] text-white">
              <h4 className="font-medium text-(length:--h4-size) leading-(--h4-line) tracking-[-4%]">
                Simple Steps. Real Progress.
              </h4>
              <p>
               We’ve created a learning experience that’s easy to follow and built to help you move forward with confidence at every stage.
              </p>
            </Reveal>
          </div>

          {/* row 2 */}
          <div className="flex flex-col-reverse md:flex-row gap-(--space-xxl) md:gap-[136px] items-center">
            {/* left content */}

            <Reveal className="hidden md:flex z-10 flex-1 flex-col gap-[40px] text-white">
              <h4 className="font-medium text-(length:--h4-size) leading-(--h4-line) tracking-[-4%]">
                From Start to Success
              </h4>
              <p>
                Each step is designed to guide you clearly so you always know what to do next and how to keep improving.
              </p>
            </Reveal>
            {/* right */}
            <div className="flex flex-col pl-(--section-margin-x) md:p-0 md:flex-row flex-1 ">

              <Reveal className="flex flex-1 md:rotate-12 h-fit flex-col gap-[18px] md:gap-[28px] shadow-[-16px_16px_0_0_#0063D1] pt-(--space-lg) pb-(--space-xl) px-(--space-sm) rounded-(--radius-small) bg-white">
                <p className="font-semibold tracking-[2%] text-(length:--accent-small-size)">
                  Learn & Practice
                </p>
                <p className="text-(length:--body-large-size)">
                  Access interactive lessons, quizzes, and real projects. Track
                  your progress online and learn at your own pace.
                </p>
              </Reveal>
              <Reveal className="flex flex-1 mt-(--space-xxxl) md:mt-[120px] flex-col gap-[18px] md:gap-[28px] shadow-[-16px_16px_0_0_#0063D1] pt-(--space-lg) pb-(--space-xl) px-(--space-sm) rounded-(--radius-small) bg-white">

                <p className="font-semibold tracking-[2%] text-(length:--accent-small-size)">
                  Choose Your Course{" "}
                </p>
                <p className="text-(length:--body-large-size)">
                  Complete your course, earn a certificate, and unlock real
                  career and business opportunities.
                </p>
              </Reveal>
            </div>
          </div>

          <div className=" border-white flex justify-end">
            <img
              src="/assets/steps-img.png"
              alt="steps image"
              className="max-w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSteps;
