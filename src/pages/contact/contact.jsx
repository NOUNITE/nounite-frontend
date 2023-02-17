import React from "react";
import { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import {
  call,
  location,
  mail

} from "../../assets/index";
import SocialIcons from "../../components/molecule/socialIcons";
export default function Contact() {
  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[phone,setPhone] = useState(0);
  const[message,setMessage] = useState("");
  return (
    <DefaultLayout>
      <div className="my-32 relative flex flex-col font-poppins md:flex-row w-full bg-opacity-10 bg-primary">
        <div className="md:w-1/2 w-full md:pl-10 lg:pl-20 pb-10">
 
          <div className="py-5">
            <div className="flex flex-row items-center py-4">
              <img src={call} alt="phone icon" className="w-[30px] h-[30px] pr-2"/>
              <h2 className="text-[22px] text-textHover font-500">call us</h2>
            </div>
      
            <a href="tel:+23481-2772-8253." className="text-sm text-gray font-500">+23481-2772-8253.</a>
          </div>

          <div className="py-5">
            <div className="flex flex-row items-center py-4">
              <img src={location} alt="location icon" className="w-[30px] h-[30px] pr-2"/>
              <h2 className="text-[22px] text-textHover font-500">Location</h2>
            </div>
            <h3 className="text-sm text-gray font-500">3 Afikpo Street, Achara Layout, Enugu, 
              Enugu State, Nigeria.</h3>
          </div>

          <div className="py-5">
            <div className="flex flex-row items-center py-4">
              <img src={mail} alt="phone icon" className="w-[35px] h-[30px] pr-2"/>
              <h2 className="text-[22px] text-textHover font-500">Mail us</h2>
            </div>
            <a href="mailto:nouniteteam@gmail.com" target="_blank" rel="noreferrer" className="text-sm text-gray font-500">nouniteteam@gmail.com</a>
          </div>
          <div className="py-5">
            <h1 className="text-[22px] text-textHover font-500 pb-2">Socials</h1>
            <SocialIcons />
          </div>
        </div>
        <div className="md:w-1/2 w-full shadow-2xl ">
          <div className="bg-white w-[40%] h-[38rem] absolute bottom-[-2rem] p-9 border border-inputBorder border-solid">
            <h1 className="text-4xl font-semibold">Let’s talk here</h1>
            <h2 className="text-gray text-md pt-2">We would love to hear from you!</h2>
            <form action="" >
              <div className="mt-10">
                <input
                  type="text"
                  className=" h-10 pl-4 w-full text-md font-normal text-gray-700 outline-none border-b border-solid border-inputBorder transition ease-in-out  focus:outline-none"
                  value={name}
                  placeholder="Name *"
                  onChange= {(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-10">
                <input
                  type="text"
                  className=" h-10 pl-4 w-full text-md font-normal text-gray-700 outline-none border-b border-solid border-inputBorder transition ease-in-out  focus:outline-none"
                  value={email}
                  placeholder="Email *"
                  onChange= {(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-10">
                <input
                  type="text"
                  className=" h-10 pl-4 w-full text-md font-normal text-gray-700 outline-none border-b border-solid border-inputBorder transition ease-in-out  focus:outline-none"
                  value={phone}
                  placeholder="phone *"
                  onChange= {(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-10">
                <input
                  type="text"
                  className=" h-10 pl-4 w-full text-md font-normal text-gray-700 outline-none border-b border-solid border-inputBorder transition ease-in-out  focus:outline-none"
                  value={message}
                  placeholder="message *"
                  onChange= {(e) => setMessage(e.target.value)}
                />
              </div>


              <div className="mt-8">
                <button className="block bg-btnColor text-white w-[10rem]  px-2 py-4 rounded-md font-poppins font-medium text-base md:text-sm">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
