import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarFy Agency - Estratégias de Marketing para o Sucesso nos EUA",
  description:
    "Transforme sonhos em conquistas nos EUA com as estratégias de marketing da StarFy Agency. Oferecemos tráfego pago, consultoria e suporte para empreendedores imigrantes.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta
          name="keywords"
          content="marketing, marketing services, digital marketing, business growth"
        />
        <meta name="author" content="StarFy Agency" />
        {/* <!-- Open Graph Tags --> */}
        <meta
          property="og:title"
          content="StarFy Agency - Estrelando seu Caminho para o Sucesso!"
        />
        <meta
          property="og:description"
          content="Oferecemos serviços de marketing digital para impulsionar o crescimento de negócios."
        />
        <meta
          property="og:image"
          content="/beautiful-photo-of-your-image.jpg"
        />
        <meta property="og:url" content="https://www.starfymkt.com/" />
        {/* <!-- Facebook and Instagram Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="article:author"
          content="https://www.facebook.com/profile.php?id=61556289484856"
        />
        <meta
          property="article:publisher"
          content="https://www.instagram.com/starfy.agency/"
        />
        <meta property="og:site_name" content="StarFy Agency" />
        <meta
          property="og:see_also"
          content="https://www.instagram.com/starfy.agency/"
        />
        <link rel="canonical" href="https://starfymkt.com/" />
      </head>

      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />

          <SpeedInsights />
          <Analytics />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
