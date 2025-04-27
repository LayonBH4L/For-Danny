
import React from 'react';
import { Flower as FlowerIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type FlowerProps = {
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
  variant?: 'simple' | 'detailed';
};

const Flower = ({
  size = 24,
  color = 'text-flower-medium',
  className,
  delay = 0,
  variant = 'simple'
}: FlowerProps) => {
  if (variant === 'simple') {
    return (
      <FlowerIcon 
        size={size} 
        className={cn(
          color, 
          'animate-bloom',
          className
        )}
        style={{
          animationDelay: `${delay}s`
        }}
      />
    );
  }
  
  // Detailed flower with petals
  return (
    <div 
      className={cn(
        "relative inline-flex items-center justify-center",
        'animate-bloom',
        className
      )}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`
      }}
    >
      {/* Center of flower */}
      <div className={cn(
        "absolute rounded-full w-1/3 h-1/3",
        color === 'text-flower-medium' ? 'bg-flower-dark' : 'bg-flower-medium'
      )}/>
      
      {/* Petals */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className={cn(
            "absolute rounded-full w-1/2 h-1/4",
            color === 'text-flower-medium' ? 'bg-flower-medium' : 'bg-flower-light'
          )}
          style={{
            transformOrigin: '50% 50%',
            transform: `rotate(${45 * i}deg) translateX(${size/4}px)`
          }}
        />
      ))}
    </div>
  );
};

export default Flower;
