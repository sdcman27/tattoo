import Image from "next/image";
import Link from "next/link";
import type { Artist } from "@/lib/artists";

interface Props {
  artist: Artist;
}

const ArtistCard = ({ artist }: Props) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="relative h-72">
        <Image src={artist.portfolio[0]} alt={artist.name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {artist.styles.join(" • ")}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-zinc-900">{artist.name}</h3>
          <p className="text-sm text-zinc-600">{artist.bio}</p>
        </div>
        <div className="mt-auto">
          <p className="text-sm font-semibold text-zinc-900">{artist.rate}</p>
          {artist.availability && (
            <p className="text-xs uppercase tracking-wide text-emerald-600">
              {artist.availability}
            </p>
          )}
        </div>
        <Link
          href={`/artists/${artist.slug}`}
          className="rounded-full border border-zinc-900 px-5 py-2 text-center text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
        >
          View portfolio
        </Link>
      </div>
    </article>
  );
};

export default ArtistCard;
