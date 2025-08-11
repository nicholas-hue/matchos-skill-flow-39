import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import WorkflowAnimation from "./WorkflowAnimation";
import WorkflowAnimation2 from "./WorkflowAnimation2";
import WorkflowAnimation3 from "./WorkflowAnimation3";
import WorkflowAnimation4 from "./WorkflowAnimation4";
import AnimationProgressIndicator from "./AnimationProgressIndicator";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const headlines = [
    "Hire the right <span class='text-primary'>skilled workers</span> in days, not weeks",
    "Automate your <span class='text-primary'>hiring process</span> with simple workflow tool", 
    "Transform <span class='text-primary'>hiring chaos</span> into organized excellence"
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hasStartedCycle, setHasStartedCycle] = useState(false);
  const [cycleComplete, setCycleComplete] = useState(false);

  const { heroRef, isInHeroSection, lockScroll, unlockScroll } = useScrollLock();

  const animationComponents = [
    WorkflowAnimation,
    WorkflowAnimation2,
    WorkflowAnimation3,
    WorkflowAnimation4
  ];

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

  // Animation cycling and scroll lock logic
  useEffect(() => {
    if (!isInHeroSection || cycleComplete) return;

    if (!hasStartedCycle) {
      setHasStartedCycle(true);
      lockScroll();
    }

    const animationDuration = 6000; // 6 seconds per animation
    const progressInterval = 50; // Update progress every 50ms

    const progressTimer = setInterval(() => {
      setAnimationProgress(prev => {
        const newProgress = prev + (100 / (animationDuration / progressInterval));
        return Math.min(newProgress, 100);
      });
    }, progressInterval);

    const animationTimer = setTimeout(() => {
      setCurrentAnimation(prev => {
        const nextAnimation = prev + 1;
        if (nextAnimation >= animationComponents.length) {
          // Completed all animations
          setCycleComplete(true);
          unlockScroll();
          return 0;
        }
        setAnimationProgress(0);
        return nextAnimation;
      });
    }, animationDuration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(animationTimer);
    };
  }, [currentAnimation, isInHeroSection, hasStartedCycle, cycleComplete, lockScroll, unlockScroll, animationComponents.length]);

  const handleSkipAnimations = () => {
    setCycleComplete(true);
    unlockScroll();
    setCurrentAnimation(0);
    setAnimationProgress(0);
  };

  return (
    <section ref={heroRef} className="pt-24 pb-20 bg-gradient-subtle min-h-screen flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Smart hiring tool for construction, manufacturing & trades
            </div>
            
            <h1 
              className={`text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-300 ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
              }`}
              dangerouslySetInnerHTML={{ __html: headlines[currentHeadline] }}
            />
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              First, we qualify. Then, you hire. With PeopleOS you can build intelligent screening workflows that eliminate poor-fit candidates upfront, with skills tests, certification uploads, and role-specific questions, so you can stop wasting time on phone interviews.
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
                <div className="text-2xl font-bold text-foreground">$4,700</div>
                <div className="text-sm text-muted-foreground">Average cost per hire saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">42 days</div>
                <div className="text-sm text-muted-foreground">Reduced to 2 days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">90%</div>
                <div className="text-sm text-muted-foreground">Time reduction</div>
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

      {/* Animation Progress Indicator */}
      {isInHeroSection && hasStartedCycle && !cycleComplete && (
        <AnimationProgressIndicator
          currentIndex={currentAnimation}
          total={animationComponents.length}
          progress={animationProgress}
          onSkip={handleSkipAnimations}
        />
      )}
    </section>
  );
};

export default Hero;