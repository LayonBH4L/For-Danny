
import React from 'react';
import { cn } from '@/lib/utils';

type GlowEffectProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  animated?: boolean;
};

const GlowEffect = ({
  className,
  size = 'md',
  color = 'bg-love-medium',
  animated = true,
}: GlowEffectProps) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  return (
    <div 
      className={cn(
        'absolute rounded-full blur-xl opacity-60 -z-10',
        sizeClasses[size],
        animated && 'animate-pulse-glow',
        color,
        className
      )}
    />
  );
};

export default GlowEffect;
