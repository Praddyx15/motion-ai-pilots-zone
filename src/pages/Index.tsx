
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Vision section with integrated 3D simulator */}
      <section id="vision" className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="slide-right" data-aos-duration="800">
              <h2 className="heading-secondary mb-8 text-white">
                <span className="text-accent-teal">OUR VISION</span>
              </h2>
              
              <p className="body-text text-[#e0fdfa] mb-6 text-xl leading-relaxed">
                To lead the world in creating cutting-edge simulation technologies that revolutionize training, safety, and performance across industries.
              </p>
              
              <p className="body-text text-accent-teal text-lg font-medium">
                Join us on this incredible journey as we pave the way for a new era of AI-powered Full Flight Simulators.
              </p>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <Interactive3DSimulator />
            </div>
          </div>
        </div>
      </section>
      
      <WhatWeDoSection />
      <WhyChooseSection />
      <CollaborationSection />
      <JoinTeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
