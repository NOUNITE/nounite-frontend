import React from "react";
import { long, students } from "../../assets/index";
const AboutUs = () => {
  return (
    <div className="w-full  my-12 ">
      <div className="w-full pt-12">
        <img src={long} alt="faq img" className="w-full" />
      </div>
      <div className="flex justify-between px-10 sm:px-5 flex-col lg:flex-row md:flex-row  lg:px-8 md:px-5 py-16">
        <div>
          <h1 className="font-poppins text-center lg:text-[40px] md:text-[25px] text-[30px] sm:text-[20px] text-textHover font-semibold border border-btnColor border-solid rounded-[200%] py-2 px-8 w-[300px] lg:w-[500px]">
            What is NOUNITE?
          </h1>
          <p className="font-poppins lg:text-[16px] md:text-[10px] xl:text-[18px] text-[13px] text-black font-normal mt-5">
            NOUNITE is a platform that offers a solution
            <br /> to all your academic struggles as a student of NOUN.
            <br />
            NOUNITE brings those stressful processes to your fingertips.
            <br /> With NOUNITE, you get to experience seamless and
            <br /> very easy payment of school fees, very fast and easy
            <br /> course and examinations registration and fast and easy
            <br /> access to your Tutor Marked Assignments (TMAs).
            <br /> With NOUNITE, students of NOUN get to experience a smoother{" "}
            <br />
            academic pursuit! We make Open Learning In Nigeria
            <br /> Simpler than ever!
          </p>
        </div>
        <div className="items-center mt-10 md:mt-0 lg:mt-0 sm:w-[250px] xm:w-[280px] lg:w-[390px] xl-[500px] w-[280px] md:w-[280px] ml-[60px] sm:ml-[70px] xm:ml-[100px] md:ml-0 lg:ml-0">
          <img src={students} />
        </div>
      </div>
      <div className="w-full pt-12">
        <img src={long} alt="faq img" className="w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
