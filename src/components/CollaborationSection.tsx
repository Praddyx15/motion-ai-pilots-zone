
import React from 'react';
import { Plane, Users, Code, Shield } from 'lucide-react';

const CollaborationSection = () => {
  const partnerships = [
    {
      icon: Plane,
      title: 'Aircraft OEM & Simulator Integration'
    },
    {
      icon: Users,
      title: 'Airline & Pilot Training Solutions'
    },
    {
      icon: Code,
      title: 'Advanced Flight Simulation Software'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance & Certification Support'
    }
  ];

  return (
    <section className="section-padding relative bg-gradient-to-r from-[#004443]/20 to-[#2e9896]/20">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-6 text-white fade-in">
            <span className="text-accent-teal">COLLABORATION</span>
          </h2>
          
          <h3 className="heading-tertiary text-gray-300 mb-8 fade-in">
            Partnerships & Sales
          </h3>
          
          <p className="body-text text-gray-300 mb-8 fade-in text-lg leading-relaxed max-w-4xl mx-auto">
            Discover our strong network of industry collaborations with leading aviation organizations, aircraft manufacturers, defense organizations, technology providers, and educational institutions. We partner with Aircraft OEMs, airlines, and defense sector clients to deliver cutting-edge simulation solutions.
          </p>
          
          <p className="body-text text-accent-teal mb-12 fade-in text-lg font-medium">
            Interested in our AI-powered simulation products, technology collaboration, or partnership opportunities? Reach out to our team for simulation product partnerships and training program development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="glass-panel p-6 text-center hover-glow scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center">
                <partnership.icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="body-small text-white font-medium">
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
