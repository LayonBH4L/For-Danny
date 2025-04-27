
import React from 'react';
import { Flower as FlowerIcon, Flower2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type FlowerProps = {
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
  variant?: 'simple' | 'detailed' | 'star' | 'round';
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

  if (variant === 'star') {
    return (
      <Flower2
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
  
  if (variant === 'round') {
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
        {/* Center */}
        <div className={cn(
          "absolute rounded-full w-1/3 h-1/3",
          color === 'text-flower-medium' ? 'bg-flower-dark' : 'bg-flower-light'
        )}/>
        
        {/* Round petals */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={cn(
              "absolute rounded-full",
              color === 'text-flower-medium' ? 'bg-flower-medium' : 'bg-flower-light'
            )}
            style={{
              width: size * 0.4,
              height: size * 0.4,
              transformOrigin: '50% 50%',
              transform: `rotate(${60 * i}deg) translateX(${size/4}px)`
            }}
          />
        ))}
      </div>
    );
  }
  
  // Detailed flower with pointed petals
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
        color === 'text-flower-medium' ? 'bg-flower-dark' : 'bg-flower-light'
      )}/>
      
      {/* Pointed petals */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className={cn(
            "absolute",
            color === 'text-flower-medium' ? 'bg-flower-medium' : 'bg-flower-light',
            "rounded-t-full"
          )}
          style={{
            width: size * 0.25,
            height: size * 0.5,
            transformOrigin: '50% 100%',
            transform: `rotate(${45 * i}deg) translateY(-${size/4}px)`
          }}
        />
      ))}
    </div>
  );
};

export default Flower;
