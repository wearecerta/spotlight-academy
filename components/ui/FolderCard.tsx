"use client";
import Reveal from "./RevealAnimation";

export interface Course {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  return (
    <Reveal
      y={40}
      delay={index * 0.12}
      className="bg-[#141416] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-3.5 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-between border border-white/[0.06] hover:border-white/15 transition-all duration-300 group"
    >
      {/* Course Image */}
      <div className="w-full overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[22px] aspect-[16/9] bg-black/40">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>

      {/* Course Content */}
      <div className="pt-4 sm:pt-5 md:pt-6 pb-2 px-1 sm:px-2 flex flex-col gap-2 sm:gap-2.5">
        <h3 className="text-white font-dm-sans font-bold text-lg sm:text-xl md:text-2xl lg:text-[1.55rem] tracking-tight leading-snug">
          {course.title}
        </h3>
        <p className="text-[#8E8E93] font-dm-sans font-normal text-xs sm:text-sm md:text-base leading-relaxed">
          {course.description}
        </p>
      </div>
    </Reveal>
  );
};

export const FolderCard = CourseCard;
export default CourseCard;
