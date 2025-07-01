
import React, { useState } from 'react';
import { Search, Users, LayoutDashboard } from 'lucide-react';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Ready for Takeoff?
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Contact our aerospace engineering team to discuss your flight training requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Engineering Office</h4>
                    <p className="text-blue-200">Bangalore, Karnataka, India</p>
                    <p className="text-blue-300 text-sm">Advanced Flight Simulator Development Center</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Sales & Support</h4>
                    <p className="text-blue-200">sales@sixtymotionsystems.com</p>
                    <p className="text-blue-300 text-sm">24/7 Technical Support Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Demo Center</h4>
                    <p className="text-blue-200">Schedule a simulator demonstration</p>
                    <p className="text-blue-300 text-sm">Experience Level D realism firsthand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-400/30">
                  <div className="text-2xl font-bold text-blue-400 mb-1">FAA</div>
                  <div className="text-xs text-blue-200">Level D Certified</div>
                </div>
                <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-400/30">
                  <div className="text-2xl font-bold text-green-400 mb-1">DGCA</div>
                  <div className="text-xs text-green-200">India Approved</div>
                </div>
                <div className="text-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/30">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">ISO</div>
                  <div className="text-xs text-cyan-200">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-blue-200 text-sm font-semibold mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Airline / Flight School"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-blue-200 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-blue-200 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-blue-200 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-blue-200 text-sm font-semibold mb-2">
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="">Select your primary interest</option>
                  <option value="level-d-simulator">Level D Full Flight Simulator</option>
                  <option value="fms-trainer">FMS Trainer Systems</option>
                  <option value="ai-analytics">AI Analytics Suite</option>
                  <option value="custom-solution">Custom Training Solution</option>
                  <option value="technical-support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-blue-200 text-sm font-semibold mb-2">
                  Project Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Tell us about your training requirements, aircraft types, pilot capacity, and timeline..."
                ></textarea>
              </div>

              {/* Throttle-style submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-blue-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/25'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Initiating Contact...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>🚀 Launch Communication</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
