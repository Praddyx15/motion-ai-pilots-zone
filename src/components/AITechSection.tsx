
import React, { useEffect, useState } from 'react';
import { Brain, Cpu, Eye, Zap, Network, Target, Clock, TrendingUp } from 'lucide-react';

const AITechSection = () => {
  const [neuralActive, setNeuralActive] = useState(false);
  const [dataStream, setDataStream] = useState(0);
  const [processingNodes, setProcessingNodes] = useState([]);

  useEffect(() => {
    const neuralTimer = setTimeout(() => setNeuralActive(true), 500);
    
    const dataTimer = setInterval(() => {
      setDataStream(prev => (prev + 1) % 4);
    }, 1500);

    // Initialize processing nodes
    const nodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: (Math.cos((i * 360) / 12 * Math.PI / 180) * 120) + 160,
      y: (Math.sin((i * 360) / 12 * Math.PI / 180) * 120) + 160,
      active: false,
      delay: i * 200
    }));
    setProcessingNodes(nodes);

    // Activate nodes in sequence
    nodes.forEach((node, index) => {
      setTimeout(() => {
        setProcessingNodes(prev => 
          prev.map(n => n.id === index ? { ...n, active: true } : n)
        );
      }, node.delay);
    });

    return () => {
      clearTimeout(neuralTimer);
      clearInterval(dataTimer);
    };
  }, []);

  const aiCapabilities = [
    {
      title: 'Eye Tracking Analytics',
      description: 'Advanced gaze pattern analysis monitoring pilot attention distribution and scan behavior with millisecond precision.',
      icon: Eye,
      color: 'electric-blue',
      stats: [
        { label: 'Sampling Rate', value: '120Hz' },
        { label: 'Precision', value: '±0.5°' },
        { label: 'Latency', value: '<5ms' }
      ],
      dataPoints: ['Fixation Duration', 'Saccade Velocity', 'Attention Zones', 'Scan Patterns']
    },
    {
      title: 'Performance Metrics',
      description: 'Real-time collection and analysis of flight parameters, control inputs, and physiological responses.',
      icon: TrendingUp,
      color: 'radar-green',
      stats: [
        { label: 'Data Points', value: '500+' },
        { label: 'Frequency', value: '1kHz' },
        { label: 'Channels', value: '32' }
      ],
      dataPoints: ['Control Precision', 'Response Time', 'Workload Index', 'Stress Markers']
    },
    {
      title: 'Neural Processing',
      description: 'Edge-based AI processing using custom neural networks optimized for real-time pilot assessment.',
      icon: Brain,
      color: 'cockpit-amber',
      stats: [
        { label: 'Inference', value: '<10ms' },
        { label: 'Accuracy', value: '99.7%' },
        { label: 'Models', value: '15+' }
      ],
      dataPoints: ['Skill Assessment', 'Risk Prediction', 'Learning Curve', 'Competency Score']
    }
  ];

  const processingMetrics = [
    { label: 'Neural Inference Time', value: '<10ms', icon: Clock },
    { label: 'Edge Processing Power', value: '250 TOPS', icon: Cpu },
    { label: 'Prediction Accuracy', value: '99.7%', icon: Target },
    { label: 'Parallel Channels', value: '64x', icon: Network }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Connection Lines */}
          {processingNodes.map((node, i) => (
            <g key={`connections-${i}`}>
              {processingNodes.slice(i + 1, i + 4).map((targetNode, j) => (
                <line
                  key={`line-${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke="url(#neuralGradient)"
                  strokeWidth="1"
                  opacity={node.active && targetNode.active ? "0.6" : "0.2"}
                  className="transition-opacity duration-1000"
                />
              ))}
            </g>
          ))}
          
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2e9896" />
              <stop offset="100%" stopColor="#00c8ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-electric-blue">AI-POWERED</span>{' '}
            <span className="text-white">ANALYTICS</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8">
            Edge computing and machine learning revolutionizing{' '}
            <span className="text-teal-primary font-semibold">pilot training assessment</span>{' '}
            with real-time neural processing.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-electric-blue to-teal-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* AI Neural Visualization */}
          <div className="scroll-slide-left">
            <div className="glass-cockpit p-8 relative">
              {/* Central AI Core */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Core Processor */}
                <div className="absolute inset-16 glass-hud rounded-full flex items-center justify-center animate-float-3d">
                  <div className="w-32 h-32 bg-gradient-to-br from-electric-blue via-teal-primary to-radar-green rounded-full flex items-center justify-center relative">
                    <Brain className="w-16 h-16 text-white animate-neural-pulse" />
                    
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-electric-blue animate-ping opacity-20"></div>
                    <div className="absolute inset-2 rounded-full border border-teal-primary animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Processing Nodes */}
                {processingNodes.map((node, index) => (
                  <div
                    key={node.id}
                    className={`absolute w-4 h-4 rounded-full transition-all duration-1000 ${
                      node.active 
                        ? 'bg-electric-blue shadow-lg shadow-electric-blue/50 animate-neural-pulse' 
                        : 'bg-slate-600'
                    }`}
                    style={{
                      left: `${node.x - 8}px`,
                      top: `${node.y - 8}px`,
                    }}
                  />
                ))}

                {/* Data Flow Indicators */}
                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
                  dataStream === 0 ? 'opacity-100' : 'opacity-30'
                }`}>
                  <div className="w-2 h-8 bg-gradient-to-b from-radar-green to-transparent animate-data-flow"></div>
                </div>
                
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
                  dataStream === 1 ? 'opacity-100' : 'opacity-30'
                }`}>
                  <div className="w-2 h-8 bg-gradient-to-t from-electric-blue to-transparent animate-data-flow"></div>
                </div>
              </div>

              {/* AI Status Display */}
              <div className="mt-8 space-y-4">
                <div className="glass-hud p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-electric-blue text-sm tech-mono">NEURAL PROCESSING</span>
                    <span className="text-radar-green text-sm tech-mono">ACTIVE</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-electric-blue to-radar-green h-2 rounded-full animate-pulse" style={{ width: '94%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {processingMetrics.map((metric, i) => (
                    <div key={i} className="glass-hud p-3 text-center">
                      <metric.icon className="w-5 h-5 mx-auto mb-2 text-teal-primary" />
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-slate-400 tech-mono">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="scroll-slide-right space-y-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="glass-cockpit p-6 card-3d-hover">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${capability.color} to-slate-700 rounded-lg flex items-center justify-center`}>
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm mb-2">{capability.title}</h3>
                    <p className="body-md text-slate-300 leading-relaxed mb-4">
                      {capability.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {capability.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-lg font-bold text-${capability.color}`}>{stat.value}</div>
                      <div className="text-xs text-slate-500 tech-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Data Points */}
                <div className="flex flex-wrap gap-2">
                  {capability.dataPoints.map((point, i) => (
                    <span key={i} className={`px-3 py-1 glass-hud text-xs text-${capability.color} tech-mono`}>
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edge Computing Infrastructure */}
        <div className="glass-cockpit p-8 scroll-scale-3d">
          <div className="text-center mb-8">
            <h3 className="heading-md mb-4 text-white">EDGE COMPUTING ARCHITECTURE</h3>
            <p className="body-lg text-slate-300 max-w-3xl mx-auto">
              Distributed processing network delivering ultra-low latency AI inference for real-time flight training analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Processing Nodes', value: '8x GPU', icon: Cpu, color: 'electric-blue' },
              { label: 'Memory Bandwidth', value: '2TB/s', icon: Zap, color: 'radar-green' },
              { label: 'AI Models', value: '15+', icon: Brain, color: 'teal-primary' },
              { label: 'Inference Rate', value: '10,000/s', icon: Target, color: 'cockpit-amber' }
            ].map((spec, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 glass-hud rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-neural-pulse border border-${spec.color}`}>
                  <spec.icon className={`w-8 h-8 text-${spec.color}`} />
                </div>
                <div className={`text-3xl font-bold text-${spec.color} mb-2 font-mono`}>
                  {spec.value}
                </div>
                <div className="body-sm text-slate-400 uppercase tracking-wider">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechSection;
