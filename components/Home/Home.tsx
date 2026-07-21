"use client";

import { useEffect } from "react";
import { About } from "./About/About";
import Article from "./Article/Article";
import Courses from "./Courses/Courses";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import { Reviews } from "./Reviews/Reviews";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

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
