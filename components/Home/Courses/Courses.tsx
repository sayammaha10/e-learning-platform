import { coursesData } from "@/data/data";
import CourseCard from "./CourseCard";
import Image from "next/image";

const Courses = () => {
  return (
    <div className="pt-16 pb-12 relative bg-gray-200">
      {/* Bouncing ball animation */}
      <Image
        src="/images/bounce-ball.png"
        alt=""
        width={800}
        height={800}
        className="absolute top-[30%] animate-bounce"
      />

      <div className="w-[80%] pt-8 pb-8 mx-auto">
        <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">
          Popular Courses
        </h1>
        {/* Courses */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* Individual course card */}
          {coursesData.map((course) => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
