
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#004443] to-[#2e9896] relative">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e9896] to-transparent"></div>
      
      <div className="container-width py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="heading-tertiary text-white mb-4">
              Motion Simulator Systems
            </h3>
            <p className="body-small text-gray-200 mb-6 leading-relaxed">
              Leading the future of aviation training with precision-engineered 
              motion simulators and AI-powered instruction systems.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="heading-tertiary text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="body-small text-gray-200 hover:text-white transition-colors">Flight Simulators</a></li>
              <li><a href="#" className="body-small text-gray-200 hover:text-white transition-colors">Motion Platforms</a></li>
              <li><a href="#" className="body-small text-gray-200 hover:text-white transition-colors">AI Training</a></li>
              <li><a href="#" className="body-small text-gray-200 hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="heading-tertiary text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#2e9896]" />
                <span className="body-small text-gray-200">info@motionsim.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#2e9896]" />
                <span className="body-small text-gray-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#2e9896]" />
                <span className="body-small text-gray-200">Aviation District, Tech City</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 mt-12 text-center">
          <p className="body-small text-gray-200">
            © 2024 Motion Simulator Systems. All rights reserved. | Precision. Innovation. Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
