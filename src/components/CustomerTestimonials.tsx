import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const CustomerTestimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Cut our time-to-hire from 6 weeks to 6 days. PeopleOS gave us X-ray vision into candidate quality - we stopped hiring people who looked good on paper but couldn't do the job.",
      name: "Marcus Williams",
      role: "HR Director",
      company: "BuildCorp",
      avatar: "MW"
    },
    {
      quote: "40% reduction in early-term turnover since using PeopleOS. The performance prediction is scary accurate - high-scoring candidates actually perform well on the job.",
      name: "Ashley Rodriguez", 
      role: "Operations Manager",
      company: "TechFlow Industries",
      avatar: "AR"
    },
    {
      quote: "Cut screening time by 85% while improving hire quality. Instead of reviewing 200 resumes, we interview 5 pre-ranked candidates who can actually do the work.",
      name: "Brandon Thompson",
      role: "Talent Acquisition Lead", 
      company: "PowerTech Solutions",
      avatar: "BT"
    },
    {
      quote: "The AI learns what we value and gets better over time. It's like having a hiring assistant that understands our industry and never sleeps.",
      name: "Sofia Chen",
      role: "Project Manager",
      company: "Elite Construction",
      avatar: "SC"
    },
    {
      quote: "Finally found the perfect balance - candidates who can do the job AND want to do it. Our team productivity increased 30% with better quality hires.",
      name: "Jordan Martinez",
      role: "People Operations Director",
      company: "Industrial Solutions",
      avatar: "JM"
    },
    {
      quote: "Went from chaos to clarity in our hiring process. Half the time, twice the quality. PeopleOS transformed how we think about recruitment.",
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
            From hiring chaos to hiring clarity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real companies sharing how they transformed their hiring with AI-powered candidate quality assessment
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