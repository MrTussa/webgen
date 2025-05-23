import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCode,
  IconUser,
  IconMessageChatbot,
  IconGraph,
  IconWallet,
  IconDeviceMobile,
  IconGrowth,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Индивидуальный подход",
      description:
        "Мы разрабатываем сайты, которые отражают уникальность вашего бизнеса.",
      icon: <IconUser />,
    },
    {
      title: "Современные технологии",
      description:
        "Используем только передовые технологии для достижения лучших результатов.",
      icon: <IconCode />,
    },
    {
      title: "Высокое качество",
      description:
        "Гарантируем внимание к деталям и совершенство на каждом этапе разработки.",
      icon: <IconCheck />,
    },
    {
      title: "Поддержка 24/7",
      description:
        "Всегда на связи, чтобы помочь вам в любой ситуации, день и ночь.",
      icon: <IconMessageChatbot />,
    },
    {
      title: "Оптимизация для бизнеса",
      description:
        "Наши решения помогают бизнесу развиваться и привлекать клиентов.",
      icon: <IconGraph />,
    },
    {
      title: "Прозрачное ценообразование",
      description: "Честные и доступные цены без скрытых платежей.",
      icon: <IconWallet />,
    },
    {
      title: "Адаптивный дизайн",
      description: "Ваш сайт будет отлично выглядеть на любом устройстве.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Постоянное развитие",
      description:
        "Мы не останавливаемся на достигнутом и постоянно улучшаем наши технологии.",
      icon: <IconGrowth />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
