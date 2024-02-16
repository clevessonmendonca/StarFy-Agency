import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";

export default function Contact() {
  const t = useTranslations("pages.Home.contact");

  return (
    <div className="mt-12 mb-24">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            {t("title")}
          </h2>
          <p className="text-gray-600 mb-8">{t("description")}</p>
        </div>
        <FadeIn className="flex flex-col gap-3">
          <Link target="_blank" href={t("zap.href")}>
            <Badge
              variant="outline"
              className="w-full hover:bg-primary/10 flex justify-center relative items-center py-4"
            >
              <WhatsAppIcon className="absolute left-8 " />{" "}
              <span className="text-base">{t("zap.title")}</span>
            </Badge>
          </Link>
          <Link target="_blank" href={t("email.href")}>
            <Badge
              variant="outline"
              className="w-full hover:bg-primary/10 flex justify-center relative items-center py-4"
            >
              <EmailIcon className="absolute left-8 " />{" "}
              <span className="text-base">{t("email.title")}</span>
            </Badge>
          </Link>
          <Link target="_blank" href={t("instagram.href")}>
            <Badge
              variant="outline"
              className="w-full hover:bg-primary/10 flex justify-center relative items-center py-4"
            >
              <InstagramIcon className="absolute left-8 " />{" "}
              <span className="text-base">{t("instagram.title")}</span>
            </Badge>
          </Link>
          <Link target="_blank" href={t("facebook.href")}>
            <Badge
              variant="outline"
              className="w-full hover:bg-primary/10 flex justify-center relative items-center py-4"
            >
              <FacebookIcon className="absolute left-8 " />{" "}
              <span className="text-base">{t("facebook.title")}</span>
            </Badge>
          </Link>
        </FadeIn>
        <div className="mt-8 flex justify-center">
          <Link href={t("href")}>
            <Button size="xl" className="font-bold text-lg">
              {t("cta")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
