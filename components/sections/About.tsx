import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Biography
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {siteData.about.heading}
          </h2>
        </div>

        <div>
          <p className="max-w-3xl text-lg leading-9 text-stone-300">
            {siteData.about.biography}
          </p>
        </div>
      </div>
    </section>
  );
}