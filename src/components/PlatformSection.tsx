
import React, { useState, useEffect } from 'react';
import { Monitor, Brain, Database, Wifi, Zap, Shield } from 'lucide-react';

const PlatformSection = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [modulesActive, setModulesActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModulesActive(true);
    }, 1000);

    const moduleTimer = setInterval(() => {
      setActiveModule(prev => (prev + 1) % 6);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(moduleTimer);
    };
  }, []);

  const platformModules = [
    {
      id: 'simulator',
      title: 'Flight Simulator',
      description: 'Level D Full Motion Platform',
      icon: Monitor,
      color: 'teal-primary',
      position: { top: '20%', left: '15%' }
    },
    {
      id: 'ai-core',
      title: 'AI Analytics Core',
      description: 'Neural Performance Engine',
      icon: Brain,
      color: 'electric-blue',
      position: { top: '15%', right: '20%' }
    },
    {
      id: 'data-hub',
      title: 'Training Data Hub',
      description: 'Cloud-Based Learning',
      icon: Database,
      color: 'radar-green',
      position: { bottom: '30%', left: '10%' }
    },
    {
      id: 'connectivity',
      title: 'Real-time Sync',
      description: 'Multi-Simulator Network',
      icon: Wifi,
      color: 'cockpit-amber',
      position: { top: '40%', right: '15%' }
    },
    {
      id: 'performance',
      title: 'Edge Computing',
      description: 'Sub-50ms Processing',
      icon: Zap,
      color: 'afterburner-orange',
      position: { bottom: '20%', right: '25%' }
    },
    {
      id: 'security',
      title: 'Secure Protocols',
      description: 'Aviation-Grade Security',
      icon: Shield,
      color: 'electric-blue',
      position: { bottom: '35%', left: '50%' }
    }
  ];

  return (
    <section id="platform" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="hud-grid absolute inset-0 opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-teal-primary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-electric-blue/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-teal-primary">INTEGRATED</span>{' '}
            <span className="text-white">PLATFORM</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8 text-slate-300">
            A unified ecosystem connecting flight simulators, AI analytics, and training tools 
            through our <span className="text-electric-blue font-semibold">cloud-native architecture</span>.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto"></div>
        </div>

        {/* Platform Visualization */}
        <div className="relative h-96 mb-20 scroll-scale-3d">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 glass-cockpit rounded-full flex items-center justify-center animate-float-3d">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-primary to-electric-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-mono">60</span>
              </div>
            </div>

            {/* Connection Lines */}
            {platformModules.map((module, index) => (
              <div
                key={module.id}
                className={`absolute w-px bg-gradient-to-r from-${module.color} to-transparent transition-all duration-1000 ${
                  modulesActive ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  height: '120px',
                  transform: `rotate(${index * 60}deg)`,
                  transformOrigin: 'bottom center',
                  animationDelay: `${index * 0.2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Platform Modules */}
          {platformModules.map((module, index) => (
            <div
              key={module.id}
              className={`absolute transition-all duration-1000 ${
                modulesActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              } ${
                activeModule === index ? 'animate-hud-glow' : ''
              }`}
              style={{
                ...module.position,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className={`glass-hud p-6 max-w-xs cursor-pointer card-3d-hover border-l-4 border-${module.color}`}>
                <div className={`w-12 h-12 bg-gradient-to-br from-${module.color} to-slate-700 rounded-lg flex items-center justify-center mb-4`}>
                  {React.createElement(module.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="heading-sm mb-2 text-white">{module.title}</h3>
                <p className={`body-sm text-${module.color} mb-3`}>{module.description}</p>
                <div className="w-full h-1 bg-slate-700 rounded">
                  <div className={`h-full bg-${module.color} rounded transition-all duration-2000`} 
                       style={{ width: activeModule === index ? '100%' : '30%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-slide-left">
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-teal-primary mb-2 font-mono">
              99.9%
            </div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">
              Platform Uptime
            </div>
          </div>
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-electric-blue mb-2 font-mono">
              <50ms
            </div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">
              Edge Latency
            </div>
          </div>
          <div className="glass-cockpit p-8 text-center">
            <div className="text-4xl font-bold text-radar-green mb-2 font-mono">
              24/7
            </div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">
              Global Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
