import { Card } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";
import CodeBlock from "@/components/ui/code-block";

const DeveloperDocs = () => {
  const installCode = `To interact with our rollup, first install MetaMask (https://metamask.io/download/). 
  Then, add our custom RPC using the following steps:  

1. Open MetaMask and go to Settings > Networks > Add Network. `;

  const connectRollup = `

// Connect Rollup
2. Enter the following details in Add Network:  
   - Network Name: happyrollup 
   - New RPC URL: http://65.0.119.186:8547  
   - Chain ID: 78149
   - Currency Symbol: ETH
   - Block Explorer URL: N/A
3. Click Save, then switch to the newly added network.`;

  const ConnectWallet = `Once the network is added, connect your MetaMask wallet to our rollup to start interacting with smart
contracts.`

const RollUpDependencies = `
- RollupProxy Contract: 0xFfc94Fd608b26d4D1aC768d75BB27722483B0766  
- Inbox (proxy) Contract: 0xCEf542bD9E5c52Ebcf881E70a4229e4e2e02531F  
- Outbox (proxy) Contract: 0x6b49F3B7b9971f1634222211decfcd048A79F4dC  
- RollupEventInbox (proxy) Contract: 0xc4518Ad364E8d9FbE53CE81E5cba11051b463e38  
- ChallengeManager (proxy) Contract: 0xb7EB5f4A51DdCa63609BC8F015a5739B772E8cE9  
- AdminProxy Contract: 0x6a04b25c88Cb10950EBc2C3cF81E7C3c0C0f75F5  
- SequencerInbox (proxy) Contract: 0x530444cd79339418dD9B64A7662b0A83f71f2c0E  
- Bridge (proxy) Contract: 0x10edA64FAF0BB452771776Af8beAb703fe44020B  
- ValidatorUtils Contract: 0x919059e744bF9A0EBA78678b7B5E7db4AA02a370  
- ValidatorWalletCreator Contract: 0x166CFb12E3E0D1028a5257E04cEd709C7cf1b736`;

  return (
    <section id="docs" className="py-20 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Developer Documentation</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive resources to help you build on Omni Rollup
            </p>
          </div>

          <Card className="backdrop-blur-md bg-card/70 rounded-xl overflow-hidden border border-primary/20 p-6 md:p-10">
            <h3 className="text-2xl font-semibold mb-6">Getting Started with Omni Rollup</h3>

            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Prerequisites</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Basic knowledge of blockchain technology and rollups</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Familiarity with Ethereum and smart contracts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Node.js and npm installed</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Installation of MetaMask</h4>
              <CodeBlock code={installCode} language="bash" />
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Connect to Omni Rollup</h4>
              <CodeBlock code={connectRollup} language="typescript" />
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Connect your wallet</h4>
              <CodeBlock code={ConnectWallet} language="typescript" />
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-medium mb-3">Our rollup dependencies contracts</h4>
              <CodeBlock code={RollUpDependencies} language="typescript" />
            </div>

            <div>
              <h4 className="text-xl font-medium mb-3">Next Steps</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Explore the Integration Guide for deeper implementation details</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Review the API Reference for complete function documentation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Check out our example projects on GitHub for inspiration</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeveloperDocs;
