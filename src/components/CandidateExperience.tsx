import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MessageSquare, Clock, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CandidateExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Works perfectly on any device",
      stat: "100%"
    },
    {
      icon: Clock,
      title: "Quick Completion",
      description: "Average assessment time",
      stat: "24h"
    },
    {
      icon: MessageSquare,
      title: "Instant Feedback",
      description: "Immediate results for candidates",
      stat: "Real-time"
    },
    {
      icon: Star,
      title: "High Satisfaction",
      description: "Candidate satisfaction rate",
      stat: "94%"
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Candidate Experience
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">
            Easy for Candidates Too
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engaging, mobile-ready assessments ensure a smooth candidate experience while helping you cut down on unqualified applicants. They simply click the link, complete the assessment, and receive instant feedback.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">
                  {stat.stat}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <div className="text-sm text-muted-foreground">Candidate Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateExperience;