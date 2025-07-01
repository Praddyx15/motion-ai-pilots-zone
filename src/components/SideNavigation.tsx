
import React, { useState, useEffect } from 'react';
import { Home, Monitor, Brain, Globe, User, Mail } from 'lucide-react';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'simulator', label: 'SIMULATOR', icon: Monitor },
    { id: 'ai-tech', label: 'AI TECH', icon: Brain },
    { id: 'platform', label: 'PLATFORM', icon: Globe },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'contact', label: 'CONTACT', icon: Mail }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 z-50 glass-cockpit border-r border-teal-primary/30">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-teal-primary/30">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-primary to-electric-blue rounded-lg flex items-center justify-center animate-hud-glow">
            <span className="text-white font-bold text-lg font-mono">60</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center space-y-8 p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-12 h-12 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-teal-primary text-white animate-hud-glow'
                  : 'glass-hud text-slate-400 hover:text-teal-primary hover:bg-teal-primary/20'
              }`}
            >
              <item.icon className="w-6 h-6 mx-auto" />
              
              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="glass-hud px-3 py-2 rounded-lg whitespace-nowrap">
                  <span className="text-sm font-medium text-white tech-mono">
                    {item.label}
                  </span>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 rotate-45 border-l border-b border-teal-primary/30"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 bg-gradient-to-b from-transparent via-teal-primary to-transparent h-32 animate-data-flow"></div>
      </div>
    </nav>
  );
};

export default SideNavigation;
