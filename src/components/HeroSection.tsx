
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [bootupComplete, setBootupComplete] = useState(false);
  const [radarActive, setRadarActive] = useState(false);

  useEffect(() => {
    const bootupTimer = setTimeout(() => {
      setBootupComplete(true);
    }, 2000);

    const radarTimer = setTimeout(() => {
      setRadarActive(true);
    }, 3000);

    return () => {
      clearTimeout(bootupTimer);
      clearTimeout(radarTimer);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 hud-grid opacity-20"></div>
      
      {/* Radar Sweep Animation */}
      <div className={`absolute inset-0 ${radarActive ? 'animate-radar-sweep' : ''}`}>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-teal-primary/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-electric-blue/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-radar-green/50 rounded-full"></div>
      </div>

      {/* Cockpit Boot-up Overlay */}
      <div className={`absolute top-8 left-1/2 -translate-x-1/2 transition-all duration-2000 ${
        bootupComplete ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'
      }`}>
        <div className="glass-hud p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-radar-green rounded-full animate-pulse"></div>
            <span className="tech-mono text-radar-green">SYSTEM INITIALIZING...</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`text-center z-10 transition-all duration-2000 ${
        bootupComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="mb-8">
          <h1 className="heading-display mb-6 animate-cockpit-bootup">
            SIXTY MOTION
            <br />
            <span className="text-teal-primary">SYSTEMS</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto mb-8"></div>
          <p className="heading-md text-slate-300 mb-4">
            Precision in Motion.
          </p>
          <p className="heading-lg text-electric-blue tech-mono">
            Piloted by AI.
          </p>
        </div>

        <div className="space-y-6">
          <p className="body-lg max-w-2xl mx-auto text-slate-400">
            Engineering FAA Level D flight simulators with edge-AI pilot analytics 
            for next-generation aviation training ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-cockpit">
              EXPLORE SYSTEMS
            </button>
            <button className="btn-hud">
              WATCH DEMO
            </button>
          </div>
        </div>

        {/* Technical Specs Overlay */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glass-hud p-4 text-center">
            <div className="text-2xl font-bold text-teal-primary mb-1">±35°</div>
            <div className="text-xs text-slate-400 tech-mono">MOTION RANGE</div>
          </div>
          <div className="glass-hud p-4 text-center">
            <div className="text-2xl font-bold text-electric-blue mb-1">99.7%</div>
            <div className="text-xs text-slate-400 tech-mono">AI accuracy</div>
          </div>
          <div className="glass-hud p-4 text-center">
            <div className="text-2xl font-bold text-radar-green mb-1">60Hz</div>
            <div className="text-xs text-slate-400 tech-mono">UPDATE RATE</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="glass-hud p-3 rounded-full">
          <ChevronDown className="w-6 h-6 text-teal-primary" />
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-primary/5 via-transparent to-electric-blue/5 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
