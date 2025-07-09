
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
    <section id="what-we-do" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6 text-white" data-aos="fade-up">
            <span className="text-accent-teal">What We Do</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-8 glass-panel hover-glow transition-all duration-500"
              data-aos="slide-up"
              data-aos-delay={index * 200}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center flex-shrink-0">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="heading-tertiary text-white mb-4 font-montserrat">
                  {service.title}
                </h3>
                
                <p className="body-text text-[#e0fdfa] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
