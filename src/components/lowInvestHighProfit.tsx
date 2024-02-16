import React from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const LowInvestHighProfit = () => {
  const t = useTranslations("pages.Home.lowInvestHighProfit");

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 bg-primary/10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4">{t("title")}</h2>
      <p className="max-w-lg mb-6 px-4">{t("description")}</p>
      <Link target="_blank" href={t("href")}>
        <Button size="lg">{t("cta")}</Button>
      </Link>
    </div>
  );
};
