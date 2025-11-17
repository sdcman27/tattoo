import ArtistPortfolioGrid from "@/components/artists/ArtistPortfolioGrid";
import { getArtistBySlug, artists } from "@/lib/artists";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ArtistPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return { title: "Artist not found" };
  }

  return {
    title: artist.name,
    description: artist.bio,
  };
}

const ArtistDetailPage = async ({ params, searchParams }: ArtistPageProps) => {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) {
    notFound();
  }

  const resolvedSearchParams = (await searchParams) ?? {};
  const rawArtistParam = resolvedSearchParams?.artist;
  const preselected = Array.isArray(rawArtistParam)
    ? rawArtistParam[0]
    : rawArtistParam ?? artist.name;

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link href="/artists" className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          ← Back to artists
        </Link>
        <div className="mt-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-semibold text-zinc-900">{artist.name}</h1>
              <p className="mt-2 text-lg text-zinc-600">{artist.bio}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
                {artist.styles.join(" • ")}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">Portfolio</h2>
              <ArtistPortfolioGrid images={artist.portfolio} />
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <div>
              <p className="text-sm font-semibold text-zinc-900">Specialties</p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                {artist.specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">Rate</p>
              <p className="text-sm text-zinc-600">{artist.rate}</p>
            </div>
            {artist.availability && (
              <div>
                <p className="text-sm font-semibold text-zinc-900">Availability</p>
                <p className="text-sm text-zinc-600">{artist.availability}</p>
              </div>
            )}
            <Link
              href={`/booking?artist=${encodeURIComponent(preselected)}`}
              className="block rounded-full bg-zinc-900 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
            >
              Book with {artist.name}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ArtistDetailPage;
