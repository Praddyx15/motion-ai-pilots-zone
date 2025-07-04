
import React, { useState, useEffect } from 'react';
import { Award, MapPin, Users, Calendar, Zap, Target } from 'lucide-react';

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
      { threshold: 0.2 }
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
      title: 'COMPANY FOUNDED',
      description: 'Sixty Motion Systems established with vision for advanced aviation training',
      icon: Calendar,
      color: 'electric-blue'
    },
    {
      year: '2020',
      title: 'DGCA CERTIFICATION',
      description: 'First Level D flight simulator certified by DGCA India',
      icon: Award,
      color: 'radar-green'
    },
    {
      year: '2022',
      title: 'AI INTEGRATION',
      description: 'Launched edge-AI pilot analytics and training optimization platform',
      icon: Zap,
      color: 'cockpit-amber'
    },
    {
      year: '2024',
      title: 'GLOBAL EXPANSION',
      description: 'FAA certification achieved with international partnership network',
      icon: Target,
      color: 'electric-blue'
    }
  ];

  const companyStats = [
    { value: '45+', label: 'GLOBAL INSTALLATIONS', color: 'electric-blue' },
    { value: '2,500+', label: 'PILOT CERTIFICATIONS', color: 'radar-green' },
    { value: '50,000+', label: 'TRAINING HOURS', color: 'cockpit-amber' },
    { value: '15+', label: 'COUNTRIES SERVED', color: 'electric-blue' }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Section Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-radar-green/30 to-transparent"></div>
      </div>

      <div className="container-pro relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="heading-xl mb-6">
            <span className="text-electric-blue">OUR</span>{' '}
            <span className="text-white">JOURNEY</span>
          </h2>
          <p className="body-lg max-w-4xl mx-auto mb-8 text-white/80">
            From pioneering vision to industry leadership in aviation training technology.
            <br />
            <span className="text-electric-blue font-semibold">Certified. Proven. Trusted globally.</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-electric-blue to-radar-green mx-auto"></div>
        </div>

        {/* Professional Timeline */}
        <div className="timeline-container relative mb-24">
          {/* Central Timeline Axis */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-electric-blue via-radar-green to-cockpit-amber opacity-60"></div>
          
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative flex items-center mb-20 last:mb-0 transition-all duration-1000 ${
                timelineActive ? 'opacity-100 translate-x-0' : 'opacity-0'
              } ${
                index % 2 === 0 ? 'translate-x-[-30px]' : 'translate-x-[30px]'
              }`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {/* Timeline Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left order-2'}`}>
                <div className="glass-cockpit p-8 card-pro-hover stagger-child">
                  <div className={`text-3xl font-bold text-${event.color} mb-3 heading-md`}>
                    {event.year}
                  </div>
                  <h3 className="heading-sm mb-4 text-white">{event.title}</h3>
                  <p className="body-md text-white/70 leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-20 h-20 glass-hud rounded-full flex items-center justify-center animate-hud-glow z-10">
                <div className={`w-16 h-16 bg-gradient-to-br from-${event.color} to-${event.color}/60 rounded-full flex items-center justify-center border-2 border-${event.color}/40`}>
                  {React.createElement(event.icon, { className: "w-8 h-8 text-white" })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Performance Metrics */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="heading-lg mb-4">
              <span className="text-radar-green">PERFORMANCE</span>{' '}
              <span className="text-white">METRICS</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-radar-green to-electric-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="glass-cockpit p-8 text-center card-pro-hover stagger-child">
                <div className={`text-5xl font-bold text-${stat.color} mb-3 heading-xl`}>
                  {stat.value}
                </div>
                <div className="tech-mono text-white/60 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
                <div className={`mt-4 w-full h-px bg-gradient-to-r from-transparent via-${stat.color}/40 to-transparent`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center scroll-reveal">
          <div className="glass-cockpit p-12 max-w-4xl mx-auto">
            <h3 className="heading-lg mb-6">
              <span className="text-cockpit-amber">MISSION</span>{' '}
              <span className="text-white">STATEMENT</span>
            </h3>
            <p className="body-lg text-white/80 leading-relaxed mb-6">
              To revolutionize aviation training through cutting-edge simulation technology, 
              artificial intelligence, and uncompromising safety standards.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-system-pulse"></div>
              <span className="tech-mono text-electric-blue">PRECISION ENGINEERING</span>
              <div className="w-2 h-2 bg-radar-green rounded-full animate-system-pulse"></div>
              <span className="tech-mono text-radar-green">ADVANCED AI</span>
              <div className="w-2 h-2 bg-cockpit-amber rounded-full animate-system-pulse"></div>
              <span className="tech-mono text-cockpit-amber">GLOBAL CERTIFICATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
