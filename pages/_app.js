import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Oswald, Manrope } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${oswald.variable} font-sans ${manrope.variable}`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
