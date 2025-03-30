import { Link } from "wouter";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Espresso Rollup</span>
            </div>
            <p className="text-muted-foreground mt-2">Building the future of scalable blockchain infrastructure</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="https://github.com/GillHapp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dhruv245/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-card text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Espresso Rollup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
