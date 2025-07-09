
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import EnhancedAviationBackground from '../components/EnhancedAviationBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import Interactive3DSimulator from '../components/Interactive3DSimulator';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CollaborationSection from '../components/CollaborationSection';
import JoinTeamSection from '../components/JoinTeamSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <EnhancedAviationBackground />
      <Navbar />
      <HeroSection />
      
      {/* Vision section with integrated 3D simulator */}
      <section id="vision" className="section-padding relative z-10">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div data-aos="slide-right" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="heading-secondary content-spacing text-white">
                <span className="text-accent-teal bg-gradient-to-r from-[#2e9896] to-[#e0fdfa] bg-clip-text text-transparent">
                  OUR VISION
                </span>
              </h2>
              
              <p className="body-text text-[#e0fdfa] content-spacing text-xl lg:text-2xl leading-relaxed lg:leading-loose font-light">
                To lead the world in creating cutting-edge simulation technologies that revolutionize training, safety, and performance across industries.
              </p>
              
              <p className="body-text text-accent-teal text-lg lg:text-xl font-medium leading-relaxed">
                Join us on this incredible journey as we pave the way for a new era of AI-powered Full Flight Simulators.
              </p>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="400">
              <Interactive3DSimulator />
            </div>
          </div>
        </div>
      </section>
      
      <div className="relative z-10 space-y-8">
        <WhatWeDoSection />
        <WhyChooseSection />
        <CollaborationSection />
        <JoinTeamSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
