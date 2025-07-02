
import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, Activity } from 'lucide-react';

const EnhancedHeroSection = () => {
  const [bootupStage, setBootupStage] = useState(0);
  const [systemsOnline, setSystemsOnline] = useState(false);

  useEffect(() => {
    const bootSequence = [
      { delay: 500, stage: 1 },
      { delay: 1000, stage: 2 },
      { delay: 1500, stage: 3 },
      { delay: 2000, stage: 4 },
      { delay: 2500, stage: 5 }
    ];

    bootSequence.forEach(({ delay, stage }) => {
      setTimeout(() => setBootupStage(stage), delay);
    });

    setTimeout(() => setSystemsOnline(true), 3000);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Advanced HUD Grid System */}
      <div className="absolute inset-0 hud-grid opacity-20"></div>
      
      {/* Multi-layer Radar System */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 border border-teal-primary/20 rounded-full animate-radar-sweep"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-electric-blue/30 rounded-full" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-radar-green/40 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Cockpit Boot-up Sequence */}
      <div className="absolute top-0 left-0 w-full h-full">
        {bootupStage >= 1 && (
          <div className="absolute top-8 left-8 glass-hud p-4 rounded-lg animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-radar-green rounded-full animate-pulse"></div>
              <span className="tech-mono text-radar-green">FLIGHT SYSTEMS ONLINE</span>
            </div>
          </div>
        )}

        {bootupStage >= 2 && (
          <div className="absolute top-8 right-8 glass-hud p-4 rounded-lg animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
              <span className="tech-mono text-electric-blue">AI CORE INITIALIZED</span>
            </div>
          </div>
        )}

        {bootupStage >= 3 && (
          <div className="absolute bottom-8 left-8 glass-hud p-4 rounded-lg animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-cockpit-amber rounded-full animate-pulse"></div>
              <span className="tech-mono text-cockpit-amber">MOTION BASE READY</span>
            </div>
          </div>
        )}

        {bootupStage >= 4 && (
          <div className="absolute bottom-8 right-8 glass-hud p-4 rounded-lg animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-afterburner-orange rounded-full animate-pulse"></div>
              <span className="tech-mono text-afterburner-orange">VISUAL SYSTEMS ACTIVE</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Hero Content */}
      <div className={`text-center z-10 transition-all duration-2000 ${
        systemsOnline ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}>
        <div className="mb-12">
          <h1 className="heading-display mb-8 animate-cockpit-bootup">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-primary via-electric-blue to-radar-green">
              SIXTY MOTION
            </span>
            <span className="block text-white mt-4">
              SYSTEMS
            </span>
          </h1>
          
          <div className="relative mb-8">
            <div className="w-48 h-1 bg-gradient-to-r from-teal-primary via-electric-blue to-radar-green mx-auto animate-data-flow"></div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
          </div>
          
          <p className="heading-md text-slate-300 mb-6">
            Precision in Motion.
          </p>
          <p className="heading-lg text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-radar-green tech-mono">
            Piloted by AI.
          </p>
        </div>

        <div className="space-y-8">
          <p className="body-lg max-w-3xl mx-auto text-slate-400 leading-relaxed">
            Engineering next-generation <span className="text-teal-primary font-semibold">FAA Level D flight simulators</span> with 
            edge-AI pilot analytics for revolutionary aviation training ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group btn-cockpit relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-primary to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>EXPLORE SYSTEMS</span>
              </span>
            </button>
            <button className="group btn-hud relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-radar-green/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>WATCH DEMO</span>
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Technical Specs with Animations */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-cockpit p-6 text-center card-3d-hover">
            <div className="text-3xl font-bold text-teal-primary mb-2 font-mono animate-neural-pulse">±35°</div>
            <div className="text-xs text-slate-400 tech-mono uppercase tracking-wider">MOTION RANGE</div>
            <div className="w-full h-1 bg-slate-700 rounded mt-3">
              <div className="h-full bg-teal-primary rounded animate-data-flow"></div>
            </div>
          </div>
          <div className="glass-cockpit p-6 text-center card-3d-hover">
            <div className="text-3xl font-bold text-electric-blue mb-2 font-mono animate-neural-pulse">99.7%</div>
            <div className="text-xs text-slate-400 tech-mono uppercase tracking-wider">AI ACCURACY</div>
            <div className="w-full h-1 bg-slate-700 rounded mt-3">
              <div className="h-full bg-electric-blue rounded animate-data-flow" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          <div className="glass-cockpit p-6 text-center card-3d-hover">
            <div className="text-3xl font-bold text-radar-green mb-2 font-mono animate-neural-pulse">60Hz</div>
            <div className="text-xs text-slate-400 tech-mono uppercase tracking-wider">UPDATE RATE</div>
            <div className="w-full h-1 bg-slate-700 rounded mt-3">
              <div className="h-full bg-radar-green rounded animate-data-flow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="glass-cockpit p-4 rounded-full animate-bounce">
          <ChevronDown className="w-8 h-8 text-teal-primary animate-pulse" />
        </div>
        <div className="mt-2 text-center">
          <span className="text-xs text-slate-400 tech-mono">SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* Enhanced Ambient Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-primary/10 via-transparent to-electric-blue/10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50 pointer-events-none"></div>
    </section>
  );
};

export default EnhancedHeroSection;
