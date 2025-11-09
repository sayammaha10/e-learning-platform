import { About } from "./About/About";
import Courses from "./Courses/Courses";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import { Reviews } from "./Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Features />
      <Reviews />
    </>
  );
};

export default Home;
