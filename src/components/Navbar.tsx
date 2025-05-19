
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-arivan-primary' : 'text-white'}`}>
            Arivan<span className="text-arivan-accent">.ai</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}>
            Services
          </a>
          <a href="#innovations" className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}>
            Innovations
          </a>
          <a href="#delivery" className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}>
            How We Deliver
          </a>
          <a href="#why" className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}>
            Why Us
          </a>
          <Button className="bg-arivan-accent hover:bg-arivan-accent/90 text-white">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-arivan-primary' : 'text-white'}`}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#services" className="font-medium text-arivan-primary hover:text-arivan-accent p-2" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#innovations" className="font-medium text-arivan-primary hover:text-arivan-accent p-2" onClick={() => setIsMobileMenuOpen(false)}>
              Innovations
            </a>
            <a href="#delivery" className="font-medium text-arivan-primary hover:text-arivan-accent p-2" onClick={() => setIsMobileMenuOpen(false)}>
              How We Deliver
            </a>
            <a href="#why" className="font-medium text-arivan-primary hover:text-arivan-accent p-2" onClick={() => setIsMobileMenuOpen(false)}>
              Why Us
            </a>
            <Button className="bg-arivan-accent hover:bg-arivan-accent/90 text-white w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
