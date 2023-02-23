import React from "react";

const Links = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-[90vw] lg:w-[80vw] justify-between flex-wrap  m-auto">
        <div className="leading-[30px]">
          <h1 className="font-poppins font-medium text-[15px]  md:text-[18px] text-textHover">
            Sitemap
          </h1>
          <p className="pt-5 text-paragraphColor text-[12px] md:text-[15px]">
            <a href="#home">Home</a>
          </p>

          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-textHover">
            <a href="#features">Features</a>
          </p>

          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-textHover">
            <a href="#aboutus">About us</a>
          </p>
          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-textHover">
            <a href="/">Blog</a>
          </p>
          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-textHover">
            <a href="#faq">Faq</a>
          </p>
        </div>
        <div className="leading-[30px]">
          <h1 className="font-poppins font-medium text-[15px] md:text-[18px] text-textHover">
            <a href="/">Platforms</a>
          </h1>
          <p className="pt-5 font-poppins font-normal text-[12px] md:text-[15px] text-textHover">
            <a href="/">Android</a>
          </p>
          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-textHover">
            <a href="/">IOS</a>
          </p>
        </div>
        <div className="leading-[30px] md:items-center md:justify-center mt-5">
          <h1 className="font-poppins font-medium text-[15px] md:text-[18px] text-[#000000]">
            Address:
          </h1>
          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-[#000000]">
            3 Afikpo Street, Achara Layout,
          </p>
          <p className="font-poppins font-normal text-[12px] md:text-[15px] text-[#000000]">
            Enugu, Enugu State, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
