import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bolt, Users, Cloud, Zap, Shield, Clock, Layers, Code, ArrowRightCircle, Globe, Server, Lock } from "lucide-react";

const RollupIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const portalRingsRef = useRef<HTMLDivElement>(null);
  
  // Add animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    // Animate floating particles and more complex animations
    const loadGsap = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        // Create floating particle elements with more particles and variety
        const particlesContainer = document.querySelector('.particles-container');
        if (particlesContainer) {
          for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 3 + 0.5;
            const isGlowing = i % 8 === 0;
            
            particle.className = `absolute rounded-full ${isGlowing ? 'animate-glow' : ''}`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Varied colors with some being brighter
            const opacity = Math.random() * 0.3 + (isGlowing ? 0.7 : 0.3);
            particle.style.backgroundColor = i % 5 === 0 
              ? `rgba(var(--accent-rgb), ${opacity})` 
              : `rgba(var(--primary-rgb), ${opacity})`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.filter = isGlowing ? 'blur(1px)' : 'none';
            particlesContainer.appendChild(particle);
            
            // Animate each particle with more varied and complex paths
            gsap.to(particle, {
              x: `${(Math.random() - 0.5) * 300}`,
              y: `${(Math.random() - 0.5) * 300}`,
              opacity: Math.random() * 0.7 + 0.2,
              duration: Math.random() * 20 + 10,
              repeat: -1,
              yoyo: true,
              ease: i % 2 === 0 ? "sine.inOut" : "power1.inOut",
              delay: Math.random() * 5
            });
          }
        }
        
        // Create 3D-looking portal rings with more animation
        const portalContainer = document.querySelector('.portal-rings');
        if (portalContainer) {
          for (let i = 0; i < 5; i++) {
            const ring = document.createElement('div');
            
            // Create fancier rings with more properties
            ring.className = 'absolute rounded-full border-2';
            
            // Different colors for different rings
            if (i === 0) {
              ring.style.borderColor = 'rgba(var(--primary-rgb), 0.6)';
              ring.style.filter = 'blur(0.5px) drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.3))';
            } else if (i === 1) {
              ring.style.borderColor = 'rgba(var(--accent-rgb), 0.4)';
            } else {
              ring.style.borderColor = 'rgba(var(--primary-rgb), 0.25)';
            }
            
            const size = 200 + (i * 80);
            ring.style.width = `${size}px`;
            ring.style.height = `${size}px`;
            ring.style.left = `50%`;
            ring.style.top = `50%`;
            ring.style.transform = `translate(-50%, -50%)`;
            portalContainer.appendChild(ring);
            
            // Animate each ring with more complex animations
            gsap.to(ring, {
              scale: 1.1 + (i * 0.04),
              opacity: i === 0 ? 0.8 : 0.4 - (i * 0.06),
              rotation: i % 2 === 0 ? 20 : -20,
              duration: 3 + (i * 0.7),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.4
            });
          }
          
          // Create pulsing central portal circle
          const portalCore = document.createElement('div');
          portalCore.className = 'absolute rounded-full bg-primary/20';
          portalCore.style.width = '120px';
          portalCore.style.height = '120px';
          portalCore.style.left = '50%';
          portalCore.style.top = '50%';
          portalCore.style.transform = 'translate(-50%, -50%)';
          portalCore.style.filter = 'blur(10px) drop-shadow(0 0 15px rgba(var(--primary-rgb), 0.5))';
          portalContainer.appendChild(portalCore);
          
          gsap.to(portalCore, {
            scale: 1.3,
            opacity: 0.7,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
        
        // Title animation (glitching portal effect)
        if (titleRef.current) {
          const title = titleRef.current;
          
          // Split text into spans for letter animation
          const createSplitText = () => {
            const text = title.textContent || '';
            title.textContent = '';
            
            text.split('').forEach((char, i) => {
              const span = document.createElement('span');
              span.textContent = char;
              span.style.display = 'inline-block';
              span.className = 'letter-span';
              title.appendChild(span);
              
              // Random glitch effect on some letters
              if (Math.random() > 0.8) {
                gsap.to(span, {
                  y: -3,
                  opacity: 0.7,
                  color: 'rgb(var(--accent-rgb))',
                  duration: 0.2,
                  repeat: -1,
                  repeatDelay: Math.random() * 5 + 3,
                  yoyo: true,
                  ease: "power1.inOut"
                });
              }
            });
          };
          
          createSplitText();
        }
        
        // Animate hexagon grid with acceleration and more effects
        gsap.to('.hex-grid', {
          rotate: 360,
          duration: 140,
          repeat: -1,
          ease: "none"
        });
        
        // More complex pulse animation for feature cards
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, i) => {
          // Hover effect with GSAP
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              boxShadow: '0 0 30px 5px rgba(var(--primary-rgb)/0.4)',
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: '0 0 15px 2px rgba(var(--primary-rgb)/0.2)',
              duration: 0.5,
              ease: "power2.out"
            });
          });
          
          // Initial subtle pulse
          gsap.to(card, {
            boxShadow: '0 0 25px 3px rgba(var(--primary-rgb)/0.25)',
            duration: 2 + (i * 0.5),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.8
          });
        });
        
        // Connect cards with animated lines
        const connectingLinesContainer = document.querySelector('.connecting-lines');
        if (connectingLinesContainer && cards.length > 0) {
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('class', 'absolute inset-0 w-full h-full z-0 pointer-events-none');
          connectingLinesContainer.appendChild(svg);
          
          for (let i = 0; i < cards.length - 1; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('stroke', 'rgba(var(--primary-rgb), 0.15)');
            line.setAttribute('stroke-width', '1.5');
            line.setAttribute('stroke-dasharray', '5,5');
            svg.appendChild(line);
            
            // Animate connection lines
            const updateLine = () => {
              const rect1 = cards[i].getBoundingClientRect();
              const rect2 = cards[i + 1].getBoundingClientRect();
              const containerRect = connectingLinesContainer.getBoundingClientRect();
              
              const x1 = rect1.left + rect1.width / 2 - containerRect.left;
              const y1 = rect1.top + rect1.height / 2 - containerRect.top;
              const x2 = rect2.left + rect2.width / 2 - containerRect.left;
              const y2 = rect2.top + rect2.height / 2 - containerRect.top;
              
              line.setAttribute('x1', x1.toString());
              line.setAttribute('y1', y1.toString());
              line.setAttribute('x2', x2.toString());
              line.setAttribute('y2', y2.toString());
            };
            
            updateLine();
            window.addEventListener('resize', updateLine);
            
            // Animate the line with glowing pulse
            gsap.to(line, {
              strokeDashoffset: -20,
              duration: 15,
              repeat: -1,
              ease: "linear"
            });
            
            // Pulse opacity for data flow effect
            gsap.to(line, {
              opacity: 0.4,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.3
            });
          }
        }
        
        // AWS Cloud section animation
        const awsCards = document.querySelectorAll('.aws-card');
        awsCards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2 + (i * 0.15),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100px",
              toggleActions: "play none none none"
            }
          });
        });
        
        // Network Glow Effect
        const networkSection = document.querySelector('.network-section');
        if (networkSection) {
          gsap.from(networkSection, {
            backgroundPosition: '0% 0%',
            duration: 20,
            repeat: -1,
            ease: "sine.inOut"
          });
        }
        
      } catch (error) {
        console.error("Failed to load GSAP animations:", error);
      }
    };
    
    loadGsap();
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="intro" ref={sectionRef} className="pt-24 pb-20 md:pt-32 md:pb-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="hex-grid absolute w-[200%] h-[200%] top-[-50%] left-[-50%]">
          {/* Defined in CSS */}
        </div>
      </div>
      
      {/* Portal Rings */}
      <div ref={portalRingsRef} className="portal-rings absolute inset-0 z-0 overflow-hidden">
        {/* Rings generated by JS */}
      </div>
      
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background z-0"></div>
      
      {/* Animated Particles */}
      <div className="particles-container absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Connecting Lines */}
      <div className="connecting-lines absolute inset-0 z-0"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`mb-4 w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center transform transition-all duration-700 ${isAnimated ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} shadow-lg shadow-primary/20`}>
            <Layers className="h-10 w-10 text-primary animate-pulse" />   
          </div>
          
          
  {/* Main Heading */}
  <h1 className="text-6xl md:text-7xl font-bold mb-10 mt-20 leading-tight">
  <span className="text-white">
    Ultra-Fast <span className="text-primary">Layer 2</span> Rollup
  </span>
  {/* <span className="block mt-6 text-5xl md:text-6xl text-white font-medium">
    Rollup Technology
  </span> */}
