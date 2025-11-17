import BookingForm from "@/components/booking/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking",
  description: "Request a tattoo appointment, drop a deposit, or connect with an Ink & Ember artist.",
};

interface BookingPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const BookingPage = async ({ searchParams }: BookingPageProps) => {
  const resolvedSearchParams = (await searchParams) ?? {};
  const preselectedArtist =
    typeof resolvedSearchParams.artist === "string" ? resolvedSearchParams.artist : undefined;

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Booking</p>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-900">Reserve your spot.</h1>
          <p className="mt-4 text-lg text-zinc-600">
            We currently accept appointments through our online form below. Prefer a quick call? Use the widget to grab a
            consult slot and we’ll map out your project together.
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-inner">
              <iframe
                title="Consultation scheduler"
                src="https://calendly.com/inkandember/consult?embed_domain=inkandember.com"
                className="h-[520px] w-full rounded-3xl"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-zinc-500">
              Prefer to embed a different tool? Swap the Calendly iframe for your vendor of choice—no other code changes needed.
            </p>
          </div>
          <BookingForm preselectedArtist={preselectedArtist} />
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
