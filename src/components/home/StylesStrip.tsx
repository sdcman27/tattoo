const styles = [
  "Blackwork",
  "Fine Line",
  "Neo-Traditional",
  "Color Realism",
  "Minimal",
  "Geometric",
];

const StylesStrip = () => {
  return (
    <section className="bg-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-10 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
        {styles.map((style) => (
          <span key={style} className="text-center">
            {style}
          </span>
        ))}
      </div>
    </section>
  );
};

export default StylesStrip;
