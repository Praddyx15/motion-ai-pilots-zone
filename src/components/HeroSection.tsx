
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, CircleArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [bootSequence, setBootSequence] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBootSequence(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const bootMessages = [
    "INITIALIZING FLIGHT SYSTEMS...",
    "LOADING COCKPIT INTERFACE...",
    "AI ANALYTICS ONLINE...",
    "READY FOR TAKEOFF"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-blue-500/20 animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* HUD scanning overlay */}
      <div className="absolute inset-0 hud-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Boot sequence indicator */}
        <div className="mb-8 glass-panel p-4 max-w-md mx-auto animate-cockpit-boot">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-data-pulse"></div>
            <span className="text-green-400 text-sm font-mono">{bootMessages[bootSequence]}</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-cockpit-boot">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            LEVEL D
          </span>
          <br />
          <span className="text-4xl md:text-5xl">Flight Simulators</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Next-generation FAA certified flight training systems powered by AI analytics. 
          <span className="block mt-2 text-cyan-300">Precision. Performance. Piloted by AI.</span>
        </p>

        {/* Motion base visualization */}
        <div className="mb-12 relative">
          <div className="glass-panel p-8 max-w-3xl mx-auto animate-motion-tilt">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <LayoutDashboard className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <span className="text-blue-200 text-sm">6DOF Motion</span>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                <span className="text-cyan-200 text-sm">AI Training</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">FAA</span>
                </div>
                <span className="text-green-200 text-sm">Certified</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-2">Full Flight Simulator</h3>
              <p className="text-blue-200">Real cockpit replication with AI-powered debrief systems</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="glass-panel px-8 py-4 text-white border-2 border-blue-400 hover:bg-blue-500/20 transition-all duration-300 rounded-lg group">
            <span className="flex items-center justify-center space-x-2">
              <span>Experience Demo</span>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-data-pulse"></div>
            </span>
          </button>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 rounded-lg shadow-xl shadow-blue-500/25">
            Explore Technology
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <CircleArrowDown className="w-8 h-8 text-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
