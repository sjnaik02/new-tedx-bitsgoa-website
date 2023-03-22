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
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatem quibusdam
            necessitatibus quas quidem voluptatum quos. Quisquam, quae. Quisquam
          </p>
        </div>
      </div>
      <div className="absolute top-0 h-1/3 w-full bg-gradient-to-br from-red-900 via-black to-red-600 sm:static sm:h-full sm:w-1/2" />
    </div>
  );
}
