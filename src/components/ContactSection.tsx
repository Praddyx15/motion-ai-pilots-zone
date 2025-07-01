
import React, { useState } from 'react';
import { Search, Users, LayoutDashboard, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="system-grid absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-green-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6 aviation-heading">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Ready for Takeoff?
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto cockpit-text">
            Contact our aerospace engineering team to discuss your flight training requirements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8 scroll-slide-left">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-white mb-6 aviation-heading">MISSION CONTROL</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 targeting-reticle">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <div className="group-hover:text-blue-300 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-1 aviation-heading">Engineering Office</h4>
                    <p className="text-blue-200 cockpit-text">Bangalore, Karnataka, India</p>
                    <p className="text-blue-300 text-sm cockpit-text">Advanced Flight Simulator Development Center</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0 targeting-reticle">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="group-hover:text-cyan-300 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-1 aviation-heading">Sales & Support</h4>
                    <p className="text-blue-200 cockpit-text">sales@sixtymotionsystems.com</p>
                    <p className="text-blue-300 text-sm cockpit-text">24/7 Technical Support Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0 targeting-reticle">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="group-hover:text-green-300 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-1 aviation-heading">Demo Center</h4>
                    <p className="text-blue-200 cockpit-text">Schedule a simulator demonstration</p>
                    <p className="text-blue-300 text-sm cockpit-text">Experience Level D realism firsthand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Certifications */}
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-white mb-6 aviation-heading">CERTIFICATIONS</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-colors targeting-reticle">
                  <div className="text-2xl font-bold text-blue-400 mb-1 aviation-heading">FAA</div>
                  <div className="text-xs text-blue-200 cockpit-text">Level D Certified</div>
                </div>
                <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-colors targeting-reticle">
                  <div className="text-2xl font-bold text-green-400 mb-1 aviation-heading">DGCA</div>
                  <div className="text-xs text-green-200 cockpit-text">India Approved</div>
                </div>
                <div className="text-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-colors targeting-reticle">
                  <div className="text-2xl font-bold text-cyan-400 mb-1 aviation-heading">ISO</div>
                  <div className="text-xs text-cyan-200 cockpit-text">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form - Cockpit Style */}
          <div className="glass-panel p-8 scroll-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white aviation-heading">COMMUNICATION PANEL</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-data-pulse status-indicator"></div>
                <span className="text-green-400 text-sm aviation-heading">ONLINE</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-blue-200 text-sm font-semibold mb-2 aviation-heading">
                    COMPANY / ORGANIZATION *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 cockpit-text hover:border-blue-400/50"
                    placeholder="Airline / Flight School"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-blue-200 text-sm font-semibold mb-2 aviation-heading">
                    PILOT NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 cockpit-text hover:border-blue-400/50"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-blue-200 text-sm font-semibold mb-2 aviation-heading">
                    EMAIL FREQUENCY *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 cockpit-text hover:border-blue-400/50"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-blue-200 text-sm font-semibold mb-2 aviation-heading">
                    RADIO FREQUENCY
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/30 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 cockpit-text hover:border-blue-400/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-blue-200 text-sm font-semibold mb-2 aviation-heading">
                  MISSION OBJECTIVE *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-blue-400/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 cockpit-text hover:border-blue-400/50"
                >
                  <option value="">Select your primary mission</option>
                  <option value="level-d-simulator">Level D Full Flight Simulator</option>
                  <option value="fms-trainer">FMS Trainer Systems</option>
                  <option value="ai-analytics">AI Analytics Suite</option>
                  <option value="custom-solution">Custom Training Solution</option>
                  <option value="technical-support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-200 text-sm font-semibold mb-2 aviation-heading">
                  MISSION BRIEFING
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none cockpit-text hover:border-blue-400/50"
                  placeholder="Tell us about your training requirements, aircraft types, pilot capacity, and timeline..."
                ></textarea>
              </div>

              {/* Enhanced Throttle-style submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                  isSubmitting
                    ? 'bg-blue-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'throttle-button'
                } aviation-heading`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>ESTABLISHING CONTACT...</span>
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center space-x-3">
                    <CheckCircle className="w-6 h-6" />
                    <span>TRANSMISSION SUCCESSFUL</span>
                  </span>
                ) : submitStatus === 'error' ? (
                  <span className="flex items-center justify-center space-x-3">
                    <AlertCircle className="w-6 h-6" />
                    <span>TRANSMISSION FAILED - RETRY</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-3">
                    <Send className="w-6 h-6" />
                    <span>🚀 LAUNCH COMMUNICATION</span>
                  </span>
                )}
              </button>

              {/* Success message overlay */}
              {submitStatus === 'success' && (
                <div className="glass-panel p-4 border border-green-400/50 animate-float-up">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="aviation-heading">CLEARED FOR TAKEOFF - We'll contact you within 24 hours</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
