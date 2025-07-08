
import React from 'react';

const SimulationSection = () => {
  return (
    <section className="section-padding relative bg-gradient-to-r from-[#2e9896]/10 to-[#004443]/10">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="heading-secondary mb-8 text-white fade-in">
            <span className="text-accent-teal">ADVANCED</span> SIMULATION
          </h2>
          
          <p className="body-text text-gray-300 fade-in text-lg leading-relaxed">
            Immerse yourself in our AI-powered simulation programs featuring intelligent instructors, dynamic scenario generation, and performance analytics. Practice various flight scenarios including weather conditions, system failures, and emergency situations in a safe, controlled environment with real-time feedback and personalized learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
