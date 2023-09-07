import React from "react";
import Image from "next/image";
import CardsProject from "./CardsProject";
const Home = () => {
  return (
    <>
      <section className="pt-3 lg:pt-20 grid lg:grid-cols-2 items-center">
        <div className="mx-3">
          <h1 className="text-HOTPURPLE text-4xl lg:text-4xl 2xl:text-5xl font-medium">
            Become a Better Frontend Developer.
          </h1>
          <p className="mt-3 text-xs lg:mt-8 text-gray-700 lg:w-5/6 md:text-base lg:text-sm 2xl:text-lg">
            Take your frontend skills to the next level by practice and
            training.
            <br />
            On this site you will find a lot of small models that I made to
            improve my skills.
            <br />
            It can be used as templates.
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <Image
            src="/assest/img/Frontend_home.webp"
            alt="Frontend Developer"
            className="rounded-md w-full lg:w-10/12 m-auto"
            priority
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL="/assest/img/Frontend_home.webp"
          />
        </div>
      </section>
      <hr className="my-8 md:my-10 2xl:my-20 text-COLDPURPLE" />
      <CardsProject />
      <section className="py-10"></section>
    </>
  );
};
export default Home;
