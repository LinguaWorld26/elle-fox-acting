import { siteData } from "@/data/siteData";

export default function Reel() {
  return (
    <section
      id="reel"
      className="border-t border-white/10 px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
            Performance
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            {siteData.reel.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-300">
            {siteData.reel.description}
          </p>
        </div>

        <div className="flex aspect-video items-center justify-center border border-white/15 bg-stone-900">
          {siteData.reel.videoUrl ? (
            <iframe
              src={siteData.reel.videoUrl}
              title={`${siteData.name} acting reel`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="px-6 text-center">
              <p className="text-xl font-medium text-white">
                Acting reel coming soon
              </p>

              <p className="mt-3 text-stone-400">
                A YouTube or Vimeo reel will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}