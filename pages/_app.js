import "@/styles/globals.css";
import { Oswald, Manrope } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variants: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-oswald",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${oswald.variable} font-sans ${manrope.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}
