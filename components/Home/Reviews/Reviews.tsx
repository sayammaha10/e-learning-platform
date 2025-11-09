import Slider from "@/components/Helper/Slider";
import { BsQuote } from "react-icons/bs";

export const Reviews = () => {
  return (
    <div className="pt-20 pb-16 bg-black mb-[50px]">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        <div className="xl:col-span-1 mt-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <BsQuote className="w-6 h-6" />
            </div>
            <h2 className="text-xl text-white font-semibold">
              Student Feedback
            </h2>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.3rem] xl:leading-[3.6rem] text-white">
            Trusted by Genius people.
          </h1>
          <p className="text-base text-white text-opacity-50 mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            voluptatibus deleniti exercitationem animi optio. Consequatur.
          </p>
          <div className="flex items-center space-x-10 mt-8">
            <p className="text-white font-bold text-5xl">99%</p>
            <p className="text-white">
              Students Complete <br /> Course Successfully
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="xl:col-span-2 bg-white rounded-lg overflow-hidden">
          <Slider />
        </div>
      </div>
    </div>
  );
};
