import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "@/components/services";
import { AboutUsSection } from "@/components/aboutSection";
import { LowInvestHighProfit } from "@/components/lowInvestHighProfit";

export default function Home() {
  return (
    <div>
      <div className="mt-8 md:mt-4">
        <HeroSection />
      </div>

      <div className="relative flex-wrap max-w-screen-lg mx-auto px-4 flex gap-4 justify-around items-center mt-2 md:mt-4">
        <Image
          sizes="100vw"
          width={0}
          className="max-w-40 md:max-w-52 h-full w-full px-5"
          height={0}
          src="/facebook-logo.png"
          alt="facebook-logo"
        />
        <Image
          sizes="100vw"
          width={0}
          className="max-w-40 md:max-w-52 h-full w-full px-5"
          height={0}
          src="/instagram-logo.png"
          alt="instagram-logo"
        />
        <Image
          sizes="100vw"
          width={0}
          className="max-w-40 md:max-w-52 h-full w-full px-5"
          height={0}
          src="/google-logo.png"
          alt="google-logo"
        />
        <Image
          sizes="100vw"
          width={0}
          className="max-w-40 md:max-w-52 h-full w-full px-5"
          height={0}
          src="/google-ads-logo.png"
          alt="google-ads-logo.png"
        />
      </div>

      <div className="mt-8">
        <ServicesSection />
      </div>

      <div>
        <AboutUsSection />
      </div>

      <div>
        <LowInvestHighProfit />
      </div>
    </div>
  );
}
