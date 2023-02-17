/* eslint-disable react/no-unescaped-entities */
import DefaultLayout from "../../layout/DefaultLayout";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faqImg } from "../../assets";
import { faqs } from "../../data/data";

export default function Faq() {
  return (
    <div className="w-full  my-12 ">
      <div className="w-full pt-12">
        <img src={faqImg} alt="faq img" className="w-full" />
      </div>

      <div>
        <h1 className="text-center text-textHover text-2xl lg:text-5xl font-poppins font-semibold py-10">
          Frequently Asked Questions{" "}
        </h1>
      </div>

      <div className="mx-auto w-full rounded-2xl px-5 md:px-10 lg:px-20 bg-white">
        {faqs.map((item) => {
          return (
            <Disclosure key={item.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex mt-4 w-full justify-between rounded-lg bg-cyan-100 px-4 py-9 text-left text-lg font-medium text-textHover font-poppins focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-6 w-6 text-[#0D4459]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-8 pt-4 pb-2 text-lg text-textHover font-poppins font-normal">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="block bg-btnColor text-white w-[10rem]  px-2 py-5 rounded-md font-poppins font-medium text-base md:text-sm">
          Contact us
        </button>
      </div>
    </div>
  );
}
