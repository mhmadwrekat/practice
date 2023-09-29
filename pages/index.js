import React from "react";
import Nav from "../component/page/Nav";
import Home from "../component/HomePage/Home";
const index = () => {
  return (
    <section className="bg-GRAY font-Robot">
      <p className="bg-PURPLE text-COLDBLUE 2xl:p-8 absolute relative top-10 left-20 z-50 font-Acme font-Robot text-GRAY text-HOTPURPLE text-COLDPURPLE text-WHITE bg-WHITE bg-HOTPURPLE bg-GRAY bg-COLDPURPLE hidden lg:ml-20 2xl:ml-32 p-3 2xl:p-4 lg:p-4 md:p-5 md:p-4 h-screen justify-center align-center items-center bg-orange-500 active:bg-orange-500 focus:text-white focus:bg-orange-500"></p>
      <Nav />
      <section className="text-HOTPURPL w-11/12 md:w-10/12 m-auto">
        <Home />
      </section>
    </section>
  );
};

export default index;
