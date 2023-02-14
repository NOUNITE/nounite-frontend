import DefaultLayout from "../../layout/DefaultLayout";
import Input from "../atoms/Input";
import { useState } from "react";

const Waitlist = () => {
  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  return ( 
    <DefaultLayout >
      <div className="my-32 flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-8 bg-primary bg-opacity-10 w-[80%] lg:w-[60%] shadow-md rounded">
          <h2 className="text-2xl lg:text-4xl text-textHover font-poppins font-semibold py-5 ">
            Coming Soon!
          </h2>
          <p className="text-center text-paragraphColor text-sm md:text-lg lg:text-xl pb-2 lg:w-[60%]">
            Please give us some time to complete our work on it.
            To learn more about some of our features for the time being, 
            subscribe to our newsletter.
          </p>
          <form onSubmit={(e) => { e.preventDefault; }} action="" className="pt-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-14">

              <Input
                type="text"
                placeholder="Enter your name"
                defaultValue={name}
                onChange= {(e) => setName(e.target.value)}
              />

              <Input
                type="email"
                placeholder="Enter Email Address"
                defaultValue={email}
                onChange= {(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center py-10">
              <button className="block bg-btnColor text-white w-[10rem]  px-2 py-2 rounded-md font-poppins font-medium text-base md:text-sm">
                Join the Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};
 
export default Waitlist;