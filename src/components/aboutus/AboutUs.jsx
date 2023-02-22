import React from "react";
import { long, students } from "../../assets/index";
const AboutUs = () => {
  return (
    <div className="w-full  my-12 ">
      <div className="w-full pt-12">
        <img src={long} alt="faq img" className="w-full" />
      </div>
      <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row  lg:px-8 md:px-5 py-16">
        <div>
          <h1 className="font-poppins xl:text-[54px] lg:text-[40px] text-[30px] text-textHover font-semibold border border-[#0D4459] border-solid rounded-full w-fit px-5">
            What is NOUNITE?
          </h1>
          <p className="font-poppins lg:text-[16px] md:text-[14px] xl:text-[18px] text-[15px] text-[#000000] font-normal mt-5">
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
        <div className="items-center mt-10 lg:mt-0 w-[300px] lg:w-[500px] xl-[500px] w-[450px] md:w-[500px]">
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
