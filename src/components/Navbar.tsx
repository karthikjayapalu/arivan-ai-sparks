
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in view with better detection
      const sections = ['services', 'case-studies', 'innovations', 'delivery', 'why'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Consider a section active if it's within the top 20% of the viewport
          return rect.top <= viewportHeight * 0.2 && rect.bottom >= viewportHeight * 0.2;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) || document.querySelector(`[data-${sectionId}]`);
    if (section) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const getNavLinkClass = (sectionId: string) => {
    const baseClass = `font-medium transition-colors duration-200 ${
      isScrolled ? 'text-arivan-primary hover:text-arivan-accent' : 'text-white/90 hover:text-white'
    }`;
    
    if (activeSection === sectionId) {
      return `${baseClass} ${isScrolled ? 'text-arivan-accent border-b-2 border-arivan-accent' : 'text-arivan-accent border-b-2 border-arivan-accent'}`;
    }
    
    return baseClass;
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
            className={getNavLinkClass('services')}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('case-studies')} 
            className={getNavLinkClass('case-studies')}
          >
            Case Studies
          </button>
          <button 
            onClick={() => scrollToSection('innovations')} 
            className={getNavLinkClass('innovations')}
          >
            Research
          </button>
          <button 
            onClick={() => scrollToSection('delivery')} 
            className={getNavLinkClass('delivery')}
          >
            How We Work
          </button>
          <button 
            onClick={() => scrollToSection('why')} 
            className={getNavLinkClass('why')}
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
              className={`font-medium p-2 text-left transition-colors ${
                activeSection === 'services' ? 'text-arivan-accent bg-arivan-accent/10' : 'text-arivan-primary hover:text-arivan-accent'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className={`font-medium p-2 text-left transition-colors ${
                activeSection === 'case-studies' ? 'text-arivan-accent bg-arivan-accent/10' : 'text-arivan-primary hover:text-arivan-accent'
              }`}
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('innovations')} 
              className={`font-medium p-2 text-left transition-colors ${
                activeSection === 'innovations' ? 'text-arivan-accent bg-arivan-accent/10' : 'text-arivan-primary hover:text-arivan-accent'
              }`}
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('delivery')} 
              className={`font-medium p-2 text-left transition-colors ${
                activeSection === 'delivery' ? 'text-arivan-accent bg-arivan-accent/10' : 'text-arivan-primary hover:text-arivan-accent'
              }`}
            >
              How We Work
            </button>
            <button 
              onClick={() => scrollToSection('why')} 
              className={`font-medium p-2 text-left transition-colors ${
                activeSection === 'why' ? 'text-arivan-accent bg-arivan-accent/10' : 'text-arivan-primary hover:text-arivan-accent'
              }`}
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
