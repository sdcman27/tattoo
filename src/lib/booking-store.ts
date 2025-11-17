import { randomUUID } from "crypto";

export type BookingRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  artist: string;
  preferredDate: string;
  style: string;
  referenceUrl?: string;
  status: "pending" | "reviewed";
  createdAt: string;
};

const requests: BookingRequest[] = [];

export function saveBooking(payload: Omit<BookingRequest, "id" | "status" | "createdAt">) {
  const booking: BookingRequest = {
    ...payload,
    id: randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  requests.unshift(booking);
  return booking;
}

export const getBookingRequests = () => requests;
