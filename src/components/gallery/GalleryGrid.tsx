"use client";

import Image from "next/image";
import type { TattooPiece } from "@/lib/gallery";

interface Props {
  pieces: TattooPiece[];
}

const GalleryGrid = ({ pieces }: Props) => {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pieces.map((piece) => (
        <figure key={piece.id} className="space-y-3">
          <div className="relative h-64 overflow-hidden rounded-3xl">
            <Image
              src={piece.imageUrl}
              alt={piece.caption}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <figcaption className="text-sm text-zinc-600">
            <p className="font-semibold text-zinc-900">{piece.caption}</p>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              {piece.style}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default GalleryGrid;
