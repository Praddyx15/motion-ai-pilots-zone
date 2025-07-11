
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Subtle glow around section */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e9896]/10 via-transparent to-[#004443]/10 rounded-3xl"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-12" data-aos="fade-up">
            Get in Touch
          </h2>
          
          <div className="glass-panel p-8 max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="heading-tertiary text-foreground mb-8 font-montserrat">
              Sixty Motion
            </h3>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4" data-aos="slide-right" data-aos-delay="400">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="body-text text-muted-foreground leading-relaxed">
                    2nd Floor, Property No. 44, Above Madame Tussauds, Regal Building, Connaught Place, New Delhi – 110001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-aos="slide-right" data-aos-delay="500">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="body-text text-muted-foreground text-lg">
                  +91 99991 59469
                </p>
              </div>
              
              <div className="flex items-center space-x-4" data-aos="slide-right" data-aos-delay="600">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="body-text text-muted-foreground text-lg">
                  info@sixtymotion.com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-border" data-aos="fade-up" data-aos-delay="800">
          <p className="body-small text-muted-foreground">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
