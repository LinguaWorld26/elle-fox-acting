import { siteData } from "@/data/siteData";

type Credit = {
  production: string;
  role: string;
  directorOrCompany: string;
};

type CreditGroupProps = {
  title: string;
  credits: Credit[];
};

function CreditGroup({ title, credits }: CreditGroupProps) {
  return (
    <article className="border-t border-gold/20 pt-8">
      <h3 className="font-serif text-3xl font-semibold text-purple md:text-4xl">
        {title}
      </h3>

      <div className="mt-7">
        <div className="hidden grid-cols-[1.3fr_1fr_1.3fr] gap-6 border-b border-midnight/15 pb-4 font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-midnight/45 md:grid">
          <span>Production</span>
          <span>Role</span>
          <span>Director or Company</span>
        </div>

        {credits.map((credit, index) => (
          <div
            key={`${credit.production}-${index}`}
            className="grid gap-4 border-b border-midnight/10 py-6 md:grid-cols-[1.3fr_1fr_1.3fr] md:gap-6"
          >
            <div>
              <p className="font-navigation text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-purple md:hidden">
                Production
              </p>

              <p className="mt-1 font-serif text-xl font-semibold text-midnight md:mt-0">
                {credit.production}
              </p>
            </div>

            <div>
              <p className="font-navigation text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-purple md:hidden">
                Role
              </p>

              <p className="mt-1 text-midnight/65 md:mt-0">{credit.role}</p>
            </div>

            <div>
              <p className="font-navigation text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-purple md:hidden">
                Director or Company
              </p>

              <p className="mt-1 text-midnight/65 md:mt-0">
                {credit.directorOrCompany}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Credits() {
  const creditGroups = [
    { title: "Film", credits: siteData.credits.film },
    { title: "Television", credits: siteData.credits.television },
    { title: "Theater", credits: siteData.credits.theater },
    { title: "Commercial", credits: siteData.credits.commercial },
  ];

  return (
    <section
      id="credits"
      className="relative overflow-hidden border-t border-gold/15 bg-ivory px-6 py-28 text-midnight md:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-24 h-80 w-80 rounded-full bg-purple/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-end">
          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-purple">
              The Performer
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              Selected Credits
            </h2>

            <div className="mt-8 h-px w-20 bg-gold" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-midnight/65 md:text-xl md:leading-9">
            Selected work across film, television, theater, and commercial
            performance.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          {creditGroups.map((group) => (
            <CreditGroup
              key={group.title}
              title={group.title}
              credits={group.credits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}