import React from "react";
import main from "../assets/mainn.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
const MainSection = () => {
  return (
    <div className="mt-28 flex px-1 lg:px-14 md:px-0">
      <div>
        <h1 className="font-poppins font-semibold text-5xl">
          Making <br /> Open and Distant Learning <br />{" "}
          <b className="text-[#36BEB0]">Easier </b>and More{" "}
          <b className="text-[#36BEB0]">Secured</b> <br /> For{" "}
          <b className="text-[#36BEB0]">You</b>.
        </h1>
        <p className="pt-5 leading-loose">
          With <b>NOUNITE</b>, your Open and Distant learning experience will
          never be the same! Automate so many processes and get school work done
          on the go!
        </p>
        <div className="flex items-center gap-5 mt-5 ">
          <div className="bg-[#0F0E0E] text-[#FFFFFF] flex items-center gap-3 px-5 py-1 rounded-md">
            <div>
              <img src={apple} />
            </div>
            <div className="flex flex-col ">
              <p className="text-xs">Download on the</p>
              <p>App Store</p>
            </div>
          </div>
          <div className="bg-[#0F0E0E] text-[#FFFFFF] flex items-center gap-3 px-5 py-1 rounded-md">
            <div>
              <img src={google} />
            </div>

            <div>
              <p className="text-xs">Get it on</p>
              <p>Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={main} />
      </div>
    </div>
  );
};

export default MainSection;
