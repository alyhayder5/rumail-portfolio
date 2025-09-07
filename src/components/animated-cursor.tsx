'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  // Ref for the cursor div element
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Refs for mouse position and current cursor position
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse move handler with typed event
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // Smooth easing
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          border: 2px solid rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: pulse 1.5s infinite;
          z-index: 9999;
          background: transparent;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .cursor {
            display: none;
          }
        }
      `}</style>
      <div ref={cursorRef} className="cursor" />
    </>
  );
}
