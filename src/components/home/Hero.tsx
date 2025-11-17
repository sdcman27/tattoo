import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Portland, Oregon
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Ink &amp; Ember Tattoo Studio
          </h1>
          <p className="mt-6 text-lg text-zinc-200">
            Custom tattoos crafted with intention. Meet our award-winning artists,
            explore our gallery, and reserve your next session online.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:bg-zinc-200"
            >
              Book an appointment
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
            >
              View gallery
            </Link>
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1526045478516-99145907023c')] bg-cover bg-center shadow-2xl" />
      </div>
    </section>
  );
};

export default Hero;
