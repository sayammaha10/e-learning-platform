import { About } from "./About/About";
import Article from "./Article/Article";
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
      <Article />
    </>
  );
};

export default Home;
