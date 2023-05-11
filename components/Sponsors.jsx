import { sponsors } from "@/lib/sponsors";
import { pastSponsors } from "@/lib/pastSponsors";
import { foodSponsors } from "@/lib/foodSponsors";
import SponsorCard from "./SponsorCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-[100vh] w-full bg-black pt-12 text-center font-body text-white"
      viewport={{ threhshold: 0.8, once: true }}
    >
      <Link href={"/"}>
        <img src="/assets/logo-white.png" width={160} className="mx-auto" />
      </Link>

      <h2
        className="relative z-10 mt-12 inline-block font-heading text-5xl font-semibold uppercase md:text-6xl
  "
      >
        Our <span className="text-red-600">Sponsors</span>
      </h2>
      <p className="relative z-10 mx-auto mt-4 max-w-4xl px-12 text-lg font-medium md:text-xl">
        We thank our sponsors for their generous support. If you are interested
        in partnering with us, please send an email to{" "}
        <a
          href="mailto:tedxbitsgoa2023@gmail.com
          "
          className="text-red-600"
        >
          tedxbitsgoa2023@gmail.com
        </a>
      </p>
      <div className="mx-auto mt-12 grid w-full max-w-6xl  grid-cols-1 place-items-center  gap-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  lg:px-12">
        {sponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.name}
            imageUrl={sponsor.imageUrl}
            name={sponsor.name}
            title={sponsor.title}
            large={sponsor.large}
            url={sponsor.url}
          />
        ))}
      </div>
      <h5 className="relative z-10 mt-4 inline-block font-heading text-4xl font-semibold uppercase md:text-5xl">
        {" "}
        Food<span className="text-red-600"> Sponsors</span>
      </h5>
      <div className="mx-auto mt-8 grid w-full max-w-5xl  grid-cols-3 place-items-center  gap-4 px-4  lg:px-12">
        {foodSponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.name}
            imageUrl={sponsor.imageUrl}
            name={sponsor.name}
            title={sponsor.title}
            large={sponsor.large}
            url={sponsor.url}
          />
        ))}
      </div>
      <h5 className="relative z-10 mt-12 inline-block font-heading text-4xl font-semibold uppercase md:text-5xl">
        {" "}
        Past<span className="text-red-600"> Sponsors</span>
      </h5>
      <div className="mx-auto mt-4 grid w-full max-w-6xl  grid-cols-2 place-items-center  gap-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  lg:px-12">
        {pastSponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.name}
            imageUrl={sponsor.imageUrl}
            name={sponsor.name}
            title={sponsor.title}
            large={sponsor.large}
            url={sponsor.url}
          />
        ))}
      </div>
    </motion.div>
  );
}
