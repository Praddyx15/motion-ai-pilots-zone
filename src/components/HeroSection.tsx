
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="tech-grid h-full w-full"></div>
      </div>
      
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e9896]/20 via-transparent to-[#004443]/20"></div>
      
      {/* Light sweep animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12 animate-[lightSweep_8s_ease-in-out_infinite]"></div>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        <h1 
          className="heading-primary mb-8 text-white"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
        >
          World's First AI-Powered
          <br />
          <span className="text-accent-teal">Full Flight Simulator</span>
        </h1>
        
        <p 
          className="text-2xl md:text-3xl text-[#e0fdfa] font-light"
          data-aos="slide-up"
          data-aos-delay="600"
        >
          Designed in India, crafted for the world
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
