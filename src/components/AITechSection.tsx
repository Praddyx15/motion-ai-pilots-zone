
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, CircleArrowUp, Brain, Cpu, Eye, Zap } from 'lucide-react';

const AITechSection = () => {
  const [dataFlowStep, setDataFlowStep] = useState(0);
  const [neuralActive, setNeuralActive] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDataFlowStep(prev => (prev + 1) % 4);
    }, 1500);

    const neuralTimer = setTimeout(() => setNeuralActive(true), 1000);
    const metricsTimer = setTimeout(() => setMetricsVisible(true), 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(neuralTimer);
      clearTimeout(metricsTimer);
    };
  }, []);

  const dataPoints = [
    { label: "Eye Tracking", value: "120Hz", color: "text-blue-400", icon: Eye },
    { label: "Performance Metrics", value: "Real-time", color: "text-cyan-400", icon: Zap },
    { label: "Neural Analysis", value: "Edge Computing", color: "text-green-400", icon: Brain },
    { label: "Debrief Generation", value: "AI Powered", color: "text-yellow-400", icon: Cpu }
  ];

  const floatingMetrics = [
    { label: "Inference Time", value: "< 50ms", position: "top-10 left-20" },
    { label: "Latency", value: "12ms", position: "top-32 right-16" },
    { label: "Flight Hours", value: "10K+", position: "bottom-24 left-12" },
    { label: "Accuracy", value: "99.7%", position: "bottom-16 right-20" }
  ];

  return (
    <section id="ai-tech" className="py-20 relative overflow-hidden">
      {/* Enhanced neural network background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.3}s`, 
                  animationDuration: '3s',
                  transform: `scale(${neuralActive ? 1 : 0})`,
                  transition: 'transform 0.5s ease'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Radar sweep overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-green-400/20 rounded-full animate-radar-sweep origin-center"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/30 rounded-full animate-radar-sweep origin-center" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6 aviation-heading">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Analytics
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto cockpit-text">
            Edge computing and machine learning revolutionizing pilot training assessment
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced AI Visualization */}
          <div className="relative scroll-slide-left">
            <div className="glass-panel p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
              
              {/* Central AI Core with floating metrics */}
              <div className="relative z-10 text-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-4 animate-neural-rotate">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full flex items-center justify-center targeting-reticle">
                      <Brain className="w-12 h-12 text-white animate-data-pulse" />
                    </div>
                  </div>
                  
                  {/* Floating metrics bubbles */}
                  {metricsVisible && floatingMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className={`absolute ${metric.position} glass-panel p-2 animate-float-up targeting-reticle`}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <div className="text-xs text-cyan-400 aviation-heading">{metric.label}</div>
                      <div className="text-white font-bold text-sm">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 aviation-heading">Neural Processing Unit</h3>
                <p className="text-blue-200 cockpit-text">Real-time pilot performance analysis</p>
              </div>

              {/* Enhanced Data Flow Visualization */}
              <div className="grid grid-cols-2 gap-4">
                {dataPoints.map((point, index) => (
                  <div 
                    key={index}
                    className={`glass-panel p-4 border-2 transition-all duration-500 relative overflow-hidden ${
                      dataFlowStep === index ? 'border-cyan-400 bg-cyan-400/10' : 'border-blue-400/30'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <point.icon className={`w-4 h-4 ${point.color}`} />
                      <div className={`text-sm ${point.color} font-semibold aviation-heading`}>
                        {point.label}
                      </div>
                    </div>
                    <div className="text-white font-bold cockpit-text">{point.value}</div>
                    {dataFlowStep === index && (
                      <>
                        <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 animate-pulse"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced AI Features */}
          <div className="space-y-6 scroll-fade-in">
            <div className="glass-panel p-6 border-l-4 border-blue-400 hover:border-cyan-400 transition-colors duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center targeting-reticle">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white aviation-heading">Eye Tracking Analysis</h3>
              </div>
              <p className="text-blue-200 leading-relaxed cockpit-text">
                Advanced eye tracking technology monitors pilot attention patterns and scan behaviors, 
                providing insights into situational awareness and cognitive load.
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">120Hz</div>
                  <div className="text-xs text-blue-300">Sampling Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">±2°</div>
                  <div className="text-xs text-cyan-300">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 border-l-4 border-cyan-400 hover:border-green-400 transition-colors duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center targeting-reticle">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white aviation-heading">Performance Metrics</h3>
              </div>
              <p className="text-blue-200 leading-relaxed cockpit-text">
                Real-time collection and analysis of flight parameters, control inputs, and response times 
                to create comprehensive pilot performance profiles.
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">100+</div>
                  <div className="text-xs text-cyan-300">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-400">1ms</div>
                  <div className="text-xs text-teal-300">Resolution</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 border-l-4 border-green-400 hover:border-yellow-400 transition-colors duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center targeting-reticle">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white aviation-heading">Automated Debrief</h3>
              </div>
              <p className="text-blue-200 leading-relaxed cockpit-text">
                AI-generated detailed debrief reports with personalized recommendations, 
                trend analysis, and targeted training suggestions for continuous improvement.
              </p>
              <div className="mt-4 flex space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">99.7%</div>
                  <div className="text-xs text-green-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-400">30s</div>
                  <div className="text-xs text-emerald-300">Generation Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced AI Statistics */}
        <div className="mt-16 glass-panel p-8 scroll-zoom-in">
          <h3 className="text-3xl font-bold text-white mb-8 text-center aviation-heading">AI PERFORMANCE METRICS</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-blue-400 mb-2 animate-data-pulse">99.7%</div>
              <div className="text-blue-200 cockpit-text">Accuracy Rate</div>
              <div className="w-12 h-px bg-blue-400 mx-auto mt-2"></div>
            </div>
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-cyan-400 mb-2 animate-data-pulse" style={{ animationDelay: '0.5s' }}>&lt; 50ms</div>
              <div className="text-cyan-200 cockpit-text">Response Time</div>
              <div className="w-12 h-px bg-cyan-400 mx-auto mt-2"></div>
            </div>
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-green-400 mb-2 animate-data-pulse" style={{ animationDelay: '1s' }}>24/7</div>
              <div className="text-green-200 cockpit-text">Monitoring</div>
              <div className="w-12 h-px bg-green-400 mx-auto mt-2"></div>
            </div>
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-yellow-400 mb-2 animate-data-pulse" style={{ animationDelay: '1.5s' }}>100+</div>
              <div className="text-yellow-200 cockpit-text">Data Points</div>
              <div className="w-12 h-px bg-yellow-400 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechSection;
