"use client";

import { useMemo, useState } from "react";
import GalleryFilterBar from "./GalleryFilterBar";
import GalleryGrid from "./GalleryGrid";
import type { TattooPiece } from "@/lib/gallery";

interface Props {
  styles: string[];
  pieces: TattooPiece[];
}

const GallerySection = ({ styles, pieces }: Props) => {
  const [activeStyle, setActiveStyle] = useState(styles[0] ?? "All");

  const filteredPieces = useMemo(() => {
    if (activeStyle === "All") return pieces;
    return pieces.filter((piece) => piece.style === activeStyle);
  }, [activeStyle, pieces]);

  return (
    <div>
      <GalleryFilterBar
        styles={styles}
        activeStyle={activeStyle}
        onChange={(style) => setActiveStyle(style)}
      />
      <GalleryGrid pieces={filteredPieces} />
    </div>
  );
};

export default GallerySection;
