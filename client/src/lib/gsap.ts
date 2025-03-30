import { useEffect } from 'react';

// We'll dynamically import GSAP to avoid bundling issues
let gsap: any;
let ScrollTrigger: any;

export const initializeAnimations = () => {
  // Dynamically import GSAP and ScrollTrigger
  const loadGsap = async () => {
    try {
      gsap = (await import('gsap')).default;
      ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Initialize animations
      setupScrollToSection();
      animateHeroElements();
      animateDiagramElements();
      animateLifecycleSteps();
      animateSectionTitles();
      animateButtonHoverEffects();
      animateFeatureCards();
    } catch (error) {
      console.error("Failed to load GSAP:", error);
    }
  };
  
  loadGsap();
  
  // Cleanup function for component unmounting
  return () => {
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill(false));
    }
    
    window.removeEventListener('scrollToSection', handleScrollToSection as EventListener);
  };
};

// Handle smooth scrolling to sections
const handleScrollToSection = (e: CustomEvent) => {
  const { targetId } = e.detail;
  const targetElement = document.getElementById(targetId);
  
  if (targetElement && gsap) {
    // Fix the scrollTo functionality
    const ScrollToPlugin = gsap.getPlugin('ScrollToPlugin');
    if (ScrollToPlugin) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: targetElement, offsetY: 80 },
        ease: "power3.inOut"
      });
    } else {
      // Fallback if plugin isn't available
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
};

const setupScrollToSection = () => {
  window.addEventListener('scrollToSection', handleScrollToSection as EventListener);
};

// Animate hero section elements
const animateHeroElements = () => {
  if (!gsap) return;
  
  const heroTimeline = gsap.timeline();
  
  heroTimeline
    .from("#intro h1", { opacity: 0, y: 50, duration: 0.8, ease: "power3.out" })
    .from("#intro p", { opacity: 0, y: 30, duration: 0.6, ease: "power3.out" }, "-=0.4")
    .from("#intro .flex.flex-col.md\\:flex-row", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.2");
};

// Animate diagram elements when they come into view
const animateDiagramElements = () => {
  if (!gsap || !ScrollTrigger) return;
  
  gsap.from('#how-it-works svg g', {
    scrollTrigger: {
      trigger: '#how-it-works svg',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
  });
};

// Animate the lifecycle steps with a staggered effect
const animateLifecycleSteps = () => {
  if (!gsap || !ScrollTrigger) return;
  
  gsap.from('.lifecycle-steps > div', {
    scrollTrigger: {
      trigger: '.lifecycle-steps',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -30,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out'
  });
};

// Animate section titles as they come into view
const animateSectionTitles = () => {
  if (!gsap || !ScrollTrigger) return;
  
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const heading = section.querySelector('h2');
    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  });
};

// Add hover effects to buttons
const animateButtonHoverEffects = () => {
  if (!gsap) return;
  
  const buttons = document.querySelectorAll('button, a.bg-primary, a.bg-transparent');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.03,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

// Animate feature cards
const animateFeatureCards = () => {
  if (!gsap || !ScrollTrigger) return;
  
  gsap.from('.feature-cards > div', {
    scrollTrigger: {
      trigger: '.feature-cards',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out'
  });
};
