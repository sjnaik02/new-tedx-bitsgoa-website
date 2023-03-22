import SpeakerCard from "./SpeakerCard";
import Speaker1 from "../public/speakers/Speaker1.jpg";
import Speaker2 from "../public/speakers/Speaker2.jpg";

export default function Speakers() {
  return (
    <div className="font-body flex min-h-screen w-screen flex-col p-4 text-white md:flex-row lg:px-12">
      <div className="top-0 flex flex-col justify-center py-10  pr-8 md:sticky md:h-screen md:w-1/3 md:pb-40">
        <h2 className="font-heading relative z-10 inline-block text-5xl font-bold  uppercase md:text-6xl">
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
          <SpeakerCard name="Speaker 1" image={Speaker1.src} />
          <SpeakerCard name="Speaker 2" image={Speaker2.src} />
          <SpeakerCard name="Speaker 1" image={Speaker1.src} />
          <SpeakerCard name="Speaker 2" image={Speaker2.src} />
          <SpeakerCard name="Speaker 1" image={Speaker1.src} />
          <SpeakerCard name="Speaker 2" image={Speaker2.src} />
          <SpeakerCard name="Speaker 1" image={Speaker1.src} />
          <SpeakerCard name="Speaker 2" image={Speaker2.src} />
          <SpeakerCard name="Speaker 1" image={Speaker1.src} />
          <SpeakerCard name="Speaker 2" image={Speaker2.src} />
        </div>
      </div>
    </div>
  );
}
