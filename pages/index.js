import Head from "next/head";
import Hero from "../components/Hero";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>TEDxBITSGoa</title>
        <meta
          name="description"
          content="India's Oldest Institutional TEDx Organisation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/cool_x.png" />
        <link rel="mask-icon" href="/assets/cool_x.png" color="#000000" />
        {/* add meta tags */}
        <meta property="og:title" content="TEDxBITSGoa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tedxbitsgoa.com/" />
        <meta property="og:image" content="/OG-IMG.png" />
        <meta
          property="og:description"
          content="India's Oldest Institutional TEDx Organisation"
        />
        <meta property="og:site_name" content="TEDxBITSGoa" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tedxbitsgoa" />
        <meta name="twitter:creator" content="@tedxbitsgoa" />
        <meta name="twitter:title" content="TEDxBITSGoa" />
        <meta
          name="twitter:description"
          content="India's Oldest Institutional TEDx Organisation"
        />
        <meta name="twitter:image" content="/OG-IMG.png" />
      </Head>
      <Hero />
      <Speakers />
      <Sponsors />
      <Footer />
    </>
  );
}
