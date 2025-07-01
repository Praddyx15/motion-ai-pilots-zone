
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Rotate3DIcon, Users, Zap, Eye, Brain } from 'lucide-react';

const ProductsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

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
      specs: { range: "±35°", fov: "180°", resolution: "4K", frequency: "60Hz" }
    },
    {
      id: 2,
      title: "FMS Trainer Systems",
      description: "iPad and web-based flight management system training",
      features: ["Airbus MCDU Simulation", "Cloud-Based", "Mobile Compatible", "Real-Time Updates"],
      icon: Rotate3DIcon,
      specs: { devices: "Multi", sync: "Real-time", compatibility: "Cross-platform", updates: "OTA" }
    },
    {
      id: 3,
      title: "AI Analytics Suite",
      description: "Edge computing powered pilot performance analysis",
      features: ["Eye Tracking", "Performance Analytics", "Auto Debrief", "Progress Tracking"],
      icon: Users,
      specs: { accuracy: "99.7%", latency: "<50ms", monitoring: "24/7", dataPoints: "100+" }
    }
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="heading-lg mb-6">
            <span className="brand-gradient">Simulator Technology</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Advanced flight training systems meeting FAA Level D certification standards
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2e9896] to-[#004443] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-card-index={index}
              className={`product-card glass-panel p-8 card-hover transition-all duration-700 ${
                visibleCards[index] ? 'animate-scaleIn' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2e9896] to-[#004443] rounded-xl flex items-center justify-center mb-6 animate-pulse-glow">
                <product.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="heading-sm mb-4">{product.title}</h3>
              
              <p className="body-md mb-6">{product.description}</p>

              <div className="space-y-3 mb-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#2e9896] rounded-full"></div>
                    <span className="body-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technical specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div key={i} className="glass-panel p-3">
                    <div className="text-xs brand-accent font-medium uppercase tech-mono">{key}</div>
                    <div className="text-black font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              <button className="btn-primary w-full">
                EXPLORE SYSTEM →
              </button>
            </div>
          ))}
        </div>

        {/* Technical specifications */}
        <div className="glass-panel p-8 scroll-scale">
          <h3 className="heading-md mb-8 text-center">TECHNICAL SPECIFICATIONS</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">±35°</div>
              <div className="body-sm">Motion Range</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">180°</div>
              <div className="body-sm">Visual FOV</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">4K</div>
              <div className="body-sm">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold brand-accent mb-2">60Hz</div>
              <div className="body-sm">Update Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
