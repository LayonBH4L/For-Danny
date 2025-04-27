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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
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
          <div className="absolute inset-0 backface-hidden rounded-lg bg-gradient-to-br from-love-light to-love-medium border-2 border-white/50 overflow-hidden">
            <div className="envelope-texture absolute inset-0 opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold text-white drop-shadow-md mb-6">
                Para Você
              </h3>
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6">
                <Heart size={36} animated={!isOpen} />
              </div>
              <p className="text-white/90 text-sm mb-8">Toque para abrir</p>
              <Button 
                variant="outline" 
                className="bg-white/80 hover:bg-white transition-all duration-300"
                onClick={toggleCard}
              >
                {isOpen ? "Fechar" : "Abrir"}
              </Button>
            </div>
          </div>
          
          {/* Card Back (Inside of envelope) */}
          <div 
            className="absolute inset-0 rounded-lg backface-hidden rotate-y-180 bg-love-paper shadow-inner"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="paper-texture absolute inset-0 opacity-10"></div>
            <div className="absolute top-4 right-4">
              <Button 
                variant="outline"
                size="sm" 
                className="bg-white/80 hover:bg-white"
                onClick={toggleCard}
              >
                Fechar
              </Button>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-love-dark text-lg font-medium mb-4 leading-relaxed">
                Querido(a),
              </p>
              <p className="text-love-dark text-md mb-6 leading-relaxed">
                Em cada batida do meu coração,<br/>
                Em cada flor que desabrocha,<br/>
                Penso em você com carinho e gratidão.<br/>
                Você é especial e ilumina meus dias<br/>
                Com sua doce presença.
              </p>
              <p className="text-love-dark text-md font-medium">
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
              {/* Center heart */}
              <Heart size={100} animated={showContent} />
              
              {/* Surrounding flowers - Adicionando mais flores */}
              <div className="absolute top-[-35px] left-[10px]">
                <Flower size={30} delay={0.3} variant="detailed" />
              </div>
              <div className="absolute top-[20px] left-[-40px]">
                <Flower size={24} color="text-flower-light" delay={0.5} variant="detailed" />
              </div>
              <div className="absolute bottom-[-30px] left-[15px]">
                <Flower size={28} color="text-flower-light" delay={0.2} variant="detailed" />
              </div>
              <div className="absolute top-[-20px] right-[0px]">
                <Flower size={22} delay={0.6} variant="detailed" />
              </div>
              <div className="absolute top-[30px] right-[-30px]">
                <Flower size={26} color="text-flower-light" delay={0.4} variant="detailed" />
              </div>
              <div className="absolute bottom-[-20px] right-[10px]">
                <Flower size={32} delay={0.7} variant="detailed" />
              </div>
              {/* Novas flores adicionadas */}
              <div className="absolute top-[-45px] right-[20px]">
                <Flower size={20} delay={0.8} variant="detailed" />
              </div>
              <div className="absolute bottom-[-40px] right-[-20px]">
                <Flower size={25} color="text-flower-light" delay={0.9} variant="detailed" />
              </div>
              <div className="absolute top-[0px] left-[-50px]">
                <Flower size={18} delay={1.0} variant="detailed" />
              </div>
            </div>
            
            {/* Message */}
            <div className="mt-8 text-center max-w-xs">
              <p className="text-lg font-medium text-love-dark">
                De todo o meu coração para você
              </p>
            </div>
            
            {/* Particles */}
            <ParticleEffect 
              isActive={showContent} 
              color="bg-flower-light" 
              count={25}
              duration={3500}
            />
            <ParticleEffect 
              isActive={showContent} 
              color="bg-love-light" 
              count={25}
              duration={3000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicalCard;
