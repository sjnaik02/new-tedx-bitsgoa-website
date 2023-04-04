import { useState } from "react";

export default function index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    setEmail("");
    setPhone("");
    setLoading(false);
  };
  return (
    <div className="flex h-screen min-h-[100svh]  w-full bg-black font-body text-white md:flex-row">
      <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
        <div className="flex h-fit min-h-screen max-w-3xl flex-col justify-center px-4 sm:px-12">
          <h1 className="relative z-10 pb-2 font-heading text-4xl font-bold uppercase tracking-wide md:text-6xl">
            Get your <span className="text-red-600">pass!</span>
          </h1>
          <hr></hr>
          <p className=" relative z-10 mb-2 mt-4 text-sm sm:text-base">
            TEDxBITSGoa has brought some of the best speakers from all over the
            country to Goa. Passes are limited, so register now to reserve your
            seat at this once-in-a-year opportunity.
          </p>
          <p className="text-lg font-bold text-red-600">Price: Rs. 600/-</p>
          <p className="relative z-10 my-2 text-sm hover:text-red-600 sm:text-base">
            <a
              className="underline underline-offset-2"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdApGUhkpx3grReQ-dxXJljajss_VNwbWxqEm7nIBo6hwINIA/viewform?usp=sf_link"
              target="_blank"
            >
              BITSian? Click Here to register and get a discount!
            </a>
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
              <label htmlFor="Email" className="text-lg" hidden>
                Email:
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                className="mt-2 rounded-md border border-gray-700 bg-black px-4 py-2 text-lg focus:border-red-600 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <label htmlFor="Phone" className="text-lg" hidden>
                Phone:
              </label>
              <input
                type="text"
                name="Phone"
                id="Phone"
                className="mt-2 rounded-md border border-gray-700 bg-black px-4 py-2 text-lg focus:border-red-600 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />

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
