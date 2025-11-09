import { NAV_LINKS } from "@/constants/constants";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black transition-opacity duration-500 z-[10000] ${
          showNav
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      />

      {/* Sidebar */}
      <div
        className={`text-white fixed ${navOpen} flex justify-center flex-col h-full transform transition-transform duration-500 w-[80%] sm:w-[60%] bg-teal-500 space-y-6 z-[10001]`}
      >
        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="nav__link ml-12 pb-2 text-[20px] sm:text-[30px]"
          >
            {link.label}
          </Link>
        ))}

        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] text-white cursor-pointer"
        >
          <CgClose className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
