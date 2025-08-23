import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full opacity-50 animate-particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      containerRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 5000);
    };

    const intervalId = setInterval(createParticle, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
}
