import GallerySection from "@/components/gallery/GallerySection";
import { galleryPieces, tattooStyles } from "@/lib/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Filter through healed tattoos, in-progress work, and flash concepts from Ink & Ember artists.",
};

const GalleryPage = () => {
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-900">Browse recent work.</h1>
          <p className="mt-4 text-lg text-zinc-600">
            Filter by style to get a feel for line quality, saturation, and healed finishes. Tap any piece to mention it when you
            book.
          </p>
        </div>
        <div className="mt-10">
          <GallerySection styles={tattooStyles} pieces={galleryPieces} />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
