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
    <div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>

      <div className="mt-6 overflow-hidden border border-white/10">
        <div className="hidden grid-cols-[1.3fr_1fr_1.3fr] gap-6 border-b border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-widest text-stone-400 md:grid">
          <span>Production</span>
          <span>Role</span>
          <span>Director or Company</span>
        </div>

        {credits.map((credit, index) => (
          <div
            key={`${credit.production}-${index}`}
            className="grid gap-3 border-b border-white/10 px-6 py-5 last:border-b-0 md:grid-cols-[1.3fr_1fr_1.3fr] md:gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 md:hidden">
                Production
              </p>
              <p className="mt-1 font-medium text-white md:mt-0">
                {credit.production}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 md:hidden">
                Role
              </p>
              <p className="mt-1 text-stone-300 md:mt-0">{credit.role}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 md:hidden">
                Director or Company
              </p>
              <p className="mt-1 text-stone-300 md:mt-0">
                {credit.directorOrCompany}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
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
      className="border-t border-white/10 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Selected Credits
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            Film, television, theater, and commercial work.
          </p>
        </div>

        <div className="space-y-14">
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