import React, { useState } from "react";
import Nav from "../../component/page/Nav";

const ADVICE_API = process.env.NEXT_PUBLIC_ADVICE_API;

// Get Server Side Function
export async function getServerSideProps() {
  const randomNum = Math.floor(Math.random() * 199) + 1;
  const response = await fetch(`${ADVICE_API}/${randomNum}`, {
    cache: "no-store",
  });
  const advices = await response.json();

  return {
    props: {
      advices: advices,
    },
  };
}

const AdviceGenerator = (props) => {
  const [advice, setAdvice] = useState(props?.advices);

  const handle_changing = async () => {
    const randomNum = Math.floor(Math.random() * 199) + 1;
    const response = await fetch(`${ADVICE_API}/${randomNum}`);
    const advices = await response.json();
    setAdvice(advices);
  };
  return (
    <React.Fragment>
      <Nav navKeyword={"Advice Generator"} />

    <section className="font-Acme bg-gray-900 h-screen justify-center align-center items-center flex">
      <section className="w-10/12">
        <section
          id="card"
          className="bg-gray-800 rounded-xl text-center lg:w-7/12 2xl:w-5/12 m-auto px-5 py-8"
        >
          <p className="font-bold font-serif text-green-300">
            ADVICE # {advice?.slip?.id}
          </p>
          <br />
          <p className="text-3xl font-medium text-gray-200">
            {`"${advice?.slip?.advice}"`}
          </p>
          {/* JUST MOBILE VIEW */}
          <hr className="bg-gray-100 w-11/12 m-auto my-7 md:hidden lg:hidden 2xl:hidden" />
          {/* Desktop SVG */}
          <svg
            className="md:flex lg:flex hidden w-12/12 m-auto my-7"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
          <div className="relative bg-blue-100 w-1/12 m-auto pr-14">
            <button
              id="button_advice_generator"
              className="absolute top-1 left-auto p-4 bg-green-500 rounded-full hover:drop-shadow-xl"
              onClick={() => {
                handle_changing();
              }}
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                  fill="#202733"
                />
              </svg>
            </button>
          </div>
        </section>
      </section>
    </section>
    </React.Fragment>

  );
};

export default AdviceGenerator;
