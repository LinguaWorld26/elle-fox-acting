import { siteData } from "@/data/siteData";

export default function Stats() {
  const stats = [
    { label: "Location", value: siteData.stats.location },
    { label: "Height", value: siteData.stats.height },
    { label: "Hair Color", value: siteData.stats.hairColor },
    { label: "Eye Color", value: siteData.stats.eyeColor },
    { label: "Playing Age", value: siteData.stats.playingAge },
    { label: "Union Status", value: siteData.stats.unionStatus },
  ];

  return (
    <section
      id="stats"
      className="relative overflow-hidden border-t border-gold/15 bg-ivory px-6 py-28 text-midnight md:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-end">
          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-purple">
              Professional Profile
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              Stats & Skills
            </h2>

            <div className="mt-8 h-px w-20 bg-gold" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-midnight/65 md:text-xl md:leading-9">
            Performance details, creative abilities, and professional skills.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-3xl font-semibold text-purple">
              Stats
            </h3>

            <dl className="mt-7 border-y border-midnight/15">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-midnight/10 py-5 last:border-b-0"
                >
                  <dt className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-midnight/45">
                    {stat.label}
                  </dt>

                  <dd className="text-right text-midnight/75">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-serif text-3xl font-semibold text-purple">
              Special Skills
            </h3>

            <div className="mt-7 flex flex-wrap gap-3">
              {siteData.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-purple/25 bg-purple/5 px-5 py-3 font-navigation text-xs font-medium uppercase tracking-[0.12em] text-purple transition hover:border-purple hover:bg-purple hover:text-ivory"
                >
                  {skill}
                </span>
              ))}
            </div>

            <blockquote className="mt-12 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-9 text-midnight/70 md:text-3xl">
              Versatility shaped by discipline, curiosity, and emotional
              connection.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}