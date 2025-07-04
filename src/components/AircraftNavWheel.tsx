
import React, { useState, useEffect } from 'react';
import { Home, Monitor, Brain, Database, User, Mail, Target, Navigation, Zap } from 'lucide-react';

const AircraftNavWheel = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [wheelRotation, setWheelRotation] = useState(0);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, angle: 0, color: '#00AEEF' },
    { id: 'simulator', label: 'SIMULATOR', icon: Monitor, angle: 60, color: '#42FF90' },
    { id: 'ai-tech', label: 'AI TECH', icon: Brain, angle: 120, color: '#FFB000' },
    { id: 'platform', label: 'PLATFORM', icon: Database, angle: 180, color: '#00AEEF' },
    { id: 'about', label: 'ABOUT', icon: User, angle: 240, color: '#42FF90' },
    { id: 'contact', label: 'CONTACT', icon: Mail, angle: 300, color: '#FFB000' }
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
            setCurrentSection(section);
            const activeItem = navItems.find(item => item.id === section);
            if (activeItem) {
              setWheelRotation(activeItem.angle);
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
      setIsActive(false);
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
      {/* Activation Button */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="fixed top-1/2 right-8 -translate-y-1/2 z-50 group"
        style={{
          transform: 'translateY(-50%)',
        }}
      >
        <div className="relative">
          {/* Main Button */}
          <div 
            className={`w-16 h-16 glass-hud rounded-full flex items-center justify-center transition-all duration-500 ${
              isActive ? 'scale-110' : 'hover:scale-105'
            }`}
            style={{
              boxShadow: isActive 
                ? '0 0 40px rgba(0, 174, 239, 0.6), inset 0 0 20px rgba(0, 174, 239, 0.2)' 
                : '0 0 20px rgba(0, 174, 239, 0.3)'
            }}
          >
            <Target 
              className={`w-8 h-8 text-electric-blue transition-all duration-500 ${
                isActive ? 'rotate-180 scale-110' : 'rotate-0'
              }`} 
            />
          </div>

          {/* Scanning Rings */}
          <div className={`absolute inset-0 border border-electric-blue/30 rounded-full transition-all duration-1000 ${
            isActive ? 'scale-[2.5] opacity-0' : 'scale-100 opacity-100'
          }`}></div>
          <div className={`absolute inset-2 border border-radar-green/20 rounded-full transition-all duration-1000 ${
            isActive ? 'scale-[2] opacity-0' : 'scale-100 opacity-100'
          }`} style={{ animationDelay: '0.2s' }}></div>
        </div>
      </button>

      {/* Navigation Wheel */}
      {isActive && (
        <div className="fixed inset-0 z-40">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsActive(false)}
          ></div>

          {/* Navigation Wheel Container */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 w-96 h-96">
            {/* Outer Ring with Grid */}
            <div className="absolute inset-0 border border-electric-blue/20 rounded-full">
              <svg className="w-full h-full" viewBox="0 0 384 384">
                {/* Grid Lines */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                  <line
                    key={angle}
                    x1="192"
                    y1="20"
                    x2="192"
                    y2="364"
                    stroke="rgba(0, 174, 239, 0.1)"
                    strokeWidth="1"
                    transform={`rotate(${angle} 192 192)`}
                  />
                ))}
                
                {/* Concentric Circles */}
                <circle cx="192" cy="192" r="140" fill="none" stroke="rgba(0, 174, 239, 0.1)" strokeWidth="1" />
                <circle cx="192" cy="192" r="100" fill="none" stroke="rgba(66, 255, 144, 0.1)" strokeWidth="1" />
                <circle cx="192" cy="192" r="60" fill="none" stroke="rgba(255, 176, 0, 0.1)" strokeWidth="1" />
              </svg>
            </div>

            {/* Radar Sweep */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div 
                className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-electric-blue via-radar-green to-transparent origin-left"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${wheelRotation}deg)`,
                  animation: 'radarSweep 4s linear infinite'
                }}
              ></div>
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => {
              const position = getItemPosition(item.angle, 140);
              const isCurrentSection = currentSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`absolute w-14 h-14 transition-all duration-500 group ${
                    isCurrentSection ? 'scale-125 z-10' : 'scale-100 hover:scale-110'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div 
                    className={`w-full h-full glass-hud rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isCurrentSection 
                        ? 'border-electric-blue animate-hud-glow' 
                        : 'border-white/20 hover:border-electric-blue/60'
                    }`}
                    style={{
                      backgroundColor: isCurrentSection ? `${item.color}20` : 'rgba(2, 15, 31, 0.6)',
                      boxShadow: isCurrentSection 
                        ? `0 0 25px ${item.color}40, inset 0 0 15px ${item.color}20` 
                        : '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    <item.icon 
                      className={`w-6 h-6 transition-all duration-300 ${
                        isCurrentSection 
                          ? 'text-white' 
                          : 'text-electric-blue/70 group-hover:text-electric-blue'
                      }`} 
                    />
                  </div>
                  
                  {/* Label */}
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 glass-hud rounded text-center transition-all duration-300 ${
                      isCurrentSection ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <span className="tech-mono text-electric-blue whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
              <div className="w-full h-full glass-cockpit rounded-full border-2 border-electric-blue flex items-center justify-center animate-system-pulse">
                <Navigation className="w-10 h-10 text-electric-blue" />
              </div>
            </div>

            {/* Status Display */}
            <div className="absolute -bottom-20 left-0 right-0">
              <div className="glass-cockpit p-4 rounded-lg">
                <div className="flex items-center justify-between tech-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-radar-green rounded-full animate-system-pulse"></div>
                    <span className="text-radar-green">NAV ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-electric-blue" />
                    <span className="text-electric-blue">{currentSection.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AircraftNavWheel;
