import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Heart from './Heart';
import Flower from './Flower';
import ParticleEffect from './ParticleEffect';
import GlowEffect from './GlowEffect';

const MagicalCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const toggleCard = () => {
    if (isOpen) {
      setShowContent(false);
      setTimeout(() => setIsOpen(false), 200);
    } else {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 500);
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node) && isOpen) {
        toggleCard();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="perspective-container relative w-full max-w-md mx-auto">
        {/* Card Container */}
        <div 
          ref={cardRef}
          className={cn(
            "preserve-3d relative w-full aspect-[3/4] rounded-lg shadow-2xl transition-transform duration-1500",
            isOpen ? "animate-card-open" : "animate-card-close"
          )}
          style={{
            transformOrigin: 'center left',
            animationFillMode: 'forwards'
          }}
        >
          {/* Card Front */}
          <div className="absolute inset-0 backface-hidden rounded-lg bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 border-2 border-white/50 overflow-hidden">
            <div className="envelope-texture absolute inset-0 opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-3xl font-bold text-purple-900 drop-shadow-lg mb-6 font-serif">
                Para Você
              </h3>
              <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 shadow-xl">
                <Heart size={42} animated={!isOpen} />
              </div>
              <p className="text-purple-900/90 text-sm mb-8 italic">Toque para abrir</p>
              <Button 
                variant="outline" 
                className="bg-white/90 hover:bg-white text-purple-800 transition-all duration-300 shadow-lg hover:scale-105"
                onClick={toggleCard}
              >
                {isOpen ? "Fechar" : "Abrir"}
              </Button>
            </div>
          </div>
          
          {/* Card Back */}
          <div 
            className="absolute inset-0 rounded-lg backface-hidden rotate-y-180 bg-gradient-to-br from-purple-100 to-pink-50 shadow-inner"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="paper-texture absolute inset-0 opacity-10"></div>
            <div className="absolute top-4 right-4">
              <Button 
                variant="outline"
                size="sm" 
                className="bg-white/90 hover:bg-white text-purple-800 shadow-md hover:scale-105"
                onClick={toggleCard}
              >
                Fechar
              </Button>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-purple-900 text-2xl font-medium mb-6 leading-relaxed font-serif">
                Querido(a),
              </p>
              <p className="text-purple-800 text-lg mb-8 leading-relaxed">
                Em cada batida do meu coração,<br/>
                Em cada flor que desabrocha,<br/>
                Penso em você com carinho e gratidão.<br/>
                Você é especial e ilumina meus dias<br/>
                Com sua doce presença.
              </p>
              <p className="text-purple-900 text-lg font-medium italic">
                Com amor ♥
              </p>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div 
          ref={contentRef}
          className={cn(
            "absolute top-0 left-0 w-full h-full flex items-center justify-center",
            !showContent && "opacity-0 pointer-events-none",
            showContent && "opacity-100 animate-fade-up"
          )}
          style={{ 
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* Heart and flowers container */}
            <div className="relative flex items-center justify-center">
              {/* Rotating flowers background - outer ring */}
              <div className="absolute w-56 h-56 animate-spin-slow opacity-70">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-particle-up"
                    style={{
                      transform: `rotate(${i * 30}deg) translateX(100px)`,
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: '4s'
                    }}
                  >
                    <Flower 
                      size={24} 
                      variant={i % 3 === 0 ? 'star' : i % 2 === 0 ? 'round' : 'detailed'}
                      color={i % 2 === 0 ? 'text-flower-light' : 'text-flower-medium'} 
                    />
                  </div>
                ))}
              </div>
              
              {/* Inner rotating ring */}
              {/*
              <div className="absolute w-32 h-32 animate-spin-slow opacity-80" style={{ animationDirection: 'reverse' }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(50px)`,
                    }}
                  >
                    <Flower 
                      size={20} 
                      delay={i * 0.2} 
                      variant={i % 2 === 0 ? 'round' : 'star'} 
                      color="text-flower-dark" 
                    />
                  </div>
                ))}
              </div>
              */}
              
              {/* Center heart with glow */}
              <div className="relative z-10">
                <GlowEffect size="lg" color="bg-purple-300/50" animated={true} />
                <Heart size={100} animated={showContent} />
              </div>
              
              {/* Floating flowers - now with upward animation */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-particle-up"
                  style={{
                    bottom: '0',
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    opacity: 0.7 + Math.random() * 0.3
                  }}
                >
                  <Flower
                    size={20 + Math.random() * 20}
                    variant={['detailed', 'star', 'round'][Math.floor(Math.random() * 3)] as 'detailed' | 'star' | 'round'}
                    color={['text-flower-light', 'text-flower-medium', 'text-flower-dark'][Math.floor(Math.random() * 3)]}
                  />
                </div>
              ))}
            </div>
            
            {/* Message with enhanced styling */}
            <div className="mt-12 text-center max-w-xs z-10">
              <p className="text-xl font-medium text-purple-800 font-serif">
                De todo o meu coração para você
              </p>
            </div>
            
            {/* Enhanced particle effects */}
            <ParticleEffect 
              isActive={showContent} 
              color="bg-purple-200" 
              count={40}
              duration={4000}
            />
            <ParticleEffect 
              isActive={showContent} 
              color="bg-pink-200" 
              count={40}
              duration={3500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicalCard;
