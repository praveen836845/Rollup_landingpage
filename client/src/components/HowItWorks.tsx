import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveDiagram from "@/components/ui/interactive-diagram";
import { ArrowRight, Network, Cpu, Globe, GitMerge, Workflow } from "lucide-react";

const HowItWorks = () => {
  const [currentExplanation, setCurrentExplanation] = useState(0);
  const [activeTab, setActiveTab] = useState("diagram");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Enhanced explanations based on provided Espresso content
  const explanations = [
    "The diagram shows how transactions flow through the Espresso Network ecosystem.",
    "L1 Blockchain (Ethereum) serves as the base layer where Espresso's state checkpoints and history are stored via a smart contract.",
    "Espresso Network provides a REST API for rollups to query and interact with the HotShot consensus layer.",
    "L2 Rollup includes provers, sequencers and full nodes that execute transactions and post state updates to L1.",
    "Clients submit transactions to the rollup's API endpoint, which forwards them to Espresso Network with a rollup identifier.",
    "Block commitments are persisted to L1 with proof of finalization by HotShot's fast consensus protocol.",
    "Espresso provides sequencing and confirmations for the rollup, while keeping rollup-specific logic separate from its core.",
    "Clients submit transactions that get forwarded to the Espresso Network with a rollup-specific numeric identifier.",
    "Rollup nodes use Espresso's REST API to stream block data, verify consensus proofs, and update state on L1."
  ];

  // Set animation state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // GSAP animation for tab switching
  useEffect(() => {
    if (containerRef.current) {
      const loadGsap = async () => {
        try {
          const gsap = (await import('gsap')).default;
          gsap.fromTo(
            `#${activeTab}-content`, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
          
          // Animated connection lines
          const connectingLinesContainer = document.querySelector('.lifecycle-connections');
          if (connectingLinesContainer && activeTab === "lifecycle") {
            const steps = document.querySelectorAll('.lifecycle-step');
            if (steps.length > 0) {
              const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              svg.setAttribute('class', 'absolute left-0 h-full w-20 z-0 overflow-visible pointer-events-none');
              connectingLinesContainer.appendChild(svg);
              
              for (let i = 0; i < steps.length - 1; i++) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('stroke', 'hsl(var(--primary)/0.4)');
                line.setAttribute('stroke-width', '2');
                line.setAttribute('stroke-dasharray', '4,4');
                svg.appendChild(line);
                
                const updateLines = () => {
                  const rect1 = steps[i].querySelector('.step-dot')?.getBoundingClientRect();
                  const rect2 = steps[i + 1].querySelector('.step-dot')?.getBoundingClientRect();
                  
                  if (rect1 && rect2 && connectingLinesContainer) {
                    const containerRect = connectingLinesContainer.getBoundingClientRect();
                    
                    const x1 = rect1.left + rect1.width / 2 - containerRect.left;
                    const y1 = rect1.top + rect1.height / 2 - containerRect.top;
                    const x2 = rect2.left + rect2.width / 2 - containerRect.left;
                    const y2 = rect2.top + rect2.height / 2 - containerRect.top;
                    
                    line.setAttribute('x1', x1.toString());
                    line.setAttribute('y1', y1.toString());
                    line.setAttribute('x2', x2.toString());
                    line.setAttribute('y2', y2.toString());
                  }
                };
                
                updateLines();
                window.addEventListener('resize', updateLines);
                
                // Animate the line
                gsap.to(line, {
                  strokeDashoffset: -16,
                  duration: 10,
                  repeat: -1,
                  ease: "linear"
                });
              }
            }
          }
        } catch (error) {
          console.error("Failed to load GSAP for tab animation:", error);
        }
      };
      
      loadGsap();
    }
  }, [activeTab]);

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background z-0"></div>
      <div className="absolute inset-0 z-0 opacity-5 overflow-hidden">
        <div className="hex-grid absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          <div className="text-center mb-20">
            <div className={`w-20 h-20 mx-auto flex items-center justify-center bg-primary/10 rounded-full mb-6 transform transition-all duration-700 ${isAnimated ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <Network className="w-10 h-10 text-primary" />
            </div>
            
            <h2 
              className={`text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-foreground to-accent transition-all duration-700 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Portal Architecture
            </h2>
            
            <p 
              className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-100 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Discover how Espresso Network provides a seamless bridge between L1 security 
              and L2 scalability through its innovative portal architecture
            </p>
          </div>
          
          <Tabs 
            defaultValue="diagram" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className={`mb-16 transition-all duration-700 delay-200 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="flex justify-center mb-10">
              <TabsList className="bg-background/50 backdrop-blur-xl border border-primary/20 p-1 rounded-full">
                <TabsTrigger 
                  value="diagram" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-8 py-3"
                >
                  <Cpu className="w-4 h-4 mr-2" />
                  <span>Portal Components</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="integration" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-8 py-3"
                >
                  <GitMerge className="w-4 h-4 mr-2" />
                  <span>Integration Points</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="lifecycle" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-8 py-3"
                >
                  <Workflow className="w-4 h-4 mr-2" />
                  <span>Transaction Flow</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="diagram" id="diagram-content">
              <Card className="backdrop-blur-xl bg-background/30 border border-primary/20 overflow-hidden shadow-lg shadow-primary/5 rounded-xl">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-semibold mb-8 text-foreground">Espresso Network Portal Architecture</h3>
                  
                  <div className="relative">
                    <InteractiveDiagram onElementClick={setCurrentExplanation} />
                    
                    <div className="mt-8 text-muted-foreground text-center min-h-24 bg-card/30 p-6 rounded-xl backdrop-blur-sm border border-primary/10 shadow-inner">
                      <p className="text-base md:text-lg">{explanations[currentExplanation]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integration" id="integration-content">
              <Card className="backdrop-blur-xl bg-background/30 border border-primary/20 shadow-lg shadow-primary/5 rounded-xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-semibold mb-8 text-foreground">Espresso ↔ Rollup Integration</h3>
                  
                  <div className="space-y-10">
                    <div className="bg-primary/5 backdrop-blur-sm p-8 rounded-xl border border-primary/20 shadow-inner">
                      <div className="w-14 h-14 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Globe className="h-7 w-7 text-primary" />
                      </div>
                      
                      <h4 className="text-xl font-medium mb-4 text-primary">Portal Architectural Approach</h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        In order to keep HotShot nodes themselves as generic and simple as possible, there is no 
                        rollup-specific logic in Espresso itself. Instead, Espresso presents a public REST API interface 
                        which rollups query to integrate with the network.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-background/30 p-6 rounded-xl border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 shadow-sm">
                          <h5 className="font-semibold mb-3 text-foreground flex items-center">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                              <Cpu className="h-4 w-4 text-primary" />
                            </div>
                            Prover / Sequencer Integration
                          </h5>
                          <p className="text-muted-foreground">
                            A rollup prover uses the API to stream block data from Espresso nodes, executing blocks as 
                            they are finalized to generate proofs. The prover also interacts with L1 to verify the 
                            sequencing of the corresponding block.
                          </p>
                        </div>
                        
                        <div className="bg-background/30 p-6 rounded-xl border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 shadow-sm">
                          <h5 className="font-semibold mb-3 text-foreground flex items-center">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                              <Network className="h-4 w-4 text-primary" />
                            </div>
                            Full Node / Sequencer Integration
                          </h5>
                          <p className="text-muted-foreground">
                            Rollup full nodes can stream blocks and verify consensus proofs directly from the 
                            HotShot APIs without L1 interaction, allowing state updates to be computed faster.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-background/20 backdrop-blur-sm p-8 rounded-xl border border-primary/20 hover:border-primary/30 transition-colors duration-300 shadow-sm">
                      <h4 className="text-xl font-medium mb-4 text-foreground">Transaction Submission Flow</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        The rollup interacts with HotShot via the submit API to add transactions to the mempool. 
                        Any rollup node serving a rollup API (e.g., JSON-RPC) can handle transaction submissions.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Submission requests include both the transaction and a rollup-specific numeric identifier. 
                        This identifier is associated with the transaction in the final sequence, allowing rollup 
                        proofs to easily exclude transactions intended for other rollups.
                      </p>
                      
                      <div className="mt-6 flex items-center justify-center">
                        <div className="flex items-center border border-primary/20 rounded-full p-1 px-3 text-sm text-muted-foreground bg-background/50">
                          <span>Client</span>
                          <ArrowRight className="mx-2 h-3 w-3 text-primary"/>
                          <span>Rollup API</span>
                          <ArrowRight className="mx-2 h-3 w-3 text-primary"/>
                          <span>Espresso Mempool</span>
                          <ArrowRight className="mx-2 h-3 w-3 text-primary"/>
                          <span>Consensus</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="lifecycle" id="lifecycle-content">
              <Card className="backdrop-blur-xl bg-background/30 border border-primary/20 shadow-lg shadow-primary/5 rounded-xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-semibold mb-8 text-foreground">Portal Transaction Lifecycle</h3>
                  
                  <div className="relative lifecycle-connections">
                    <div className="space-y-14 ml-8">
                      <div className="lifecycle-step relative border-l-0 pl-0">
                        <div className="step-dot absolute left-[-40px] top-4 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                          <span className="text-white font-bold">1</span>
                        </div>
                        
                        <div className="bg-background/40 backdrop-blur-xl p-8 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 shadow-sm">
                          <h4 className="text-xl font-medium mb-3 text-foreground">Transaction Submission</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            User sends a transaction to a chain's server (e.g., JSON-RPC service), which wraps and 
                            forwards it to Espresso Network's mempool along with a rollup-specific identifier. This
                            identifier ensures transactions are processed by the correct rollup.
                          </p>
                        </div>
                      </div>
                      
                      <div className="lifecycle-step relative border-l-0 pl-0">
                        <div className="step-dot absolute left-[-40px] top-4 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                          <span className="text-white font-bold">2</span>
                        </div>
                        
                        <div className="bg-background/40 backdrop-blur-xl p-8 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 shadow-sm">
                          <h4 className="text-xl font-medium mb-3 text-foreground">Block Creation</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            HotShot consensus includes the transaction in a block, which is broadcast to subscribers. 
                            Blocks contain transactions organized by namespace, with a unique commitment for verification.
                            The HotShot consensus algorithm ensures that blocks are created quickly and efficiently.
                          </p>
                        </div>
                      </div>
                      
                      <div className="lifecycle-step relative border-l-0 pl-0">
                        <div className="step-dot absolute left-[-40px] top-4 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                          <span className="text-white font-bold">3</span>
                        </div>
                        
                        <div className="bg-background/40 backdrop-blur-xl p-8 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 shadow-sm">
                          <h4 className="text-xl font-medium mb-3 text-foreground">Block Streaming & Execution</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Rollup nodes stream blocks via the REST API, executing transactions (with potential 
                            proof generation for ZK rollups). HotShot confirms transactions within seconds, providing 
                            strong finality guarantees. This decentralized approach ensures no single entity controls 
                            the sequencing.
                          </p>
                        </div>
                      </div>
                      
                      <div className="lifecycle-step relative border-l-0 pl-0">
                        <div className="step-dot absolute left-[-40px] top-4 w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                          <span className="text-white font-bold">4</span>
                        </div>
                        
                        <div className="bg-background/40 backdrop-blur-xl p-8 rounded-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 shadow-sm">
                          <h4 className="text-xl font-medium mb-3 text-foreground">State Checkpointing</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            A commitment to the block is persisted in the L1 sequencer contract with a quorum certificate. 
                            The rollup node sends state updates to L1, using the certified block commitment to verify that 
                            the state update corresponds to the correct block. This creates a secure bridge between 
                            Espresso Network and the L1 blockchain.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
