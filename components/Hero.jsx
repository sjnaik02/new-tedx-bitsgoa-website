import About from "./About";
import gradient from "../public/assets/blurry-gradient-haikei.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black p-4 text-white">
      <img
        src={gradient.src}
        role="presentation"
        className="-z-2 absolute top-44 h-auto  min-h-full w-auto scale-[3]  opacity-50 blur-md filter md:-scale-100 lg:top-0
  "
      />

      <div className="bg-cool-x -z-2 absolute -left-64  -top-56 aspect-square  h-[150vh] scale-90 bg-contain bg-center  bg-no-repeat opacity-60 blur-md md:-left-32 md:blur-md  lg:left-1/3 lg:-top-56 lg:h-[150vh] lg:blur-0" />

      <div className="relative flex h-screen w-full flex-col items-center justify-center pb-12  lg:my-auto lg:w-fit  lg:items-start lg:pl-12">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" font-heading  text-7xl font-bold  sm:text-8xl lg:text-9xl"
        >
          <span className="text-red-600">TEDx</span>BITSGoa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="my-4 font-body text-2xl font-medium uppercase "
        >
          Ideas worth spreading
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link
            className=" inline-block w-fit rounded-lg border border-white px-16 py-3 font-body text-xl font-medium uppercase tracking-wide transition duration-200 ease-in-out
                 hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
            href="/register"
          >
            Get Your Pass!
          </Link>
        </motion.div>
      </div>

      <About />
    </section>
  );
}
