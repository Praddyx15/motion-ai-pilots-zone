
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'vision', 'what-we-do', 'why-choose', 'collaboration', 'careers', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
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

  const navItems = [
    { id: 'hero', label: 'Technology' },
    { id: 'what-we-do', label: 'Products' },
    { id: 'why-choose', label: 'About' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#002525]/95 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl font-montserrat tracking-wider">
            <span className="bg-gradient-to-r from-white via-[#e0fdfa] to-[#2e9896] bg-clip-text text-transparent">
              SIXTY MOTION
            </span>
          </div>
          
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 font-medium transition-all duration-400 font-montserrat tracking-wide ${
                  activeSection === item.id
                    ? 'text-white transform scale-105'
                    : 'text-gray-300 hover:text-white hover:transform hover:scale-105'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-400 ${
                  activeSection === item.id
                    ? 'opacity-100 shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                    : 'opacity-0'
                }`} />
                <div className={`absolute inset-0 bg-white/5 rounded-lg transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
