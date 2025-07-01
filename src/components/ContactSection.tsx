
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="hud-grid absolute inset-0 opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent opacity-50"></div>
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-trigger">
          <h2 className="heading-lg mb-6">
            <span className="text-teal-primary">MISSION</span>{' '}
            <span className="text-white">CONTROL</span>
          </h2>
          <p className="body-lg max-w-3xl mx-auto mb-8 text-slate-300">
            Ready to elevate your aviation training program? 
            Contact our team for a <span className="text-electric-blue font-semibold">custom simulator solution</span>.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-primary to-electric-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form - Cockpit Interface Style */}
          <div className="glass-cockpit p-8 scroll-slide-left">
            <h3 className="heading-md mb-8 text-white">
              <span className="text-teal-primary">FLIGHT</span> PLAN REQUEST
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                    PILOT NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                    TRANSMISSION
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none transition-colors"
                    placeholder="your.email@aviation.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                  AIRLINE/ORGANIZATION
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none transition-colors"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2 tech-mono">
                  MISSION BRIEFING
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-teal-primary/30 rounded-lg text-white placeholder-slate-500 focus:border-teal-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your training requirements..."
                  required
                ></textarea>
              </div>

              {/* Throttle-style Submit Button */}
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-teal-primary to-electric-blue text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-primary/30 hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="tech-mono tracking-wider">INITIATE CONTACT</span>
                </div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="scroll-slide-right space-y-8">
            <div className="glass-hud p-6 card-3d-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-primary to-slate-700 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">HEADQUARTERS</h4>
                  <p className="body-md text-slate-300">
                    Bangalore, Karnataka<br />
                    India - Aviation Hub
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-hud p-6 card-3d-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-slate-700 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">DIRECT LINE</h4>
                  <p className="body-md text-slate-300">
                    +91 (80) 4567-8900<br />
                    24/7 Technical Support
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-hud p-6 card-3d-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-radar-green to-slate-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">DATA LINK</h4>
                  <p className="body-md text-slate-300">
                    contact@sixtymotionsystems.com<br />
                    Response within 4 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-hud p-6 card-3d-hover">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cockpit-amber to-slate-700 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="heading-sm mb-2 text-white">OPERATIONAL HOURS</h4>
                  <p className="body-md text-slate-300">
                    Monday - Friday: 09:00 - 18:00 IST<br />
                    Emergency Support: 24/7
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

export default ContactSection;
