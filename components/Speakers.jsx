import SpeakerCard from "./SpeakerCard";
import { speakers } from "../lib/speakers";

export default function Speakers() {
  return (
    <div className="flex min-h-screen w-screen flex-col p-4 font-body text-white md:flex-row lg:px-12">
      <div className="top-0 flex flex-col justify-center py-10  pr-8 md:sticky md:h-screen md:w-1/3 md:pb-40">
        <h2 className="relative z-10 inline-block font-heading text-5xl font-semibold  uppercase md:text-6xl">
          Meet Our <span className="text-red-600">Speakers</span>
        </h2>
        <p className="mt-12 text-lg font-medium text-white md:text-xl">
          TEDxBITSGoa's speakers are a diverse and inspiring group of
          individuals from various fields and backgrounds, all with the common
          goal of inspiring our audience to make a positive impact on the world
          around them. We're proud to have hosted some of the most
          thought-provoking and inspiring speakers in India.
        </p>
      </div>
      <div className="flex-1 md:ml-4">
        <div className="grid grid-cols-2 gap-4  lg:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              image={speaker.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
