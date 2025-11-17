export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  styles: string[];
  specialties: string[];
  rate: string;
  portfolio: string[];
  availability?: string;
};

export const artists: Artist[] = [
  {
    slug: "marisol-vega",
    name: "Marisol Vega",
    tagline: "Fine-line botanicals",
    bio: "Marisol blends delicate line work with watercolor-inspired shading to create ethereal botanicals and feminine compositions.",
    styles: ["Fine line", "Botanical"],
    specialties: ["Floral", "Minimal", "Black & Grey"],
    rate: "$200/hr",
    portfolio: [
      "https://images.unsplash.com/photo-1526045478516-99145907023c",
      "https://images.unsplash.com/photo-1504069520120-6abe9abdb5a5",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    ],
    availability: "Booking late April",
  },
  {
    slug: "ronin-cho",
    name: "Ronin Cho",
    tagline: "Neo-traditional storyteller",
    bio: "Ronin mixes bold color palettes with illustrative line quality inspired by comics and folklore.",
    styles: ["Neo-traditional", "Color"],
    specialties: ["Mythical creatures", "Large scale", "Cover ups"],
    rate: "$220/hr",
    portfolio: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    ],
    availability: "Accepting projects for summer",
  },
  {
    slug: "ivy-north",
    name: "Ivy North",
    tagline: "Blackwork specialist",
    bio: "Ivy is known for graphic blackwork, geometric mandalas, and bold negative-space compositions tailored to each client's body flow.",
    styles: ["Blackwork", "Geometric"],
    specialties: ["Sleeves", "Dotwork", "Pattern work"],
    rate: "$210/hr",
    portfolio: [
      "https://images.unsplash.com/photo-1500929541927-47d2820c472f",
      "https://images.unsplash.com/photo-1503386435953-66943ba0e6b7",
      "https://images.unsplash.com/photo-1503602642458-232111445657",
      "https://images.unsplash.com/photo-1501869150797-9bbb64f782cd",
    ],
    availability: "Waitlist open",
  },
];

export const getArtistBySlug = (slug: string) =>
  artists.find((artist) => artist.slug === slug);
