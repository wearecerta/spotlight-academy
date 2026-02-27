import AnimatedText from "../ui/AnimatiedText";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-[166px] bg-[url('/patterns/hero-pattern.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#F5F6FA99] to-[#F5F6FA]" />
      <div
        className="relative
  w-full
  mx-auto
  
  container-type-inline-size
"
      >
        <AnimatedText
          delay={1.6}
          text="You Have Potential. We 
          Help You Use It."
          className="
    text-center
    font-dm-sans
    font-bold
    leading-[100%]
    text-(length:--h2-size)
    md:text-[9cqi]
    md:tracking-[-4%]
    tracking-[-2.56px]
    z-0
  "
        />
        {/* You Have Potential. We <br />
          Help You Use It.
        </h1> */}
        <div className="flex z-10 relative flex-col-reverse md:flex-row items-center md:items-end  justify-center -mt-[20%]  md:-mt-[8cqi]">
      <div className="p-[4cqi] relative ">
  {/* Shadow div acting l box-shadow */}
  <div className="w-[50cqi] h-[50cqi] md:w-[15cqi] md:h-[15cqi] absolute top-[4.5cqi] left-[2.6cqi] bg-black rounded-full" />

  {/* Spinning play button */}
  <img
    src="/assets/playButtonNoShadow.svg"
    alt="play button"
    className="w-[50cqi] md:w-[15cqi] animate-[spin_15s_linear_infinite] relative"
  />

  {/* Centered play icon */}
  <img
    src="/assets/playIcon.svg"
    alt="play button icon"
    className="w-[7cqi] md:w-[2.2cqi] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
</div>


          <img
            src="/assets/herro-img.png"
            alt="student image"
            className="md:w-[25cqi]"
          />
          <img
            src="/assets/pinNote.svg"
            alt="student image"
            className="md:w-[22cqi] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
