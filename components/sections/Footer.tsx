import { siteData } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-black px-6 py-12 text-ivory md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href="#home"
            className="font-serif text-3xl font-semibold tracking-wide text-ivory transition hover:text-gold"
          >
            {siteData.name}
          </a>

          <p className="mt-2 font-navigation text-[0.7rem] uppercase tracking-[0.22em] text-gold">
            Actor · Writer · Storyteller
          </p>

          <p className="mt-5 text-sm text-ivory/40">
            © {currentYear} {siteData.name}. All rights reserved.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          <a
            href="#home"
            className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/55 transition hover:text-gold"
          >
            Back to Top
          </a>

          <a
            href="#credits"
            className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/55 transition hover:text-gold"
          >
            Credits
          </a>

          <a
            href="#gallery"
            className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/55 transition hover:text-gold"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="font-navigation text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/55 transition hover:text-gold"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}