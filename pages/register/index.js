import { useState } from "react";

export default function index() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  return (
    <div className="flex h-[100svh] w-full bg-black font-body text-white md:flex-row">
      <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
        <div className="px-12">
          <h1 className="relative z-10 pb-2 font-heading text-5xl font-bold uppercase tracking-wide md:text-6xl">
            Get your <span className="text-red-600">pass!</span>
          </h1>
          <hr></hr>
          <p className=" relative z-10 mb-2 mt-4  text-lg">
            TEDxBITSGoa has brought some of the best speakers from all over the
            country to Goa. Passes are limited, so register now to reserve your
            seat at this once-in-a-year opportunity.
          </p>
          <p className="text-lg font-bold text-red-600">
            Price: Rs. 650 /- (deducted from SWD)
          </p>
          <p className="text-base text-gray-300">
            <span className="text-red-600">|</span> This is valid only for
            students of BITS Goa.
          </p>
          {/* form for Name, Id, and a checkbox giving consent to deduct from SWD */}
          <form className="mt-4 flex flex-col rounded-lg border border-gray-700 p-4">
            <label htmlFor="name" className="text-lg" hidden>
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-2 rounded-md border border-gray-700 bg-black px-4 py-2 text-lg focus:border-red-600 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <label htmlFor="id" className="text-lg" hidden>
              BITS ID:
            </label>
            <input
              type="text"
              name="id"
              id="id"
              className="mt-2 rounded-md border border-gray-700 bg-black px-4 py-2 text-lg focus:border-red-600 focus:outline-none"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="BITS ID"
              required
            />
            <div className="mt-4 flex">
              <input
                type="checkbox"
                name="swd"
                id="swd"
                className="mt-2 checked:accent-red-600"
                required
              />
              <label htmlFor="swd" className="ml-4 text-base">
                I give my consent to deduct Rs. 650/- from my SWD account to
                TEDxBITSGoa to register for TEDxBITSGoa 2023.
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 rounded-md bg-red-600 px-4 py-2 text-lg font-bold uppercase text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="absolute top-0 h-24 w-full bg-gradient-to-br from-red-900 via-black to-red-600 sm:static sm:h-full sm:w-1/2" />
    </div>
  );
}
