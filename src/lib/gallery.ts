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
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    style: "Fine line",
    artistSlug: "marisol-vega",
    caption: "Delicate botanical sleeve",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
    style: "Neo-traditional",
    artistSlug: "ronin-cho",
    caption: "Fox spirit guardian",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    style: "Blackwork",
    artistSlug: "ivy-north",
    caption: "Geometric chest panel",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    style: "Color",
    artistSlug: "ronin-cho",
    caption: "Vivid koi duo",
  },
  {
    id: "5",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    style: "Realism",
    artistSlug: "ronin-cho",
    caption: "Portrait study",
  },
  {
    id: "6",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    style: "Blackwork",
    artistSlug: "ivy-north",
    caption: "Mandala knee",
  },
];
