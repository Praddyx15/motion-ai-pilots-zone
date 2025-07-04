
import React, { useEffect } from 'react';
import AircraftNavWheel from '../components/AircraftNavWheel';
import EnhancedAviationBackground from '../components/EnhancedAviationBackground';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import Enhanced3DSimulator from '../components/Enhanced3DSimulator';
import AITechSection from '../components/AITechSection';
import PlatformSection from '../components/PlatformSection';
import AboutSection from '../components/AboutSection';
import CockpitContactForm from '../components/CockpitContactForm';
import ScrollAnimations from '../components/ScrollAnimations';

const Index = () => {
  useEffect(() => {
    // Professional scroll-linked animation system
    const handleProfessionalScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.1;
      
      // Advanced parallax with professional easing
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.08;
        const rotation = scrolled * 0.01;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px) rotateX(${rotation}deg)`;
      });

      // Professional section transitions with stagger
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.8)));
        
        if (progress > 0.1) {
          section.style.opacity = '1';
          section.style.transform = `translateY(0px) rotateX(0deg) scale(1)`;
        } else {
          section.style.opacity = '0.8';
          section.style.transform = `translateY(30px) rotateX(2deg) scale(0.98)`;
        }
      });
    };

    // Enhanced intersection observer for professional reveals
    const professionalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Staggered child animations
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 150);
          });
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });

    // Professional smooth scrolling with easing
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const startPosition = window.pageYOffset;
          const targetPosition = (element as HTMLElement).offsetTop - 80;
          const distance = targetPosition - startPosition;
          const duration = Math.abs(distance) / 2 + 800;
          let start: number | null = null;

          const professionalEasing = (t: number): number => {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
          };

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = professionalEasing(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
        }
      }
    };

    // Observe elements for professional animations
    const animatedElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-slide-left, .scroll-slide-right, .card-pro-hover'
    );
    animatedElements.forEach((el) => professionalObserver.observe(el));

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleProfessionalScroll);
    handleProfessionalScroll();

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleProfessionalScroll);
      professionalObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <EnhancedAviationBackground />
      <AircraftNavWheel />
      
      {/* Main Content with Professional Layout */}
      <div className="relative z-10">
        <section id="home" className="section-spacing">
          <EnhancedHeroSection />
        </section>
        
        <section id="simulator" className="section-spacing">
          <Enhanced3DSimulator />
        </section>
        
        <section id="ai-tech" className="section-spacing">
          <AITechSection />
        </section>
        
        <section id="platform" className="section-spacing">
          <PlatformSection />
        </section>
        
        <section id="about" className="section-spacing">
          <AboutSection />
        </section>
        
        <section id="contact" className="section-spacing">
          <CockpitContactForm />
        </section>
      </div>
      
      <ScrollAnimations />
    </div>
  );
};

export default Index;
