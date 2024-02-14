import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";
import { Avatars } from "./avatar";
import { TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const t = useTranslations("pages.Home.HeroSection");

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col justify-center gap-8 p-4 text-center md:flex-row md:gap-4 md:text-left">
      <FadeIn className="flex flex-col md:pt-12 items-center gap-4 md:max-w-screen-lg md:items-start">
        <Badge variant="outline">
          <TrendingUp className="w-4 h-4 text-emerald-500 mr-2" />{" "}
          {t("badgeText")}
        </Badge>
        <h1 className="max-w-md text-4xl font-bold tracking-tight lg:text-5xl">
          {t("title")}
        </h1>
        <p className="max-w-[32rem] text-sm">{t("description")}</p>

        <div className="mt-4 flex justify-center items-center gap-5">
          <Button size="xl" className="font-bold lg:text-lg">
            {t("cta")}
          </Button>
          <Button variant="ghost" className="font-medium lg:text-lg">
            {t("ctaSecondary")}
          </Button>
        </div>

        <div className="flex gap-4 mt-4">
          <Avatars />
          <div>
            <h3 className="font-semibold">{t("avatarsTitle")}</h3>
            <p className="font-medium text-sm">{t("ratings")}</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn to="left">
        <Image
          sizes="100vw"
          width={0}
          className="h-auto w-full bg-contain px-5"
          height={0}
          src="/marketing.png"
          alt="marketing.png"
        />
      </FadeIn>
    </div>
  );
};
