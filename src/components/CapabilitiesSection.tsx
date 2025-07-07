
import React from 'react';
import { Brain, Zap, Plane } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI Instructors',
      description: 'Advanced artificial intelligence provides personalized training scenarios and real-time performance feedback for optimal learning outcomes.'
    },
    {
      icon: Zap,
      title: 'Full Motion',
      description: 'Six degrees of freedom motion platform delivers authentic flight sensations with precision hydraulic actuators and real-time force feedback.'
    },
    {
      icon: Plane,
      title: 'Rotary & Fixed Wing',
      description: 'Comprehensive training solutions for helicopters, aircraft, and specialized aviation platforms with customizable cockpit configurations.'
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6 text-white fade-in">
            Advanced <span className="text-accent-teal">Capabilities</span>
          </h2>
          <p className="body-text text-gray-300 max-w-2xl mx-auto fade-in">
            Revolutionary training technology that transforms pilot education through precision engineering and artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="glass-panel p-8 text-center hover-glow scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="heading-tertiary text-white mb-4">
                {capability.title}
              </h3>
              
              <p className="body-small text-gray-300 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
