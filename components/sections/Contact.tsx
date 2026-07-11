import { siteData } from "@/data/siteData";

export default function Contact() {
  const professionalLinks = [
    {
      label: "IMDb",
      url: siteData.contact.imdbUrl,
    },
    {
      label: "Instagram",
      url: siteData.contact.instagramUrl,
    },
    {
      label: "Actors Access",
      url: siteData.contact.actorsAccessUrl,
    },
    {
      label: "Casting Networks",
      url: siteData.contact.castingNetworksUrl,
    },
  ].filter((link) => link.url);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-gold/15 bg-midnight px-6 py-28 text-ivory md:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-32 top-12 h-96 w-96 rounded-full bg-purple/20 blur-[145px]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Connection
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Let&apos;s tell a story together.
          </h2>

          <div className="mt-8 h-px w-24 bg-purple" />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/65 md:text-xl md:leading-9">
            For casting, representation, writing, voiceover, creative
            collaborations, and professional opportunities.
          </p>
        </div>

        <div className="border border-gold/25 bg-ivory/[0.04] p-8 backdrop-blur-sm md:p-10">
          <div>
            <p className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Professional Email
            </p>

            {siteData.contact.email ? (
              <a
                href={`mailto:${siteData.contact.email}`}
                className="mt-3 inline-block break-all font-serif text-2xl text-ivory transition hover:text-gold md:text-3xl"
              >
                {siteData.contact.email}
              </a>
            ) : (
              <p className="mt-3 font-serif text-2xl text-ivory/70">
                Professional email coming soon
              </p>
            )}
          </div>

          <div className="mt-9 border-t border-gold/15 pt-8">
            <p className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Representation
            </p>

            <p className="mt-3 leading-7 text-ivory/65">
              {siteData.contact.representation ||
                "Representation details coming soon"}
            </p>
          </div>

          {professionalLinks.length > 0 && (
            <div className="mt-9 border-t border-gold/15 pt-8">
              <p className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
                Professional Profiles
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {professionalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-purple/70 px-4 py-3 font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:border-gold hover:bg-gold hover:text-midnight"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {siteData.resume.fileUrl && (
            <a
              href={siteData.resume.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-block border border-purple bg-purple px-6 py-3 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition hover:border-gold hover:bg-gold hover:text-midnight"
            >
              View Résumé
            </a>
          )}
        </div>
      </div>
    </section>
  );
}