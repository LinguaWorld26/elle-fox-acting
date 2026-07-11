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
      className="border-t border-white/10 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Profile
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Stats & Skills
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            Professional details, performance abilities, and special skills.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Stats</h3>

            <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between gap-6 py-5"
                >
                  <dt className="text-sm uppercase tracking-widest text-stone-400">
                    {stat.label}
                  </dt>

                  <dd className="text-right text-stone-200">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Special Skills</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {siteData.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-white/15 bg-white/5 px-4 py-3 text-stone-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}