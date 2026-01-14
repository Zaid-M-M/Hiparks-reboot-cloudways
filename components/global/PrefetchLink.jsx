'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

/**
 * Enhanced Link component with aggressive prefetching
 * Preloads pages on hover for instant navigation
 */
export default function PrefetchLink({ 
  href, 
  children, 
  className = '',
  prefetch = true,
  ...props 
}) {
  const linkRef = useRef(null);

  useEffect(() => {
    if (!prefetch || !linkRef.current) return;

    const link = linkRef.current;

    // Prefetch on hover
    const handleMouseEnter = () => {
      if (href) {
        // Next.js will handle the prefetch
        const router = require('next/router');
        if (router.default?.prefetch) {
          router.default.prefetch(href);
        }
      }
    };

    link.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      link.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [href, prefetch]);

  return (
    <Link 
      ref={linkRef}
      href={href} 
      className={className}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
}
