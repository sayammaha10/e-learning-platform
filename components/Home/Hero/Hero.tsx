import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="w-full pt-[12vh] lg:pt-[10vh] h-screen bg-teal-500">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text content */}
          <HeroContent />
          {/* Image content */}
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
