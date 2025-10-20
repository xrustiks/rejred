'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

// Tries to render /images/logo.svg then /images/logo.png, falls back to text
export default function Logo({ className }: LogoProps) {
  const [jpgFailed, setJpgFailed] = useState(false);
  const [svgFailed, setSvgFailed] = useState(false);
  const [pngFailed, setPngFailed] = useState(false);

  // Auto extract dominant color from logo.svg to set --primary
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/logo.svg';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const w = 64, h = 64;
        canvas.width = w; canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        const { data } = ctx.getImageData(0, 0, w, h);
        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < data.length; i += 16) { // sample every 4th pixel
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
        if (count) {
          r = Math.round(r / count);
          g = Math.round(g / count);
          b = Math.round(b / count);
          const color = `rgb(${r}, ${g}, ${b})`;
          document.documentElement.style.setProperty('--primary', color);
        }
      } catch {}
    };
  }, []);

  const common = "w-auto h-full";

  return (
  <Link href="/" className={`flex items-center gap-3 ${className ?? 'h-8'}`} aria-label="Rejection is Redirection Podcast Home">
      {!jpgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo.svg"
          alt="Rejection is Redirection Logo"
          className={common}
          onError={() => setJpgFailed(true)}
        />
      ) : !svgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo.svg"
          alt="Rejection is Redirection Logo"
          className={common}
          onError={() => setSvgFailed(true)}
        />
      ) : !pngFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo.png"
          alt="Rejection is Redirection Logo"
          className={common}
          onError={() => setPngFailed(true)}
        />
      ) : (
        <span className="text-xl font-bold tracking-tight text-foreground">Rejection is Redirection</span>
      )}
    </Link>
  );
}
