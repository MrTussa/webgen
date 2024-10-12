"use client";
import React from "react";

import HeaderText from "./HeaderText";
import Form from "./Form";

import dynamic from "next/dynamic"; // Импортируем dynamic

const Earth = dynamic(() => import("./ui/Earth"), {
  ssr: false,
  loading: () => <p>Загрузка...</p>,
});

const Contact = () => {
  return (
    <section className="bg-black-secondary z-0 w-full pb-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dot-black -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]" />
      <HeaderText text="Свяжитесь с Нами" />
      <div className="flex items-center flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full xl:h-auto md:h-[550px] h-[350px]  ">
          <Earth />
        </div>
        <div className="h-fit max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
