
import React from 'react';
import { Code, Plane, Eye, Palette, Database } from 'lucide-react';

const JoinTeamSection = () => {
  const positions = [
    { icon: Code, title: 'Software Engineering' },
    { icon: Plane, title: 'Aerospace Engineering' },
    { icon: Eye, title: 'AR/VR Development' },
    { icon: Palette, title: 'UI/UX Development' },
    { icon: Database, title: 'System Architecture' }
  ];

  return (
    <section className="section-padding relative">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-6 text-white fade-in">
            <span className="text-accent-teal">JOIN OUR TEAM</span>
          </h2>
          
          <h3 className="heading-tertiary text-gray-300 mb-8 fade-in">
            We are seeking passionate and skilled individuals to join our team and contribute to the advancement of aviation education.
          </h3>
          
          <p className="body-text text-gray-300 mb-8 fade-in text-lg leading-relaxed max-w-4xl mx-auto">
            Explore our current job openings and take the first step towards a rewarding career with Sixty Motion System Pvt Ltd in developing world's first AI-powered flight simulators.
          </p>
          
          <div className="glass-panel p-8 max-w-4xl mx-auto mb-8 fade-in">
            <h4 className="heading-tertiary text-accent-teal mb-4">
              Multiple Positions
            </h4>
            <p className="body-text text-gray-300 mb-6">
              Location: Gurugram
            </p>
            <p className="body-text text-gray-300 mb-8 leading-relaxed">
              As we continue to grow, we are looking to expand our team with passionate, driven, and talented individuals who are excited about developing AI/ML systems, simulation software, mixed reality applications, and scalable system architecture for aviation training:
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 text-center hover-glow scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center">
                    <position.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="body-small text-white font-medium">
                    {position.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
