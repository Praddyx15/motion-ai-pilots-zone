
import React from 'react';

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="section-padding relative">
      <div className="container-width">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="heading-secondary content-spacing" data-aos="zoom-in" data-aos-duration="800">
            <span className="bg-gradient-to-r from-[#2e9896] to-[#004443] bg-clip-text text-transparent">
              WHY CHOOSE SIXTY MOTION
            </span>
          </h2>
          
          <h3 className="heading-tertiary text-accent content-spacing opacity-90" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            A Commitment to Excellence and Innovation
          </h3>
          
          <div 
            className="relative glass-panel p-12 lg:p-16"
            data-aos="fade-up" 
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-[lightSweep_8s_ease-in-out_infinite] rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#2e9896]/5 via-transparent to-transparent rounded-2xl"></div>
            
            <p className="body-text text-muted-foreground text-xl lg:text-2xl leading-relaxed lg:leading-loose relative z-10 font-light">
              Welcome to <span className="text-foreground font-semibold">Sixty Motion</span>, your trusted partner in the future of aviation training. We are a pioneering startup dedicated to manufacturing state-of-the-art <span className="text-accent font-semibold">Full-Flight Simulators infused with AI technology</span>. Our simulators are designed to revolutionize pilot training and enhance aviation safety, setting new standards in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
