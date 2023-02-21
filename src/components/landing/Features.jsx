import React from "react";
import {Ellipse1 , elli } from "../../assets/index";

const Features = () => {
  const cards = [
    {
      title: "WHERE CAN YOU USE NOUNITE!?",
      text: "Anywhere! NOUNITE is accessible everywhere you are. Are you outside Nigeria but wish to continue studying in NOUN? We make that very possible and seamless using NOUNITE",
      color: "#36BEB0",
      marginLeft: "0px"
    },
    {
      title: "2 FACTOR AUTHENTICATION(2FA)",
      text: "With our 2FA feature, we ensure that you’re the only one who has access to your account, whenever there’s an attempt to login to your account, you receive a notification via email or SMS.",
      color: "#04D452",
      marginLeft: "50px"
    },
    {
      title: "LEARN EASILY, LEARN SMARTLY",
      text: "With our lesson reminder for very busy students and our organized learning method, you’re sure of a unique quality and virtual environment for learning.",
      color: "#E53935",
      marginLeft: "0px"
    },
    {
      title: "TUTOR MARKED ASSIGNMENT",
      text: "Anywhere! NOUNITE is accessible everywhere you are. Are you outside Nigeria but wish to continue studying in NOUN? We make that very possible and seamless using NOUNITE",
      color: "#FFD60A",
      marginLeft: "50px"
    },
  ];
  return (
    <div className="relative">
      <div className="absolute lg:w-[300px] md:w-[250px] w-[170px] sm:w[180px] xl:w-[350px] ">
        <img src={Ellipse1} />
      </div>
      <div className="absolute top-10 right-0 lg:w-[300px] md:w-[250px] w-[170px] sm:w[180px] xl:w-[350px] z-10 ">
        <img src={elli} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 gap-5 justify-center items-center place-items-center px-5 lg:px-0 md:px-5 mt-28  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`border-${card.color} rounded-md border xl:px-5 lg:px-2 px-3 lg:py-5 py-3 w-[350px] md:w-[280px] lg:w-[400px] xl:w-[500px] sm:${card.marginLeft} z-20 `}
            style={{ borderColor: card.color, marginLeft: card.marginLeft }}
          >
            <h1
              className={`text-${card.color} font-poppins lg:text-3xl text-[27px] md:text-[23px] lg:w-[250px] leading-[40px] font-medium`}
              style={{ color: card.color }}
            >
              {card.title}
            </h1>
            <p className="font-poppins text-base font-normal text-black lg:w-[390px] text-[13px] lg:text-[14px] xl:text-[15px] pt-5 lg:leading-8 leading-6">
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
