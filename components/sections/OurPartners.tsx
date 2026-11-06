import AnimatedText from "../ui/AnimatiedText";
import Reveal from "../ui/RevealAnimation";

const partners = [
  {
    name: "spotlight",
    logo: "/logo/spotlight.svg",
  },
  {
    name: "urban",
    logo: "/logo/urban.svg",
  },
  {
    name: "certa",
    logo: "/logo/certa.svg",
  },
  {
    name: "maxima",
    logo: "/logo/maxima.svg",
  },
  {
    name: "domino",
    logo: "/logo/domino.svg",
  },
  {
    name: "onarebel",
    logo: "/logo/onarebel.svg",
  },
  {
    name: "Misrak Poli tech",
    logo: "/logo/misrak.svg",
  },
  // {
  //   name: "FTVET",
  //   logo: "/logo/ftvet.svg",
  // },
  {
    name: "lg koica",
    logo: "/logo/lg.svg",
  },
  {
    name: "GWPC",
    logo: "/logo/winget.svg",
  },
];

const OurPartners = () => {
  return (
    <section className=" bg-white">
      <div className=" px-(--section-margin-x) min-h-screen flex items-center justify-center gap-(--space-xxl) py-(--section-margin-y) flex flex-col items-center ">
        <h2 
className="flex text-(--spotlight-blue) gap-3  font-dm-sans font-semibold leading-[110%] text-(length:--h2-size) tracking-[-2.24px] md:tracking-[-4%]">
          Our <span className="text-black">Partners</span>
        </h2> 

        <div className="grid w-full  grid-cols-2 md:grid-cols-5 gap-(--space-xxs)">
          {partners.map((partner, index) => (
            <Reveal key={index} delay={index*0.1}>

            <div  className="bg-[#F5F6FA]  p-[25%] aspect-[4/3]">
              <div className="w-full h-full ">

                <img src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full"  />
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
