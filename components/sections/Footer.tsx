import { siteData } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: "Instagram",
      url: siteData.contact.instagramUrl,
      external: true,
    },
    {
      label: "YouTube",
      url: siteData.contact.youtubeUrl,
      external: true,
    },
    {
      label: "IMDb",
      url: siteData.contact.imdbUrl,
      external: true,
    },
    {
      label: "Résumé",
      url: siteData.resume.fileUrl,
      external: true,
    },
    {
      label: "Contact",
      url: "#contact",
      external: false,
    },
  ].filter((link) => link.url);

  return (
    <footer className="border-t border-gold/20 bg-black px-6 py-12 text-ivory">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <a
              href="#home"
              className="font-serif text-4xl font-semibold tracking-wide text-ivory transition hover:text-gold"
            >
              {siteData.name}
            </a>

            <p className="mt-3 font-navigation text-xs uppercase tracking-[0.2em] text-gold">
              Actor · Writer · Voice Artist · Storyteller
            </p>

            <p className="mt-6 max-w-lg text-sm leading-6 text-ivory/45">
              Stories shaped by emotional depth, humanity, resilience, humor,
              and transformation.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-4 md:justify-end"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="font-navigation text-xs font-medium uppercase tracking-[0.16em] text-ivory/55 transition hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gold/15 pt-7 text-sm text-ivory/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteData.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="font-navigation text-xs uppercase tracking-[0.16em] transition hover:text-gold"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}