import { siteData } from "@/data/siteData";

export default function Reel() {
  return (
    <section
      id="reel"
      className="relative overflow-hidden border-t border-gold/15 bg-midnight px-6 py-28 text-ivory md:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-end">
          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              The Performer
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              {siteData.reel.heading}
            </h2>

            <div className="mt-8 h-px w-20 bg-purple" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-ivory/70 md:text-xl md:leading-9">
            {siteData.reel.description}
          </p>
        </div>

        <div className="mt-14 overflow-hidden border border-gold/20 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
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
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple/20 via-midnight to-black px-6 text-center">
                <div>
                  <p className="font-serif text-3xl font-semibold text-ivory md:text-4xl">
                    Acting reel coming soon
                  </p>

                  <p className="mt-4 font-navigation text-xs uppercase tracking-[0.22em] text-ivory/50">
                    Selected scenes and performances
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}