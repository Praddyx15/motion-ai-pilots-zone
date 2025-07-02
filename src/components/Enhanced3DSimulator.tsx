
import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, Eye, Layers, Zap, Shield } from 'lucide-react';

const Enhanced3DSimulator = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const [dissectionMode, setDissectionMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('simulator');
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setRotationAngle(progress * 360);
        
        if (progress > 0.5) {
          setDissectionMode(true);
          setActiveLayer(Math.floor((progress - 0.5) * 2 * 6) % 6);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const simulatorLayers = [
    { id: 'visual', name: 'Visual System', icon: Eye, color: 'electric-blue', depth: 0 },
    { id: 'cockpit', name: 'Cockpit Interior', icon: Monitor, color: 'teal-primary', depth: 20 },
    { id: 'computing', name: 'Computing Core', icon: Cpu, color: 'radar-green', depth: 40 },
    { id: 'motion', name: 'Motion Base', icon: Layers, color: 'cockpit-amber', depth: 60 },
    { id: 'hydraulics', name: 'Hydraulic System', icon: Zap, color: 'afterburner-orange', depth: 80 },
    { id: 'structure', name: 'Support Structure', icon: Shield, color: 'electric-blue', depth: 100 }
  ];

  return (
    <section id="simulator" className="section-padding bg-slate-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="hud-grid absolute inset-0 opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-50"></div>
      </div>

      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-teal-primary">ADVANCED</span>{' '}
            <span className="text-white">FLIGHT SIMULATOR</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8 text-slate-300">
            Experience our revolutionary <span className="text-electric-blue font-semibold">6DOF motion platform</span> with 
            cutting-edge visual systems and AI-powered training analytics.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto"></div>
        </div>

        {/* 3D Simulator Visualization */}
        <div className="relative h-[800px] mb-20">
          {/* Central Simulator Model */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="relative w-96 h-96 transition-transform duration-1000 preserve-3d"
              style={{ 
                transform: `rotateY(${rotationAngle}deg) rotateX(${rotationAngle * 0.3}deg)` 
              }}
            >
              {/* Simulator Layers */}
              {simulatorLayers.map((layer, index) => (
                <div
                  key={layer.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    dissectionMode && activeLayer === index 
                      ? 'scale-110 animate-hud-glow' 
                      : dissectionMode 
                        ? 'opacity-60 scale-95' 
                        : 'opacity-100 scale-100'
                  }`}
                  style={{
                    transform: dissectionMode 
                      ? `translateZ(${layer.depth}px) translateY(${index * -20}px)` 
                      : 'translateZ(0px)',
                    zIndex: simulatorLayers.length - index
                  }}
                >
                  <div className={`glass-cockpit w-full h-full rounded-2xl border-2 border-${layer.color} relative overflow-hidden`}>
                    {/* Layer Content */}
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className={`w-24 h-24 bg-gradient-to-br from-${layer.color} to-slate-700 rounded-xl flex items-center justify-center`}>
                        <layer.icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Layer Label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass-hud p-2 rounded">
                        <span className={`text-sm font-mono text-${layer.color}`}>{layer.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rotation Indicators */}
            <div className="absolute -inset-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 glass-hud px-4 py-2 rounded">
                <span className="text-xs text-electric-blue font-mono">ROTATION: {Math.round(rotationAngle)}°</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass-hud px-4 py-2 rounded">
                <span className="text-xs text-teal-primary font-mono">
                  {dissectionMode ? 'DISSECTION MODE' : 'EXTERNAL VIEW'}
                </span>
              </div>
            </div>
          </div>

          {/* Layer Information Panel */}
          {dissectionMode && (
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-80">
              <div className="glass-cockpit p-6 animate-fade-in">
                <h3 className="heading-sm mb-4 text-white">ACTIVE LAYER</h3>
                <div className="space-y-4">
                  {simulatorLayers.map((layer, index) => (
                    <div
                      key={layer.id}
                      className={`p-3 rounded border transition-all ${
                        activeLayer === index 
                          ? `border-${layer.color} bg-${layer.color}/10` 
                          : 'border-slate-700 opacity-60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-br from-${layer.color} to-slate-700 rounded flex items-center justify-center`}>
                          <layer.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`font-mono text-${layer.color}`}>{layer.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-8 scroll-scale-3d">
          <div className="glass-cockpit p-8 text-center card-3d-hover">
            <div className="text-4xl font-bold text-teal-primary mb-2 font-mono animate-neural-pulse">6DOF</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Motion Axes</div>
            <div className="w-full h-2 bg-slate-700 rounded mt-4">
              <div className="h-full bg-teal-primary rounded animate-data-flow"></div>
            </div>
          </div>
          <div className="glass-cockpit p-8 text-center card-3d-hover">
            <div className="text-4xl font-bold text-electric-blue mb-2 font-mono animate-neural-pulse">4K</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Visual Resolution</div>
            <div className="w-full h-2 bg-slate-700 rounded mt-4">
              <div className="h-full bg-electric-blue rounded animate-data-flow" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          <div className="glass-cockpit p-8 text-center card-3d-hover">
            <div className="text-4xl font-bold text-radar-green mb-2 font-mono animate-neural-pulse">180°</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Field of View</div>
            <div className="w-full h-2 bg-slate-700 rounded mt-4">
              <div className="h-full bg-radar-green rounded animate-data-flow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          <div className="glass-cockpit p-8 text-center card-3d-hover">
            <div className="text-4xl font-bold text-cockpit-amber mb-2 font-mono animate-neural-pulse">1000Hz</div>
            <div className="body-sm text-slate-400 uppercase tracking-wider">Update Rate</div>
            <div className="w-full h-2 bg-slate-700 rounded mt-4">
              <div className="h-full bg-cockpit-amber rounded animate-data-flow" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhanced3DSimulator;
