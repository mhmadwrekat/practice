import React from "react";
import Nav from "@/component/page/Nav";
import Home from "../component/HomePage/Home";
const index = () => {
  return (
    <section className="bg-WHITE font-Robot">
      <p className="absolute relative top-10 left-20 z-50 font-Acme font-Robot text-GRAY text-HOTPURPLE text-COLDPURPLE text-WHITE bg-WHITE bg-HOTPURPLE bg-GRAY bg-COLDPURPLE"></p>
      <Nav />
      <section className="text-HOTPURPL w-11/12 md:w-10/12 m-auto">
        <Home />
        
      </section>
    </section>
  );
};

export default index;
