import { useState, useEffect } from 'react';

interface InteractiveDiagramProps {
  onElementClick: (index: number) => void;
}

const InteractiveDiagram = ({ onElementClick }: InteractiveDiagramProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleElementClick = (index: number) => {
    setHighlightedIndex(index);
    onElementClick(index);
  };

  return (
    <svg className="w-full h-auto" viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background elements */}
      <defs>
        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary)/0.05)" />
          <stop offset="100%" stopColor="hsl(var(--primary)/0.01)" />
        </linearGradient>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill="url(#gridGradient)" />
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--primary)/0.1)" strokeWidth="0.5" />
        </pattern>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background grid */}
      <rect width="900" height="500" fill="url(#grid)" />
      
      {/* L1 Blockchain */}
      <g 
        onClick={() => handleElementClick(1)}
        opacity={highlightedIndex !== null && highlightedIndex !== 1 ? 0.6 : 1}
        className="cursor-pointer transition-all duration-300"
        transform={animate ? "translate(0,0)" : "translate(0,-30)"}
        style={{ transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
      >
        <rect 
          x="350" 
          y="30" 
          width="200" 
          height="70" 
          rx="10" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--primary)/0.8)" 
          strokeWidth="2.5" 
          filter="url(#glow)"
        />
        <text 
          x="450" 
          y="65" 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="18" 
          fontWeight="600"
        >
          L1 Blockchain
        </text>
        <text 
          x="450" 
          y="85" 
          textAnchor="middle" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
        >
          Ethereum
        </text>
      </g>
      
      {/* Espresso Network Core Components */}
      <g 
        onClick={() => handleElementClick(2)}
        opacity={highlightedIndex !== null && highlightedIndex !== 2 ? 0.6 : 1}
        className="cursor-pointer transition-all duration-300"
        transform={animate ? "translate(0,0)" : "translate(-30,0)"}
        style={{ transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s" }}
      >
        <rect 
          x="300" 
          y="180" 
          width="300" 
          height="120" 
          rx="12" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2.5" 
          filter="url(#glow)"
        />
        <text 
          x="450" 
          y="210" 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="20" 
          fontWeight="600"
        >
          Espresso Network
        </text>
        
        {/* HotShot */}
        <rect 
          x="320" 
          y="230" 
          width="120" 
          height="50" 
          rx="6" 
          fill="hsl(var(--secondary)/0.2)" 
          stroke="hsl(var(--secondary))" 
          strokeWidth="1.5" 
        />
        <text 
          x="380" 
          y="260" 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="500"
        >
          HotShot
        </text>
        
        {/* REST API */}
        <rect 
          x="460" 
          y="230" 
          width="120" 
          height="50" 
          rx="6" 
          fill="hsl(var(--accent)/0.2)" 
          stroke="hsl(var(--accent))" 
          strokeWidth="1.5" 
        />
        <text 
          x="520" 
          y="260" 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="14" 
          fontWeight="500"
        >
          REST API
        </text>
      </g>
      
      {/* Rollup Components */}
      <g 
        onClick={() => handleElementClick(3)}
        opacity={highlightedIndex !== null && highlightedIndex !== 3 ? 0.6 : 1}
        className="cursor-pointer transition-all duration-300"
        transform={animate ? "translate(0,0)" : "translate(0,30)"}
        style={{ transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s" }}
      >
        <rect 
          x="300" 
          y="380" 
          width="300" 
          height="90" 
          rx="12" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--accent))" 
          strokeWidth="2.5" 
          filter="url(#glow)"
        />
        <text 
          x="450" 
          y="410" 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="18" 
          fontWeight="600"
        >
          L2 Rollup
        </text>
        
        {/* Inside components */}
        <rect 
          x="320" 
          y="430" 
          width="80" 
          height="30" 
          rx="4" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--muted-foreground))" 
          strokeWidth="1" 
        />
        <text 
          x="360" 
          y="450" 
          textAnchor="middle" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
        >
          Prover
        </text>
        
        <rect 
          x="410" 
          y="430" 
          width="80" 
          height="30" 
          rx="4" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--muted-foreground))" 
          strokeWidth="1" 
        />
        <text 
          x="450" 
          y="450" 
          textAnchor="middle" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
        >
          Sequencer
        </text>
        
        <rect 
          x="500" 
          y="430" 
          width="80" 
          height="30" 
          rx="4" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--muted-foreground))" 
          strokeWidth="1" 
        />
        <text 
          x="540" 
          y="450" 
          textAnchor="middle" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
        >
          Full Node
        </text>
      </g>
      
      {/* Client */}
      <g 
        onClick={() => handleElementClick(4)}
        opacity={highlightedIndex !== null && highlightedIndex !== 4 ? 0.6 : 1}
        className="cursor-pointer transition-all duration-300"
        transform={animate ? "translate(0,0)" : "translate(-30,0)"}
        style={{ transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s" }}
      >
        <rect 
          x="70" 
          y="395" 
          width="140" 
          height="60" 
          rx="10" 
          fill="hsl(var(--card))" 
          stroke="hsl(var(--muted-foreground))" 
          strokeWidth="2" 
        />
        <text 
          x="140" 
          y="425" 
          textAnchor="middle" 
          fill="hsl(var(--foreground))" 
          fontSize="16" 
          fontWeight="500"
        >
          Client / dApp
        </text>
      </g>
      
      {/* Line: L1 to Espresso */}
      <g 
        onClick={() => handleElementClick(5)}
        opacity={highlightedIndex !== null && highlightedIndex !== 5 ? 0.6 : 1}
        className={`cursor-pointer transition-opacity duration-300 ${animate ? 'visible' : 'invisible'}`}
        style={{ transition: "visibility 0s linear 0.4s, opacity 0.3s linear 0.4s" }}
      >
        <path 
          d="M450 100 L450 180" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2.5" 
          strokeDasharray="4" 
          className="network-line" 
        />
        <text 
          x="465" 
          y="140" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
        >
          Block Commitments & Checkpoints
        </text>
      </g>
      
      {/* Line: Espresso to L2 */}
      <g 
        onClick={() => handleElementClick(6)}
        opacity={highlightedIndex !== null && highlightedIndex !== 6 ? 0.6 : 1}
        className={`cursor-pointer transition-opacity duration-300 ${animate ? 'visible' : 'invisible'}`}
        style={{ transition: "visibility 0s linear 0.5s, opacity 0.3s linear 0.5s" }}
      >
        <path 
          d="M450 300 L450 380" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2.5" 
          className="network-line" 
        />
        <text 
          x="520" 
          y="340" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
        >
          Sequencing & Confirmations
        </text>
        
        <path 
          d="M400 300 L400 380" 
          stroke="hsl(var(--accent))" 
          strokeWidth="1.5" 
          className="network-line" 
          strokeDasharray="4" 
        />
        <text 
          x="360" 
          y="340" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
          textAnchor="end"
        >
          Block Streaming
        </text>
      </g>
      
      {/* Line: Client to L2 */}
      <g 
        onClick={() => handleElementClick(7)}
        opacity={highlightedIndex !== null && highlightedIndex !== 7 ? 0.6 : 1}
        className={`cursor-pointer transition-opacity duration-300 ${animate ? 'visible' : 'invisible'}`}
        style={{ transition: "visibility 0s linear 0.6s, opacity 0.3s linear 0.6s" }}
      >
        <path 
          d="M210 425 L300 425" 
          stroke="hsl(var(--accent))" 
          strokeWidth="2.5" 
          className="network-line" 
        />
        <text 
          x="255" 
          y="415" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12"
          textAnchor="middle"
        >
          Transactions
        </text>
      </g>
      
      {/* Line: L2 to L1 */}
      <g 
        onClick={() => handleElementClick(8)}
        opacity={highlightedIndex !== null && highlightedIndex !== 8 ? 0.6 : 1}
        className={`cursor-pointer transition-opacity duration-300 ${animate ? 'visible' : 'invisible'}`}
        style={{ transition: "visibility 0s linear 0.7s, opacity 0.3s linear 0.7s" }}
      >
        <path 
          d="M340 380 L340 100" 
          stroke="hsl(var(--destructive))" 
          strokeWidth="2.5" 
          strokeDasharray="6" 
          className="network-line" 
        />
        <text 
          x="310" 
          y="180" 
          fill="hsl(var(--muted-foreground))" 
          fontSize="12" 
          textAnchor="end"
        >
          State Updates & Proofs
        </text>
      </g>

      {/* Add some animation to make the diagram more engaging */}
      <style>
        {`
          @keyframes dash {
            to {
              stroke-dashoffset: -20;
            }
          }
          
          .network-line {
            stroke-dasharray: 6;
            animation: dash 15s linear infinite;
          }
          
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          
          .pulse {
            animation: pulse 3s infinite;
          }
        `}
      </style>
    </svg>
  );
};

export default InteractiveDiagram;
