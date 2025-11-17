import Hero from "@/components/home/Hero";
import ArtistsHighlight from "@/components/home/ArtistsHighlight";
import StylesStrip from "@/components/home/StylesStrip";

const perks = [
  {
    title: "Sterile & safe",
    body: "Hospital-grade sterilization, single-use needles, and a dedicated aftercare plan for every client.",
  },
  {
    title: "Collaborative consults",
    body: "We sketch with you in the studio or virtually to dial in composition, placement, and palette.",
  },
  {
    title: "Flexible booking",
    body: "Online requests, SMS follow-ups, and weekend availability for large projects.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StylesStrip />
      <ArtistsHighlight />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Our philosophy
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
                A studio built for intentional work.
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Every piece is custom, never flash-from-the-wall. We pair thoughtful design with open communication so you always
                know what to expect before the needle touches skin.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {perks.map((perk) => (
                  <div key={perk.title} className="rounded-2xl border border-zinc-200 p-5">
                    <p className="text-lg font-semibold text-zinc-900">{perk.title}</p>
                    <p className="mt-2 text-sm text-zinc-600">{perk.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-2 shadow-inner">
              <div className="relative h-[420px] overflow-hidden rounded-3xl">
                <iframe
                  title="Map to Ink & Ember"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.880481468859!2d-122.67620722357352!3d45.523064832192095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a02ff1a1d0f%3A0xab2342!2sPearl%20District%2C%20Portland%2C%20OR!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
