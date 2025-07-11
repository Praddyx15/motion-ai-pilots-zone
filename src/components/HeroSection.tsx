
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
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#2e9896]/10 via-transparent to-[#004443]/15"></div>
      
      {/* Multiple light sweep animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-12 animate-[lightSweep_12s_ease-in-out_infinite]"></div>
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#2e9896]/40 to-transparent rotate-12 animate-[lightSweep_16s_ease-in-out_infinite] delay-4000"></div>
      </div>

      {/* Central content with better spacing */}
      <div className="text-center z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-8 lg:space-y-12">
          <h1 
            className="heading-primary leading-none"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            World's First AI-Powered
            <br />
            <span className="bg-gradient-to-r from-[#2e9896] to-[#004443] bg-clip-text text-transparent">
              Full Flight Simulator
            </span>
          </h1>
          
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
          
          <p 
            className="text-2xl md:text-4xl lg:text-5xl text-accent font-light font-poppins"
            data-aos="slide-up"
            data-aos-delay="800"
            data-aos-duration="1000"
            style={{ textShadow: '0 0 20px rgba(46,152,150,0.3)' }}
          >
            Designed in India, crafted for the world
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
