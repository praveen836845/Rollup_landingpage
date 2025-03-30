import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "how-it-works", "difficulties", "docs"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Using GSAP for smooth scrolling (handled in gsap.ts)
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: sectionId } }));
    }
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-lg z-50 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xl font-semibold">Espresso Rollup</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleNavClick("intro")} 
            className={`pb-1 border-b-2 ${activeSection === "intro" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"} transition-colors`}
          >
            Rollup Intro
          </button>
          <button 
            onClick={() => handleNavClick("how-it-works")} 
            className={`pb-1 border-b-2 ${activeSection === "how-it-works" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"} transition-colors`}
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNavClick("difficulties")} 
            className={`pb-1 border-b-2 ${activeSection === "difficulties" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"} transition-colors`}
          >
            Difficulties
          </button>
          <button 
            onClick={() => handleNavClick("docs")} 
            className={`pb-1 border-b-2 ${activeSection === "docs" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"} transition-colors`}
          >
            Developer Docs
          </button>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-card py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => handleNavClick("intro")} className="text-foreground hover:text-primary transition-colors">
              Rollup Intro
            </button>
            <button onClick={() => handleNavClick("how-it-works")} className="text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => handleNavClick("difficulties")} className="text-foreground hover:text-primary transition-colors">
              Difficulties
            </button>
            <button onClick={() => handleNavClick("docs")} className="text-foreground hover:text-primary transition-colors">
              Developer Docs
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
