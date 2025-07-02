
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Zap, Activity } from 'lucide-react';

const CockpitContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isEngaged, setIsEngaged] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEngaged(true);
    console.log('Mission initiated:', formData);
    setTimeout(() => setIsEngaged(false), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="hud-grid absolute inset-0 opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-teal-primary/5 via-transparent to-electric-blue/5"></div>
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-teal-primary">MISSION</span>{' '}
            <span className="text-white">CONTROL CENTER</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8 text-slate-300">
            Initiate contact with our aviation command center for 
            <span className="text-electric-blue font-semibold"> custom simulator solutions</span>.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* MCDU-Style Contact Form */}
          <div className="glass-cockpit p-8 scroll-slide-left relative overflow-hidden">
            {/* MCDU Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-md text-white">
                <span className="text-teal-primary">FLIGHT</span> MANAGEMENT COMPUTER
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-radar-green rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-cockpit-amber rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* MCDU-Style Input Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                    PILOT DESIGNATION
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all font-mono"
                    placeholder="CAPT. JOHN DOE"
                    required
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-teal-primary rounded-full animate-pulse"></div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                    COMM FREQUENCY
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all font-mono"
                    placeholder="PILOT@AIRLINE.COM"
                    required
                  />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                  AIRLINE/ORGANIZATION
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all font-mono"
                  placeholder="AVIATION TRAINING INSTITUTE"
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-radar-green rounded-full animate-pulse"></div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                  MISSION BRIEFING
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all resize-none font-mono"
                  placeholder="SPECIFY TRAINING REQUIREMENTS, AIRCRAFT TYPE, AND DEPLOYMENT TIMELINE..."
                  required
                ></textarea>
                <div className="absolute top-0 right-0 w-2 h-2 bg-cockpit-amber rounded-full animate-pulse"></div>
              </div>

              {/* Throttle-Style Submit Button */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isEngaged}
                  className={`group relative w-full bg-gradient-to-r from-teal-primary to-electric-blue text-white font-bold py-6 px-8 rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-teal-primary/30 hover:scale-105 transform-gpu ${
                    isEngaged ? 'animate-pulse scale-105' : ''
                  }`}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {isEngaged ? (
                        <Activity className="w-6 h-6 animate-spin" />
                      ) : (
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      )}
                      <span className="tech-mono tracking-wider text-lg">
                        {isEngaged ? 'ENGAGING...' : 'INITIATE CONTACT'}
                      </span>
                    </div>
                    <Zap className={`w-5 h-5 ${isEngaged ? 'animate-pulse' : 'group-hover:animate-pulse'}`} />
                  </div>
                  
                  {/* Button Enhancement Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-electric-blue/20 to-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </button>
              </div>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="scroll-slide-right space-y-8">
            <div className="glass-hud p-6 card-3d-hover border-l-4 border-teal-primary">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-primary to-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">COMMAND HEADQUARTERS</h4>
                  <p className="body-md text-slate-300">
                    Bangalore Aerospace Hub<br />
                    Karnataka, India - 560001<br />
                    <span className="text-teal-primary font-mono">LAT: 12.9716° N, LON: 77.5946° E</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-hud p-6 card-3d-hover border-l-4 border-electric-blue">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-slate-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">DIRECT COMMUNICATION</h4>
                  <p className="body-md text-slate-300">
                    Primary: +91 (80) 4567-8900<br />
                    Emergency: +91 (80) 2400-HELP<br />
                    <span className="text-electric-blue font-mono">24/7 TECHNICAL SUPPORT</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-hud p-6 card-3d-hover border-l-4 border-radar-green">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-radar-green to-slate-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">DATA TRANSMISSION</h4>
                  <p className="body-md text-slate-300">
                    Primary: contact@sixtymotionsystems.com<br />
                    Technical: support@sixtymotionsystems.com<br />
                    <span className="text-radar-green font-mono">RESPONSE &lt; 4 HOURS</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-hud p-6 card-3d-hover border-l-4 border-cockpit-amber">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cockpit-amber to-slate-700 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">OPERATIONAL STATUS</h4>
                  <p className="body-md text-slate-300">
                    Active: Monday - Friday: 09:00 - 18:00 IST<br />
                    Standby: Saturday - Sunday: On-Call<br />
                    <span className="text-cockpit-amber font-mono">EMERGENCY: 24/7/365</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CockpitContactForm;
