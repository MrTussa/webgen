import React from "react";
import Wrapper from "./Wrapper";
import { BackgroundLines } from "./ui/background-lines";
import HeaderText from "./HeaderText";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import ParallaxDiv from "./ParallaxDiv"; // Импортируем новый компонент

const AboutUs = () => {
  return (
    <section className="relative" id="aboutUs">
      <Wrapper>
        <BackgroundLines className="flex">
          <ParallaxDiv className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-10">
            <HeaderText text="О Нас" />

            <div className="relative max-w-2xl overflow-hidden shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 rounded-2xl flex flex-col justify-end items-start">
              <p className="font-thin text-base sm:text-xl text-slate-100 mb-4 relative z-50">
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
            </div>
          </ParallaxDiv>
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
    image: "/artem.png",
  },
  {
    id: 3,
    name: "Жуков Дмитрий",
    designation: "Backend Developer",
    image: "/dima.png",
  },
  {
    id: 4,
    name: "Саман",
    designation: "UX Designer",
    image: "/saman.png",
  },
  {
    id: 5,
    name: "Гайсин Никита",
    designation: "3D Artist",
    image: "/nikita.png",
  },
];

export default AboutUs;
