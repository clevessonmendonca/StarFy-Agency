import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("pages.Footer");

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full  max-w-52 px-5 md:max-w-60"
                src="/StarFy-logo-black.png"
                alt={t("logoAlt")}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t("resources.title")}
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/">{t("resources.links.home")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/#services">{t("resources.links.services")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/#about">{t("resources.links.about")}</Link>
                </li>
                <li className="mb-4">
                  <Link href="/#testimonials">
                    {t("resources.links.testimonials")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t("contact.title")}
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href={t("contact.socialMedia.instagram.url")}
                    className="hover:underline"
                  >
                    {t("contact.socialMedia.instagram.text")}
                  </Link>
                </li>
                <li>
                  <a
                    href={t("contact.socialMedia.facebook.url")}
                    className="hover:underline"
                  >
                    {t("contact.socialMedia.facebook.text")}
                  </a>
                </li>
                <li className="mb-4 mt-4">
                  <Link href="/contact">
                    <Button>{t("contact.cta")}</Button>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t("legal.title")}
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    {t("legal.links.privacy.text")}
                  </a>
                </li>
                <li>
                  <a href="privacy-policy" className="hover:underline">
                    {t("legal.links.termsConditions.text")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            {t("copyright")}
          </span>
          <div className="mt-4 flex items-center gap-2 sm:mt-0 sm:justify-center">
            <Link
              href={t("contact.socialMedia.instagram.url")}
              className="text-gray-500 hover:text-primary "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href={t("contact.socialMedia.facebook.url")}
              className="text-gray-500 hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
