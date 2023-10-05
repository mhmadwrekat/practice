import React from "react";
import Home from "../component/HomePage/Home";
const index = () => {
  return (
    <section className="bg-blue-50 font-Robot">
      <p className=" m-auto lg:ml-auto lg:mr-auto md:text-start text-center lg:text-start mb-5 border-2 border-gray-300 px-3 lg:py-3 2xl:py-4 rounded-lg text-sm shadow md:w-12/12 lg:w-11/12 2xl:w-12/12 placeholder-gray-400 float-right grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10 2xl:gap-10 justify-center align-center items-center w-12/12 md:w-11/12 lg:w-11/12 m-auto bg-PURPLE text-COLDBLUE 2xl:p-8 absolute relative top-10 left-20 z-50 font-Acme font-Robot text-GRAY text-HOTPURPLE text-COLDPURPLE text-WHITE bg-WHITE bg-HOTPURPLE bg-GRAY bg-COLDPURPLE hidden lg:ml-20 2xl:ml-32 p-3 2xl:p-4 lg:p-4 md:p-5 md:p-4 h-screen justify-center align-center items-center bg-orange-500 active:bg-orange-500 focus:text-white lg:p-0 xl:p-0 2xl:p-0 md:m-16 md:p-16 sm:p-10 bg-black focus:bg-orange-500"></p>
      <p className="hidden w-10 my-7 bg-blue-300 w-10/12 lg:w-8/12 m-auto font-medium lg:text-5xl 2xl:text-6xl"></p>
      <Home />
    </section>
  );
};
export default index;
