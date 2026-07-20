import { FaArrowRight, FaAward } from "react-icons/fa";

export const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
              <FaAward className="w-6 h-6" />
            </div>
            <h2 className="text-xl text-black font-semibold">
              Guaranteed and Certified
            </h2>
          </div>
          <h2 className="text-wxl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-gray-800">
            Online learning wherever and whenever.
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eaque
            doloremque ratione sapiente fuga totam blanditiis voluptatibus
            similique ipsam, magni soluta, corrupti consequatur, ad iusto.
          </p>
          <button
            type="button"
            className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white"
          >
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>

        <div>
          <div>
            <h2 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">
              01
            </h2>
            <div className="-mt-10">
              <h2 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Flexible Schedule
              </h2>
              <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                debitis cupiditate a sint obcaecati numquam voluptatum beatae
                tempore delectus? Neque!
              </p>
            </div>
          </div>

          <div className="mt-8 w-full">
            <h2 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">
              02
            </h2>
            <div className="-mt-10">
              <h2 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Pocket Friendly
              </h2>
              <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                debitis cupiditate a sint obcaecati numquam voluptatum beatae
                tempore delectus? Neque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
