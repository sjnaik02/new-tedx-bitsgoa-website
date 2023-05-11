import Link from "next/link";
import { motion } from "framer-motion";

export default function () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex min-h-[50vh] w-full flex-col items-center justify-center bg-black pt-12 text-center font-body  text-white"
      viewport={{ threhshold: 0.8, once: true }}
    >
      <div className=" mx-4 mb-12 flex max-w-4xl flex-col md:w-11/12">
        <h2 className="mb-8 font-heading text-5xl font-semibold uppercase md:text-6xl">
          Our <span className="text-red-600">Sponsors</span>
        </h2>
        <p className="text-lg font-medium md:text-xl">
          TEDxBITSGoa is a non-profit event committd to ideas worth spreading,
          and we are grateful to our sponsors for supporting us on this mission.
          Follow{" "}
          <Link
            href="/sponsors"
            className="text-red-600 underline underline-offset-2"
          >
            this link
          </Link>{" "}
          to learn more about our sponsors and how you can partner with us.
        </p>
      </div>
    </motion.div>
  );
}
