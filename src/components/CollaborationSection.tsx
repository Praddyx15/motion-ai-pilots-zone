
import React from 'react';
import { Plane, Users, Code, Shield } from 'lucide-react';

const CollaborationSection = () => {
  const partnerships = [
    { icon: Plane, title: 'Aircraft OEM & Simulator Integration' },
    { icon: Users, title: 'Airline & Pilot Training Solutions' },
    { icon: Code, title: 'Advanced Flight Simulation Software' },
    { icon: Shield, title: 'Regulatory Compliance & Certification Support' }
  ];

  return (
    <section id="collaboration" className="section-padding bg-gradient-to-r from-[#004443]/20 to-[#2e9896]/20">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-6 text-white" data-aos="fade-up">
            <span className="text-accent-teal">COLLABORATION</span>
          </h2>
          
          <h3 className="heading-tertiary text-[#e0fdfa] mb-8" data-aos="fade-up" data-aos-delay="200">
            Partnerships & Sales
          </h3>
          
          <p className="body-text text-[#e0fdfa] mb-8 text-lg leading-relaxed max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Discover the strong network of industry collaborations and partnerships that has brought us where we are today. We are proud to work with leading aviation organizations, technology providers, and educational institutions to shape the future of aviation education.
          </p>
          
          <p className="body-text text-accent-teal mb-12 text-lg font-medium" data-aos="fade-up" data-aos-delay="600">
            Interested in our simulation products or exploring partnership opportunities? Reach out to our sales team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="glass-panel p-6 text-center hover-glow transition-all duration-500 group"
              data-aos="slide-left"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <partnership.icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="body-text text-white font-medium leading-snug">
                {partnership.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
