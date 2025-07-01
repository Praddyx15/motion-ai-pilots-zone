
import React, { useEffect } from 'react';
import SideNavigation from '../components/SideNavigation';
import HeroSection from '../components/HeroSection';
import SimulatorShowcase from '../components/SimulatorShowcase';
import AITechSection from '../components/AITechSection';
import PlatformSection from '../components/PlatformSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ScrollAnimations from '../components/ScrollAnimations';

const Index = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Advanced parallax and cinematic effects
    const handleCinematicScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      // Parallax background elements
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.2;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });

      // Depth-based transform for 3D elements
      const depthElements = document.querySelectorAll('.depth-layer-1, .depth-layer-2, .depth-layer-3');
      depthElements.forEach((element) => {
        const depth = element.classList.contains('depth-layer-1') ? 0.1 : 
                     element.classList.contains('depth-layer-2') ? 0.2 : 0.3;
        (element as HTMLElement).style.transform = `translateZ(${rate * depth}px)`;
      });
    };

    // Cinematic scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const cinematicObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all cinematic elements
    const cinematicElements = document.querySelectorAll(
      '.scroll-trigger, .scroll-slide-left, .scroll-slide-right, .scroll-scale-3d'
    );
    cinematicElements.forEach((el) => cinematicObserver.observe(el));

    window.addEventListener('scroll', handleCinematicScroll);

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleCinematicScroll);
      cinematicObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SideNavigation />
      <div className="ml-20"> {/* Offset for side navigation */}
        <HeroSection />
        <SimulatorShowcase />
        <AITechSection />
        <PlatformSection />
        <AboutSection />
        <ContactSection />
      </div>
      <ScrollAnimations />
    </div>
  );
};

export default Index;
