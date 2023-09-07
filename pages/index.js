import React from "react";
import Nav from "@/component/page/Nav";
import Home from "../component/Home";
const index = () => {
  return (
    <section className="bg-WHITE font-Robot">
      <p className="font-Acme font-Robot text-GRAY text-HOTPURPLE text-COLDPURPLE text-WHITE bg-WHITE bg-HOTPURPLE bg-GRAY bg-COLDPURPLE"></p>
      <Nav />
      <section className="text-HOTPURPL w-11/12 md:w-10/12 m-auto">
        <Home />
      </section>
    </section>
  );
};

export default index;
