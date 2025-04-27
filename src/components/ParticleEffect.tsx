
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type ParticleProps = {
  isActive: boolean;
  color?: string;
  count?: number;
  duration?: number;
};

const ParticleEffect = ({ 
  isActive, 
  color = "bg-love-medium", 
  count = 20,
  duration = 2000 
}: ParticleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    if (!isActive || !containerRef.current) return;
    
    const newParticles = [];
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    for (let i = 0; i < count; i++) {
      // Random position, size, and delay
      const size = Math.random() * 10 + 3;
      const left = Math.random() * containerWidth;
      const delay = Math.random() * 0.9;
      const opacity = Math.random() * 0.7 + 0.3;
      const blur = Math.random() < 0.5;
      const shape = Math.random() < 0.7 ? 'rounded-full' : 'rotate-45 rounded-sm';
      
      newParticles.push(
        <div
          key={i}
          className={cn(
            "absolute", 
            color,
            shape,
            blur && "blur-[1px]"
          )}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}px`,
            bottom: '0',
            opacity: opacity,
            animation: `particle-up ${duration/1000}s ease-out forwards`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    
    setParticles(newParticles);
    
    // Clean up particles after animation completes
    const timer = setTimeout(() => {
      if (!isActive) setParticles([]);
    }, duration + 1000);
    
    return () => clearTimeout(timer);
  }, [isActive, color, count, duration]);
  
  return (
    <div ref={containerRef} className="absolute w-full h-full overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

export default ParticleEffect;
