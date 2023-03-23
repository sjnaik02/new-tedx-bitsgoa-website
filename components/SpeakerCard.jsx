import Image from "next/image";

export default function SpeakerCard({ name, image }) {
  return (
    <div className="group relative aspect-square h-full w-full bg-black">
      <Image
        fill
        src={image}
        alt={name}
        className="object-cover transition-opacity group-hover:opacity-50"
      />
      <p className="absolute bottom-4 left-4 flex h-fit w-fit items-center justify-center bg-red-600 px-2 font-body text-lg font-bold text-white opacity-0  transition-opacity group-hover:opacity-100">
        {name}
      </p>
    </div>
  );
}
