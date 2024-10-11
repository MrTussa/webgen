import React from "react";
import HeaderText from "./HeaderText";
import { ParallaxScroll } from "./ui/parallax-scroll";

const items = [
  {
    image: "/lama.png",
    link: "https://next-ecommerce-dusky-eta.vercel.app/",
    text: "Интернет Магазин с поддержкой админ панели и контролью склада.",
  },
  {
    image: "/portfolio.jpg",
    link: "https://mrtusa.uz/",
    text: "Личное порфолио используя 3Д модели.",
  },
  {
    image: "/tg-planner.png",
    link: "https://github.com/sadlyOs/Planner-v1/tree/main",
    text: "Мультиязычный бот планировщик с напоминаниями.",
  },
  {
    image: "/tg-shop.png",
    link: "https://github.com/sadlyOs/StoreBot",
    text: "Интернет магазин в телеграме. Бот поддерживает авто-платежи",
  },
  {
    image: "/mattress.jpg",
    link: "/page5",
    text: "Оформление карточек для маркетплейсов",
  },
  {
    image: "/marusya.png",
    link: "/page6",
    text: "Фотореалистичная модель Marussia B2",
  },
];

const Projects = () => {
  return (
    <section className="pb-4 bg-black-secondary z-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dot-black -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]" />
      <HeaderText text="Наши Работы" />
      <ParallaxScroll items={items} />
    </section>
  );
};

export default Projects;
