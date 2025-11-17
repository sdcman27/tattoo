import Image from "next/image";
import Link from "next/link";
import { artists } from "@/lib/artists";

const ArtistsHighlight = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Featured artists
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
              Diverse styles, united by craft.
            </h2>
          </div>
          <Link
            href="/artists"
            className="text-sm font-semibold uppercase tracking-wide text-zinc-900"
          >
            Meet the full crew →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {artists.map((artist) => (
            <Link
              key={artist.slug}
              href={`/artists/${artist.slug}`}
              className="group rounded-3xl border border-zinc-200 bg-zinc-50/50 p-5 transition hover:-translate-y-1 hover:border-zinc-300"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image
                  src={artist.portfolio[0]}
                  alt={artist.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  {artist.styles.join(" • ")}
                </p>
                <p className="mt-2 text-xl font-semibold text-zinc-900">
                  {artist.name}
                </p>
                <p className="text-sm text-zinc-600">{artist.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsHighlight;
