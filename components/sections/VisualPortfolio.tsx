import Image from "next/image";
import { siteData } from "@/data/siteData";

const portfolioPlaceholders = [
  {
    title: "Dramatic Headshot",
    ratio: "portrait",
  },
  {
    title: "Commercial Headshot",
    ratio: "landscape",
  },
  {
    title: "Candid Portrait",
    ratio: "portrait",
  },
  {
    title: "Full-Length Portrait",
    ratio: "tall",
  },
  {
    title: "Black & White",
    ratio: "landscape",
  },
  {
    title: "Production Still",
    ratio: "portrait",
  },
];

function getAspectClass(ratio: string) {
  if (ratio === "landscape") {
    return "aspect-[4/3]";
  }

  if (ratio === "tall") {
    return "aspect-[3/5]";
  }

  return "aspect-[4/5]";
}

export default function VisualPortfolio() {
  const hasImages = siteData.gallery.length > 0;

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-t border-gold/15 bg-ivory px-6 py-28 text-midnight md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-purple">
              Layer Seven
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              Visual Portfolio
            </h2>

            <div className="mt-8 h-px w-24 bg-gold" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-midnight/65 md:text-xl md:leading-9">
            A curated collection of dramatic, commercial, editorial, and
            cinematic imagery revealing different dimensions of Ellé Fox.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          {hasImages
            ? siteData.gallery.map((image, index) => {
                const layoutClasses = [
                  "md:col-span-5",
                  "md:col-span-7 md:mt-20",
                  "md:col-span-4",
                  "md:col-span-4 md:-mt-10",
                  "md:col-span-4 md:mt-16",
                  "md:col-span-7 md:col-start-4",
                ];

                return (
                  <figure
                    key={image.src}
                    className={`group relative overflow-hidden border border-purple/15 bg-midnight ${
                      layoutClasses[index % layoutClasses.length]
                    }`}
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent opacity-60" />
                    </div>
                  </figure>
                );
              })
            : portfolioPlaceholders.map((item, index) => {
                const layoutClasses = [
                  "md:col-span-5",
                  "md:col-span-7 md:mt-20",
                  "md:col-span-4",
                  "md:col-span-4 md:-mt-10",
                  "md:col-span-4 md:mt-16",
                  "md:col-span-7 md:col-start-4",
                ];

                return (
                  <div
                    key={item.title}
                    className={`relative overflow-hidden border border-purple/20 bg-gradient-to-br from-purple/10 via-ivory to-gold/10 ${
                      layoutClasses[index]
                    }`}
                  >
                    <div
                      className={`relative flex items-end p-7 ${getAspectClass(
                        item.ratio,
                      )}`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-5 border border-midnight/10"
                      />

                      <div className="relative">
                        <p className="font-navigation text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-purple">
                          Portfolio
                        </p>

                        <h3 className="mt-3 font-serif text-3xl font-semibold text-midnight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm text-midnight/45">
                          Image coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}