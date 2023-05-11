import "./globals.scss";
import { ReactNode } from "react";
import { Noto_Sans, Noto_Sans_JP, Noto_Sans_KR, Source_Sans_Pro } from "next/font/google";
import Sidebar from "challenges/ui/Sidebar";

const Noto = Noto_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin", "greek"],
  variable: "--Noto"
});

const NotoJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--NotoJP"
});
const NotoKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--NotoKR"
});
const Source = Source_Sans_Pro({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--Source"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang="en">

      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0dbdff" />
        <meta name="msapplication-TileColor" content="#0dbdff" />
      </head>

      <body className={[Noto.variable, NotoJP.variable, NotoKR.variable, Source.variable].join(" ")}>

        <section style={{
          width: "100vw",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "stretch"
        }}>

          <Sidebar></Sidebar>

          {children}

        </section>

        <script src="https://cdn.darkintaqt.com/script/cc/bundle.js" async></script>
      </body>
    </html>
  );
}
