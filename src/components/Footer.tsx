
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-arivan-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold mb-4">Arivan<span className="text-arivan-accent">.ai</span></h2>
            <p className="mb-4 text-arivan-light/90 max-w-md">
              Global AI solutions powered by Bengaluru's expertise. 
              We build cutting-edge AI systems that help businesses automate, optimize, and innovate.
            </p>
            <div>
              <Button className="bg-arivan-accent hover:bg-arivan-accent/90 text-white">
                Let's Build Your AI Future
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-arivan-light/90 hover:text-white transition-colors">Services</a></li>
              <li><a href="#innovations" className="text-arivan-light/90 hover:text-white transition-colors">Innovations</a></li>
              <li><a href="#delivery" className="text-arivan-light/90 hover:text-white transition-colors">How We Deliver</a></li>
              <li><a href="#why" className="text-arivan-light/90 hover:text-white transition-colors">Why Arivan.ai</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-arivan-light/90">
              Have questions about our AI solutions? Reach out to us today and let's discuss how we can transform your business.
            </p>
            <div className="mt-4">
              <Button variant="outline" className="border-arivan-light/50 text-white hover:bg-arivan-light/10">
                contact@arivan.ai
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-arivan-light/20 pt-6 text-center text-sm text-arivan-light/70">
          <p>&copy; {currentYear} Arivan.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
