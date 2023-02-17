import React from "react";

const Links = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-[90vw] lg:w-[80vw] justify-between flex-wrap  m-auto">
        <div className="leading-[30px]">
          <h1 className="font-poppins font-medium text-[18px] text-[#0F0E0E]">
            Sitemap
          </h1>
          <p className="pt-5 text-paragraphColor">
            <a href="/">Home</a>
          </p>

          <p className="font-poppins font-normal text-[15px] text-[#0F0E0E]">
            <a href="/">Features</a>
          </p>

          <p className="font-poppins font-normal text-[15px] text-[#0F0E0E]">
            <a href="/">About us</a>
          </p>
          <p className="font-poppins font-normal text-[15px] text-[#0F0E0E]">
            <a href="/">Blog</a>
          </p>
          <p className="font-poppins font-normal text-[15px] text-[#0F0E0E]">
            <a href="/faq">Faq</a>
          </p>
        </div>
        <div className="leading-[30px]">
          <h1 className="font-poppins font-medium text-[18px] text-[#0F0E0E]">
            <a href="/">Platforms</a>
          </h1>
          <p className="pt-5 font-poppins font-normal text-[15px] text-[#0F0E0E]">
            <a href="/">Android</a>
          </p>
          <p className="font-poppins font-normal text-[15px] text-[#0F0E0E]">
            <a href="/">IOS</a>
          </p>
        </div>
        <div className="leading-[30px] md:items-center md:justify-center mt-5">
          <h1 className="font-poppins font-medium text-[18px] text-[#000000]">
            Address:
          </h1>
          <p className="font-poppins font-normal text-[15px] text-[#000000]">
            3 Afikpo Street, Achara Layout,
          </p>
          <p className="font-poppins font-normal text-[15px] text-[#000000]">
            Enugu, Enugu State, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
