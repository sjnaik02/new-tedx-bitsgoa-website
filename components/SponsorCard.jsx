export default function SponsorCard({ imageUrl, name, title, large }) {
  return (
    <div
      className={`flex h-full w-full  flex-col items-center gap-4 rounded-lg bg-white p-4 transition-transform hover:-translate-y-2 hover:scale-105  hover:transform hover:shadow-lg ${
        large ? "col-span-2" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-48 w-48 flex-grow object-contain"
      />
      <div className="">
        <h3 className="font-heading text-2xl text-black">{title}</h3>
        <p className="text-md text-gray-500">{name}</p>
      </div>
    </div>
  );
}
