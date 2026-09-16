"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-4 md:justify-end md:px-10">
      <nav className="pointer-events-auto glass-nav flex items-center gap-8 rounded-full px-10 py-3 text-[15px] text-cream md:min-w-[280px] md:justify-end">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition duration-200 hover:-translate-y-0.5 hover:text-white ${pathname === link.href ? "text-white" : "text-cream/90"}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
