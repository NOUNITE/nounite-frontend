import React from "react";
import { logo, facebook, twitter, linkedin } from "../../assets/index";
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
          <p className="font-poppins font-medium text-[9.8px] align-center text-[#0F0E0E]">
            © 2023 Nounite Media. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-5 pt-3 lg:pt-0 md:pt-0">
          <div className="cursor-pointer">
            <a href="/">
              <img src={facebook} />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="/">
              <img src={twitter} />
            </a>
          </div>
          <div className="cursor-pointer">
            <a href="/">
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
