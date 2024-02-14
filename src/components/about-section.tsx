import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { FadeIn } from "./animation/fade-in";
import Image from "next/image";
import { CheckCheckIcon } from "lucide-react";

export const AboutUsSection = () => {
  const t = useTranslations("pages.Home.aboutUs");

  const services = [
    { name: t("services.houseCleaning") },
    { name: t("services.posConstruction") },
    { name: t("services.others") },
  ];

  return (
    <div className="mx-auto max-w-screen-xl p-8">
      <div className="text-center md:text-start flex flex-col items-center md:flex-row gap-8 mb-6">
        <div className="md:w-2/3">
          <Image
            sizes="100vw"
            width={0}
            className="h-auto w-full bg-contain px-5"
            height={0}
            src="/marketing.png"
            alt="marketing.png"
          />
        </div>

        <div className="md:w-2/3">
          <Badge variant="outline">{t("subtitle")}</Badge>
          <h2 className="text-3xl font-bold my-5 text-third">{t("title")}</h2>
          <p className="max-w-md">{t("description")}</p>

          <div className="mt-4">
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
                className="flex gap-2 font-semibold"
              >
                <CheckCheckIcon className="w-4 h-4 text-emerald-500" />
                {service.name}
              </FadeIn>
            ))}

            <div className="mt-8 text-center">
              <Button size="lg">{t("cta")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
