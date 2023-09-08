import React from "react";
import Image from "next/image";
import project from "@/public/assest/data/project.json";
import Link from "next/link";
const CardsProject = () => {
  return (
    <section className="font-Robot text-center grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-20 2xl:gap-36 justify-center align-center items-center w-12/12 md:w-11/12 lg:w-11/12 m-auto">
      {project.map((item, key) => {
        return (
          <section
            key={key}
            className="rounded-2xl bg-white w-12/12 h-64 lg:h-96 2xl:h-96"
          >
            <h1 className="rounded-t-2xl text-xs p-0.5 md:text-lg 2xl:text-xl font-bold block bg-HOTPURPLE text-GRAY">
              {item.Title}
            </h1>
            <Link href={item.Link}>
              <div className="w-12/12 m-auto">
                <Image
                  src={item.Img}
                  alt={item.Title}
                  quality={100}
                  className="object-cover rounded-full p-3 h-40 w-40 lg:w-72 lg:h-72 2xl:w-72 2xl:h-72 m-auto cursor-pointer"
                  priority
                  // layout="fill"
                  // objectFit="cover"
                  width={100}
                  height={100}
                  placeholder="blur"
                  blurDataURL={item.Img}
                />
              </div>
            </Link>
            <h3 className="px-2 font-light text-gray-600 text-xs lg:text-sm md:text-sm w-12/12 m-auto mb-3 2xl:mb-0 md:mb-0 lg:mb-0 2xl:my-3 ">
              {item.Details.slice(0, 76)} ....
            </h3>
          </section>
        );
      })}
    </section>
  );
};

export default CardsProject;
