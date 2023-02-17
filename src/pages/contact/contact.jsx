import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
// import {
//   call,
//   facebook,
//   linkedIn,
//   location,
//   mail,
//   twitter
// } from "../../assets/index";
export default function Contact() {
  return (
    <DefaultLayout>
      <div className="flex flex-row items-center w-full my-32 bg-opacity-10 bg-primary">
        <div className="w-1/2 pl-10">
          <div className="flex">
            
            <h2 className="py-20 ">call us</h2>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="bg-white w-[80%]"></div>
        </div>
      </div>
    </DefaultLayout>
  );
}