</h1>
  
  {/* Description Paragraph */}
  
  <div className={`mb-12 max-w-4xl mx-auto text-center ${isAnimated ? 'opacity-100' : 'opacity-0'} transition-all duration-700 delay-100`}>
  <p className="text-xl md:text-2xl mt-20 text-white/90 mb-8">
    Built on Espresso Network and Arbitrum Sepolia L2, our rollup delivers fast pre-confirmations, reliable execution, and seamless scalability.
  </p>
  
  <div className="space-y-4 p-6">
    <div className="flex items-center">
      <div className="flex-shrink-0 mt-1 mr-3 text-primary">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-white/80">
        <span className="font-semibold text-primary">Fast Pre-Confirmations</span> – Espresso's shared sequencer ensures instant transaction ordering.
      </p>
    </div>
    
    <div className="flex items-center">
      <div className="flex-shrink-0 mt-1 mr-3 text-primary">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-white/80">
        <span className="font-semibold text-primary">Reliable & Low-Cost Execution</span> – Arbitrum Sepolia provides secure, efficient L2 scaling.
      </p>
    </div>
    
    <div className="flex items-center">
      <div className="flex-shrink-0 mt-1 mr-3 text-primary">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-white/80">
        <span className="font-semibold text-primary">MEV Protection & Fair Ordering</span> – Prevents front-running and enhances user experience.
      </p>
    </div>
    
    <div className="flex items-center">
      <div className="flex-shrink-0 mt-1 mr-3 text-primary">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-lg md:text-xl text-white/80">
        <span className="font-semibold text-primary">Interoperability</span> – Seamless cross-rollup communication for better composability.
      </p>
    </div>
  </div>
