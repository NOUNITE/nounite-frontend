import React, { useState } from "react";
import { logo, harmbugger, close } from "../../assets/index";
const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Faq", link: "/faq" }
  ];
  let [click, setClick] = useState(false);

  const handleClick = () => {
    window.location.assign("/waitlist");
  };
  return (
    <div className="w-full sticky bg-white top-0 left-0 px-1 lg:px-5 md:px-0">
      <div className="md:flex items-center justify-between md:w-full py-4 md:px-4 px-7">
        <div className="w-36 lg:w-24">
          <img src={ "https://res.cloudinary.com/phantom1245/image/upload/v1676382206/nounite/nounitelogo_iidmsh.png" || logo}
            className="w-full"
          />
        </div>

        <div
          onClick={() => setClick(!click)}
          className="text-md absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {click ? 
            <img src={"https://res.cloudinary.com/phantom1245/image/upload/v1676382206/nounite/close_is3pbq.png" || close} />
            : 
            <img src={ "https://res.cloudinary.com/phantom1245/image/upload/v1676382206/nounite/harmbugger_c4zm1y.png" || harmbugger} />
          }
        </div>

        <ul
          className={`md:flex md:items-center md:z-auto md:w-auto md:pb-0 md:static pb-12 absolute bg-white z-[-1] left-0 w-full pl-3 transition-all duration-300 ease-in ${
            click ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
              <a
                href={link.link}
                className="hover:text-textHover text-gray-800 font-poppins font-medium text-base duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button onClick={handleClick} className="block md:hidden  bg-btnColor text-white px-5 py-2 rounded-md font-poppins font-medium text-base">
            Join the Waitlist
          </button>
        </ul>
        <div className="md:pl-5 ">
          <button onClick={handleClick} className="hidden md:block bg-btnColor text-white w-[10rem]  px-2 py-2 rounded-md font-poppins font-medium text-base md:text-sm">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
