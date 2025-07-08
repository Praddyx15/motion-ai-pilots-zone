
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <footer className="bg-gradient-to-r from-[#004443] to-[#2e9896] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e9896] to-transparent"></div>
      
      <div className="container-width py-16">
        <div className="text-center">
          <h2 className="heading-secondary text-white mb-12">
            Get in Touch
          </h2>
          
          <div className="glass-panel p-8 max-w-2xl mx-auto mb-12">
            <h3 className="heading-tertiary text-white mb-6">
              Sixty Motion
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#2e9896] mt-1 flex-shrink-0" />
                <p className="body-small text-gray-200">
                  2nd Floor, Property No. 44, Above Madame Tussauds, Regal Building, Connaught Place, New Delhi – 110001
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-[#2e9896]" />
                <p className="body-small text-gray-200">
                  +91 99991 59469
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-[#2e9896]" />
                <p className="body-small text-gray-200">
                  info@sixtymotion.com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="body-small text-gray-200">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
