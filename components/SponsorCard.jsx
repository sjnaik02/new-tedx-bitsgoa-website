export default function SponsorCard({ imageUrl, name, title, large, url }) {
  return (
    <div
      className={`group flex h-full  w-full flex-col items-center gap-4 rounded-lg p-4 ${
        large ? "col-span-full col-start-1 row-start-1" : ""
      }
      ${name === "Beardo" ? "lg:col-span-1 lg:col-start-2" : ""}
      ${
        name === "EaseMyTrip" ? "md:scale-125 lg:col-span-1 lg:col-start-3" : ""
      }`}
    >
      <a href={url} target="_blank">
        <img
          src={imageUrl}
          alt={name}
          className={`${
            title === "Past Sponsor" || title === "Food Sponsor"
              ? "h-36"
              : "h-48"
          }
          ${large ? "h-56" : ""}
          w-auto object-contain  transition-all `}
        />
      </a>
    </div>
  );
}