</div>
  
  {/* Buttons */}
  <div 
    className={`flex flex-col md:flex-row gap-5 justify-center mt-20 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
  >
    {/* <Button 
      onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: 'how-it-works' } }))}
      size="lg"
      className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-7 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl group"
    >
      <span>Portal Architecture</span>
      <ArrowRightCircle className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button> */}
    
    {/* <Button
      onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: { targetId: 'docs' } }))}
      variant="outline"
      size="lg"
      className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-7 rounded-full shadow-lg hover:shadow-xl group"
    >
      <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
      <span>Developer Portal</span>
    </Button> */}
  </div>
 
  <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Card 1 - Fast Confirmations */}

  <Card 
    className={`backdrop-blur-md bg-white/5 border border-primary/30 hover:border-primary/50 transition-all duration-500 delay-300 relative overflow-hidden rounded-xl shadow-lg ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  >
    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-full"></div>
    <CardContent className="p-8 text-center relative z-10">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:rotate-12">
        <Bolt className="h-10 w-10 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">Fast Confirmations</h3>
      <p className="text-white/80">HotShot consensus confirms transactions within seconds, enabling high-speed bridges with minimal risk even with centralized sequencers</p>
    </CardContent>
  </Card>
  
  {/* Card 2 - Decentralized Sequencing */}
  <Card 
    className={`backdrop-blur-md bg-white/5 border border-primary/30 hover:border-primary/50 transition-all duration-500 delay-400 relative overflow-hidden rounded-xl shadow-lg ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  >
    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-full"></div>
    <CardContent className="p-8 text-center relative z-10">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:rotate-12">
        <Users className="h-10 w-10 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">Decentralized Sequencing</h3>
      <p className="text-white/80">100+ nodes run the Espresso Network in a decentralized manner with plans to scale to permissionless proof-of-stake participation</p>
    </CardContent>
  </Card>
  
  {/* Card 3 - Low-Cost Data Availability */}
  <Card 
    className={`backdrop-blur-md bg-white/5 border border-primary/30 hover:border-primary/50 transition-all duration-500 delay-500 relative overflow-hidden rounded-xl shadow-lg ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
  >
    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-full"></div>
    <CardContent className="p-8 text-center relative z-10">
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:rotate-12">
        <Cloud className="h-10 w-10 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">Low-Cost Data Availability</h3>
      <p className="text-white/80">A cheaper alternative to Ethereum for DA with strong availability guarantees, improving scalability for any integration</p>
    </CardContent>
  </Card>
</div>

          
          {/* Espresso Network Section */}
          <div className={`network-section mt-32 p-10 backdrop-blur-xl bg-background/20 rounded-xl border border-primary/20 overflow-hidden relative transition-all duration-700 delay-600 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background/5 z-0"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/10">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Global Confirmation Network
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Espresso's Global Confirmation Network is a shared source of truth providing secure confirmations 
                for transaction ordering and data across chains, leveraging the BFT consensus protocol called HotShot.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <div className="bg-background/30 p-6 rounded-xl border border-primary/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary"/>
                    <span>Enhanced Cross-Chain Security</span>
                  </h4>
                  <p className="text-muted-foreground">
                    The confirmation guarantees of HotShot mirror that of Ethereum L1. Once a transaction is confirmed, 
                    an adversary would need to control at least 1/3rd of the overall stake to revert it, making it 
                    extremely secure.
                  </p>
                </div>
                
                <div className="bg-background/30 p-6 rounded-xl border border-primary/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary"/>
                    <span>Seconds vs Minutes</span>
                  </h4>
                  <p className="text-muted-foreground">
                    With HotShot, bridging between rollups can be done in seconds, as opposed to waiting 15 minutes for 
                    transactions to finalize on Ethereum L1, with similar security guarantees. This dramatically improves 
                    user experience for cross-chain applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AWS Deployment Section */}
          <div className={`mt-32 transition-all duration-700 delay-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-14 h-14 bg-background/50 rounded-full border border-primary/20 flex items-center justify-center shadow-lg">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Enterprise-Ready Deployment
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="aws-card backdrop-blur-md bg-background/20 border-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <Cloud className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">AWS Deployment</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                   Omni Rollup is ready for AWS deployment, leveraging the platform's scale, reliability and security 
                    features for production-grade blockchain infrastructure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="aws-card backdrop-blur-md bg-background/20 border-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Enterprise Security</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Benefits from AWS's compliance certifications, encryption protocols, and advanced monitoring to ensure 
                    maximum security for your blockchain data and operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="aws-card backdrop-blur-md bg-background/20 border-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Scalable Infrastructure</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dynamically scale your node infrastructure based on network demands, with automated deployment 
                    processes that minimize operational overhead and maximize uptime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional CSS is placed in index.css */}
    </section>
  );
};

export default RollupIntro;
