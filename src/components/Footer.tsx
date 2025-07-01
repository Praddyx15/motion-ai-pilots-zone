
import React from 'react';
import { LayoutDashboard, Users, Search } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-blue-400/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">60</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Sixty Motion Systems</h1>
                <p className="text-sm text-blue-300">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
              India's premier aerospace technology company building FAA Level D certified flight simulators 
              with cutting-edge AI analytics and motion systems.
            </p>
            <div className="text-sm text-blue-300">
              <p className="mb-1">🇮🇳 Made in India | Global Standards</p>
              <p>🔬 Precision. Performance. Piloted by AI.</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Level D Simulators</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">FMS Trainers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Analytics</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Motion Systems</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Visual Systems</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Upgrades</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Consultation</a></li>
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="glass-panel p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4 text-center">Certified Excellence</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">FAA</span>
              </div>
              <span className="text-blue-200 text-sm">Level D Certification</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">DGCA</span>
              </div>
              <span className="text-green-200 text-sm">India Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">ISO</span>
              </div>
              <span className="text-cyan-200 text-sm">Quality Management</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-blue-400/20">
          <p className="text-blue-300 text-sm">
            © 2024 Sixty Motion Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-blue-300">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
          </div>
        </div>
      </div>

      {/* Background animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
