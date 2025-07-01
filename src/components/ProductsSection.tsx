
import React from 'react';
import { LayoutDashboard, Rotate3DIcon, Users } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Level D Full Flight Simulator",
      description: "Complete 6DOF motion system with original cockpit replication",
      features: ["6 Degrees of Freedom", "Real Cockpit Controls", "Visual System", "Motion Cueing"],
      icon: LayoutDashboard,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "FMS Trainer Systems",
      description: "iPad and web-based flight management system training",
      features: ["Airbus MCDU Simulation", "Cloud-Based", "Mobile Compatible", "Real-Time Updates"],
      icon: Rotate3DIcon,
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      id: 3,
      title: "AI Analytics Suite",
      description: "Edge computing powered pilot performance analysis",
      features: ["Eye Tracking", "Performance Analytics", "Auto Debrief", "Progress Tracking"],
      icon: Users,
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Simulator Technology
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced flight training systems meeting FAA Level D certification standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="glass-panel p-8 hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {product.title}
              </h3>
              
              <p className="text-blue-200 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-data-pulse"></div>
                    <span className="text-blue-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-blue-400/20">
                <button className="text-cyan-400 hover:text-white transition-colors text-sm font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical specifications */}
        <div className="mt-16 glass-panel p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">±35°</div>
              <div className="text-blue-200">Motion Range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">180°</div>
              <div className="text-cyan-200">Visual FOV</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4K</div>
              <div className="text-green-200">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">60Hz</div>
              <div className="text-yellow-200">Update Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
