import { useState } from "react";

export default function index() {
  const [email, setEmail] = useState("");
  return (
    <div className="font-body flex h-[100svh] w-full bg-black text-white md:flex-row">
      <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
        <div className="px-12">
          <h1
            className="font-heading relative z-10 text-6xl font-semibold
				before:absolute before:left-0 before:top-8 before:-z-10 before:h-6 before:w-80 before:bg-red-800 before:opacity-100 before:content-['']"
          >
            Get your pass!
          </h1>
          <p className="font-body mt-4 text-2xl ">
            Fill out the form below to purchase your pass.
          </p>
          <form method="POST" action="/register">
            <label for="email" hidden>
              Email
            </label>
            <input
              name="email"
              type="email"
              className="font-body placeholder:font-body mt-4 inline-block h-12 w-full rounded-lg border-2 border-white bg-black p-4 focus:border-red-600 focus:outline-none "
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="mt-4 inline-block rounded-lg border border-white py-2 px-16 text-xl uppercase transition duration-300 ease-in-out
					 hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="absolute top-0 h-1/3 w-full bg-gradient-to-br from-red-900 via-black to-red-600 sm:static sm:h-full sm:w-1/2" />
    </div>
  );
}
