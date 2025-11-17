import { NextResponse } from "next/server";
import { saveBooking } from "@/lib/booking-store";

const REQUIRED_FIELDS = ["name", "email", "phone", "artist", "preferredDate", "style"] as const;

type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  artist: string;
  preferredDate: string;
  style: string;
  referenceUrl?: string;
};

function validate(payload: Partial<BookingPayload>) {
  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]);
  if (missing.length) {
    return `Missing required fields: ${missing.join(", ")}`;
  }
  if (payload.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
    return "Enter a valid email address";
  }
  return null;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<BookingPayload>;
  const error = validate(body);

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const booking = saveBooking(body as BookingPayload);

  return NextResponse.json(
    {
      message: "Booking received. We'll confirm availability soon.",
      booking,
    },
    { status: 201 }
  );
}
