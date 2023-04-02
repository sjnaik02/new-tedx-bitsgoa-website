export default function SponsorCard({ imageUrl, name, title, large }) {
  return (
    <div
      className={`group flex h-full  w-full flex-col items-center gap-4 rounded-lg  p-4 ${
        large ? "col-span-2 col-start-1 row-start-1 lg:col-start-2" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-48 w-auto flex-grow object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
      />
      <div className="hidden">
        <h3 className="font-heading text-2xl ">{title}</h3>
        <p className="text-md">{name}</p>
      </div>
    </div>
  );
}
