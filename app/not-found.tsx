import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-stone-400">
          404 · Scene Not Found
        </p>

        <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
          This page missed its cue.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-300">
          The page may have moved, been removed, or never made it into the
          final production.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block bg-white px-6 py-3 font-medium text-black transition hover:bg-stone-200"
        >
          Return to {siteData.name}
        </Link>
      </div>
    </main>
  );
}