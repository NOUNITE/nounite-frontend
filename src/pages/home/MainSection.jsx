import React from "react";
import { main, google, apple} from "../../assets/index";
import DefaultLayout from "../../layout/DefaultLayout";
const MainSection = () => {
  return (
    <DefaultLayout>
      <div className="mt-28 flex flex-col lg:flex-row px-10 md:flex-row md:text-2xl lg:px-11 md:px-8 w-full">
        <div className="lg:w-4/6 w-full">
          <h1
            className="font-poppins font-semibold md:text-5xl lg:text-5xl text-5xl "
            style={{
              lineHeight: "70px"
            }}
          >
          Making <br /> Open and Distant Learning <br />
            <b className="text-[#36BEB0]">Easier </b>and More{" "}
            <b className="text-[#36BEB0]">Secured</b> <br /> For{" "}
            <b className="text-[#36BEB0]">You</b>.
          </h1>
          <p className="pt-5 leading-loose font-poppins font-medium md:text-base text-lg">
          With <b>NOUNITE</b>, your Open and Distant learning experience will
            <br />
          never be the same! Automate so many processes <br /> and get school
          work done on the go!
          </p>
          <div className="flex items-center gap-5 mt-5 ">
            <div className="bg-[#0F0E0E] text-[#FFFFFF] flex items-center gap-3 px-2 lg:px-5 py-1 md:px-2 rounded-md cursor-pointer">
              <div>
                <img src={apple} />
              </div>
              <div className="flex flex-col ">
                <p className="text-xs ">Download on the</p>
                <p className="md:text-base text-sm">App Store</p>
              </div>
            </div>
            <div className="bg-[#0F0E0E] text-[#FFFFFF] flex items-center gap-3 px-2 lg:px-5 py-1 md:px-2 rounded-md cursor-pointer">
              <div>
                <img src={google} />
              </div>

              <div>
                <p className="text-xs">Get it on</p>
                <p className="md:text-base text-sm">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="items-center mt-10 lg:mt-0 w-full"
          style={{
            width: "500px"
          }}
        >
          <img src={main} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MainSection;