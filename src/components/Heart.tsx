
import React from 'react';
import { Heart as HeartIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlowEffect from './GlowEffect';

type HeartProps = {
  size?: number;
  className?: string;
  glowing?: boolean;
  animated?: boolean;
};

const Heart = ({
  size = 64,
  className,
  glowing = true,
  animated = true,
}: HeartProps) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {glowing && (
        <GlowEffect
          size="md"
          color="bg-love-medium/50"
          className="-z-10 absolute"
          animated={animated}
        />
      )}
      
      <HeartIcon
        size={size}
        fill="#ff719a"
        strokeWidth={1.5}
        className={cn(
          "text-love-dark",
          animated && "animate-beat",
          className
        )}
      />
    </div>
  );
};

export default Heart;
