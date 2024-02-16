import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const CaptureSection = () => {
  const t = useTranslations("pages.Home.cta");

  return (
    <Card className="mx-auto max-w-screen-lg flex-wrap px-4 bg-primary rounded-3xl py-16 text-white">
      <CardContent className="text-center px-2 space-y-4 md:space-y-5">
        <CardTitle className="md:text-4xl">{t("title")}</CardTitle>
        <Link target="_blank" href={t("href")}>
          <Button
            variant="link"
            className="underline whitespace-normal text-white text-2xl font-medium md:text-4xl"
          >
            {t("button")}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
