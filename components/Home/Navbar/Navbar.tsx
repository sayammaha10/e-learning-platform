"use client";

import { NAV_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

type NavProps = {
  openNav: () => void;
};

const Navbar = ({ openNav }: NavProps) => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBackground(true);
      }
      if (window.scrollY < 90) {
        setNavBackground(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <nav
      className={`fixed ${navBackground ? "bg-indigo-800" : "fixed"} w-full transition-all duration-200 h-[12vh] lg:h-[10vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="Home Book Education logo"
          width={120}
          height={120}
          className="cursor-pointer"
        />

        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="nav__link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg"
          >
            Sign Up
          </button>

          <button
            aria-label="Open menu"
            onClick={openNav}
            className="lg:hidden"
            type="button"
          >
            <HiBars3 className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
