import Image from "next/image";

interface Props {
  images: string[];
}

const ArtistPortfolioGrid = ({ images }: Props) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image, index) => (
        <div key={image} className="relative h-64 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={`Tattoo ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ArtistPortfolioGrid;
