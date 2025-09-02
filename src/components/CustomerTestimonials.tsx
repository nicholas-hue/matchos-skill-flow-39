import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const CustomerTestimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "PeopleOS reduced our screening time by 85% and improved candidate quality significantly. The AI-powered questions are spot-on for our industry.",
      name: "Marcus Williams",
      role: "HR Director",
      company: "BuildCorp",
      avatar: "MW"
    },
    {
      quote: "We went from taking 6 weeks to fill positions to just 2 days. The AI screening is incredibly accurate and saves us countless hours.",
      name: "Ashley Rodriguez", 
      role: "Operations Manager",
      company: "TechFlow Industries",
      avatar: "AR"
    },
    {
      quote: "Finding qualified electricians used to be our biggest challenge. Now we have a pipeline of pre-screened candidates ready to work.",
      name: "Brandon Thompson",
      role: "Talent Acquisition Lead", 
      company: "PowerTech Solutions",
      avatar: "BT"
    },
    {
      quote: "The certification verification feature alone saved us hundreds of hours. No more chasing down paperwork or verifying credentials manually.",
      name: "Sofia Chen",
      role: "Project Manager",
      company: "Elite Construction",
      avatar: "SC"
    },
    {
      quote: "Our retention rate improved by 40% since we started using PeopleOS. Better screening means better hires and significantly reduced turnover.",
      name: "Jordan Martinez",
      role: "People Operations Director",
      company: "Industrial Solutions",
      avatar: "JM"
    },
    {
      quote: "The AI-powered questions are spot-on for our industry. We're getting candidates who actually know what they're doing from day one.",
      name: "Taylor Wilson",
      role: "Construction Manager",
      company: "Premier Builders",
      avatar: "TW"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What our customers say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from companies transforming their hiring process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center space-x-1 mt-6 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            >
              ←
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;