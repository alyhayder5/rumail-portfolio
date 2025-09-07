'use client';
import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false;

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any scroll optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll events
    window.addEventListener('scroll', optimizeScroll, { passive: true });

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = ['/public/profile/rumail.jpg'];

      criticalImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadCriticalResources();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, []);

  return null;
}

