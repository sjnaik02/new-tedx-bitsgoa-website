import { motion } from "framer-motion";

export default function About() {
  return (
    <section className=" relative h-screen w-full border border-transparent text-center text-white">
      <div className="mx-auto max-w-4xl lg:pt-36 lg:pl-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 1, once: true }}
          className="mt-12 font-heading text-4xl font-semibold  uppercase tracking-tighter sm:text-5xl  md:text-6xl"
        >
          India's <span className="text-red-600">oldest</span> institutional
          <span className="text-red-600"> TEDx</span> Conference
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 1, once: true }}
          className="mt-12 font-body text-lg  font-medium tracking-wide md:text-xl"
        >
          Welcome to TEDxBITSGoa - where ideas come to life. As an independently
          organized TEDx event, we're passionate about spreading ideas worth
          sharing. With live speakers and recorded TED talks, we strive to
          inspire, educate, and spark meaningful conversations that lead to
          positive change. Join us on our journey to explore new ideas,
          challenge perspectives, and create a better world for ourselves and
          future generations. Let's make a difference together.
        </motion.p>
        {/* <a
          className="mt-12 inline-block font-body text-lg font-light underline underline-offset-4 transition-colors  hover:text-red-600"
          href="/"
        >
          Learn More about TED and TEDx →
        </a> */}
      </div>
    </section>
  );
}
