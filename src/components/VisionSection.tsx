
import React from 'react';

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="slide-right" data-aos-duration="800">
            <h2 className="heading-secondary mb-8">
              <span className="text-accent">OUR VISION</span>
            </h2>
            
            <p className="body-text text-muted-foreground mb-6 text-xl leading-relaxed">
              To lead the world in creating cutting-edge simulation technologies that revolutionize training, safety, and performance across industries.
            </p>
            
            <p className="body-text text-accent text-lg font-medium">
              Join us on this incredible journey as we pave the way for a new era of AI-powered Full Flight Simulators.
            </p>
          </div>
          
          {/* 3D Simulator will be placed here by SimulatorSection component */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="aspect-square bg-muted/30 rounded-lg border border-accent/30 flex items-center justify-center">
              <p className="text-accent">Interactive 3D Simulator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
