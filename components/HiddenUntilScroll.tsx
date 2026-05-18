'use client';

import { ReactNode } from 'react';
import { useScroll } from '@/contexts/ScrollContext';

interface HiddenUntilScrollProps {
  children: ReactNode;
  className?: string;
}

export default function HiddenUntilScroll({
  children,
  className = '',
}: HiddenUntilScrollProps) {
  const { hasScrolled } = useScroll();

  return (
    <div
      className={`${!hasScrolled ? 'invisible opacity-0 pointer-events-none' : 'visible opacity-100 pointer-events-auto transition-opacity duration-500'} ${className}`}
    >
      {children}
    </div>
  );
}
