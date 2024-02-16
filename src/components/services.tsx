import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";
import { GlobeIcon, LineChartIcon, MegaphoneIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { FadeIn } from "./animation/fade-in";
import Link from "next/link";

export const ServicesSection = () => {
  const t = useTranslations("pages.Home.Services");

  const services = [
    {
      icon: <GlobeIcon />,
      title: t("service1.title"),
      description: t("service1.description"),
    },
    {
      icon: <MegaphoneIcon />,
      title: t("service2.title"),
      description: t("service2.description"),
    },
    {
      icon: <LineChartIcon />,
      title: t("service3.title"),
      description: t("service3.description"),
    },
  ];

  return (
    <div id="services" className="mx-auto max-w-screen-xl p-8">
      <div className="relative text-center md:text-start flex flex-col justify-between items-center md:flex-row gap-2 mb-6">
        <div>
          <Badge>{t("subtitle")}</Badge>
          <h2 className="text-3xl font-bold mt-2">{t("title")}</h2>
        </div>
        <p className="max-w-md md:text-right">{t("description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <FadeIn
            key={index}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="w-full h-full"
          >
            <Card className="px-4 pt-8 pb-14 min-h-6 md:min-h-10 h-full shadow-md">
              <FadeIn>
                <span className="flex flex-1 justify-center text-primary rounded-full bg-primary/10 mx-auto mb-2 p-2 w-10 h-10">
                  {service.icon}
                </span>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">
                  {service.description}
                </p>
              </FadeIn>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link target="_blank" href={t("href")}>
          <Button size="lg">{t("cta")}</Button>
        </Link>
      </div>
    </div>
  );
};
