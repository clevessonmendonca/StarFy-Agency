import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./language-selector";

interface MenuItem {
  href: string;
  text: string;
}

export const Header = () => {
  const t = useTranslations("pages.Header");

  return (
    <header className="mx-auto w-full max-w-screen-2xl">
      <Card className="flex items-center justify-between border-none px-[1.875rem] py-[1.5rem]">
        <Link href="/">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full  max-w-52 px-5 md:max-w-60"
            src="/StarFy-logo-black.png"
            alt={t("logoAlt")}
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden sm:block md:hidden">
            <Button>{t("getStarted")}</Button>
          </Link>

          <Sheet>
            <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden">
              <span className="sr-only">{t("menuTrigger")}</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-80">
              <SheetTitle className="mt-2 flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tighter">
                  {t("sheetTitle")}
                </h1>
              </SheetTitle>
              <nav className="flex h-full flex-col gap-4 px-2 py-8 text-end">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    {t("nav.home")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    {t("nav.about")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/service"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    {t("nav.service")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    {t("nav.contact")}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/">
                    <Button size="xl">{t("navButton")}</Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="py-2 text-gray-500 hover:text-gray-900">
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="py-2 text-gray-500 hover:text-gray-900"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/service"
              className="py-2 text-gray-500 hover:text-gray-900"
            >
              {t("nav.service")}
            </Link>
            <Link
              href="/contact"
              className="py-2 text-gray-500 hover:text-gray-900"
            >
              {t("nav.contact")}
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary"
              >
                {t("getStarted")}
              </Button>
            </Link>

            <LanguageToggle />
          </nav>
        </div>
      </Card>
    </header>
  );
};
