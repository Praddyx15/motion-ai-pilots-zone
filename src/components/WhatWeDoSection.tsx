
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

        <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 p-8 lg:p-12 glass-panel hover-glow transition-all duration-700 group"
              data-aos="slide-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#2e9896] via-[#1a7a7a] to-[#004443] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:shadow-[0_0_30px_rgba(46,152,150,0.4)] transition-all duration-700 group-hover:scale-110">
                <service.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white group-hover:text-[#e0fdfa] transition-colors duration-500" />
              </div>
              
              <div className="flex-1">
                <h3 className="heading-tertiary text-white mb-6 font-montserrat group-hover:text-[#e0fdfa] transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="body-text text-[#e0fdfa] leading-relaxed lg:leading-loose text-lg lg:text-xl group-hover:text-white transition-colors duration-500">
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
