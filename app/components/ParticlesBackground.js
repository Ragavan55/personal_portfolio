

'use client';

import { useEffect, useRef } from 'react';

// Earth background with constant rotation
export default function ParticlesBackground() {
  const earthRef = useRef(null);

  useEffect(() => {
    let animationId;
    let angle = 0;
    const rotate = () => {
      angle += 0.1;
      if (earthRef.current) {
        earthRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }
      animationId = requestAnimationFrame(rotate);
    };
    rotate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    >
      <img
        ref={earthRef}
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
        alt="Rotating Earth"
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: 'min(100vw, 100vh)',
          height: 'auto',
          opacity: 0.18,
          pointerEvents: 'none',
          zIndex: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.5s',
        }}
      />
    </div>
  );
}
