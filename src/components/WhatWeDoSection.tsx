
import React from 'react';
import { Brain, Settings, Cpu } from 'lucide-react';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'Advanced AI-driven Flight Simulators',
      description: 'We design and manufacture high-fidelity, AI-powered Full Flight Simulators for Airbus and Boeing models.'
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Tailored simulation solutions to meet the specific needs of ATO\'s and airlines.'
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Technology',
      description: 'Integration of the latest technology to ensure the most realistic flight experience.'
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6 text-white fade-in">
            <span className="text-accent-teal">What We Do</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel p-8 text-center hover-glow scale-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="heading-tertiary text-white mb-4">
                {service.title}
              </h3>
              
              <p className="body-small text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
