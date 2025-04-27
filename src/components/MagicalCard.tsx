
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-pink-50 via-purple-50 to-purple-100">
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
          {/* Card Front (Envelope) */}
          <div className="absolute inset-0 backface-hidden rounded-lg bg-gradient-to-br from-love-light via-pink-200 to-love-medium border-2 border-white/50 overflow-hidden">
            <div className="envelope-texture absolute inset-0 opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-3xl font-bold text-white drop-shadow-lg mb-6 font-serif">
                Para Você
              </h3>
              <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 shadow-xl">
                <Heart size={42} animated={!isOpen} />
              </div>
              <p className="text-white/90 text-sm mb-8 italic">Toque para abrir</p>
              <Button 
                variant="outline" 
                className="bg-white/90 hover:bg-white transition-all duration-300 shadow-lg hover:scale-105"
                onClick={toggleCard}
              >
                {isOpen ? "Fechar" : "Abrir"}
              </Button>
            </div>
          </div>
          
          {/* Card Back (Inside of envelope) */}
          <div 
            className="absolute inset-0 rounded-lg backface-hidden rotate-y-180 bg-gradient-to-br from-love-paper to-pink-50 shadow-inner"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="paper-texture absolute inset-0 opacity-10"></div>
            <div className="absolute top-4 right-4">
              <Button 
                variant="outline"
                size="sm" 
                className="bg-white/90 hover:bg-white shadow-md hover:scale-105"
                onClick={toggleCard}
              >
                Fechar
              </Button>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-love-dark text-2xl font-medium mb-6 leading-relaxed font-serif">
                Querido(a),
              </p>
              <p className="text-love-dark text-lg mb-8 leading-relaxed">
                Em cada batida do meu coração,<br/>
                Em cada flor que desabrocha,<br/>
                Penso em você com carinho e gratidão.<br/>
                Você é especial e ilumina meus dias<br/>
                Com sua doce presença.
              </p>
              <p className="text-love-dark text-lg font-medium italic">
                Com amor ♥
              </p>
            </div>
          </div>
        </div>
        
        {/* Card Content (shown when card is open) */}
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
              {/* Rotating flowers background */}
              <div className="absolute w-48 h-48 animate-spin-slow opacity-70">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(80px)`,
                    }}
                  >
                    <Flower size={24} delay={i * 0.2} variant="detailed" color="text-flower-light" />
                  </div>
                ))}
              </div>
              
              {/* Center heart with glow */}
              <div className="relative">
                <GlowEffect size="lg" color="bg-love-light/50" animated={true} />
                <Heart size={100} animated={showContent} />
              </div>
              
              {/* Static surrounding flowers */}
              <div className="absolute top-[-45px] left-[10px] animate-float">
                <Flower size={32} delay={0.3} variant="detailed" />
              </div>
              <div className="absolute top-[30px] left-[-50px] animate-float" style={{ animationDelay: "0.5s" }}>
                <Flower size={28} color="text-flower-light" delay={0.5} variant="detailed" />
              </div>
              <div className="absolute bottom-[-40px] left-[15px] animate-float" style={{ animationDelay: "0.2s" }}>
                <Flower size={30} color="text-flower-light" delay={0.2} variant="detailed" />
              </div>
              <div className="absolute top-[-30px] right-[0px] animate-float" style={{ animationDelay: "0.7s" }}>
                <Flower size={26} delay={0.6} variant="detailed" />
              </div>
              <div className="absolute top-[40px] right-[-40px] animate-float" style={{ animationDelay: "0.4s" }}>
                <Flower size={28} color="text-flower-light" delay={0.4} variant="detailed" />
              </div>
              <div className="absolute bottom-[-30px] right-[10px] animate-float" style={{ animationDelay: "0.6s" }}>
                <Flower size={34} delay={0.7} variant="detailed" />
              </div>
              {/* Additional floating flowers */}
              <div className="absolute top-[-55px] right-[30px] animate-float" style={{ animationDelay: "0.8s" }}>
                <Flower size={22} delay={0.8} variant="detailed" />
              </div>
              <div className="absolute bottom-[-50px] right-[-30px] animate-float" style={{ animationDelay: "0.3s" }}>
                <Flower size={26} color="text-flower-light" delay={0.9} variant="detailed" />
              </div>
              <div className="absolute top-[-20px] left-[-60px] animate-float" style={{ animationDelay: "0.9s" }}>
                <Flower size={20} delay={1.0} variant="detailed" />
              </div>
            </div>
            
            {/* Message with enhanced styling */}
            <div className="mt-12 text-center max-w-xs">
              <p className="text-xl font-medium text-love-dark font-serif">
                De todo o meu coração para você
              </p>
            </div>
            
            {/* Enhanced particle effects */}
            <ParticleEffect 
              isActive={showContent} 
              color="bg-flower-light" 
              count={30}
              duration={4000}
            />
            <ParticleEffect 
              isActive={showContent} 
              color="bg-love-light" 
              count={30}
              duration={3500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicalCard;
