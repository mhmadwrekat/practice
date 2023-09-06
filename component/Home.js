import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <>
      {/* <div className="text-xl text-green-500 text-center m-5 hover:text-white">
        Home
      </div> */}

      <section className="pt-3 lg:pt-20 grid lg:grid-cols-2 items-center">
        <div className="mx-3">
          <h1 className="text-HOTPURPLE text-2xl md:text-4xl lg:text-4xl 2xl:text-5xl font-Robot font-medium">
            Become a Better Frontend Developer.
          </h1>
          <p className="mt-3 text-xs lg:mt-8 text-gray-700 lg:w-5/6 md:text-base lg:text-sm 2xl:text-lg">
            Take your frontend skills to the next level by pracice and training.
            <br />
            On this site you will find a lot of small models that I made to
            improve my skills.
          </p>
        </div>
        <div>
          <Image
            src="/Frontend_home.webp"
            alt="Frontend Developer"
            className="mt-5 lg:mt-0 rounded-md w-full lg:w-10/12 m-auto"
            priority
            width={100}
            height={100}
            // objectFit="cover"
            // loading="lazy"
            placeholder="blur"
            blurDataURL="/Frontend_home.webp"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
