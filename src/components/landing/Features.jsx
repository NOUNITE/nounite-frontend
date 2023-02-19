import React from "react";
import { Ellipse, Ellipse1 } from "../../assets/index";

const Features = () => {
  const cards = [
    {
      title: "WHERE CAN YOU USE NOUNITE!?",
      text: "Anywhere! NOUNITE is accessible everywhere you are. Are you outside Nigeria but wish to continue studying in NOUN? We make that very possible and seamless using NOUNITE",
      color: "#36BEB0",
    },
    {
      title: "2 FACTOR AUTHENTICATION(2FA)",
      text: "With our 2FA feature, we ensure that you’re the only one who has access to your account, whenever there’s an attempt to login to your account, you receive a notification via email or SMS.",
      color: "#04D452",
    },
    {
      title: "LEARN EASILY, LEARN SMARTLY",
      text: "With our lesson reminder for very busy students and our organized learning method, you’re sure of a unique quality and virtual environment for learning.",
      color: "#E53935",
    },
    {
      title: "TUTOR MARKED ASSIGNMENT",
      text: "Anywhere! NOUNITE is accessible everywhere you are. Are you outside Nigeria but wish to continue studying in NOUN? We make that very possible and seamless using NOUNITE",
      color: "#FFD60A",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute">
        <img src={Ellipse1} />
      </div>
      {/* <div className="absolute top-10 right-0">
        <img src={Ellipse} />
      </div> */}
      <div className="flex flex-wrap gap-20 justify-center px-5 lg:px-0 md:px-0 mt-28">
        {cards.map((card) => (
          <div
            className={`border-${card.color} border px-5 py-5`}
            style={{ width: "550px", borderColor: card.color }}
          >
            <h1
              className={`text-${card.color} font-poppins text-3xl font-medium`}
            >
              {card.title}
            </h1>
            <p className="font-poppins text-base font-normal text-[#000000] pt-5 leading-8">
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center my-[100px]">
        <h1 className="text-textHover font-poppins text-[35px] font-semibold">
          TAP, OPEN & GO!
        </h1>
        <p className="text-textHover font-poppins text-[15px] font-normal leading-[20px] mt-5">
          Enjoy a unique learning experience. Shorten long processes,
          <br /> excessive loadings and faster semester registrations.
        </p>
      </div>
    </div>
  );
};

export default Features;
