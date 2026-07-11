import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-gold/15 bg-ivory px-6 py-28 text-midnight md:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-purple/10 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
        <div>
          <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-purple">
            The Artist
          </p>

          <h2 className="mt-5 max-w-md font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
            {siteData.about.heading}
          </h2>

          <div className="mt-8 h-px w-20 bg-gold" />
        </div>

        <div className="lg:pt-10">
          <p className="max-w-3xl text-lg leading-9 text-midnight/75 md:text-xl md:leading-10">
            {siteData.about.biography}
          </p>

          <blockquote className="mt-12 border-l-2 border-purple pl-6 font-serif text-2xl italic leading-9 text-purple md:text-3xl md:leading-10">
            Powerful, playful, authentic, warm, sophisticated, and bold.
          </blockquote>

          <p className="mt-8 max-w-2xl text-base leading-8 text-midnight/60">
            Her work is grounded in emotional depth, meaningful connection,
            transformation, and stories that stay with audiences beyond the
            final scene.
          </p>
        </div>
      </div>
    </section>
  );
}