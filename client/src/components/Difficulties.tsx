import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Difficulties = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    walletAddress: "",
    projectDescription: "",
    tokensNeeded: "small"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, tokensNeeded: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We've received your request for test tokens. Our team will review it shortly.",
      duration: 5000,
    });
    // Reset form
    setFormData({
      walletAddress: "",
      projectDescription: "",
      tokensNeeded: "small"
    });
  };

  return (
    <section id="difficulties" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Challenges We're Facing</h2>
            <p className="text-xl text-muted-foreground">Current difficulties and solutions in our rollup development journey</p>
          </div>
          
          <Card className="backdrop-blur-md bg-card/70 rounded-xl p-6 md:p-10 border border-secondary/20 mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <h3 className="text-2xl font-semibold mb-4">Token Deployment Issues</h3>
                <p className="text-muted-foreground mb-4">We're currently experiencing challenges with deploying contracts on our rollup due to the absence of native tokens in our ecosystem. This is a common issue in early-stage rollup development.</p>
                <p className="text-muted-foreground">Without tokens in our rollup, we cannot pay for gas fees required to deploy and interact with smart contracts.</p>
              </div>
              
              <div className="md:w-1/2 md:border-l md:border-secondary/20 md:pl-6">
                <h3 className="text-2xl font-semibold mb-4">How to Get Tokens</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>Contact the rollup team to request test tokens from the faucet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>Use a bridge to transfer tokens from Ethereum or another supported chain to our rollup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>Participate in our upcoming testnet token distribution programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                    <span>Use gas sponsorship tools that may be available for certain contract deployments</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
          
          {/* <Card className="backdrop-blur-md bg-card/50 rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Request Test Tokens</h3>
            <p className="text-muted-foreground mb-6">Fill out this form to request test tokens for your development needs. Our team will review your request and provide tokens if appropriate.</p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="walletAddress">Wallet Address</Label>
                <Input 
                  type="text" 
                  id="walletAddress"
                  name="walletAddress"
                  placeholder="0x..." 
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  className="bg-background/50 border border-primary/20 focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea 
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Briefly describe your project..." 
                  rows={3}
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  className="bg-background/50 border border-primary/20 focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="tokensNeeded">Amount of Tokens Needed</Label>
                <Select 
                  value={formData.tokensNeeded} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="bg-background/50 border border-primary/20">
                    <SelectValue placeholder="Select amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small amount (for testing)</SelectItem>
                    <SelectItem value="medium">Medium amount (for development)</SelectItem>
                    <SelectItem value="large">Large amount (for extensive testing)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Submit Request
              </Button>
            </form>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Difficulties;
