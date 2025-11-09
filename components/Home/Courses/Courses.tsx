import { coursesData } from "@/data/data";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="pt-16 pb-12 relative bg-gray-200">
      <div className="w-[80%] pt-8 pb-8 mx-auto">
        <h2 className="text-4xl md:text-5xl text-gray-900 font-bold">
          Our Courses
        </h2>
        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
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
