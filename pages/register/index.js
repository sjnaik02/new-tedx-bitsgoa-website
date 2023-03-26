import { useState } from "react";

export default function index() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyXBVbSKoRQ6FdKILcMsO3_DJwa6X55SYSNVtjJd54rbcKvruPp0PbRVA3rIkWcL-Id1A/exec";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(scriptUrl, {
      method: "POST",
      body: new FormData(e.target),
    });
    const data = await res.json();
    console.log(data);
    if (data.result === "success") {
      setSuccess(true);
    } else {
      setError(true);
    }
    setName("");
    setId("");
    setLoading(false);
  };
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
          {success === true && (
            <p className="text-lg text-white">Sucessfully Registered!</p>
          )}
          {!loading ? (
            <form
              className="mt-4 flex flex-col rounded-lg border border-gray-700 p-4"
              method="post"
              action="https://script.google.com/macros/s/AKfycbyXBVbSKoRQ6FdKILcMsO3_DJwa6X55SYSNVtjJd54rbcKvruPp0PbRVA3rIkWcL-Id1A/exec"
              onSubmit={handleSubmit}
            >
              <label htmlFor="Name" className="text-lg" hidden>
                Name:
              </label>
              <input
                type="text"
                name="Name"
                id="name"
                className="mt-2 rounded-md border border-gray-700 bg-black px-4 py-2 text-lg focus:border-red-600 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <label htmlFor="BITS ID" className="text-lg" hidden>
                BITS ID:
              </label>
              <input
                type="text"
                name="BITS ID"
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
                  name="SWD"
                  id="SWD"
                  className="mt-2 checked:accent-red-600"
                  required
                />
                <label htmlFor="SWD" className="ml-4 text-base">
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
          ) : (
            <p className="animate-pulse text-lg text-white">Loading...</p>
          )}
        </div>
      </div>
      <div className="absolute top-0 h-24 w-full bg-gradient-to-br from-red-900 via-black to-red-600 sm:static sm:h-full sm:w-1/2" />
    </div>
  );
}
