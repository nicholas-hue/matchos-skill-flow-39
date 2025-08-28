import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import WorkflowAnimation from "./WorkflowAnimation";
import WorkflowAnimation2 from "./WorkflowAnimation2";
import WorkflowAnimation3 from "./WorkflowAnimation3";
import WorkflowAnimation4 from "./WorkflowAnimation4";
import IsometricHiringAnimation from "./IsometricHiringAnimation";
import { useHeroScrollLock } from "@/hooks/useHeroScrollLock";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SparklesCore } from "@/components/ui/sparkles";

const Hero = () => {
  const headlines = [
    "Take the guesswork out of <span class='text-primary'>hiring</span> with AI-powered assessments",
    "Make better <span class='text-primary'>hiring decisions</span> faster with engaging skills tests", 
    "Find <span class='text-primary'>motivated applicants</span> and reduce time to hire"
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const animationComponents = [
    WorkflowAnimation,
    WorkflowAnimation2,
    WorkflowAnimation3,
    WorkflowAnimation4,
    IsometricHiringAnimation
  ];

  const { heroRef, currentAnimation, isLocked, allAnimationsViewed, hasCompletedCycle, isInHeroSection } = useHeroScrollLock(animationComponents.length);
  const AnimationComponent = animationComponents[currentAnimation];

  // Headline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [headlines.length]);


  return (
    <section ref={heroRef} className="pt-24 pb-20 bg-gradient-subtle min-h-screen flex items-center relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={50}
          className="w-full h-full"
          particleColor="hsl(var(--primary))"
          speed={0.5}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              AI-powered retail recruitment software for smarter hiring
            </div>
            
            <h1 
              className={`text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-300 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
              dangerouslySetInnerHTML={{ __html: headlines[currentHeadline] }}
            />
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              See who can actually do the job with engaging, mobile-friendly assessments that test real skills. Surface the most qualified candidates based on how they perform tasks specific to your business while reducing employee turnover.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-hero"
                asChild
              >
                <Link to="/get-started">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-foreground">65%</div>
                <div className="text-sm text-muted-foreground">Reduction in employee turnover</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">Time saved on resume review</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">92%</div>
                <div className="text-sm text-muted-foreground">Improved job performance prediction</div>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up-delay lg:pl-8">
            <div className="relative">
              <div className="transition-all duration-500 ease-in-out">
                <AnimationComponent />
              </div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Abstract geometric shapes */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-accent rotate-45 opacity-70"></div>
              <div className="absolute bottom-12 right-12 w-6 h-6 border-2 border-primary rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll instruction overlay */}
      {isLocked && !hasCompletedCycle && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
            <p className="text-sm text-muted-foreground mb-1">
              Animation {currentAnimation + 1} of {animationComponents.length}
            </p>
            <p className="text-xs text-muted-foreground">
              Scroll down to continue
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;