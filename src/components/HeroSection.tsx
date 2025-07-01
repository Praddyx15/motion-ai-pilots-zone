
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, CircleArrowDown, Power } from 'lucide-react';

const HeroSection = () => {
  const [bootSequence, setBootSequence] = useState(0);
  const [systemsOnline, setSystemsOnline] = useState(false);

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

  const bootMessages = [
    "INITIALIZING FLIGHT SYSTEMS...",
    "LOADING COCKPIT INTERFACE...",
    "AI ANALYTICS ONLINE...",
    "READY FOR TAKEOFF"
  ];

  const systemStatus = [
    { name: "Motion Base", status: "ACTIVE", color: "text-green-600" },
    { name: "Visual System", status: "ONLINE", color: "brand-accent" },
    { name: "AI Processing", status: "READY", color: "brand-accent" },
    { name: "Flight Controls", status: "NOMINAL", color: "text-green-600" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2e9896 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-width text-center relative z-10">
        {/* System status panel */}
        <div className="mb-12 glass-panel p-6 max-w-lg mx-auto animate-fadeInUp">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Power className={`w-4 h-4 ${systemsOnline ? 'text-green-600' : 'brand-accent'} animate-pulse`} />
              <span className="brand-accent text-sm font-medium tech-mono">SYSTEM STATUS</span>
            </div>
            <div className="text-xs text-gray-500 tech-mono">v2.1.4</div>
          </div>
          
          <div className="space-y-2 mb-4">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex justify-between items-center text-xs tech-mono">
                <span className="text-gray-600">{system.name}</span>
                <span className={system.color}>{system.status}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 text-sm tech-mono">{bootMessages[bootSequence]}</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="heading-xl mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <span className="brand-gradient">LEVEL D</span>
          <br />
          <span className="text-black">Flight Simulators</span>
        </h1>

        <p className="body-lg mb-8 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Next-generation FAA certified flight training systems powered by AI analytics.
          <span className="block mt-2 brand-accent font-medium">
            Precision. Performance. Piloted by AI.
          </span>
        </p>

        {/* Feature showcase */}
        <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="glass-panel p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center mx-auto mb-4 animate-float">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-2">6DOF Motion</h3>
                <span className="body-sm">±35° Range</span>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-2">AI Training</h3>
                <span className="body-sm">Real-time Analytics</span>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-white font-bold text-sm">FAA</span>
                </div>
                <h3 className="heading-sm mb-2">Certified</h3>
                <span className="body-sm">Level D Standard</span>
              </div>
            </div>
            
            <div className="glass-panel p-6 border-2 brand-border">
              <h3 className="heading-sm mb-2">Full Flight Simulator</h3>
              <p className="body-md">Real cockpit replication with AI-powered debrief systems</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <button className="btn-primary">
            Experience Demo
          </button>
          <button className="btn-secondary">
            Explore Technology
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center space-y-2">
            <span className="brand-accent text-xs font-medium">SCROLL TO EXPLORE</span>
            <CircleArrowDown className="w-8 h-8 brand-accent animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
