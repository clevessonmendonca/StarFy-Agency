import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                sizes="100vw"
                width={0}
                className="h-auto w-full  max-w-52 px-5 md:max-w-60"
                height={0}
                src="/logo.png"
                alt="Right Target Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/get-a-quote" className="hover:underline">
                    Get a Quote
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/testimonials" className="hover:underline">
                    Comments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Contact us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://www.instagram.com/right_.target/"
                    className="hover:underline "
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61555770274333"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4 mt-4">
                  <Link href="/contact">
                    <Button>Contact us</Button>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            2024{' '}
            <Link href="/" className="hover:underline">
              Right Target
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex items-center gap-2 sm:mt-0 sm:justify-center">
            <Link
              href="https://www.instagram.com/right_.target/"
              className="text-gray-500 hover:text-primary "
            >
              <Image
                sizes="100vw"
                width={0}
                className="h-auto w-full  max-w-14 rounded-full"
                height={0}
                src="/instagram-icon.png"
                alt="Instagram Right Target"
              />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61555770274333"
              className="text-gray-500 hover:text-primary"
            >
              <Image
                sizes="100vw"
                width={0}
                className="h-auto w-full  max-w-9"
                height={0}
                src="/facebook-icon.png"
                alt="Facebook Right Target"
              />
              <span className="sr-only">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
