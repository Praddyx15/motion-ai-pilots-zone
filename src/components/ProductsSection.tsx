
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Rotate3DIcon, Users, Zap, Eye, Brain } from 'lucide-react';

const ProductsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      title: "Level D Full Flight Simulator",
      description: "Complete 6DOF motion system with original cockpit replication",
      features: ["6 Degrees of Freedom", "Real Cockpit Controls", "Visual System", "Motion Cueing"],
      icon: LayoutDashboard,
      gradient: "from-blue-500 to-cyan-500",
      specs: { range: "±35°", fov: "180°", resolution: "4K", frequency: "60Hz" },
      bgIcon: Zap
    },
    {
      id: 2,
      title: "FMS Trainer Systems",
      description: "iPad and web-based flight management system training",
      features: ["Airbus MCDU Simulation", "Cloud-Based", "Mobile Compatible", "Real-Time Updates"],
      icon: Rotate3DIcon,
      gradient: "from-cyan-500 to-teal-500",
      specs: { devices: "Multi", sync: "Real-time", compatibility: "Cross-platform", updates: "OTA" },
      bgIcon: Brain
    },
    {
      id: 3,
      title: "AI Analytics Suite",
      description: "Edge computing powered pilot performance analysis",
      features: ["Eye Tracking", "Performance Analytics", "Auto Debrief", "Progress Tracking"],
      icon: Users,
      gradient: "from-teal-500 to-green-500",
      specs: { accuracy: "99.7%", latency: "<50ms", monitoring: "24/7", dataPoints: "100+" },
      bgIcon: Eye
    }
  ];

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Enhanced background with parallax */}
      <div className="absolute inset-0 opacity-10">
        <div className="system-grid absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6 aviation-heading">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Simulator Technology
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto cockpit-text">
            Advanced flight training systems meeting FAA Level D certification standards
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-card-index={index}
              className={`product-card glass-panel p-8 transition-all duration-700 group cursor-pointer relative overflow-hidden ${
                visibleCards[index] ? 'animate-zoom-reveal' : 'opacity-0 scale-75'
              } ${activeCard === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background icon */}
              <product.bgIcon className="absolute top-4 right-4 w-32 h-32 text-white opacity-5 rotate-12" />
              
              {/* Main content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 targeting-reticle`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors aviation-heading">
                  {product.title}
                </h3>
                
                <p className="text-blue-200 mb-6 leading-relaxed cockpit-text">
                  {product.description}
                </p>

                <div className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-data-pulse status-indicator"></div>
                      <span className="text-blue-100 text-sm cockpit-text">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technical specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={i} className="bg-black/20 rounded-lg p-3 border border-blue-400/20">
                      <div className="text-xs text-blue-400 uppercase aviation-heading">{key}</div>
                      <div className="text-white font-semibold">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-blue-400/20">
                  <button className="cockpit-button w-full py-3 text-cyan-400 hover:text-white transition-colors text-sm font-semibold aviation-heading">
                    EXPLORE SYSTEM →
                  </button>
                </div>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced technical specifications */}
        <div className="glass-panel p-8 scroll-zoom-in">
          <h3 className="text-3xl font-bold text-white mb-8 text-center aviation-heading">TECHNICAL SPECIFICATIONS</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-blue-400 mb-2 animate-data-pulse">±35°</div>
              <div className="text-blue-200 cockpit-text">Motion Range</div>
              <div className="w-12 h-px bg-blue-400 mx-auto mt-2"></div>
            </div>
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-cyan-400 mb-2 animate-data-pulse" style={{ animationDelay: '0.5s' }}>180°</div>
              <div className="text-cyan-200 cockpit-text">Visual FOV</div>
              <div className="w-12 h-px bg-cyan-400 mx-auto mt-2"></div>
            </div>
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-green-400 mb-2 animate-data-pulse" style={{ animationDelay: '1s' }}>4K</div>
              <div className="text-green-200 cockpit-text">Resolution</div>
              <div className="w-12 h-px bg-green-400 mx-auto mt-2"></div>
            </div>
            <div className="text-center targeting-reticle">
              <div className="text-4xl font-bold text-yellow-400 mb-2 animate-data-pulse" style={{ animationDelay: '1.5s' }}>60Hz</div>
              <div className="text-yellow-200 cockpit-text">Update Rate</div>
              <div className="w-12 h-px bg-yellow-400 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
