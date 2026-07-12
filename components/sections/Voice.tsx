const voiceCategories = [
    "Commercial",
    "Narration",
    "Character",
    "Dramatic",
    "Educational",
  ];
  
  export default function Voice() {
    return (
      <section
        id="voice"
        className="relative overflow-hidden border-t border-gold/15 bg-ivory px-6 py-28 text-midnight md:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute -right-36 top-20 h-80 w-80 rounded-full bg-purple/10 blur-[120px]"
        />
  
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-t-[45%] border border-gold/30 bg-gradient-to-br from-purple/15 via-ivory to-rose-gold/10">
                <div className="absolute inset-6 rounded-t-[45%] border border-purple/15" />
  
                <div className="flex h-full items-end p-8">
                  <div>
                    <p className="font-serif text-4xl font-semibold text-purple">
                      Voice Portrait
                    </p>
  
                    <p className="mt-3 font-navigation text-xs uppercase tracking-[0.2em] text-midnight/45">
                      Studio image coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div>
              <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-purple">
                Layer Five
              </p>
  
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
                A Voice That Connects
              </h2>
  
              <div className="mt-8 h-px w-24 bg-gold" />
  
              <p className="mt-8 font-serif text-2xl italic leading-9 text-purple md:text-3xl">
                Warm. Intelligent. Expressive. Grounded.
              </p>
  
              <p className="mt-6 max-w-2xl text-lg leading-8 text-midnight/70 md:text-xl md:leading-9">
                Ellé brings emotional clarity, professionalism, and natural
                connection to commercial, narrative, dramatic, and
                character-based voice work.
              </p>
  
              <div
                aria-label="Decorative audio waveform"
                className="mt-10 flex h-16 items-center gap-1.5"
              >
                {[18, 30, 42, 26, 54, 38, 62, 34, 48, 24, 56, 36, 44, 28, 20].map(
                  (height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="w-1.5 rounded-full bg-purple/70"
                      style={{ height: `${height}px` }}
                    />
                  ),
                )}
              </div>
  
              <div className="mt-10 border border-purple/20 bg-purple/5 p-6">
                <p className="font-navigation text-xs font-semibold uppercase tracking-[0.2em] text-purple">
                  Voice Sample
                </p>
  
                <p className="mt-3 text-midnight/60">
                  Audio samples will appear here when they are ready.
                </p>
  
                <button
                  type="button"
                  disabled
                  className="mt-6 cursor-not-allowed border border-purple/30 px-6 py-3 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-purple/45"
                >
                  Listen to Voice Samples
                </button>
              </div>
  
              <div className="mt-8 flex flex-wrap gap-3">
                {voiceCategories.map((category) => (
                  <span
                    key={category}
                    className="border border-gold/35 px-4 py-3 font-navigation text-xs font-medium uppercase tracking-[0.14em] text-midnight/65"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }