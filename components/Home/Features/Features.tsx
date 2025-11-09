import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";

const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto">
        <div>
          <Image src="/images/f.png" alt="Image" width={1000} height={1000} />
        </div>

        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <FaBriefcase className="w-6 h-6" />
            </div>
            <h2 className="text-xl text-black font-semibold">
              Premium Learning Experience
            </h2>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-gray-800">
            Providing amazing online courses.
          </h1>
          <div className="mt-8 mb-6">
            <h2 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
              Master the skills that matter to you
            </h2>
            <p className="text-sm md:text-base text-black text-opacity-70 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              cumque maxime praesentium, saepe dolore itaque quo inventore cum
              maiores deserunt.
            </p>
          </div>
          <div className="mt-8 mb-6">
            <h2 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
              Increase your learning skills
            </h2>
            <p className="text-sm md:text-base text-black text-opacity-70 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              cumque maxime praesentium, saepe dolore itaque quo inventore cum
              maiores deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
