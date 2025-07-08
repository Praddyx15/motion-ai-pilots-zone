
import React, { useEffect } from 'react';
import Hero3D from '../components/Hero3D';
import VisionSection from '../components/VisionSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import TrainingSection from '../components/TrainingSection';
import SimulatorsSection from '../components/SimulatorsSection';
import SimulationSection from '../components/SimulationSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CollaborationSection from '../components/CollaborationSection';
import JoinTeamSection from '../components/JoinTeamSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    console.log('Index component mounted');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
      );
      console.log('Found animated elements:', animatedElements.length);
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero3D />
      <VisionSection />
      <WhatWeDoSection />
      <TrainingSection />
      <SimulatorsSection />
      <SimulationSection />
      <WhyChooseSection />
      <CollaborationSection />
      <JoinTeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
