
import React from 'react';

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="section-padding relative">
      <div className="container-width">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="heading-secondary mb-6 text-white" data-aos="zoom-in">
            <span className="text-accent-teal">WHY CHOOSE SIXTY MOTION</span>
          </h2>
          
          <h3 className="heading-tertiary text-[#e0fdfa] mb-8" data-aos="fade-up" data-aos-delay="200">
            A Commitment to Excellence and Innovation
          </h3>
          
          <div 
            className="relative"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            {/* Light sweep background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[lightSweep_6s_ease-in-out_infinite] rounded-lg"></div>
            
            <p className="body-text text-[#e0fdfa] text-xl leading-relaxed relative z-10">
              Welcome to Sixty Motion, your trusted partner in the future of aviation training. We are a pioneering startup dedicated to manufacturing state-of-the-art Full-Flight Simulators infused with AI technology. Our simulators are designed to revolutionize pilot training and enhance aviation safety, setting new standards in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
