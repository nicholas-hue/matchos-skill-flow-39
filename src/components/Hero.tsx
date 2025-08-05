import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-card text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Smart hiring tool for construction, manufacturing & trades
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hire the right <span className="text-primary">blue-collar workers</span> in days, not weeks
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stop wasting time on phone interviews. MatchOS automatically checks if candidates have the right skills, 
              certifications, and experience for construction, manufacturing, and trade jobs - before you meet them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-hero"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
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
              <img 
                src={heroImage} 
                alt="MatchOS AI Vetting Interface" 
                className="w-full h-auto rounded-lg shadow-lg float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;