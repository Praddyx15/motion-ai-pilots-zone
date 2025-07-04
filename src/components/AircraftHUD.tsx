import React, { useState, useEffect } from 'react';
import { Home, Monitor, Brain, Database, User, Mail, Target, Navigation } from 'lucide-react';

const AircraftHUD = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isActivated, setIsActivated] = useState(false);
  const [hudAngle, setHudAngle] = useState(0);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, angle: 0, color: 'hsl(180, 55%, 36%)' },
    { id: 'simulator', label: 'SIMULATOR', icon: Monitor, angle: 60, color: 'hsl(200, 100%, 50%)' },
    { id: 'ai-tech', label: 'AI TECH', icon: Brain, angle: 120, color: 'hsl(120, 100%, 50%)' },
    { id: 'platform', label: 'PLATFORM', icon: Database, angle: 180, color: 'hsl(45, 100%, 50%)' },
    { id: 'about', label: 'ABOUT', icon: User, angle: 240, color: 'hsl(16, 100%, 50%)' },
    { id: 'contact', label: 'CONTACT', icon: Mail, angle: 300, color: 'hsl(200, 100%, 50%)' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'simulator', 'ai-tech', 'platform', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            const activeItem = navItems.find(item => item.id === section);
            if (activeItem) {
              setHudAngle(activeItem.angle);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsActivated(false);
    }
  };

  const getItemPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <>
      {/* HUD Activation Button */}
      <button
        onClick={() => setIsActivated(!isActivated)}
        className="fixed top-1/2 right-8 -translate-y-1/2 z-50 w-16 h-16 backdrop-blur-md bg-slate-900/80 border-2 border-teal-primary/60 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-teal-primary group"
        style={{
          boxShadow: isActivated 
            ? '0 0 40px hsl(180, 55%, 36%), inset 0 0 20px hsl(180, 55%, 36% / 0.3)' 
            : '0 0 20px hsl(180, 55%, 36% / 0.5)'
        }}
      >
        <div className="relative">
          <Target 
            className={`w-8 h-8 text-teal-primary transition-all duration-500 ${
              isActivated ? 'rotate-180 scale-110' : 'rotate-0'
            }`} 
          />
          {/* Scanning Animation */}
          <div className={`absolute inset-0 border-2 border-teal-primary/30 rounded-full transition-all duration-1000 ${
            isActivated ? 'scale-[3] opacity-0' : 'scale-100 opacity-100'
          }`}></div>
        </div>
      </button>

      {/* Aircraft HUD Interface */}
      {isActivated && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* HUD Background */}
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm pointer-events-auto"
               onClick={() => setIsActivated(false)}>
          </div>

          {/* Central HUD Display */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 w-80 h-80 pointer-events-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-2 border-teal-primary/40 rounded-full animate-spin" 
                 style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
            </div>
            
            {/* Middle Ring */}
            <div className="absolute inset-4 border border-electric-blue/30 rounded-full animate-spin" 
                 style={{ animationDuration: '15s' }}>
            </div>
            
            {/* Inner Ring */}
            <div className="absolute inset-8 border border-radar-green/20 rounded-full animate-pulse">
            </div>

            {/* Radar Sweep */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div 
                className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-primary via-electric-blue to-transparent origin-left transition-all duration-1000"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${hudAngle}deg)`,
                  opacity: 0.8
                }}
              ></div>
            </div>

            {/* Navigation Points */}
            {navItems.map((item, index) => {
              const position = getItemPosition(item.angle, 120);
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`absolute w-12 h-12 transition-all duration-500 group ${
                    isActive ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div 
                    className={`w-full h-full backdrop-blur-md rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'border-teal-primary bg-teal-primary/20 animate-pulse' 
                        : 'border-slate-400/50 bg-slate-900/60 hover:border-teal-primary/80'
                    }`}
                    style={{
                      boxShadow: isActive 
                        ? `0 0 20px ${item.color}, inset 0 0 10px ${item.color}20` 
                        : '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    <item.icon 
                      className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? 'text-teal-primary' : 'text-slate-300 group-hover:text-teal-primary'
                      }`} 
                    />
                  </div>
                  
                  {/* Navigation Label */}
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 backdrop-blur-md bg-slate-900/80 border border-teal-primary/30 rounded transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <span className="text-xs font-mono text-teal-primary whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Central Control */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
              <div className="w-full h-full backdrop-blur-md bg-slate-900/80 border-2 border-teal-primary rounded-full flex items-center justify-center">
                <Navigation className="w-8 h-8 text-teal-primary animate-pulse" />
              </div>
            </div>

            {/* Status Indicators */}
            <div className="absolute -bottom-16 left-0 right-0">
              <div className="backdrop-blur-md bg-slate-900/80 border border-teal-primary/30 rounded-lg p-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-radar-green rounded-full animate-pulse"></div>
                    <span className="text-radar-green">NAV ACTIVE</span>
                  </div>
                  <span className="text-electric-blue">{activeSection.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AircraftHUD;