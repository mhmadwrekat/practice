import React from "react";
import Home from "../component/Home";
import Nav from "@/component/page/Nav";
const index = () => {
  return (
    <section className="bg-WHITE font-Robot text-GRA">
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
      <Nav />

      <section className="text-HOTPURPL w-10/12 m-auto">
        <Home />
      </section>
    </section>
  );
};

export default index;
