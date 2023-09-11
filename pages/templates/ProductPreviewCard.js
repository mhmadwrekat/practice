import React from "react";
import Nav from "@/component/page/Nav";
import Image from "next/image";
const ProductPreviewCard = () => {
  return (
    <React.Fragment>
      <Nav navKeyword={"Product Preview Card"} />
      <section className="py-5 md:py-0 h-screen justify-center align-center items-center flex bg-WHITE">
        <section
          id="card"
          className="md:flex md:w-9/12 lg:w-4/12 m-auto bg-white w-11/12 rounded-xl"
        >
          {/* Desktop Image View */}
          <div className="hidden md:block m-auto md:w-4/12 lg:w-6/12">
            <Image
              src="/assest/img/productPreviewCard/product.webp"
              alt="product Preview Card"
              quality={100}
              className="object-contain	rounded-l-xl w-full m-auto"
              priority
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="/assest/img/productPreviewCard/product.webp"
            />
          </div>

          {/* Mobile Image View */}
          <div className="m-auto w-12/12 md:hidden block">
            <Image
              src="/assest/img/productPreviewCard/product2.webp"
              alt="product Preview Card"
              quality={100}
              className="object-contain	rounded-t-xl w-full m-auto"
              priority
              width={100}
              height={100}
              placeholder="blur"
              blurDataURL="/assest/img/productPreviewCard/product.webp"
            />
          </div>
          <div className="md:w-6/12 grid">
            <p className="mx-5 mt-4 text-sm md:mx-7 md:mt-6 2xl:mx-7 2xl:mt-6 text-gray-400 font-serif tracking-widest lg:text-sm lg:mt-3 lg:mx-5">
              PERFUME
            </p>
            <h1 className="text-3xl mx-5 mt-2 md:mx-7 md:mt-3 md:text-3xl 2xl:mx-7 2xl:mt-3 2xl:text-3xl font-Robot font-bold lg:text-2xl lg:mt-1 lg:mx-5">
              Gabrielle Essence Eau De Perfum
            </h1>
            <h2 className="mx-5 mt-3 text-sm text-gray-400 lg:text-xs lg:mx-5 lg:mt-2 2xl:mx-7 2xl:mt-6 md:mx-7 md:mt-6">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfume.Creator for the House of CHANEL.
            </h2>
            <div className="ml-5 mt-3 items-center lg:ml-5 lg:mt-2 2xl:ml-7 2xl:mt-5 md:ml-7 md:mt-5 flex">
              <b className="text-4xl text-green-700 font-Acme lg:text-3xl 2xl:text-4xl md:text-4xl">
                $ 149.99
              </b>
              <p className="ml-6 text-gray-400 line-through lg:text-xs mt-1 lg:ml-4 2xl:ml-5 md:ml-5">
                $169.99
              </p>
            </div>

            <button className="mb-4 py-3 px-24 text-sm mt-3 md:px-14 md:py-2.5 md:text-sm md:mt-3 2xl:px-14 2xl:py-2.5 2xl:text-sm 2xl:mt-3 m-auto lg:mt-2 lg:text-xs font-semibold flex text-white bg-green-700 items-center rounded-md lg:px-10 lg:py-1.5">
              <svg
                width="15"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default ProductPreviewCard;
