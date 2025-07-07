
import React from 'react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-[#004443] to-[#002e2d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="tech-grid h-full"></div>
      </div>
      
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <div className="slide-in-left">
            <h2 className="heading-secondary mb-6 text-white">
              Our <span className="text-accent-teal">Mission</span>
            </h2>
            
            <div className="space-y-6">
              <p className="body-text text-gray-300 leading-relaxed">
                We are pioneers in aviation simulation technology, dedicated to revolutionizing 
                pilot training through precision engineering and cutting-edge artificial intelligence.
              </p>
              
              <p className="body-text text-gray-300 leading-relaxed">
                Our advanced motion platforms and immersive training environments provide 
                unparalleled realism, enabling pilots to master complex flight scenarios 
                in a safe, controlled environment.
              </p>
              
              <div className="glass-panel p-6 border-l-4 border-accent-teal">
                <h3 className="heading-tertiary text-accent-teal mb-3">
                  Innovation Excellence
                </h3>
                <p className="body-small text-gray-300">
                  Certified by aviation authorities worldwide, our simulators meet 
                  the highest standards for professional pilot training and certification.
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Learn More
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="slide-in-right">
            <div className="relative">
              {/* Blueprint-style Visual */}
              <div className="glass-panel p-8 h-96 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {/* Simulated blueprint lines */}
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Aircraft outline */}
                    <path
                      d="M200 50 L350 150 L320 180 L200 160 L80 180 L50 150 L200 50 Z"
                      stroke="#2e9896"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    
                    {/* Cockpit */}
                    <circle
                      cx="200"
                      cy="120"
                      r="30"
                      stroke="#2e9896"
                      strokeWidth="1"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                    
                    {/* Technical lines */}
                    <line x1="50" y1="50" x2="350" y2="50" stroke="#004443" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="100" x2="350" y2="100" stroke="#004443" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="150" x2="350" y2="150" stroke="#004443" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="200" x2="350" y2="200" stroke="#004443" strokeWidth="1" opacity="0.5" />
                    
                    <line x1="100" y1="20" x2="100" y2="280" stroke="#004443" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="20" x2="200" y2="280" stroke="#004443" strokeWidth="1" opacity="0.5" />
                    <line x1="300" y1="20" x2="300" y2="280" stroke="#004443" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="heading-tertiary text-accent-teal mb-4">
                      Precision Engineering
                    </h4>
                    <p className="body-small text-gray-300">
                      Every component designed for maximum accuracy and reliability
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 glass-panel p-4">
                <div className="text-2xl font-bold text-accent-teal">99.7%</div>
                <div className="text-xs text-gray-300 uppercase">Accuracy</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-panel p-4">
                <div className="text-2xl font-bold text-accent-teal">50+</div>
                <div className="text-xs text-gray-300 uppercase">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
