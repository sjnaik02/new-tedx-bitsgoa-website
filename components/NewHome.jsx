const NewHome = () => {
  return (
    <main className="bg-neutral-950 h-full w-full overflow-hidden font-sans text-neutral-200">
      <div className="z-1 absolute top-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,0,0,0.4),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col p-4 md:p-0 ">
        <DateComponent />
        <HeroMessage />
        <div className="mt-8 flex font-mono text-base">
          <InfoCard title="Location">Goa, India</InfoCard>
          <InfoCard title="Events">14</InfoCard>
          <InfoCard title="Speakers">60+</InfoCard>
        </div>
      </div>
    </main>
  );
};

const DateComponent = () => (
  <p className="my-2 mt-12 text-center font-mono text-lg">♦ Coming Soon! ♦</p>
);

const HeroMessage = () => (
  <section className="mt-24">
    <h1 className="text-6xl font-medium">
      <span className="font-bold text-red-600">TEDx</span>BITSGoa, a home for
      <span className="font-bold"> Ideas Worth Spreading.</span>
    </h1>
    <p className="mt-8 text-xl font-normal text-neutral-200">
      Welcome to TEDxBITSGoa, India's oldest institutional TEDx conference. We
      provide a platform for new ideas and bring together the best personalities
      to inspire and inform our community. For more information about TED and
      TEDx, please visit{" "}
      <a
        href="https://www.ted.com/about/our-organization"
        className="text-red-600 underline"
      >
        this link
      </a>
      .
    </p>
  </section>
);

const InfoCard = ({ title, children }) => (
  <div className="w-1/3">
    <h2 className="text-red-600">{title}</h2>
    <p className="text-xl">{children}</p>
  </div>
);

export default NewHome;
