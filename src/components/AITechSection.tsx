
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Users, CircleArrowUp } from 'lucide-react';

const AITechSection = () => {
  const [dataFlowStep, setDataFlowStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDataFlowStep(prev => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const dataPoints = [
    { label: "Eye Tracking", value: "120Hz", color: "text-blue-400" },
    { label: "Performance Metrics", value: "Real-time", color: "text-cyan-400" },
    { label: "Neural Analysis", value: "Edge Computing", color: "text-green-400" },
    { label: "Debrief Generation", value: "AI Powered", color: "text-yellow-400" }
  ];

  return (
    <section id="ai-tech" className="py-20 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="relative"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Analytics
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Edge computing and machine learning revolutionizing pilot training assessment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Visualization */}
          <div className="relative">
            <div className="glass-panel p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
              
              {/* Central AI Core */}
              <div className="relative z-10 text-center mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-4 animate-data-pulse">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AI</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Neural Processing Unit</h3>
                <p className="text-blue-200">Real-time pilot performance analysis</p>
              </div>

              {/* Data Flow Visualization */}
              <div className="grid grid-cols-2 gap-4">
                {dataPoints.map((point, index) => (
                  <div 
                    key={index}
                    className={`glass-panel p-4 border-2 transition-all duration-500 ${
                      dataFlowStep === index ? 'border-cyan-400 bg-cyan-400/10' : 'border-blue-400/30'
                    }`}
                  >
                    <div className={`text-sm ${point.color} font-semibold mb-1`}>
                      {point.label}
                    </div>
                    <div className="text-white font-bold">{point.value}</div>
                    {dataFlowStep === index && (
                      <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-6">
            <div className="glass-panel p-6 border-l-4 border-blue-400 hover:border-cyan-400 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Eye Tracking Analysis</h3>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Advanced eye tracking technology monitors pilot attention patterns and scan behaviors, 
                providing insights into situational awareness and cognitive load.
              </p>
            </div>

            <div className="glass-panel p-6 border-l-4 border-cyan-400 hover:border-green-400 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <CircleArrowUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Performance Metrics</h3>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Real-time collection and analysis of flight parameters, control inputs, and response times 
                to create comprehensive pilot performance profiles.
              </p>
            </div>

            <div className="glass-panel p-6 border-l-4 border-green-400 hover:border-yellow-400 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Automated Debrief</h3>
              </div>
              <p className="text-blue-200 leading-relaxed">
                AI-generated detailed debrief reports with personalized recommendations, 
                trend analysis, and targeted training suggestions for continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* AI Statistics */}
        <div className="mt-16 glass-panel p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">AI Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2 animate-data-pulse">99.7%</div>
              <div className="text-blue-200">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2 animate-data-pulse">< 50ms</div>
              <div className="text-cyan-200">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 animate-data-pulse">24/7</div>
              <div className="text-green-200">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2 animate-data-pulse">100+</div>
              <div className="text-yellow-200">Data Points</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechSection;
