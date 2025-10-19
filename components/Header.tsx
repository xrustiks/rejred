"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation"; // ✅ added

const Logo = dynamic(() => import("./Logo"), {
  ssr: false,
  loading: () => (
    <Link
      href="/"
      className="text-xl font-bold tracking-tight text-gray-900"
      aria-label="Rejection is Redirection Podcast Home"
    >
      Rejection is Redirection
    </Link>
  ),
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ added
  const pathname = usePathname(); // ✅ current route

  useEffect(() => {
    setMounted(true);
  }, []);

  // Makes header hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Makes menu close on scroll or outside click
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    const handleClick = (e) => {
      if (!e.target.closest("nav")) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const linkClass = (href) =>
    `${
      pathname === href ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
    } transition-colors ${
      scrolled ? "text-base" : "text-lg md:text-xl"
    } font-medium`;

  // ✅ Prevent SSR mismatch
  if (!mounted) return null;

  return (
    <header
      className={`bg-white sticky top-0 z-40 border-b border-gray-100 transition-all duration-300 ${
        scrolled && !open
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <nav
        className={`container mx-auto px-4 flex items-center justify-between transition-[padding] duration-300 
          ${scrolled ? "py-3" : "py-6 md:py-8"} 
          md:flex-col lg:flex-row`}
      >
        {/* Logo (stacks above nav on medium screens) */}
        <div
          className={`transition-all duration-300 mb-0 md:mb-6 lg:mb-0 ${
            scrolled
              ? "opacity-0 pointer-events-none -translate-y-2"
              : "opacity-100"
          }`}
        >
          <Logo className="h-28 md:h-36 w-auto flex-shrink-0" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            ["/", "Home"],
            ["/podcasts", "Podcasts"],
            ["/videos", "Videos"],
            ["/photos", "Photos"],
            ["/about", "About"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-4 border-t border-gray-100 pt-4 transition-all duration-300 overflow-hidden ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-row justify-center gap-4">
          {[
            ["/", "Home"],
            ["/podcasts", "Podcasts"],
            ["/videos", "Videos"],
            ["/photos", "Photos"],
            ["/about", "About"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 ${
                  pathname === href
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}