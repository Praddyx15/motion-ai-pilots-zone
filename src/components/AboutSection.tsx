
import React, { useState, useEffect } from 'react';
import { Award, MapPin, Users, Calendar } from 'lucide-react';

const AboutSection = () => {
  const [timelineActive, setTimelineActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimelineActive(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElement = document.querySelector('.timeline-container');
    if (timelineElement) {
      observer.observe(timelineElement);
    }

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Sixty Motion Systems established in India',
      icon: Calendar,
      color: 'teal-primary'
    },
    {
      year: '2020',
      title: 'DGCA Certification',
      description: 'First Level D simulator certified by DGCA',
      icon: Award,
      color: 'electric-blue'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched edge-AI pilot analytics platform',
      icon: Users,
      color: 'radar-green'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'FAA certification and international partnerships',
      icon: MapPin,
      color: 'cockpit-amber'
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-electric-blue to-transparent opacity-30"></div>
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-teal-primary">OUR</span>{' '}
            <span className="text-white">JOURNEY</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8 text-slate-300">
            From a vision to revolutionize aviation training to becoming India's leading 
            <span className="text-electric-blue font-semibold"> flight simulator manufacturer</span>.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-primary via-electric-blue to-radar-green opacity-30"></div>
          
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative flex items-center mb-16 transition-all duration-1000 ${
                timelineActive ? 'opacity-100 translate-x-0' : 'opacity-0'
              } ${
                index % 2 === 0 ? 'translate-x-[-20px]' : 'translate-x-[20px]'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                <div className="glass-cockpit p-6 card-3d-hover">
                  <div className={`text-2xl font-bold text-${event.color} mb-2 font-mono`}>
                    {event.year}
                  </div>
                  <h3 className="heading-sm mb-3 text-white">{event.title}</h3>
                  <p className="body-md text-slate-300">{event.description}</p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 glass-hud rounded-full flex items-center justify-center animate-hud-glow">
                <div className={`w-12 h-12 bg-gradient-to-br from-${event.color} to-slate-700 rounded-full flex items-center justify-center`}>
                  {React.createElement(event.icon, { className: "w-6 h-6 text-white" })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 scroll-scale-3d">
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-teal-primary mb-2 font-mono">45+</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Global Installations</div>
          </div>
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-electric-blue mb-2 font-mono">2,500+</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Pilot Certifications</div>
          </div>
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-radar-green mb-2 font-mono">50,000+</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Training Hours</div>
          </div>
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-cockpit-amber mb-2 font-mono">15+</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
