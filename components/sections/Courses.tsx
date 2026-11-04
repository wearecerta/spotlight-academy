"use client";

import Reveal from "../ui/RevealAnimation";
import CourseCard from "../ui/FolderCard";

const courses = [
  {
    title: "Basics of Digital Entrepreneurship",
    description:
      "Got a great idea? Let's turn it into a thriving business! Dive into planning, marketing, and digital tools to boost your venture.",
    image: "/courses/course1.png",
  },
  {
    title: "Programming Essentials",
    description:
      "Dive into coding and create awesome apps, websites, and sharpen your problem-solving skills along the way!",
    image: "/courses/course2.jpg",
  },
  {
    title: "Fundamentals of Digital Marketing",
    description:
      "Jump into coding and build cool apps and websites while leveling up your problem-solving skills!",
    image: "/courses/course3.jpg",
  },
  {
    title: "Business Communications",
    description:
      "Jump into coding and build cool apps and websites while leveling up your problem-solving skills!",
    image: "/courses/course4.jpg",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="bg-(--spotlight-bg) ">
      <div className="bg-black py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col  max-w-[1440px] mx-auto items-center gap-10 sm:gap-14 md:gap-16">
          
          {/* Header: "Courses Overview" */}
          <Reveal y={30}>
            <h2 className="text-white text-center font-dm-sans tracking-tight leading-[110%] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              <span className="font-bold">Courses</span>{" "}
              <span className="font-extralight text-white/90">Overview</span>
            </h2>
          </Reveal>

          {/* Cards Grid: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 w-full">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Courses;
