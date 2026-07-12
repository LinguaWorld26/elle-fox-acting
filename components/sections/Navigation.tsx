"use client";

import { useState } from "react";
import { siteData } from "@/data/siteData";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Acting", href: "#acting" },
  { label: "Writing", href: "#writing" },
  { label: "Voice", href: "#voice" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-midnight/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-[1200px] px-6"
      >
        <div className="flex items-center justify-between py-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="font-serif text-2xl font-semibold tracking-wide text-ivory transition hover:text-gold"
          >
            {siteData.name}
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-navigation text-sm font-medium text-ivory/70 transition hover:text-gold"
              >
                {link.label}
              </a>
            ))}

            {siteData.resume.fileUrl ? (
              <a
                href={siteData.resume.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-gold px-5 py-2 font-navigation text-sm font-medium text-ivory transition hover:bg-gold hover:text-midnight"
              >
                Résumé
              </a>
            ) : (
              <span
                title="Résumé coming soon"
                className="cursor-not-allowed border border-gold/45 px-5 py-2 font-navigation text-sm font-medium text-ivory/45"
              >
                Résumé
              </span>
            )}
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center border border-gold/50 text-ivory transition hover:bg-purple md:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gold/20 pb-6 pt-3 md:hidden"
          >
            <div className="flex flex-col">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-gold/15 py-4 font-navigation text-base text-ivory/75 transition hover:text-gold"
                >
                  {link.label}
                </a>
              ))}

              {siteData.resume.fileUrl ? (
                <a
                  href={siteData.resume.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="mt-5 border border-gold px-5 py-3 text-center font-navigation text-sm font-medium text-ivory transition hover:bg-gold hover:text-midnight"
                >
                  Résumé
                </a>
              ) : (
                <span className="mt-5 cursor-not-allowed border border-gold/40 px-5 py-3 text-center font-navigation text-sm font-medium text-ivory/45">
                  Résumé Coming Soon
                </span>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}