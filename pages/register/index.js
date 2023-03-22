import { useState } from "react";

export default function index() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex h-[100svh] w-full bg-black font-body text-white md:flex-row">
      <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
        <div className="px-12">
          <h1 className="relative z-10 pb-2 font-heading text-5xl font-bold uppercase tracking-wide md:text-6xl">
            Get your <span class="text-red-600">pass!</span>
          </h1>
          <hr></hr>
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
