"use client";

interface Props {
  styles: string[];
  activeStyle: string;
  onChange: (style: string) => void;
}

const GalleryFilterBar = ({ styles, activeStyle, onChange }: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {styles.map((style) => (
        <button
          key={style}
          type="button"
          onClick={() => onChange(style)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            activeStyle === style
              ? "border-zinc-900 bg-zinc-900 text-white"
              : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
          }`}
        >
          {style}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilterBar;
