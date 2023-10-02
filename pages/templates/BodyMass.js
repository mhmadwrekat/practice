import Nav from "../../component/page/Nav";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const BodyMass = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  const improveWeight = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="32" fill="#F21E84" opacity=".15" />
          <path
            fill="#F21E84"
            d="M44 29.25h-1.279a10.75 10.75 0 0 0-21.442 0H20a.75.75 0 0 0-.75.75 12.794 12.794 0 0 0 7 11.383V42A1.75 1.75 0 0 0 28 43.75h8A1.75 1.75 0 0 0 37.75 42v-.617a12.793 12.793 0 0 0 7-11.383.75.75 0 0 0-.75-.75Zm-6.22-6.464c.363.29.703.608 1.019.95a10.737 10.737 0 0 0-6.444 5.514h-4.187A9.28 9.28 0 0 1 37 22.75c.26 0 .521.014.78.036Zm2.008 2.231a9.186 9.186 0 0 1 1.43 4.233H34.06a9.237 9.237 0 0 1 5.727-4.233ZM32 20.75a9.21 9.21 0 0 1 3.35.625 10.79 10.79 0 0 0-8.742 7.875h-3.826A9.261 9.261 0 0 1 32 20.75Zm4.688 19.48a.75.75 0 0 0-.438.683V42a.25.25 0 0 1-.25.25h-8a.25.25 0 0 1-.25-.25v-1.087a.75.75 0 0 0-.438-.683 11.294 11.294 0 0 1-6.537-9.48h22.45a11.294 11.294 0 0 1-6.538 9.48Z"
          />
        </svg>
      ),
      title: "Healthy eating",
      text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="32" fill="#F69134" opacity=".15" />
          <path
            fill="#F69134"
            d="M47 31.25h-1.25V27A1.75 1.75 0 0 0 44 25.25h-2.25V24A1.75 1.75 0 0 0 40 22.25h-3A1.75 1.75 0 0 0 35.25 24v7.25h-6.5V24A1.75 1.75 0 0 0 27 22.25h-3A1.75 1.75 0 0 0 22.25 24v1.25H20A1.75 1.75 0 0 0 18.25 27v4.25H17a.75.75 0 1 0 0 1.5h1.25V37A1.75 1.75 0 0 0 20 38.75h2.25V40A1.75 1.75 0 0 0 24 41.75h3A1.75 1.75 0 0 0 28.75 40v-7.25h6.5V40A1.75 1.75 0 0 0 37 41.75h3A1.75 1.75 0 0 0 41.75 40v-1.25H44A1.75 1.75 0 0 0 45.75 37v-4.25H47a.75.75 0 1 0 0-1.5Zm-27 6a.25.25 0 0 1-.25-.25V27a.25.25 0 0 1 .25-.25h2.25v10.5H20ZM27.25 40a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm13 0a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm4-3a.25.25 0 0 1-.25.25h-2.25v-10.5H44a.25.25 0 0 1 .25.25v10Z"
          />
        </svg>
      ),
      title: "Regular exercise",
      text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="32" fill="#22C1C1" opacity=".15" />
          <path
            fill="#22C1C1"
            d="M45.75 28a.75.75 0 0 1-.75.75h-2.25V31a.75.75 0 0 1-1.5 0v-2.25H39a.75.75 0 1 1 0-1.5h2.25V25a.75.75 0 1 1 1.5 0v2.25H45a.75.75 0 0 1 .75.75ZM34 22.75h1.25V24a.75.75 0 1 0 1.5 0v-1.25H38a.75.75 0 0 0 0-1.5h-1.25V20a.75.75 0 0 0-1.5 0v1.25H34a.75.75 0 1 0 0 1.5Zm8.906 12.535a.75.75 0 0 1 .134.75A11.751 11.751 0 1 1 27.97 20.96a.75.75 0 0 1 .992.849 11.262 11.262 0 0 0 13.23 13.229.75.75 0 0 1 .714.247Zm-1.796 1.418A12.765 12.765 0 0 1 27.297 22.89a10.248 10.248 0 0 0 1.526 18.849 10.25 10.25 0 0 0 12.287-5.036Z"
          />
        </svg>
      ),
      title: "Adequate sleep",
      text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];

  const handle_status = () => {
    let result = (weight / height ** 2) * 10000;
    result > 10 && result < 50 && result < 16
      ? setStatus("Extreme Thinness")
      : result <= 17
      ? setStatus("Moderate Thinness")
      : result <= 18.5
      ? setStatus("Light Thinness")
      : result <= 25
      ? setStatus("Normal Weight")
      : result <= 30
      ? setStatus("Overweight")
      : result <= 35
      ? setStatus("Class I Obesity")
      : result <= 40
      ? setStatus("Class II Obesity")
      : setStatus("Class III Obesity");
  };

  useEffect(() => {
    // ( BMI ) equation to convert weight and height into body mass.
    setResult(((weight / height ** 2) * 10000).toFixed(2));
    handle_status();
  }, [height, weight]);

  return (
    <React.Fragment>
      <Nav navKeyword={"Body Mass BMI"} />
      {/* First Section --> Calculating BMI */}
      {/* First Section --> Calculating BMI */}
      <section className="font-Robot bg-gradient-to-r from-white to-blue-100">
        <section className="w-11/12 lg:w-11/12 2xl:w-10/12 m-auto">
          <section className="py-5 lg:py-10 2xl:py-20 grid md:grid-cols-1 lg:grid-cols-2 text-gray-800">
            <div className="py-5 lg:py-10">
              <p className="w-11/12 lg:w-8/12 m-auto text-center lg:text-start font-medium text-4xl md:text-5xl 2xl:text-6xl">
                Body Mass
                <br /> Index Calculator
              </p>
              <p className="text-center lg:text-start my-4 lg:my-6 md:my-6 text-gray-500 w-11/12 m-auto text-base">
                Better understand your weight in relaion to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
            <div
              id="form"
              className="p-6 w-11/12 lg:w-9/12 m-auto bg-white rounded-2xl lg:rounded-xl shadow-lg"
            >
              <p className="text-lg md:text-xl lg:text-lg font-medium">
                Enter your details below
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-6 mt-5">
                <div>
                  <label
                    htmlFor="height"
                    className="text-gray-500 text-sm md:text-base lg:text-sm mb-1 block"
                  >
                    Height
                  </label>
                  <input
                    type="number"
                    name="height"
                    id="height"
                    className={`mb-5 border-2 border-gray-300 px-3 py-3 md:py-4 lg:py-3 2xl:py-4 rounded-lg md:text-lg lg:text-sm shadow w-full lg:w-11/12 2xl:w-12/12 placeholder-gray-400 `}
                    placeholder="170   CM"
                    required
                    onInput={(event) => {
                      setHeight(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="weight"
                    className="text-gray-500 text-sm md:text-base lg:text-sm mb-1 block"
                  >
                    Weight
                  </label>

                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    className={`mb-5 border-2 border-gray-300 px-3 py-3 md:py-4 lg:py-3 2xl:py-4 rounded-lg md:text-lg lg:text-sm shadow w-full lg:w-11/12 2xl:w-12/12 placeholder-gray-400 `}
                    placeholder="70   KG"
                    required
                    onInput={(event) => {
                      setWeight(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="text-center md:text-start lg:text-start bg-blue-600 rounded-2xl md:rounded-r-full lg:rounded-r-full text-white p-3 md:p-7 lg:p-5 ">
                {result > 10 && result < 50 ? (
                  <section className="flex justify-between">
                    <div className="w-6/12 md:w-5/12 lg:w-5/12">
                      <p className="text-xs md:text-base lg:text-sm font-medium">
                        Your BMI is...
                      </p>
                      <p className="font-bold text-3xl md:text-4xl lg:text-3xl mt-2.5">
                        {result}
                      </p>
                    </div>
                    <div className="w-6/12 md:w-5/12 lg:w-5/12 m-auto">
                      <p className="w-11/12 md:w-11/12 lg:w-11/12 text-sm md:text-xl lg:text-base font-bold text-gray-300">
                        {status}
                      </p>
                    </div>
                  </section>
                ) : (
                  <React.Fragment>
                    <p className="text-base md:text-xl lg:text-lg font-medium">
                      Welcome!
                    </p>
                    <p className="mt-1.5 md:mt-0 lg:mt-0 md:w-9/12 lg:w-10/12 text-xs md:text-base lg:text-sm text-gray-300">
                      Enter your height and weight and you`ll see your MBI
                      result here
                    </p>
                  </React.Fragment>
                )}
              </div>
            </div>
          </section>
        </section>
      </section>
      {/* Second Section --> BMI Result */}
      {/* Second Section --> BMI Result */}
      <section className="font-Robot md:w-12/12 lg:w-9/12 m-auto grid md:grid-cols-2 lg:grid-cols-2 md:gap-7 lg:my-5">
        <div className="lg:w-12/12 2xl:w-11/12 m-auto">
          <Image
            src="/assest/img/bodyMass/result.webp"
            alt="bodyMass Men"
            className="w-12/12 2xl:w-11/12 object-fill rounded-b-xl p-0 m-auto cursor-pointer"
            priority
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/assest/img/bodyMass/result.webp"
          />
        </div>
        <div className="w-11/12 m-auto">
          <p className="text-gray-800 text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium mt-8 md:mt-14 lg:mt-28 2xl:mt-36">
            What your BMI result means
          </p>
          <p className="mt-5 2xl:mt-10 text-base lg:text-sm text-gray-500">
            A BMI range of 18.5 to 24.9 is considered a `healthy weight.``
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>
      {/* Third Section --> Improve weight */}
      {/* Third Section --> Improve weight */}
      <section className="mr-5 rounded-r-3xl my-10 py-10 lg:py-20 font-Robot bg-gradient-to-r from-white to-blue-100">
        <section className="grid lg:grid-cols-3 gap-14 md:gap-10 lg:gap-10 w-11/12 md:w-11/12 lg:w-8/12 m-auto">
          {improveWeight.map((item, key) => {
            return (
              <div key={key} className="md:flex lg:mx-2 ">
                <div className="md:mt-6">{item.svg}</div>
                <div className="md:ml-6">
                  <p className="text-gray-800 text-xl md:text-2xl lg:text-2xl font-medium my-3 md:my-4 lg:my-5">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base lg:text-sm 2xl:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
      {/* Last Section --> Limitations of BMI */}
      {/* Last Section --> Limitations of BMI */}
      <section className="font-Robot w-11/12 lg:w-9/12 m-auto md:my-10 lg:my-20">
        <section className="grid lg:grid-cols-2 gap-6 lg:gap-40">
          <div className="text-center lg:text-start">
            <p className="text-4xl font-bold text-gray-800">
              Limitations of BMI
            </p>
            <p className="text-gray-500 text-base my-7 lg:mr-5">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div
            id="First card"
            className="p-6 shadow-xl md:w-6/12 lg:w-10/12 2xl:w-8/12 m-auto rounded-xl"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#F24E1E"
                  d="M26 3.25h-5a.75.75 0 1 0 0 1.5h3.19l-3.75 3.742a7.75 7.75 0 1 0-6.19 13.22v2.538H11a.75.75 0 1 0 0 1.5h3.25V29a.75.75 0 1 0 1.5 0v-3.25H19a.75.75 0 1 0 0-1.5h-3.25v-2.538A7.75 7.75 0 0 0 21.41 9.65l3.84-3.84V9a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-.75-.75Zm-11 17A6.25 6.25 0 1 1 21.25 14 6.257 6.257 0 0 1 15 20.25Z"
                />
              </svg>

              <p className="ml-5 mt-1 font-medium text-lg">Gender</p>
            </div>
            <p className="text-gray-500 text-sm mt-5 ">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child`s age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
        </section>
        <section className="md:flex lg:flex md:justify-center lg:justify-end mt-5 lg:mt-8 2xl:mt-10">
          <div
            id="Second card"
            className="md:mr-6 lg:mr-5 p-6 shadow-xl md:w-12/12 lg:w-4/12 2xl:w-3/12 rounded-xl"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#22C1C1"
                  d="M28.75 14A2.75 2.75 0 0 0 26 11.25h-9.25V9.675a3.756 3.756 0 0 0 3-3.675c0-3.362-3.198-5.534-3.334-5.625a.75.75 0 0 0-.832 0C15.448.466 12.25 2.638 12.25 6a3.756 3.756 0 0 0 3 3.675v1.575H6A2.75 2.75 0 0 0 3.25 14v2.916c0 1.066.352 2.1 1 2.947V25A2.75 2.75 0 0 0 7 27.75h18A2.75 2.75 0 0 0 27.75 25v-5.137a4.85 4.85 0 0 0 1-2.947V14Zm-15-8c0-1.925 1.5-3.426 2.25-4.055.75.625 2.25 2.125 2.25 4.055a2.25 2.25 0 0 1-4.5 0Zm-9 8A1.25 1.25 0 0 1 6 12.75h20A1.25 1.25 0 0 1 27.25 14v2.916c0 1.79-1.416 3.285-3.157 3.333A3.25 3.25 0 0 1 20.75 17a.75.75 0 1 0-1.5 0 3.25 3.25 0 1 1-6.5 0 .75.75 0 1 0-1.5 0 3.251 3.251 0 0 1-3.343 3.25c-1.74-.049-3.157-1.544-3.157-3.334V14ZM25 26.25H7A1.25 1.25 0 0 1 5.75 25v-3.836a4.6 4.6 0 0 0 2.117.586 4.726 4.726 0 0 0 3.446-1.345c.26-.254.49-.537.687-.843a4.75 4.75 0 0 0 8 0c.198.306.43.589.69.843A4.716 4.716 0 0 0 24 21.75h.134a4.6 4.6 0 0 0 2.116-.586V25A1.25 1.25 0 0 1 25 26.25Z"
                />
              </svg>

              <p className="ml-5 mt-1 font-medium text-lg">Age</p>
            </div>
            <p className="text-gray-500 text-sm mt-5">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div
            id="Third card"
            className="md:ml-5 lg:ml-5 p-6 shadow-xl md:w-12/12 lg:w-4/12 2xl:w-3/12 mt-5 md:mt-0 lg:mt-0 rounded-xl"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#9747FF"
                  d="M10.44 28h9.154C25.368 28 28 23.732 28 19.77a6.877 6.877 0 0 0-.68-2.677 6.836 6.836 0 0 0-1.678-2.188 7.96 7.96 0 0 0-5.336-2.216 7.924 7.924 0 0 0-3.752 1.188 7.99 7.99 0 0 0-2.73 2.852 932.84 932.84 0 0 1-1.615-3.254h1.697c.503-.031.98-.232 1.355-.57.376-.338.628-.793.715-1.292a2.707 2.707 0 0 0 .963-2.174c0-2.955-3.284-4.438-5.11-4.438-2.493-.059-3.216 1.763-3.863 3.393l-.028.073C7.534 9.509 4 18.748 4 21.554a6.558 6.558 0 0 0 1.844 4.588 6.25 6.25 0 0 0 4.596 1.856V28ZM9.43 9.06c.7-1.763 1.089-2.444 2.33-2.444h.055c1.195 0 3.52.996 3.52 2.824.021.184-.007.37-.082.539a1.5 1.5 0 0 0-.366-.35.76.76 0 0 0-.41-.139h-.426c-.415-.527-1.691-1.462-2.684-1.286l1.04 1.33h1.485l.215.516c.266.637.174.955.088 1.093a.447.447 0 0 1-.334.21H8.826l.495.65c.217.284.506.506.789.675.002.121.03.24.084.35l.222.447v.002c.47.948 1.56 3.144 2.145 4.316-.02.029-.04.059-.058.089l-2.32 3.793a.812.812 0 0 0 .264 1.11.797.797 0 0 0 1.103-.265l2.084-3.41a.999.999 0 0 0 .218.027c.082-.003.162-.016.24-.038l2.152 3.569a.803.803 0 0 0 1.101.271.806.806 0 0 0 .27-1.108l-2.376-3.94a1.659 1.659 0 0 0-.113-.163 6.328 6.328 0 0 1 2.142-2.399 6.272 6.272 0 0 1 3.037-1.027 6.353 6.353 0 0 1 4.249 1.784 5.31 5.31 0 0 1 1.843 3.684c-.001 3.293-2.105 6.616-6.803 6.616H10.44a4.692 4.692 0 0 1-3.454-1.372 4.917 4.917 0 0 1-1.381-3.445c0-2.13 2.764-9.758 3.826-12.509Z"
                />
              </svg>

              <p className="ml-5 mt-1 font-medium text-lg">Muscle</p>
            </div>
            <p className="text-gray-500 text-sm mt-5 ">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn`t differentiate muscle from fat.
            </p>
          </div>
        </section>
        <section className="md:flex lg:flex md:justify-center lg:justify-end lg:mr-20 mt-5 lg:mt-8 2xl:mt-10">
          <div
            id="Fourth card"
            className="md:mr-5 lg:mr-5 p-6 shadow-xl md:w-12/12 lg:w-5/12 2xl:w-4/12 rounded-xl"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#FFC700"
                  d="M11.5 17.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9-2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-1.4 5.615a5.875 5.875 0 0 1-6.2 0 .75.75 0 0 0-.8 1.27 7.375 7.375 0 0 0 7.8 0 .751.751 0 0 0-.8-1.27ZM28.75 16A12.75 12.75 0 1 1 16 3.25 12.765 12.765 0 0 1 28.75 16Zm-1.5 0A11.263 11.263 0 0 0 16.366 4.756C14.787 6.904 14.75 8.981 14.75 9a1.25 1.25 0 0 0 2.5 0 .75.75 0 1 1 1.5 0 2.75 2.75 0 1 1-5.5 0c0-.094.019-1.978 1.268-4.152A11.25 11.25 0 1 0 27.25 16Z"
                />
              </svg>

              <p className="ml-5 mt-1 font-medium text-lg">Pregnancy</p>
            </div>
            <p className="text-gray-500 text-sm mt-5">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div
            id="Fifth card"
            className="md:ml-5 lg:ml-5 p-6 shadow-xl md:w-12/12 lg:w-5/12 2xl:w-4/12 mt-5 md:mt-0 lg:mt-0 rounded-xl"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#F21E84"
                  d="M16 8.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Zm0-6a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm11.11 14.177-5.651-6.407a3.75 3.75 0 0 0-2.813-1.27h-5.292a3.75 3.75 0 0 0-2.813 1.269L4.89 16.927a2.25 2.25 0 0 0 3.168 3.198l2.638-2.116-2.266 8.606a2.25 2.25 0 0 0 4.094 1.868L16 22.5l3.476 5.989a2.25 2.25 0 0 0 4.094-1.868l-2.266-8.608 2.639 2.112a2.25 2.25 0 0 0 3.167-3.195v-.003Zm-1.079 2.103a.75.75 0 0 1-1.061 0 .523.523 0 0 0-.061-.055l-4.439-3.56a.75.75 0 0 0-1.195.775l2.859 10.866a.966.966 0 0 0 .046.125.75.75 0 1 1-1.36.634.542.542 0 0 0-.031-.06l-4.14-7.13a.75.75 0 0 0-1.298 0l-4.14 7.131a.534.534 0 0 0-.031.06.75.75 0 0 1-1.36-.633.954.954 0 0 0 .046-.125l2.859-10.867a.75.75 0 0 0-.316-.816.759.759 0 0 0-.409-.125.75.75 0 0 0-.47.165l-4.439 3.56a.523.523 0 0 0-.061.055.75.75 0 0 1-1.061-1.061L6 17.935l5.665-6.424a2.25 2.25 0 0 1 1.688-.761h5.292a2.25 2.25 0 0 1 1.688.761L26 17.935l.032.034a.748.748 0 0 1 0 1.061Z"
                />
              </svg>

              <p className="ml-5 mt-1 font-medium text-lg">Race</p>
            </div>
            <p className="text-gray-500 text-sm mt-5 ">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.{" "}
            </p>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};
export default BodyMass;
