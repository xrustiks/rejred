"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Logo = dynamic(() => import('./Logo'), {
  ssr: false,
  loading: () => (
    <Link href="/" className="text-xl font-bold tracking-tight text-gray-900" aria-label="Rejection is Redirection Podcast Home">
      Rejection is Redirection
    </Link>
  ),
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`bg-white sticky top-0 z-40 border-b border-gray-100 transition-all duration-300 ${
        scrolled && !open ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <nav className={`container mx-auto px-4 ${scrolled ? 'py-3' : 'py-6 md:py-8'} transition-[padding] duration-300`}>
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none -translate-y-2' : 'opacity-100'} `}>
            <Logo className="h-16 md:h-20" />
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <Link href="/" className={`text-gray-700 hover:text-blue-700 transition-colors ${scrolled ? 'text-base' : 'text-lg md:text-xl'} font-medium`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/podcasts" className={`text-gray-700 hover:text-blue-700 transition-colors ${scrolled ? 'text-base' : 'text-lg md:text-xl'} font-medium`}>
                Podcasts
              </Link>
            </li>
            <li>
              <Link href="/videos" className={`text-gray-700 hover:text-blue-700 transition-colors ${scrolled ? 'text-base' : 'text-lg md:text-xl'} font-medium`}>
                Videos
              </Link>
            </li>
            <li>
              <Link href="/photos" className={`text-gray-700 hover:text-blue-700 transition-colors ${scrolled ? 'text-base' : 'text-lg md:text-xl'} font-medium`}>
                Photos
              </Link>
            </li>
            <li>
              <Link href="/about" className={`text-gray-700 hover:text-blue-700 transition-colors ${scrolled ? 'text-base' : 'text-lg md:text-xl'} font-medium`}>
                About
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-4 border-t border-gray-100 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="block py-2 text-gray-700 hover:[color:var(--primary)]" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="block py-2 text-gray-700 hover:[color:var(--primary)]" onClick={() => setOpen(false)}>
                  Podcasts
                </Link>
              </li>
              <li>
                <Link href="/videos" className="block py-2 text-gray-700 hover:[color:var(--primary)]" onClick={() => setOpen(false)}>
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/photos" className="block py-2 text-gray-700 hover:[color:var(--primary)]" onClick={() => setOpen(false)}>
                  Photos
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-gray-700 hover:[color:var(--primary)]" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
