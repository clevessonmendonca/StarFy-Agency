import React from "react";
import { useTranslations } from "next-intl";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FadeIn } from "./animation/fade-in";
import { Avatar, AvatarImage } from "./ui/avatar";

export const TestimonialsSection = () => {
  const t = useTranslations("pages.Home.testimonials");

  return (
    <div className="mx-auto max-w-screen-xl p-8">
      <div className="text-center">
        <Badge variant="outline">{t("title")}</Badge>
        <h2 className="text-3xl font-bold mt-2">{t("subtitle")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <FadeIn className="w-full h-full">
          <Card className="flex flex-col text-center items-center px-4 pt-8 pb-14 min-h-6 md:min-h-10 h-full shadow-md">
            <FadeIn duration={0.6} to="top">
              <Avatar className="mx-auto">
                <AvatarImage
                  className="bg-center object-cover"
                  src="/profiles/douglas.jpg"
                  alt={t("comments.testimonial-1.name")}
                />
              </Avatar>
              <span>⭐⭐⭐⭐</span>
              <h3 className="text-xl font-bold m-2">
                {t("comments.testimonial-1.name")}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                {t("comments.testimonial-1.quote")}
              </p>
              <p className="mt-2 text-emerald-500">
                {t("comments.testimonial-1.role")}
              </p>
            </FadeIn>
          </Card>
        </FadeIn>
        <FadeIn className="w-full h-full">
          <Card className="flex flex-col text-center items-center px-4 pt-8 pb-14 min-h-6 md:min-h-10 h-full shadow-md">
            <FadeIn duration={0.6} to="top">
              <Avatar className="mx-auto">
                <AvatarImage
                  className="bg-center object-cover"
                  src="/profiles/livia.jpg"
                  alt={t("comments.testimonial-2.name")}
                />
              </Avatar>
              <span>⭐⭐⭐⭐⭐</span>
              <h3 className="text-xl font-bold m-2">
                {t("comments.testimonial-2.name")}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                {t("comments.testimonial-2.quote")}
              </p>
              <p className="mt-2 text-emerald-500">
                {t("comments.testimonial-2.role")}
              </p>
            </FadeIn>
          </Card>
        </FadeIn>
        <FadeIn className="w-full h-full">
          <Card className="flex flex-col text-center items-center px-4 pt-8 pb-14 min-h-6 md:min-h-10 h-full shadow-md">
            <FadeIn duration={0.6} to="top">
              <Avatar className="mx-auto">
                <AvatarImage
                  className="bg-center object-cover"
                  src="/profiles/igor.jpg"
                  alt={t("comments.testimonial-3.name")}
                />
              </Avatar>
              <span>⭐⭐⭐⭐⭐</span>
              <h3 className="text-xl font-bold m-2">
                {t("comments.testimonial-3.name")}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                {t("comments.testimonial-3.quote")}
              </p>
              <p className="mt-2 text-emerald-500">
                {t("comments.testimonial-3.role")}
              </p>
            </FadeIn>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
};
