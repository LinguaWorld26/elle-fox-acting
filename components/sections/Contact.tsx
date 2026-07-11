import { siteData } from "@/data/siteData";

export default function Contact() {
  const socialLinks = [
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
      className="border-t border-white/10 px-6 py-24 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Get in Touch
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Contact Ellé
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            For casting inquiries, professional opportunities, and
            representation information, use the contact details below.
          </p>
        </div>

        <div className="border border-white/10 bg-white/5 p-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400">
              Email
            </p>

            {siteData.contact.email ? (
              <a
                href={`mailto:${siteData.contact.email}`}
                className="mt-2 inline-block text-lg text-white underline-offset-4 hover:underline"
              >
                {siteData.contact.email}
              </a>
            ) : (
              <p className="mt-2 text-stone-300">
                Professional email coming soon
              </p>
            )}
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-stone-400">
              Representation
            </p>

            <p className="mt-2 text-stone-300">
              {siteData.contact.representation ||
                "Representation details coming soon"}
            </p>
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-stone-400">
                Professional Profiles
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/15 px-4 py-2 text-sm text-stone-200 transition hover:bg-white hover:text-black"
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
              className="mt-8 inline-block bg-white px-5 py-3 font-medium text-black transition hover:bg-stone-200"
            >
              View Résumé
            </a>
          )}
        </div>
      </div>
    </section>
  );
}