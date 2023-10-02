import React from "react";
import Nav from "../../component/page/Nav";
import Image from "next/image";
const QR = () => {
  return (
    <React.Fragment>
      <Nav navKeyword={"QR Component"} />
      <section className="lg:p-0 xl:p-0 2xl:p-0 md:p-16 sm:p-10 bg-COLDBLUE">
        <section className="h-screen justify-center align-center items-center flex bg-COLDBLUE">
          <section className="text-HOTPURPL font-Robot p-3 lg:p-4 2xl:p-4 bg-white rounded-xl sm:w-5/12 w-9/12 md:w-5/12 lg:w-2/12 2xl:w-2/12">
            <Image
              src="/assest/img/QR/QR.webp"
              alt="QR Image"
              quality={100}
              className="object-contain	rounded-xl w-full m-auto"
              priority
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="/assest/img/QR/QR.webp"
            />
            <div className="w-full lg:w-11/12 m-auto text-center">
              <h1 className="my-3 2xl:my-4 lg:my-4 md:text-lg lg:text-base text-xl font-bold">
                Improve your front-end skills by building projects
              </h1>
              <h3 className="2xl:text-sm lg:text-xs md:text-sm mb-3 text-gray-600">
                Scan the QR code to visit Frontend practice and take your coding
                skills to the next level
              </h3>
            </div>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default QR;
