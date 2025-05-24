
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) || document.querySelector(`[data-${sectionId}]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

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
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('services')} 
            className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('case-studies')} 
            className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}
          >
            Case Studies
          </button>
          <button 
            onClick={() => scrollToSection('innovations')} 
            className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}
          >
            Research
          </button>
          <button 
            onClick={() => scrollToSection('delivery')} 
            className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}
          >
            How We Work
          </button>
          <button 
            onClick={() => scrollToSection('why')} 
            className={`font-medium transition-colors ${isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'}`}
          >
            Why Us
          </button>
          <Button 
            className="bg-arivan-accent hover:bg-arivan-accent/90 text-white"
            onClick={() => scrollToSection('contact')}
          >
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
            <button 
              onClick={() => scrollToSection('services')} 
              className="font-medium text-arivan-primary hover:text-arivan-accent p-2 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="font-medium text-arivan-primary hover:text-arivan-accent p-2 text-left"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('innovations')} 
              className="font-medium text-arivan-primary hover:text-arivan-accent p-2 text-left"
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('delivery')} 
              className="font-medium text-arivan-primary hover:text-arivan-accent p-2 text-left"
            >
              How We Work
            </button>
            <button 
              onClick={() => scrollToSection('why')} 
              className="font-medium text-arivan-primary hover:text-arivan-accent p-2 text-left"
            >
              Why Us
            </button>
            <Button 
              className="bg-arivan-accent hover:bg-arivan-accent/90 text-white w-full"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
