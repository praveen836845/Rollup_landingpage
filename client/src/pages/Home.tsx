import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RollupIntro from "@/components/RollupIntro";
import HowItWorks from "@/components/HowItWorks";
import Difficulties from "@/components/Difficulties";
import DeveloperDocs from "@/components/DeveloperDocs";
import { initializeAnimations } from "@/lib/gsap";

const Home = () => {
  useEffect(() => {
    // Initialize GSAP animations
    const cleanup = initializeAnimations();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <RollupIntro />
        <HowItWorks />
        <Difficulties />
        <DeveloperDocs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
