import React, { useState } from "react";
import close from "../assets/close.png";
import harmbugger from "../assets/harmbugger.png";
import logo from "../assets/nounitelogo.png";
const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "Features", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Faq", link: "/" },
  ];
  let [click, setClick] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 px-1 lg:px-5 md:px-0">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div className="w-36">
          <img src={logo} />
        </div>

        <div
          onClick={() => setClick(!click)}
          className="text-md absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {click ? <img src={close} /> : <img src={harmbugger} />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            click ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
              <a
                href={link.link}
                className="hover:text-[#0F0E0E] text-gray-800 font-poppins font-medium text-base duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="block lg:hidden  bg-[#0D4459] text-[#FFFFFF] px-5 py-2 rounded-md font-poppins font-medium text-base">
            Join the Waitlist
          </button>
        </ul>
        <button className="hidden lg:block bg-[#0D4459] text-[#FFFFFF] px-5 py-2 rounded-md font-poppins font-medium text-base md:text-sm">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
};

export default Navbar;
