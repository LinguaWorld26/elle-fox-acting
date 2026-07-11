import Image from "next/image";
import { siteData } from "@/data/siteData";

const galleryPlaceholders = [
  {
    title: "The Performer",
    description: "Editorial portrait",
  },
  {
    title: "The Storyteller",
    description: "Creative portrait",
  },
  {
    title: "The Artist",
    description: "Production still",
  },
];

export default function Gallery() {
  const hasGalleryImages = siteData.gallery.length > 0;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-t border-gold/15 bg-midnight px-6 py-28 text-ivory md:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-purple/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-end">
          <div>
            <p className="font-navigation text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              In Frame
            </p>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
              Gallery
            </h2>

            <div className="mt-8 h-px w-20 bg-purple" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-ivory/65 md:text-xl md:leading-9">
            Editorial portraits, expressive moments, and cinematic images that
            reveal the different layers of Ellé Fox.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hasGalleryImages
            ? siteData.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={`group relative overflow-hidden border border-gold/20 bg-black ${
                    index === 1 ? "lg:translate-y-12" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-60" />
                  </div>
                </figure>
              ))
            : galleryPlaceholders.map((placeholder, index) => (
                <div
                  key={placeholder.title}
                  className={`relative flex aspect-[4/5] items-end overflow-hidden border border-gold/20 bg-gradient-to-br from-purple/25 via-midnight to-black p-7 ${
                    index === 1 ? "lg:translate-y-12" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-6 border border-ivory/10"
                  />

                  <div className="relative">
                    <p className="font-serif text-3xl font-semibold text-ivory">
                      {placeholder.title}
                    </p>

                    <p className="mt-2 font-navigation text-[0.7rem] uppercase tracking-[0.2em] text-gold">
                      {placeholder.description}
                    </p>

                    <p className="mt-4 text-sm text-ivory/45">
                      Photography coming soon
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}