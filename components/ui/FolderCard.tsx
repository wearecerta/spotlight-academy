"use client";
import Reveal from "./RevealAnimation";

const handleGetStarted = () => {
  window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:4200/loginpage';
};

const FolderCard = ({ course }: any) => {
  return (
    <Reveal className="flex justify-between flex-col">
      <img src={course.image||""} alt="Course Image" />
      <div className="relative -mt-12 h-full bg-white pt-(--space-xs) pb-(--space-lg) px-(--space-xs)  flex flex-col justify-between  rounded-b-(--radius-small) ">

      <div className="py-(--space-lg) flex flex-col gap-[16px]">
        <h4 className="font-dm-sans font-medium text-(length:--h4-size) leading-(--h4-line) tracking-[-1.28px] md:tracking-[-4%]">
          {course.title || ""} 
        </h4>

        <p className="font-dm-sans text-(length:--body-large-size) leading-(--body-large-line)">
          {course.description || ""}
        </p>
      </div>
        <button onClick={handleGetStarted} className=" w-fit flex rounded-(--space-xs) bg-(--spotlight-blue) py-(--space-xxs) px-(--space-sm) font-dm-sans font-medium line-[150%] text-white shadow-[-8px_8px_0_0_#000000]">
          View Detail
        </button>
      </div>
    </Reveal>
  );
};

export default FolderCard;

// https://images.unsplash.com/photo-1521737604893-d14cc237f11d
