"use client";

import { useState } from "react";
import { siteData } from "@/data/siteData";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Reel", href: "#reel" },
  { label: "Credits", href: "#credits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-6 md:px-10"
      >
        <div className="flex items-center justify-between py-5">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-wide text-white"
          >
            {siteData.name}
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-stone-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
            className="border border-white/20 px-4 py-2 text-sm uppercase tracking-widest text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 pb-5 pt-3 md:hidden"
          >
            <div className="flex flex-col">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-sm uppercase tracking-widest text-stone-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}