
import React, { useEffect, useState } from 'react';
import { Power, Zap, Eye, Radar, PlayCircle } from 'lucide-react';

const CinematicHero = () => {
  const [bootStage, setBootStage] = useState(0);
  const [systemsOnline, setSystemsOnline] = useState(false);
  const [turbineActive, setTurbineActive] = useState(false);

  useEffect(() => {
    const bootSequence = setTimeout(() => {
      setBootStage(1);
    }, 500);

    const systemsTimer = setTimeout(() => {
      setSystemsOnline(true);
      setTurbineActive(true);
    }, 2000);

    const stageTimer = setInterval(() => {
      setBootStage(prev => (prev + 1) % 4);
    }, 2500);

    return () => {
      clearTimeout(bootSequence);
      clearTimeout(systemsTimer);
      clearInterval(stageTimer);
    };
  }, []);

  const bootMessages = [
    "INITIALIZING FLIGHT CONTROL SYSTEMS...",
    "LOADING COCKPIT INTERFACE MATRIX...",
    "AI NEURAL NETWORK SYNCHRONIZATION...",
    "LEVEL D SIMULATOR STATUS: READY"
  ];

  const systemReadouts = [
    { name: "MOTION BASE", status: "ACTIVE", color: "text-radar-green", icon: Zap },
    { name: "VISUAL SYSTEM", status: "ONLINE", color: "text-electric-blue", icon: Eye },
    { name: "AI PROCESSING", status: "READY", color: "text-cockpit-amber", icon: Radar },
    { name: "FLIGHT CONTROLS", status: "NOMINAL", color: "text-teal-primary", icon: Power }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 hud-grid opacity-20"></div>
      
      {/* Radar Sweep Effect */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-radar-green rounded-full opacity-30">
        <div className="w-full h-full border-t-2 border-radar-green rounded-full animate-radar-sweep"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full animate-float-3d opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container-width text-center relative z-10">
        {/* Cockpit HUD Status Panel */}
        <div className="mb-12 glass-hud p-8 max-w-2xl mx-auto animate-cockpit-bootup animate-hud-glow">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Power className={`w-5 h-5 ${systemsOnline ? 'text-radar-green animate-pulse' : 'text-slate-500'}`} />
              <span className="text-electric-blue text-sm font-bold tech-mono">SIXTY MOTION SYSTEMS</span>
            </div>
            <div className="text-xs text-slate-400 tech-mono">v3.2.1-ALPHA</div>
          </div>
          
          {/* System Status Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {systemReadouts.map((system, index) => (
              <div key={index} className="glass-cockpit p-4 border border-slate-700">
                <div className="flex items-center space-x-2 mb-2">
                  <system.icon className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-300 tech-mono">{system.name}</span>
                </div>
                <div className={`text-sm font-bold ${system.color} tech-mono`}>
                  {system.status}
                </div>
              </div>
            ))}
          </div>

          {/* Boot Message Display */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-2 h-2 bg-radar-green rounded-full animate-pulse"></div>
            <span className="text-radar-green text-sm tech-mono animate-pulse">
              {bootMessages[bootStage]}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-1 mb-4">
            <div 
              className="bg-gradient-to-r from-teal-primary to-electric-blue h-1 rounded-full transition-all duration-1000"
              style={{ width: systemsOnline ? '100%' : '40%' }}
            ></div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="space-y-8">
          <div className="animate-cockpit-bootup" style={{ animationDelay: '0.5s' }}>
            <h1 className="heading-display mb-6">
              <span className="text-teal-primary">SIXTY MOTION</span>
              <br />
              <span className="text-white">FLIGHT SYSTEMS</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto mb-8"></div>
          </div>

          <div className="animate-cockpit-bootup" style={{ animationDelay: '1s' }}>
            <p className="body-lg mb-8 max-w-4xl mx-auto">
              <span className="text-electric-blue font-semibold">Next-Generation Aviation Technology.</span>
              <br />
              FAA Level D certified flight simulators powered by edge-AI analytics.
            </p>
            <p className="text-2xl text-cockpit-amber font-bold tracking-wider mb-12">
              PRECISION. PERFORMANCE. PILOTED BY AI.
            </p>
          </div>

          {/* 3D Floating Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-cockpit-bootup" style={{ animationDelay: '1.5s' }}>
            <div className="glass-cockpit p-6 card-3d-hover animate-float-3d">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-primary to-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-white rounded-full animate-turbine"></div>
              </div>
              <h3 className="heading-sm mb-2 text-teal-primary">6DOF MOTION</h3>
              <p className="body-sm">±35° Full Range</p>
              <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent"></div>
            </div>

            <div className="glass-cockpit p-6 card-3d-hover animate-float-3d" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-radar-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <Radar className="w-8 h-8 text-white animate-neural-pulse" />
              </div>
              <h3 className="heading-sm mb-2 text-electric-blue">AI ANALYTICS</h3>
              <p className="body-sm">Real-time Edge Processing</p>
              <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
            </div>

            <div className="glass-cockpit p-6 card-3d-hover animate-float-3d" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-cockpit-amber to-afterburner rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm tech-mono">FAA</span>
              </div>
              <h3 className="heading-sm mb-2 text-cockpit-amber">CERTIFIED</h3>
              <p className="body-sm">Level D Standard</p>
              <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-cockpit-amber to-transparent"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-cockpit-bootup" style={{ animationDelay: '2s' }}>
            <button className="btn-cockpit flex items-center space-x-2">
              <PlayCircle className="w-5 h-5" />
              <span>EXPERIENCE SIMULATOR</span>
            </button>
            <button className="btn-hud">
              EXPLORE TECHNOLOGY
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 opacity-70">
            <span className="text-electric-blue text-xs font-medium tech-mono">SCROLL TO CONTINUE</span>
            <div className="w-px h-8 bg-gradient-to-b from-electric-blue to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-primary rounded-full opacity-5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default CinematicHero;
