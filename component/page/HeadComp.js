import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

const HeadComp = () => {
  const head_keywords = `
    Frontenddeveloper
    Frontend developer
    Frontend
    Frontend project
    frontenddeveloper
    frontend developer
    frontend project
    `;
  const head_description = `
    ◉ Frontend Web Development.
    ◉ Practice on Templates.
    `;

  return (
    <Head>
      <link rel="icon" href="./assest/img/code.webp" />
      <link rel="apple-touch-icon" href="./assest/img/code.webp" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
      />
      <title>Frontend training</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={head_keywords} />
      <NextSeo
        title="Frontend training"
        titleTemplate="Next SEO | %s"
        description={head_description}
        siteName="practice"
        canonical="https://practice-templates.vercel.app/"
        twitter={{
          image: "/twitter.png",
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        facebook={{
          image: "/facebook.png",
          url: "https://website.com",
          type: "website",
        }}
      />
    </Head>
  );
};

export default HeadComp;
