import { siteData } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-white">{siteData.name}</p>

          <p className="mt-1">
            © {currentYear} {siteData.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          <a href="#home" className="transition hover:text-white">
            Back to top
          </a>

          <a href="#credits" className="transition hover:text-white">
            Credits
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}