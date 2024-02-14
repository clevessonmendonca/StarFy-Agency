import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export const CaptureSection = () => {
  const t = useTranslations("pages.Home.cta");

  return (
    <Card className="mx-auto max-w-screen-lg px-4 bg-primary rounded-3xl py-16 text-white">
      <CardContent className="text-center px-2 space-y-3 md:space-y-5">
        <CardTitle className="md:text-4xl">{t("title")}</CardTitle>
        <Button variant="link" className="underline text-white text-2xl font-medium md:text-4xl">{t("button")}
        </Button>
      </CardContent>
    </Card>
  );
};
