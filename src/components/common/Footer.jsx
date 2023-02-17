import React from "react";
import { logo } from "../../assets/index";
import SocialIcons from "../molecule/socialIcons";
const Footer = () => {
  return (
    <div className="w-full my-5">
      <div className="flex flex-col lg:flex-row md:flex-row  justify-between items-center m-auto px-5 md:px-10 lg:px-20">
        <div className="w-36 lg:w-24">
          <img
            src={
              "https://res.cloudinary.com/phantom1245/image/upload/v1676382206/nounite/nounitelogo_iidmsh.png" ||
              logo
            }
            className="w-full"
          />
        </div>
        <div className="pt-3 lg:pt-0 md:pt-0">
          <p className="font-poppins font-medium text-[9.8px] align-center text-textHover">
            © 2023 Nounite Media. All Rights Reserved.
            
          </p>
        </div>
        <div >
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
