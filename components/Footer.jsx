import React from "react";

export default function Footer() {
  return (
    <footer className="font-bod flex h-36 w-full flex-col items-center justify-center text-center	text-lg text-white md:text-xl ">
      <p className="font-heading">
        This event is operated under a licence from TED
      </p>
      <p className="font-heading">
        Created with <span className="text-red-600">❤</span> by{" "}
        <a
          href="https://www.shouryanaik.com"
          target="_blank"
          className="relative text-red-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-red-600"
        >
          Shourya Naik{" "}
        </a>
      </p>
    </footer>
  );
}
