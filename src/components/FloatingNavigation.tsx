
import React, { useState, useEffect } from 'react';
import { Home, Monitor, Brain, Database, User, Mail } from 'lucide-react';

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, color: 'teal-primary' },
    { id: 'simulator', label: 'SIMULATOR', icon: Monitor, color: 'electric-blue' },
    { id: 'ai-tech', label: 'AI TECH', icon: Brain, color: 'radar-green' },
    { id: 'platform', label: 'PLATFORM', icon: Database, color: 'cockpit-amber' },
    { id: 'about', label: 'ABOUT', icon: User, color: 'afterburner-orange' },
    { id: 'contact', label: 'CONTACT', icon: Mail, color: 'electric-blue' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'simulator', 'ai-tech', 'platform', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
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
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      {/* Central HUD Panel */}
      <div 
        className={`relative transition-all duration-700 ${
          isExpanded ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Outer Radar Ring */}
        <div className="absolute inset-0 w-80 h-80 border border-teal-primary/30 rounded-full animate-radar-sweep"></div>
        <div className="absolute inset-4 w-72 h-72 border border-electric-blue/40 rounded-full"></div>
        <div className="absolute inset-8 w-64 h-64 border border-radar-green/50 rounded-full"></div>

        {/* Central Command Hub */}
        <div className="relative w-80 h-80 glass-cockpit rounded-full flex items-center justify-center backdrop-blur-xl">
          <div className="w-24 h-24 bg-gradient-to-br from-teal-primary to-electric-blue rounded-full flex items-center justify-center animate-hud-glow">
            <span className="text-white font-bold text-xl font-mono">60</span>
          </div>

          {/* Navigation Items */}
          {navItems.map((item, index) => {
            const angle = (index * 60) - 90; // Start from top
            const radius = 120;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`absolute w-16 h-16 glass-hud rounded-full flex flex-col items-center justify-center transition-all duration-500 hover:scale-125 group cursor-pointer ${
                  activeSection === item.id ? `animate-hud-glow border-2 border-${item.color}` : 'hover:animate-hud-glow'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <item.icon className={`w-6 h-6 text-${item.color} mb-1`} />
                <span className={`text-xs font-mono text-${item.color} opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* HUD Status Indicators */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 glass-hud px-4 py-2 rounded">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-radar-green rounded-full animate-pulse"></div>
            <span className="text-xs text-radar-green font-mono">SYSTEM ACTIVE</span>
          </div>
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass-hud px-4 py-2 rounded">
          <span className="text-xs text-electric-blue font-mono">NAVIGATION HUD</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavigation;
