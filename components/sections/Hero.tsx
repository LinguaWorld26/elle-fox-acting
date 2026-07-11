import { siteData } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-midnight px-6 py-24 md:px-10"
    >
      {/* Future hero image
<div className="absolute inset-0">
  <Image
    src="/images/elle-fox-hero.jpg"
    alt="Ellé Fox"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
</div>
*/}

      {/* Main translucent black and purple overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple/55 to-purple/20"
      />

      {/* Additional vertical shading for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"
      />

      {/* Soft purple atmosphere */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-purple/30 blur-[150px]"
      />

      {/* Fine dark veil so the image stays cinematic */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-midnight/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-navigation text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            {siteData.profession}
          </p>

          <h1 className="mt-6 font-serif text-7xl font-semibold leading-[0.85] tracking-[-0.04em] text-ivory drop-shadow-lg sm:text-8xl md:text-9xl">
            {siteData.name}
          </h1>

          <div className="mt-8 h-px w-24 bg-gold" />

          <p className="mt-8 font-navigation text-xs font-medium uppercase tracking-[0.28em] text-ivory/70 sm:text-sm">
            {siteData.hero.tagline}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/80 drop-shadow-md md:text-xl md:leading-9">
            {siteData.hero.introduction}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
          <a
  href="#reel"
  className="border border-purple bg-purple/85 px-7 py-3 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-sm transition duration-300 hover:border-gold hover:bg-gold hover:text-midnight"
>
  View Reel
</a>

<a
  href="#about"
  className="border border-gold/70 bg-black/15 px-7 py-3 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory backdrop-blur-sm transition duration-300 hover:border-gold hover:bg-gold hover:text-midnight"
>
  Enter the Story
</a>
          </div>
        </div>

        <p className="mt-20 max-w-xl font-serif text-2xl italic leading-9 text-ivory/65 drop-shadow-md md:text-3xl md:leading-10">
          Everything she does is connected to a larger piece of her story.
        </p>
      </div>
    </section>
  );
}