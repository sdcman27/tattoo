"use client";

import { FormEvent, useState } from "react";
import { artists } from "@/lib/artists";

interface Props {
  preselectedArtist?: string;
}

const BookingForm = ({ preselectedArtist }: Props) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Unable to submit request");
      }

      setStatus("success");
      setMessage("Thanks! We'll reach out to confirm.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-zinc-700">
          Name
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
            placeholder="Your full name"
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Email
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
            placeholder="you@email.com"
          />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-zinc-700">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </label>
        <label className="text-sm font-medium text-zinc-700">
          Preferred date or timeframe
          <input
            required
            name="preferredDate"
            type="text"
            className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
            placeholder="Late April, weekends, etc."
          />
        </label>
      </div>
      <label className="text-sm font-medium text-zinc-700">
        Artist preference
        <select
          required
          name="artist"
          defaultValue={preselectedArtist ?? artists[0]?.name}
          className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
        >
          {artists.map((artist) => (
            <option key={artist.slug} value={artist.name}>
              {artist.name}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-zinc-700">
        Tell us about the piece
        <textarea
          required
          name="style"
          rows={4}
          className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
          placeholder="Placement, size, references, color, etc."
        />
      </label>
      <label className="text-sm font-medium text-zinc-700">
        Reference image URL (optional)
        <input
          name="referenceUrl"
          type="url"
          className="mt-2 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-zinc-900 focus:outline-none"
          placeholder="https://..."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-zinc-900 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800 disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Request Booking"}
      </button>
      {message && (
        <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default BookingForm;
