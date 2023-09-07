import React from "react";
import Image from "next/image";
import project from "@/public/assest/data/project.json";
import Link from "next/link";
const CardsProject = () => {
  return (
    <section className="font-Robot text-center grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20 2xl:gap-36 justify-center align-center items-center w-12/12 md:w-11/12 lg:w-11/12 m-auto">
      {project.map((item, key) => {
        return (
          <section key={key} className="rounded-2xl bg-white">
            <h1 className="rounded-t-2xl text-xs p-0.5 md:text-lg 2xl:text-xl font-bold block bg-HOTPURPLE text-GRAY">
              {item.Title}
            </h1>
            <Link href={item.Link}>
              <Image
                src={item.Img}
                alt="QR Image"
                quality={100}
                className="object-contain rounded-full p-3 w-11/12 m-auto cursor-pointer"
                priority
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={item.Img}
              />
            </Link>
            <h3 className="font-light text-gray-600 text-xs lg:text-sm md:text-sm w-10/12 m-auto mb-3 2xl:mb-0 md:mb-0 lg:mb-0 2xl:my-3 ">
              {item.Details}
            </h3>
          </section>
        );
      })}
    </section>
  );
};

export default CardsProject;
