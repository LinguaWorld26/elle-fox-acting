const storyCards = [
    {
      title: "Romantic Drama",
      description:
        "Stories where intimacy, choice, and vulnerability reveal the deeper truth of a relationship.",
    },
    {
      title: "Prestige Television",
      description:
        "Layered characters, moral tension, and emotionally complex worlds that unfold over time.",
    },
    {
      title: "Comedy",
      description:
        "Humor rooted in honesty, connection, contradiction, and the moments that help people heal.",
    },
    {
      title: "Action & Reinvention",
      description:
        "Stories of courage, resilience, transformation, and people rebuilding themselves under pressure.",
    },
    {
      title: "Historical Drama",
      description:
        "Stories that recover overlooked experiences and reveal the people behind history.",
    },
    {
      title: "Identity & Memory",
      description:
        "Family, military life, cultural memory, belonging, and the experiences that shape who we become.",
    },
  ];
  
  export default function Stories() {
    return (
      <section
        id="stories"
        className="relative overflow-hidden border-t border-gold/15 bg-midnight px-6 py-28 text-ivory md:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute -left-36 top-16 h-96 w-96 rounded-full bg-purple/20 blur-[145px]"
        />
  
        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose-gold/10 blur-[125px]"
        />
  
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                Layer Six
              </p>
  
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
                Stories She Is Drawn To
              </h2>
  
              <div className="mt-8 h-px w-24 bg-purple" />
            </div>
  
            <p className="max-w-2xl text-lg leading-8 text-ivory/65 md:text-xl md:leading-9">
              Ellé is drawn to stories that hold contradiction: strength and
              vulnerability, humor and grief, history and reinvention, intimacy
              and courage.
            </p>
          </div>
  
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {storyCards.map((story, index) => (
              <article
                key={story.title}
                className={`group relative min-h-[25rem] overflow-hidden border border-gold/20 p-7 ${
                  index === 1 || index === 4
                    ? "bg-gradient-to-br from-purple/35 via-midnight to-black"
                    : index === 2
                      ? "bg-gradient-to-br from-rose-gold/20 via-midnight to-black"
                      : index === 5
                        ? "bg-gradient-to-br from-emerald/30 via-midnight to-black"
                        : "bg-gradient-to-br from-black via-midnight to-purple/20"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-5 border border-ivory/10 transition duration-500 group-hover:inset-4 group-hover:border-gold/30"
                />
  
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple/20 blur-[60px]"
                />
  
                <div className="relative flex h-full flex-col justify-end">
                  <p className="font-navigation text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">
                    Story {String(index + 1).padStart(2, "0")}
                  </p>
  
                  <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ivory md:text-4xl">
                    {story.title}
                  </h3>
  
                  <p className="mt-5 leading-7 text-ivory/60">
                    {story.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }