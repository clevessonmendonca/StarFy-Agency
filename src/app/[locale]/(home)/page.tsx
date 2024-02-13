import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <div>
      <div className="mt-8 md:mt-4">
        <HeroSection />
      </div>
    </div>
  );
}
