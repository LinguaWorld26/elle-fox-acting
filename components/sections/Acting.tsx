import { siteData } from "@/data/siteData";

const actingCategories = [
  {
    title: "Film & Television",
    description:
      "Layered performances shaped by emotional depth, intelligence, humor, and contradiction.",
  },
  {
    title: "Theater",
    description:
      "Live performance grounded in presence, disciplined preparation, and human connection.",
  },
  {
    title: "Commercial",
    description:
      "Warm, natural, and engaging work created for brands and broad audiences.",
  },
];

export default function Acting() {
  return (
    <section
      id="acting"
      className="relative overflow-hidden border-t border-gold/15 bg-midnight px-6 py-28 text-ivory md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-purple/20 blur-[145px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Layer Three
          </p>

          <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
            The Performer
          </h2>

          <div className="mt-8 h-px w-24 bg-purple" />

          <p className="mt-8 font-serif text-2xl italic leading-9 text-ivory/85 md:text-3xl">
            Drama. Comedy. Action. Romance. History.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/65 md:text-xl md:leading-9">
            Ellé is drawn to characters who carry contradiction, emotional
            complexity, strength, vulnerability, intelligence, and humor.
          </p>
        </div>

        <div className="mt-14 overflow-hidden border border-gold/25 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="aspect-video">
            {siteData.reel.videoUrl ? (
              <iframe
                src={siteData.reel.videoUrl}
                title={`${siteData.name} acting reel`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple/30 via-midnight to-black px-6 text-center">
                <div>
                  <p className="font-serif text-4xl font-semibold text-ivory md:text-5xl">
                    Ellé Fox
                  </p>

                  <p className="mt-3 font-navigation text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Acting Reel
                  </p>

                  <p className="mt-5 text-sm text-ivory/45">
                    Reel coming soon
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={siteData.reel.videoUrl || "#acting"}
            className="border border-purple bg-purple px-7 py-4 text-center font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition hover:border-gold hover:bg-gold hover:text-midnight"
          >
            Watch Acting Reel
          </a>

          <a
            href="#credits"
            className="border border-gold/70 px-7 py-4 text-center font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition hover:bg-gold hover:text-midnight"
          >
            Explore Acting
          </a>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {actingCategories.map((category) => (
            <article
              key={category.title}
              className="border-t border-gold/30 py-7"
            >
              <h3 className="font-serif text-3xl font-semibold text-ivory">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-ivory/55">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}