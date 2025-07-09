
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
    <section id="careers" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-6 text-white" data-aos="fade-up">
            <span className="text-accent-teal">JOIN OUR TEAM</span>
          </h2>
          
          <h3 className="heading-tertiary text-[#e0fdfa] mb-6" data-aos="fade-up" data-aos-delay="200">
            We are seeking passionate and skilled individuals to join our team and contribute to the advancement of aviation education.
          </h3>
          
          <div className="max-w-4xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="400">
            <h4 className="heading-tertiary text-accent-teal mb-2">
              Multiple Positions
            </h4>
            <p className="body-text text-[#e0fdfa] mb-4">
              Location: Gurugram
            </p>
            <p className="body-text text-[#e0fdfa] mb-8 leading-relaxed text-lg">
              As we continue to grow, we are looking to expand our team with passionate, driven, and talented individuals who are excited about shaping the future of aviation training with the following expertise:
            </p>
          </div>
            
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="glass-panel p-6 text-center hover-glow transition-all duration-500 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <position.icon className="w-6 h-6 text-white" />
                </div>
                <p className="body-small text-white font-medium">
                  {position.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
