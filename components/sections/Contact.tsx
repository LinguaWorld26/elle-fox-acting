import { siteData } from "@/data/siteData";

export default function Contact() {
  const professionalLinks = [
    {
      label: "Instagram",
      url: siteData.contact.instagramUrl,
    },
    {
      label: "YouTube",
      url: "",
    },
    {
      label: "IMDb",
      url: siteData.contact.imdbUrl,
    },
  ].filter((link) => link.url);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-gold/15 bg-midnight px-6 py-28 text-ivory md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-8 h-[32rem] w-[32rem] rounded-full bg-purple/25 blur-[155px]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-36 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Final Invitation
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Every Meaningful Story Begins With a Connection.
            </h2>

            <div className="mt-8 h-px w-24 bg-purple" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/65 md:text-xl md:leading-9">
              For casting, representation, writing and development, voiceover,
              speaking, or creative collaboration inquiries.
            </p>

            <a
              href={
                siteData.contact.email
                  ? `mailto:${siteData.contact.email}`
                  : "#contact-details"
              }
              className="mt-10 inline-block border border-purple bg-purple px-7 py-4 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition hover:border-gold hover:bg-gold hover:text-midnight"
            >
              Start a Conversation
            </a>
          </div>

          <div
            id="contact-details"
            className="border border-gold/25 bg-ivory/[0.04] p-8 backdrop-blur-sm md:p-10"
          >
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
                <p className="mt-3 font-serif text-2xl text-ivory/65">
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
                      className="border border-gold/40 px-4 py-3 font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:border-gold hover:bg-gold hover:text-midnight"
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
                className="mt-9 inline-block border border-gold px-6 py-3 font-navigation text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition hover:bg-gold hover:text-midnight"
              >
                View Résumé
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}