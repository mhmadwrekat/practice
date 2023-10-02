import React from "react";
import Image from "next/image";
import project from "../../public/assest/data/project.json";
import Link from "next/link";
const CardsProject = () => {
  return (
    <section className="font-Robot text-center grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-10 2xl:gap-10 justify-center align-center items-center w-12/12 md:w-11/12 lg:w-11/12 m-auto">
      {project.map((item, key) => {
        return (
          <section key={key} className="rounded-2xl bg-white w-12/12 shadow-xl">
            <h1 className="rounded-t-xl text-xs p-0.5 md:text-base 2xl:text-xl font-bold block bg-HOTPURPLE text-GRAY">
              {item.Title}
            </h1>
            <Link href={item.Link}>
              <div className="w-12/12 m-auto">
                <Image
                  src={item.Img}
                  alt={item.Title}
                  // quality={100}
                  className="object-cover rounded-b-xl p-0 h-40 lg:h-72 w-full 2xl:h-72 m-auto cursor-pointer"
                  priority
                  // layout="fill"
                  // objectFit="cover"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL={item.Img}
                />
              </div>
            </Link>
          </section>
        );
      })}
    </section>
  );
};

export default CardsProject;
