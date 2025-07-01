
import React, { useEffect, useState } from 'react';
import { Brain, Cpu, Eye, Zap } from 'lucide-react';

const AITechSection = () => {
  const [dataFlowStep, setDataFlowStep] = useState(0);
  const [neuralActive, setNeuralActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDataFlowStep(prev => (prev + 1) % 4);
    }, 1500);

    const neuralTimer = setTimeout(() => setNeuralActive(true), 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(neuralTimer);
    };
  }, []);

  const dataPoints = [
    { label: "Eye Tracking", value: "120Hz", icon: Eye },
    { label: "Performance Metrics", value: "Real-time", icon: Zap },
    { label: "Neural Analysis", value: "Edge Computing", icon: Brain },
    { label: "Debrief Generation", value: "AI Powered", icon: Cpu }
  ];

  const features = [
    {
      title: "Eye Tracking Analysis",
      description: "Advanced eye tracking technology monitors pilot attention patterns and scan behaviors, providing insights into situational awareness and cognitive load.",
      icon: Eye,
      stats: [
        { label: "Sampling Rate", value: "120Hz" },
        { label: "Accuracy", value: "±2°" }
      ]
    },
    {
      title: "Performance Metrics",
      description: "Real-time collection and analysis of flight parameters, control inputs, and response times to create comprehensive pilot performance profiles.",
      icon: Zap,
      stats: [
        { label: "Data Points", value: "100+" },
        { label: "Resolution", value: "1ms" }
      ]
    },
    {
      title: "Automated Debrief",
      description: "AI-generated detailed debrief reports with personalized recommendations, trend analysis, and targeted training suggestions.",
      icon: Brain,
      stats: [
        { label: "Accuracy", value: "99.7%" },
        { label: "Generation Time", value: "30s" }
      ]
    }
  ];

  return (
    <section id="ai-tech" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-lg mb-6">
            <span className="brand-gradient">AI-Powered Analytics</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Edge computing and machine learning revolutionizing pilot training assessment
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2e9896] to-[#004443] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AI Visualization */}
          <div className="scroll-slide-left">
            <div className="glass-panel p-8 relative">
              {/* Central AI Core */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-full flex items-center justify-center mb-4 animate-float">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-full flex items-center justify-center opacity-80">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="heading-sm mb-2">Neural Processing Unit</h3>
                <p className="body-md">Real-time pilot performance analysis</p>
              </div>

              {/* Data Flow Visualization */}
              <div className="grid grid-cols-2 gap-4">
                {dataPoints.map((point, index) => (
                  <div 
                    key={index}
                    className={`glass-panel p-4 border-2 transition-all duration-500 ${
                      dataFlowStep === index ? 'brand-border bg-[#2e9896]/10' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <point.icon className="w-4 h-4 brand-accent" />
                      <div className="text-sm brand-accent font-medium">
                        {point.label}
                      </div>
                    </div>
                    <div className="text-black font-bold">{point.value}</div>
                    {dataFlowStep === index && (
                      <div className="w-full h-1 bg-gradient-to-r from-[#2e9896] to-[#004443] rounded-full mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-6 scroll-slide-right">
            {features.map((feature, index) => (
              <div key={index} className="glass-panel p-6 card-hover">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="heading-sm">{feature.title}</h3>
                </div>
                <p className="body-md mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex space-x-4">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold brand-accent">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Statistics */}
        <div className="mt-16 glass-panel p-8 scroll-scale">
          <h3 className="heading-md mb-8 text-center">AI PERFORMANCE METRICS</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">99.7%</div>
              <div className="body-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">&lt; 50ms</div>
              <div className="body-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">24/7</div>
              <div className="body-sm">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">100+</div>
              <div className="body-sm">Data Points</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechSection;
