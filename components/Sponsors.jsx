import { sponsors } from "@/lib/sponsors";
import { pastSponsors } from "@/lib/pastSponsors";
import SponsorCard from "./SponsorCard";
import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-[75vh] w-full bg-black pb-12 text-center font-body text-white"
      viewport={{ threhshold: 0.8, once: true }}
    >
      <h2
        className="relative z-10 mt-12 inline-block font-heading text-5xl font-semibold uppercase md:text-6xl
  "
      >
        Our <span className="text-red-600">Sponsors</span>
      </h2>
      <p className="relative z-10 mx-auto mt-4 max-w-4xl px-12 text-lg font-medium md:text-xl">
        We are grateful to our sponsors for their generous support. If you are
        interested in sponsoring us, please contact us at{" "}
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
          />
        ))}
      </div>
    </motion.div>
  );
}
