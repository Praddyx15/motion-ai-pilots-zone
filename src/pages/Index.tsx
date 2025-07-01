
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import AITechSection from '../components/AITechSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
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

    // Parallax scroll effect
    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const rate = scrolled * -0.5 * (index + 1);
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleParallaxScroll);

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <AITechSection />
      <ContactSection />
      <Footer />
      <ScrollAnimations />
    </div>
  );
};

export default Index;
