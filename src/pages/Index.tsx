
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero3D from '../components/Hero3D';
import FeatureCard from '../components/FeatureCard';
import About3D from '../components/About3D';
import { Monitor, Cpu, Zap, Shield } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    console.log('Index component mounted');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
      );
      console.log('Found animated elements:', animatedElements.length);
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <Hero3D />
      </section>

      {/* Features Section */}
      <section id="simulator" className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6 fade-in">
              <span className="text-white">Advanced</span> <span className="text-primary-blue">Technology</span>
            </h2>
            <p className="body-text text-gray-300 max-w-2xl mx-auto fade-in">
              Experience the future of flight simulation with our cutting-edge technology platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Monitor}
              title="Level D Simulators"
              description="FAA certified full-flight simulators with 6DOF motion systems."
              color="blue"
            />
            <FeatureCard
              icon={Cpu}
              title="AI Analytics"
              description="Real-time pilot performance analysis and training optimization."
              color="green"
            />
            <FeatureCard
              icon={Zap}
              title="Motion Systems"
              description="Advanced hydraulic motion platforms for realistic flight dynamics."
              color="amber"
            />
            <FeatureCard
              icon={Shield}
              title="Safety First"
              description="Comprehensive safety protocols and emergency training scenarios."
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* AI Tech Section */}
      <section id="ai-tech" className="section-padding bg-gray-900/50">
        <div className="container-width">
          <div className="text-center">
            <h2 className="heading-secondary mb-6 fade-in">
              <span className="text-primary-blue">Artificial Intelligence</span>
            </h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto fade-in">
              Our AI-powered training platform analyzes pilot performance in real-time, 
              providing personalized feedback and adaptive training scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="section-padding">
        <div className="container-width">
          <div className="text-center">
            <h2 className="heading-secondary mb-6 fade-in">
              <span className="text-white">Training</span> <span className="text-primary-blue">Platform</span>
            </h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto fade-in">
              Comprehensive training management system with progress tracking, 
              certification management, and detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About3D />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900/50">
        <div className="container-width">
          <div className="text-center">
            <h2 className="heading-secondary mb-6 fade-in">
              <span className="text-white">Get in</span> <span className="text-primary-blue">Touch</span>
            </h2>
            <p className="body-text text-gray-300 max-w-2xl mx-auto mb-8 fade-in">
              Ready to transform your pilot training program? Contact us to learn more about our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
              <button className="btn-primary">
                Schedule Demo
              </button>
              <button className="btn-secondary">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
