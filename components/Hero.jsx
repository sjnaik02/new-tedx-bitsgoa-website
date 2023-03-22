import About from "./About";
import gradient from "../public/assets/blurry-gradient-haikei.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black p-4 text-white">
      <img
        src={gradient.src}
        role="presentation"
        className="-z-2 absolute top-44 h-auto  min-h-full w-auto scale-[3]  opacity-50 blur-md filter md:-scale-100 lg:top-0
  "
      />

      <div className="bg-cool-x -z-2 absolute -left-64 -top-56 aspect-square h-[140vh] scale-90  bg-contain bg-center bg-no-repeat opacity-60 lg:left-1/3 lg:-top-56 lg:h-[150vh]" />

      <div className="relative flex h-screen flex-col justify-end pb-12 md:justify-center  lg:my-auto lg:pl-12">
        <h1 className="font-heading text-6xl font-bold lg:text-9xl">
          <span className="text-red-600">TEDx</span>BITSGoa
        </h1>
        <p className="mb-4 font-body text-2xl font-medium uppercase ">
          Ideas worth spreading
        </p>
        <Link
          className=" inline-block w-fit rounded-lg border border-white py-4 px-16 font-body text-xl font-medium uppercase tracking-wide transition duration-200 ease-in-out
			 hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
          href="/register"
        >
          Get Your Pass!
        </Link>
      </div>

      <About />
    </section>
  );
}
