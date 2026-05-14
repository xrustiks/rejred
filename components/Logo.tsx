'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const [svgFailed, setSvgFailed] = useState(false);
  const [pngFailed, setPngFailed] = useState(false);

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className ?? 'h-8'}`}
      aria-label="The Rejected Pre-Med Podcast Home"
    >
      {!svgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo.svg"
          alt="The Rejected Pre-Med Logo"
          className="w-auto h-full"
          onError={() => setSvgFailed(true)}
        />
      ) : !pngFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo.png"
          alt="The Rejected Pre-Med Logo"
          className="w-auto h-full"
          onError={() => setPngFailed(true)}
        />
      ) : (
        <span className="text-xl font-bold tracking-tight text-foreground">
          The Rejected Pre-Med
        </span>
      )}
    </Link>
  );
}
