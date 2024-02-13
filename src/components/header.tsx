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

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-2xl">
      <Card className="flex items-center justify-between border-none px-[1.875rem] py-[1.5rem]">
        <Link href="/">
          <Image
            sizes="100vw"
            width={0}
            className="h-auto w-full  max-w-52 px-5 md:max-w-60"
            height={0}
            src="/StarFy-logo-black.png"
            alt="StarFy Agency Logo"
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden sm:block md:hidden">
            <Button>Get Started</Button>
          </Link>

          <Sheet>
            <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden">
              <span className="sr-only">Open main menu</span>
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
                  StarFy Agency
                </h1>
              </SheetTitle>
              <nav className="flex h-full flex-col gap-4 px-2 py-8 text-end ">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    About
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/services"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    Services
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/contact">
                    <Button size="xl">Get Started</Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-primary/10">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </Card>
    </header>
  );
};
