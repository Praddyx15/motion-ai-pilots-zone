
import React, { useEffect, useState } from 'react';
import { Cpu, Eye, Zap, Layers, Activity, Database } from 'lucide-react';

const SimulatorShowcase = () => {
  const [activeSystem, setActiveSystem] = useState(0);
  const [metricsActive, setMetricsActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSystem(prev => (prev + 1) % 3);
    }, 4000);

    const metricsTimer = setTimeout(() => {
      setMetricsActive(true);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(metricsTimer);
    };
  }, []);

  const simulatorSystems = [
    {
      id: 'motion',
      title: 'Level D Motion System',
      subtitle: '6 Degrees of Freedom Platform',
      description: 'Precision hydraulic motion base with ±35° pitch/roll capability and real-time force feedback simulation.',
      icon: Layers,
      color: 'teal-primary',
      specs: {
        'Motion Range': '±35°',
        'Update Rate': '1000Hz',
        'Payload': '2500kg',
        'Precision': '<0.1°'
      },
      visual: 'motion-base'
    },
    {
      id: 'ai',
      title: 'Edge AI Processing',
      subtitle: 'Neural Performance Analytics',
      description: 'Real-time pilot performance analysis using edge computing with sub-50ms latency for instant feedback.',
      icon: Cpu,
      color: 'electric-blue',
      specs: {
        'Inference Time': '<50ms',
        'Accuracy': '99.7%',
        'Data Points': '100+',
        'Processing': 'Edge'
      },
      visual: 'ai-chip'
    },
    {
      id: 'visual',
      title: 'Immersive Visual System',
      subtitle: '4K Spherical Display Array',
      description: 'High-resolution visual system with 180° field of view and real-time weather simulation.',
      icon: Eye,
      color: 'radar-green',
      specs: {
        'Resolution': '4K UHD',
        'Field of View': '180°',
        'Refresh Rate': '120Hz',
        'Latency': '<20ms'
      },
      visual: 'visual-dome'
    }
  ];

  const performanceMetrics = [
    { label: 'Training Hours', value: '50,000+', icon: Activity },
    { label: 'Pilot Certifications', value: '2,500+', icon: Zap },
    { label: 'AI Accuracy', value: '99.7%', icon: Cpu },
    { label: 'Global Installations', value: '45+', icon: Database }
  ];

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-30"></div>
      </div>

      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-teal-primary">SIMULATOR</span>{' '}
            <span className="text-white">TECHNOLOGY</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8">
            Advanced flight training systems meeting{' '}
            <span className="text-electric-blue font-semibold">FAA Level D certification</span>{' '}
            standards with cutting-edge AI integration.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto"></div>
        </div>

        {/* Main Simulator Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 3D Simulator Visualization */}
          <div className="scroll-slide-left">
            <div className="relative">
              {/* Main Simulator Container */}
              <div className="glass-cockpit p-12 relative">
                {/* Rotating Simulator Base */}
                <div className="relative w-80 h-80 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-teal-primary opacity-30 animate-radar-sweep"></div>
                  <div className="absolute inset-4 rounded-full border border-electric-blue opacity-50"></div>
                  
                  {/* Central Cockpit */}
                  <div className="absolute inset-16 glass-hud rounded-full flex items-center justify-center animate-float-3d">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-primary to-electric-blue rounded-lg flex items-center justify-center">
                      <simulatorSystems[activeSystem].icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Orbiting System Icons */}
                  {simulatorSystems.map((system, index) => (
                    <div
                      key={system.id}
                      className={`absolute w-12 h-12 glass-hud rounded-full flex items-center justify-center transition-all duration-1000 ${
                        activeSystem === index ? 'scale-125 animate-hud-glow' : 'scale-100'
                      }`}
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${index * 120}deg) translateY(-120px) rotate(${-index * 120}deg)`,
                      }}
                    >
                      <system.icon className={`w-6 h-6 text-${system.color}`} />
                    </div>
                  ))}
                </div>

                {/* Active System Info */}
                <div className="text-center">
                  <h3 className="heading-sm mb-2 text-white">
                    {simulatorSystems[activeSystem].title}
                  </h3>
                  <p className={`body-sm mb-4 text-${simulatorSystems[activeSystem].color}`}>
                    {simulatorSystems[activeSystem].subtitle}
                  </p>
                  
                  {/* Technical Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(simulatorSystems[activeSystem].specs).map(([key, value], i) => (
                      <div key={i} className="glass-hud p-3">
                        <div className="text-xs text-slate-400 tech-mono uppercase">{key}</div>
                        <div className={`text-lg font-bold text-${simulatorSystems[activeSystem].color}`}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Flow Lines */}
              <div className="absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-teal-primary to-transparent animate-data-flow"></div>
            </div>
          </div>

          {/* System Details */}
          <div className="scroll-slide-right space-y-8">
            {simulatorSystems.map((system, index) => (
              <div
                key={system.id}
                className={`glass-cockpit p-6 border-l-4 transition-all duration-500 cursor-pointer card-3d-hover ${
                  activeSystem === index 
                    ? `border-${system.color} bg-slate-800/50` 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                onClick={() => setActiveSystem(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${system.color} to-slate-700 rounded-lg flex items-center justify-center`}>
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm mb-2">{system.title}</h3>
                    <p className={`body-sm mb-3 text-${system.color} font-medium`}>
                      {system.subtitle}
                    </p>
                    <p className="body-md text-slate-300 leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="glass-cockpit p-8 scroll-scale-3d">
          <h3 className="heading-md mb-8 text-center text-white">
            MISSION-CRITICAL PERFORMANCE
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 glass-hud rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-neural-pulse">
                  <metric.icon className="w-8 h-8 text-teal-primary" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-mono">
                  {metricsActive ? metric.value : '---'}
                </div>
                <div className="body-sm text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorShowcase;
