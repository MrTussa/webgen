import React from "react";
import Wrapper from "./Wrapper";
import { Meteors } from "./ui/meteors";
import { BackgroundLines } from "./ui/background-lines";
import HeaderText from "./HeaderText";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const AboutUs = () => {
  return (
    <section className="relative">
      <Wrapper>
        <BackgroundLines className="flex">
          <div className=" flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-10">
            <HeaderText text="О Нас" />
            <div className="relative max-w-2xl overflow-hidden shadow-xl bg-gray-900 border border-gray-800 px-4 py-8  rounded-2xl flex flex-col justify-end items-start">
              <p className="font-thin text-xl text-slate-100 mb-4 relative z-50">
                Мы — молодая и перспективная команда разработчиков, объединённая
                общей целью: помочь вашему бренду расти и развиваться в цифровом
                пространстве. Наш подход основан на создании уникальных и
                эффективных веб-сайтов, которые отражают индивидуальность вашего
                бизнеса. Мы гарантируем высокое качество, внимание к деталям и
                использование передовых технологий, чтобы каждый проект был
                успешным и соответствовал вашим ожиданиям.
              </p>
              <div className="flex flex-row items-center justify-center w-full">
                <AnimatedTooltip items={people} />
              </div>

              <Meteors number={20} />
            </div>
          </div>
        </BackgroundLines>
      </Wrapper>
    </section>
  );
};

const people = [
  {
    id: 1,
    name: "Мавлонов Шахруз",
    designation: "Frontend Developer",
    image: "/shahruz.jpg",
  },
  {
    id: 2,
    name: "Скирдач Артемий",
    designation: "Manager",
    image: "/shahruz.jpg",
  },
  {
    id: 3,
    name: "Жуков Дмитрий",
    designation: "Backend Developer",
    image: "/shahruz.jpg",
  },
  {
    id: 4,
    name: "Саман",
    designation: "UX Designer",
    image: "/shahruz.jpg",
  },
  {
    id: 5,
    name: "Гайсин Никита",
    designation: "3D Artist",
    image: "/shahruz.jpg",
  },
];

export default AboutUs;
