import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 bg-black">
      {/* Define grid system */}
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[2px] border-white border-opacity-20">
        {/* First section */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Home Book Education logo"
            width={100}
            height={100}
          />
          <p className="text-white text-opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            rem!
          </p>
          {/* Social links */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebook className="w-6 h-6 text-blue-600 cursor-pointer" />
            <FaTwitter className="w-6 h-6 text-sky-500 cursor-pointer" />
            <FaYoutube className="w-6 h-6 text-red-700 cursor-pointer" />
            <FaInstagram className="w-6 h-6 text-pink-600 cursor-pointer" />
          </div>
        </div>
        {/* Second section */}
        <div>
          <h1 className="footer__heading">Popular Courses</h1>
          <p className="footer__link">Web Development</p>
          <p className="footer__link">UI/UX Design</p>
          <p className="footer__link">App Development</p>
          <p className="footer__link">Digital Marketing</p>
          <p className="footer__link">Machine Learning</p>
          <p className="footer__link">Ethical Hacking</p>
        </div>
        {/* Third section */}
        <div>
          <h1 className="footer__heading">Quick Links</h1>
          <p className="footer__link">Home</p>
          <p className="footer__link">About</p>
          <p className="footer__link">Courses</p>
          <p className="footer__link">Instructors</p>
          <p className="footer__link">Contact Us</p>
          <p className="footer__link">Privacy Policy</p>
        </div>
        {/* Fourth section */}
        <div>
          <h1 className="footer__heading">Subscribe to our Newsletter</h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white"
          />
          <button className="px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-center mt-4 text-base text-white opacity-70">
        &copy; {new Date().getFullYear()} Sayam Maharjan | Home Book Education.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
