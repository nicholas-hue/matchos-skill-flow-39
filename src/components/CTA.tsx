import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-20 bg-gradient-hero relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to revolutionize your skilled trades hiring?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of companies already saving time and money with PeopleOS. 
            Start your free trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
              asChild
            >
              <Link to="/get-started">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              asChild
            >
              <Link to="/get-started">Schedule Demo</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Companies trust PeopleOS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/80">Candidates screened</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/80">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;