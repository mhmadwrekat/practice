import React from "react";
import Link from "next/link";
const Nav = ({ navKeyword }) => {
  const titleNav = navKeyword ? navKeyword : "Frontend Practice & Templates";
  return (
    <section className="flex justify-between text-sm md:text-lg font-Acme text-GRAY bg-HOTPURPLE 2xl:text-xl lg:text-sm">
      <h1 className="lg:ml-20 2xl:ml-32 p-3 md:p-4">
        <Link href="/">
          <b className="text-HOTPURPLE bg-WHITE rounded p-1.5">Home</b>
        </Link>{" "}
        | {titleNav}
      </h1>
    </section>
  );
};
export default Nav;
