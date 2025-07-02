import React, { useState, useEffect } from 'react';
import { Home, Monitor, Brain, Database, User, Mail, Menu, X } from 'lucide-react';

const SideNavigation = () => {
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
          const { offsetTop, offsetHeight } = element as HTMLElement;
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
      setIsExpanded(false); // Collapse after navigation
    }
  };

  return (
    <>
      {/* Side Toggle Button - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed top-1/2 right-6 -translate-y-1/2 z-50 w-14 h-14 glass-cockpit rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 animate-hud-glow border border-teal-primary/30"
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-teal-primary" />
        ) : (
          <Menu className="w-6 h-6 text-teal-primary" />
        )}
      </button>

      {/* Expanded Navigation Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 z-40 transform transition-transform duration-500 ease-in-out ${
        isExpanded ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="glass-cockpit h-full backdrop-blur-xl border-l border-teal-primary/20">
          {/* Header */}
          <div className="p-6 border-b border-teal-primary/20">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-radar-green rounded-full animate-pulse"></div>
              <span className="text-sm text-radar-green font-mono uppercase tracking-wider">Navigation HUD</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full glass-hud p-4 rounded-lg flex items-center space-x-4 transition-all duration-300 hover:scale-105 group ${
                  activeSection === item.id ? `border-2 border-${item.color} animate-hud-glow` : 'hover:border border-white/20'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <item.icon className={`w-6 h-6 text-${item.color}`} />
                <span className={`font-mono text-sm uppercase tracking-wider text-${item.color} group-hover:text-white transition-colors`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Footer Status */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="glass-hud p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-radar-green rounded-full animate-pulse"></div>
                  <span className="text-xs text-radar-green font-mono">SYSTEM ACTIVE</span>
                </div>
                <span className="text-xs text-electric-blue font-mono">60°MS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default SideNavigation;