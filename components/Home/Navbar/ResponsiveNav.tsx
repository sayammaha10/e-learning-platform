"use client";

import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount in case page loads on big screen
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </>
  );
};

export default ResponsiveNav;
