
import React, { useEffect } from 'react';
import SideNavigation from '../components/SideNavigation';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import Enhanced3DSimulator from '../components/Enhanced3DSimulator';
import AITechSection from '../components/AITechSection';
import PlatformSection from '../components/PlatformSection';
import AboutSection from '../components/AboutSection';
import CockpitContactForm from '../components/CockpitContactForm';
import ScrollAnimations from '../components/ScrollAnimations';

const Index = () => {
  useEffect(() => {
    // Enhanced cinematic scroll behavior
    const handleCinematicScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2;
      
      // Advanced parallax effects
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.15;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px) rotateX(${scrolled * 0.02}deg)`;
      });

      // 3D depth layering
      const depthElements = document.querySelectorAll('.depth-layer-1, .depth-layer-2, .depth-layer-3');
      depthElements.forEach((element) => {
        const depth = element.classList.contains('depth-layer-1') ? 0.1 : 
                     element.classList.contains('depth-layer-2') ? 0.2 : 0.3;
        (element as HTMLElement).style.transform = `translateZ(${rate * depth}px) scale(${1 + depth * 0.1})`;
      });

      // Cinematic section transitions
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        
        if (progress > 0.1) {
          section.style.opacity = '1';
          section.style.transform = `translateY(0px) scale(1)`;
        } else {
          section.style.opacity = '0.7';
          section.style.transform = `translateY(50px) scale(0.98)`;
        }
      });
    };

    // Enhanced intersection observer for cinematic reveals
    const cinematicObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animations for child elements
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cinematic elements
    const cinematicElements = document.querySelectorAll(
      '.scroll-trigger, .scroll-slide-left, .scroll-slide-right, .scroll-scale-3d, .card-3d-hover'
    );
    cinematicElements.forEach((el) => cinematicObserver.observe(el));

    // Advanced smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          // Cinematic scroll with easing
          const startPosition = window.pageYOffset;
          const targetPosition = (element as HTMLElement).offsetTop;
          const distance = targetPosition - startPosition;
          const duration = 1500;
          let start: number | null = null;

          const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleCinematicScroll);
    handleCinematicScroll(); // Initial call

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleCinematicScroll);
      cinematicObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <SideNavigation />
      
      {/* Main Content with Cinematic Flow */}
      <div className="relative">
        <EnhancedHeroSection />
        <Enhanced3DSimulator />
        <AITechSection />
        <PlatformSection />
        <AboutSection />
        <CockpitContactForm />
      </div>
      
      <ScrollAnimations />
      
      {/* Global Cinematic Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/20"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-primary/20 to-transparent animate-data-flow"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-electric-blue/20 to-transparent animate-data-flow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Index;
