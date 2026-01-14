'use client';
import { useEffect } from 'react';

/**
 * Performance Monitor Component
 * Tracks and logs page performance metrics
 * Only active in development mode
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    // Wait for page to fully load
    if (typeof window === 'undefined') return;

    const logPerformance = () => {
      // Get navigation timing
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation) {
        const metrics = {
          // Time to First Byte
          ttfb: Math.round(navigation.responseStart - navigation.requestStart),
          
          // DOM Content Loaded
          domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
          
          // Full Page Load
          loadComplete: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
          
          // Total Time
          totalTime: Math.round(navigation.loadEventEnd - navigation.fetchStart),
          
          // Cache Status
          cacheHit: navigation.transferSize === 0 ? 'HIT' : 'MISS',
          transferSize: Math.round(navigation.transferSize / 1024) + 'KB'
        };

        console.group('📊 Performance Metrics');
        console.log('⚡ TTFB:', metrics.ttfb + 'ms');
        console.log('📄 DOM Ready:', metrics.domContentLoaded + 'ms');
        console.log('✅ Load Complete:', metrics.loadComplete + 'ms');
        console.log('⏱️  Total Time:', metrics.totalTime + 'ms');
        console.log('💾 Cache:', metrics.cacheHit);
        console.log('📦 Transfer Size:', metrics.transferSize);
        console.groupEnd();

        // Check for Core Web Vitals
        if ('PerformanceObserver' in window) {
          // Largest Contentful Paint
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('🎨 LCP:', Math.round(lastEntry.renderTime || lastEntry.loadTime) + 'ms');
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log('👆 FID:', Math.round(entry.processingStart - entry.startTime) + 'ms');
            });
          }).observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let clsScore = 0;
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
              }
            }
            console.log('📐 CLS:', clsScore.toFixed(3));
          }).observe({ entryTypes: ['layout-shift'] });
        }
      }
    };

    // Log on load
    if (document.readyState === 'complete') {
      logPerformance();
    } else {
      window.addEventListener('load', logPerformance);
      return () => window.removeEventListener('load', logPerformance);
    }
  }, []);

  return null; // This component doesn't render anything
}
