import ArtistCard from "@/components/artists/ArtistCard";
import { artists } from "@/lib/artists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists",
  description: "Browse Ink & Ember's resident tattoo artists and discover their specialties.",
};

const ArtistsPage = () => {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Artists</p>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-900">The Ink &amp; Ember collective.</h1>
          <p className="mt-4 text-lg text-zinc-600">
            Every artist leads their own book but collaborates across styles. Explore bios, specialties, and portfolios below.
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsPage;
