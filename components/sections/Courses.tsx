import AnimatedText from "../ui/AnimatiedText"
import FolderCard from "../ui/FolderCard"


const courses=[
  {
    title:"Basics of Digital Entrepreneurship",
    description:"Turn ideas into businesses. Learn planning, marketing, and digital tools to grow your venture.",
    link:"#",
    image:"/courses/course1.png"
  },
    {
    title:"Programming Essentials",
    description:"Start coding from scratch. Build apps, websites, and problem-solving skills.",
    link:"#",
    image:"/courses/course2.png"
  },
    {
    title:"Fundamentals of Digital Marketing",
    description:"Learn social media, SEO, and campaigns to grow businesses online.",
    link:"#",
    image:"/courses/course3.png"
  },
    {
    title:"Business Communications",
    description:"Master workplace communication, from emails to presentations with confidence.",
    link:"#",
    image:"/courses/course4.png"
  },
]

const Courses = () => {
  return (
    <section id="courses" className="bg-(--spotlight-bg)" >
      <div className=" p-(--space-lg)">
<div className="bg-(--spotlight-black)  rounded-(--radius-large) py-(--section-margin-y) px-(--section-margin-x) ">
  <div className="max-w-360 mx-auto flex flex-col gap-(--space-xxxl) justify-center items-center">

<AnimatedText text="Courses Overview" className="text-white text-center font-dm-sans font-semibold leading-[110%] tracking-[-2.24px] md:tracking-[-4%] text-(length:--h2-size)"/>
{/* Courses Overview
</h2> */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-(--space-xxl)">
{courses.map((course,index)=>(
<FolderCard key={index} course={course}/>

))}
</div>
</div>
      </div>
  </div>
    </section>
  )
}

export default Courses
