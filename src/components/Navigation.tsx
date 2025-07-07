
import React, { useState, useEffect } from 'react';
import { Home, Monitor, Cpu, Database, User, Mail } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'simulator', label: 'Simulator', icon: Monitor },
    { id: 'ai-tech', label: 'AI Tech', icon: Cpu },
    { id: 'platform', label: 'Platform', icon: Database },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation Toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-6 right-6 z-50 glass-panel p-3 hover-lift"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className={`w-full h-0.5 bg-blue-400 transition-all duration-300 ${isVisible ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-full h-0.5 bg-blue-400 transition-all duration-300 ${isVisible ? 'opacity-0' : ''}`}></div>
          <div className={`w-full h-0.5 bg-blue-400 transition-all duration-300 ${isVisible ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </button>

      {/* Navigation Menu */}
      <nav className={`fixed top-0 right-0 h-full w-80 glass-panel z-40 transform transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 pt-20">
          <h2 className="heading-tertiary mb-8 text-primary-blue">Navigation</h2>
          
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsVisible(false);
                  }}
                  className={`flex items-center space-x-4 w-full p-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-blue-600/20 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-500"
          onClick={() => setIsVisible(false)}
        />
      )}
    </>
  );
};

export default Navigation;
