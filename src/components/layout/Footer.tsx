import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Ink &amp; Ember Tattoo Studio</p>
            <p className="mt-2 text-sm text-zinc-600">
              124 W Jefferson St, Suite B, Butler, PA 16001
            </p>
            <p className="text-sm text-zinc-600">(724) 555-7123</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Hours
            </p>
            <p className="mt-2 text-sm text-zinc-600">Tue-Sat · 11am – 8pm</p>
            <p className="text-sm text-zinc-600">Sunday by appointment</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Stay in touch
            </p>
            <div className="mt-2 flex gap-4 text-sm text-zinc-600">
              <Link href="https://instagram.com" target="_blank" className="hover:text-zinc-900">
                Instagram
              </Link>
              <Link href="mailto:hello@inkandember.com" className="hover:text-zinc-900">
                Email
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Ink &amp; Ember Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
