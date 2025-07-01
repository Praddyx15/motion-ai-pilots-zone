
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, CircleArrowDown, Power } from 'lucide-react';

const HeroSection = () => {
  const [bootSequence, setBootSequence] = useState(0);
  const [systemsOnline, setSystemsOnline] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBootSequence(prev => (prev + 1) % 4);
    }, 2000);
    
    const onlineTimer = setTimeout(() => {
      setSystemsOnline(true);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(onlineTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bootMessages = [
    "INITIALIZING FLIGHT SYSTEMS...",
    "LOADING COCKPIT INTERFACE...",
    "AI ANALYTICS ONLINE...",
    "READY FOR TAKEOFF"
  ];

  const systemStatus = [
    { name: "Motion Base", status: "ACTIVE", color: "text-green-400" },
    { name: "Visual System", status: "ONLINE", color: "text-blue-400" },
    { name: "AI Processing", status: "READY", color: "text-cyan-400" },
    { name: "Flight Controls", status: "NOMINAL", color: "text-yellow-400" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-container">
      {/* Enhanced animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="system-grid absolute inset-0"></div>
        <div className="hud-grid absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
      </div>

      {/* Enhanced HUD scanning overlay */}
      <div className="absolute inset-0 hud-overlay pointer-events-none"></div>

      {/* Cockpit startup lights */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
        {/* Enhanced boot sequence indicator */}
        <div className="mb-8 glass-panel p-6 max-w-lg mx-auto animate-cockpit-boot">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Power className={`w-4 h-4 ${systemsOnline ? 'text-green-400' : 'text-yellow-400'} animate-data-pulse`} />
              <span className="text-green-400 text-sm font-mono aviation-heading">SYSTEM STATUS</span>
            </div>
            <div className="text-xs text-blue-300 font-mono">v2.1.4</div>
          </div>
          
          <div className="space-y-2 mb-4">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex justify-between items-center text-xs font-mono">
                <span className="text-blue-200">{system.name}</span>
                <span className={`${system.color} status-indicator`}>{system.status}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-data-pulse"></div>
            <span className="text-green-400 text-sm font-mono">{bootMessages[bootSequence]}</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-cockpit-boot aviation-heading">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
            LEVEL D
          </span>
          <br />
          <span className="text-4xl md:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Flight Simulators
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed cockpit-text">
          Next-generation FAA certified flight training systems powered by AI analytics. 
          <span className="block mt-2 text-cyan-300 aviation-heading">
            Precision. Performance. Piloted by AI.
          </span>
        </p>

        {/* Enhanced motion base visualization */}
        <div className="mb-12 relative">
          <div className="glass-panel p-8 max-w-4xl mx-auto animate-motion-tilt">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center targeting-reticle">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4 animate-data-pulse">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 aviation-heading">6DOF Motion</h3>
                <span className="text-blue-200 text-sm cockpit-text">±35° Range</span>
              </div>

              <div className="text-center targeting-reticle">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center mx-auto mb-4 animate-data-pulse" style={{ animationDelay: '0.5s' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 aviation-heading">AI Training</h3>
                <span className="text-cyan-200 text-sm cockpit-text">Real-time Analytics</span>
              </div>

              <div className="text-center targeting-reticle">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4 animate-data-pulse" style={{ animationDelay: '1s' }}>
                  <span className="text-white font-bold aviation-heading">FAA</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 aviation-heading">Certified</h3>
                <span className="text-green-200 text-sm cockpit-text">Level D Standard</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-lg p-6 border border-blue-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white mb-2 aviation-heading">Full Flight Simulator</h3>
              <p className="text-blue-200 cockpit-text">Real cockpit replication with AI-powered debrief systems</p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button className="cockpit-button px-8 py-4 text-white border-2 border-blue-400 hover:bg-blue-500/20 transition-all duration-300 rounded-lg group aviation-heading">
            <span className="flex items-center justify-center space-x-3">
              <span>Experience Demo</span>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-data-pulse"></div>
            </span>
          </button>
          <button className="throttle-button px-8 py-4 text-white font-bold text-lg transition-all duration-300 rounded-lg shadow-xl shadow-blue-500/25 aviation-heading">
            <span className="flex items-center justify-center space-x-2">
              <span>Explore Technology</span>
              <div className="w-6 h-6 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </span>
          </button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-blue-400 text-xs aviation-heading">SCROLL TO EXPLORE</span>
            <CircleArrowDown className="w-8 h-8 text-blue-400 animate-bounce" />
            <div className="w-px h-16 bg-gradient-to-b from-blue-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Corner targeting elements */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-50"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-cyan-400 opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-cyan-400 opacity-50"></div>
    </section>
  );
};

export default HeroSection;
