
import React, { useEffect } from 'react';
import Hero3D from '../components/Hero3D';
import SimulatorSection from '../components/SimulatorSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    console.log('Index component mounted');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
      );
      console.log('Found animated elements:', animatedElements.length);
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero3D />

      {/* 3D Interactive Simulator Section */}
      <SimulatorSection />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* About & Mission Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
