"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-zinc-50/90 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-wide text-lg">
          Ink &amp; Ember
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition hover:text-zinc-900",
                pathname === link.href && "text-zinc-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-black px-4 py-2 text-white transition hover:bg-zinc-800"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
