import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-gold/15 bg-ivory px-6 py-28 text-midnight md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Future candid portrait */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] border border-gold/35 bg-gradient-to-br from-purple/15 via-ivory to-rose-gold/10">
              <div
                aria-hidden="true"
                className="absolute inset-5 rounded-t-[48%] border border-purple/15"
              />

              <div className="flex h-full items-end p-8">
                <div className="relative">
                  <p className="font-serif text-4xl font-semibold text-purple">
                    The Presence
                  </p>

                  <p className="mt-3 font-navigation text-xs uppercase tracking-[0.2em] text-midnight/45">
                    Candid portrait coming soon
                  </p>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 hidden h-32 w-32 border-b border-r border-gold/40 md:block"
            />
          </div>

          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-purple">
              Layer Two
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              More Than One Story
            </h2>

            <div className="mt-8 h-px w-24 bg-gold" />

            <p className="mt-8 text-lg leading-8 text-midnight/75 md:text-xl md:leading-9">
              Ellé Fox is an actor, writer, and voice artist drawn to stories
              with emotional depth, humanity, resilience, humor, and
              transformation.
            </p>

            <p className="mt-6 text-lg leading-8 text-midnight/70">
              Powerful yet welcoming, sophisticated yet playful, she brings a
              layered perspective to every role and creative project. Her work
              is shaped by lived experience, disciplined preparation, natural
              curiosity, and a belief that the most memorable stories reveal
              something true about the people experiencing them.
            </p>

            <p className="mt-6 text-lg leading-8 text-midnight/70">
              A Chicago native and United States Air Force veteran, Ellé
              approaches performance and storytelling with authenticity,
              courage, warmth, and an instinct for connection.
            </p>

            <blockquote className="editorial-quote mt-10 border-l-2 border-purple pl-6 text-2xl italic leading-9 text-purple md:text-3xl md:leading-10">
              Every story reveals another layer.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}