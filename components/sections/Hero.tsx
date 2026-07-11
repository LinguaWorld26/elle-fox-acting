import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] items-center px-6 py-20 md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-stone-400">
          {siteData.profession}
        </p>

        <h1 className="max-w-5xl text-6xl font-bold leading-none tracking-tight md:text-8xl">
          {siteData.name}
        </h1>

        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-stone-400">
          {siteData.hero.tagline}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300">
          {siteData.hero.introduction}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#reel"
            className="bg-white px-6 py-3 font-medium text-black transition hover:bg-stone-200"
          >
            Watch Reel
          </a>

          <a
            href="#credits"
            className="border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
          >
            View Credits
          </a>
        </div>
      </div>
    </section>
  );
}