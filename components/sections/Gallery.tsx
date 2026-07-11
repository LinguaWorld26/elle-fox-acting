import Image from "next/image";
import { siteData } from "@/data/siteData";

const galleryPlaceholders = [
  "Headshot",
  "Portrait",
  "Production Still",
];

export default function Gallery() {
  const hasGalleryImages = siteData.gallery.length > 0;

  return (
    <section
      id="gallery"
      className="border-t border-white/10 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Photography
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Gallery
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            Professional headshots, portraits, and selected production stills.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hasGalleryImages
            ? siteData.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-stone-900"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))
            : galleryPlaceholders.map((placeholder) => (
                <div
                  key={placeholder}
                  className="flex aspect-[4/5] items-center justify-center border border-dashed border-white/20 bg-stone-900"
                >
                  <div className="px-6 text-center">
                    <p className="text-lg font-medium text-white">
                      {placeholder}
                    </p>

                    <p className="mt-2 text-sm text-stone-500">
                      Photo coming soon
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}