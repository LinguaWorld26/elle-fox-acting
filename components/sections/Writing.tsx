const writingThemes = [
    "Identity",
    "Family",
    "Resilience",
    "Love",
    "Humor",
    "Cultural Memory",
    "Transformation",
  ];
  
  const developmentProjects = [
    {
      title: "Project in Development",
      format: "Film or Television",
      status: "In Development",
    },
    {
      title: "Future Story",
      format: "Limited Series",
      status: "Concept Stage",
    },
    {
      title: "Untitled Project",
      format: "Screen Project",
      status: "Coming Later",
    },
  ];
  
  export default function Writing() {
    return (
      <section
        id="writing"
        className="relative overflow-hidden border-t border-gold/15 bg-gradient-to-br from-purple via-[#2d174f] to-midnight px-6 py-28 text-ivory md:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-black/35 blur-[150px]"
        />
  
        <div
          aria-hidden="true"
          className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[130px]"
        />
  
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                Layer Four
              </p>
  
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
                Beyond Performance
              </h2>
  
              <div className="mt-8 h-px w-24 bg-gold" />
            </div>
  
            <p className="font-serif text-2xl italic leading-9 text-ivory/85 md:text-3xl md:leading-10">
              Ellé does not only step into stories. She creates them.
            </p>
          </div>
  
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-3xl text-lg leading-8 text-ivory/75 md:text-xl md:leading-9">
                Her writing explores identity, family, resilience, love, humor,
                cultural memory, personal transformation, and the experiences
                that shape how people understand one another.
              </p>
  
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/65">
                Her long-term creative vision includes writing and developing
                film and television projects, building layered characters, and
                creating stories that remain with audiences beyond the final
                scene.
              </p>
  
              <div className="mt-10 flex flex-wrap gap-3">
                {writingThemes.map((theme) => (
                  <span
                    key={theme}
                    className="border border-gold/35 bg-black/10 px-4 py-3 font-navigation text-xs font-medium uppercase tracking-[0.14em] text-ivory/80 backdrop-blur-sm"
                  >
                    {theme}
                  </span>
                ))}
              </div>
  
              <a
                href="#writing-projects"
                className="mt-10 inline-block border border-gold bg-gold px-7 py-4 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-midnight transition hover:bg-ivory"
              >
                Explore Writing & Development
              </a>
            </div>
  
            <div
              id="writing-projects"
              className="border border-gold/25 bg-black/20 p-6 backdrop-blur-sm md:p-8"
            >
              <p className="font-navigation text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Works in Development
              </p>
  
              <div className="mt-7 space-y-5">
                {developmentProjects.map((project) => (
                  <article
                    key={project.title}
                    className="border-t border-ivory/15 pt-5"
                  >
                    <h3 className="font-serif text-2xl font-semibold text-ivory">
                      {project.title}
                    </h3>
  
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-navigation text-[0.7rem] uppercase tracking-[0.16em] text-ivory/50">
                      <span>{project.format}</span>
                      <span>{project.status}</span>
                    </div>
                  </article>
                ))}
              </div>
  
              <p className="mt-8 text-sm leading-6 text-ivory/45">
                Selected titles and public loglines can be added when projects
                are ready to be shared.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }