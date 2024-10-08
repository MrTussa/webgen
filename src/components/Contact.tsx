"use client";
import React from "react";

import HeaderText from "./HeaderText";
import GlobeElement from "./GlobeElement";

import Form from "./Form";
const Contact = () => {
  return (
    <section className="bg-black-secondary z-0 w-full pb-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dot-black -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]" />
      <HeaderText text="Свяжитесь с Нами" />
      <div className="flex  items-center flex-col lg:flex-row ">
        <GlobeElement />
        <div className="h-fit max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
