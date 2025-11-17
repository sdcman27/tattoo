export type TattooPiece = {
  id: string;
  imageUrl: string;
  style: string;
  artistSlug: string;
  caption: string;
};

export const tattooStyles = [
  "All",
  "Blackwork",
  "Fine line",
  "Neo-traditional",
  "Color",
  "Realism",
];

export const galleryPieces: TattooPiece[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1504069520120-6abe9abdb5a5",
    style: "Fine line",
    artistSlug: "marisol-vega",
    caption: "Delicate botanical sleeve",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
    style: "Neo-traditional",
    artistSlug: "ronin-cho",
    caption: "Fox spirit guardian",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1503386435953-66943ba0e6b7",
    style: "Blackwork",
    artistSlug: "ivy-north",
    caption: "Geometric chest panel",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    style: "Color",
    artistSlug: "ronin-cho",
    caption: "Vivid koi duo",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    style: "Realism",
    artistSlug: "ronin-cho",
    caption: "Portrait study",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657",
    style: "Blackwork",
    artistSlug: "ivy-north",
    caption: "Mandala knee",
  },
];
