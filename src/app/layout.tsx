import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ink & Ember Tattoo Studio | Custom Tattoos in Your City",
    template: "%s | Ink & Ember Tattoo Studio",
  },
  description:
    "Ink & Ember is a modern tattoo collective specializing in custom artwork, fine-line pieces, and vibrant color work. Book online or visit our studio.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ink & Ember Tattoo Studio",
    description:
      "View our artists, gallery, FAQs, and request an appointment at Ink & Ember Tattoo Studio.",
    url: "https://example.com",
    siteName: "Ink & Ember Tattoo Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526045478516-99145907023c",
        width: 1200,
        height: 630,
        alt: "Tattoo artist at work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-zinc-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans text-zinc-900 bg-zinc-50 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
