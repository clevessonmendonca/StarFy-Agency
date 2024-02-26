import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const GTM_ID = "GTM-TX2RNB85";

export const metadata: Metadata = {
  title: "StarFy Agency - Criação de Sites e Markeeting",
  description:
    "Criação de Sites profissionais com aumento de clientes para você. Oferecemos tráfego pago, consultoria e suporte para VOCÊ.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta
          name="keywords"
          content="marketing, websites, criação de site, marketing services, digital marketing, business growth"
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
        <meta property="og:image" content="/banner.jpeg" />
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

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11139734703"
        ></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11139734703');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />

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
