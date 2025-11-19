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
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",
    ],
    availability: "Waitlist open",
  },
];

export const getArtistBySlug = (slug: string) =>
  artists.find((artist) => artist.slug === slug);
