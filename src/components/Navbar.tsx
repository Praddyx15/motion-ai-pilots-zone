
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#002525]/90 backdrop-blur-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl font-montserrat">
            SIXTY MOTION
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-all duration-300 ${
                  activeSection === item.id
                    ? 'opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                    : 'opacity-0'
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
