import HeaderText from "./HeaderText";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[3rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

// TODO: заменить на картинки

const Services = () => {
  return (
    <section className="bg-black-secondary z-0 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-dot-black -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]" />
      <HeaderText text="Наши Услуги" />
      <BentoGrid className="mx-auto ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            id={i}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

const items = [
  {
    title: "Сайты",
    description:
      "Веб сайты под ключ, Лендинги, интернет магазины, доработки сайтов, корпоративный сайт - все это можно заказать у нас!",
    header: <Skeleton />,
    className: "md:row-span-2 md:flex-col sm:flex-row-reverse flex-col",
  },
  {
    title: "Телеграм Боты",
    description:
      "Сделаем ботов анонимных сообщений, боты интернет магазинов с поддержкой различных языков",
    header: <Skeleton />,
    className: "sm:flex-row-reverse flex-col",
  },
  {
    title: "3Д Модели и Архитектура",
    description: "3Д модели любой сложности, Архитектура, Чертежи, Анимации",
    header: <Skeleton />,
    className: "sm:flex-row-reverse flex-col",
  },
];

export default Services;
