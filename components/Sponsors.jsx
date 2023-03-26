import { sponsors } from "@/lib/sponsors";
import SponsorCard from "./SponsorCard";
export default function Sponsors() {
  return (
    <section className="min-h-fit w-full bg-black pb-12 text-center font-body text-white">
      <h2
        className="relative z-10 mt-12 inline-block font-heading text-5xl font-semibold uppercase md:text-6xl
  "
      >
        Our <span className="text-red-600">Sponsors</span>
      </h2>
      <p className="relative z-10 mx-auto mt-4 max-w-4xl px-12 text-lg font-semibold md:text-xl">
        We are grateful to our sponsors for their generous support. If you are
        interested in sponsoring us, please contact us at{" "}
        <a
          href="mailto:sjnaik02@gmail.com
          "
          className="text-red-600"
        >
          sjnaik02@gmail.com
        </a>
      </p>
      <div className="mx-auto mt-12 grid w-full max-w-4xl  grid-cols-1 place-items-center  gap-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:px-12">
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
    </section>
  );
}
