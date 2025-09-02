import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SmartAssessment = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: CheckCircle,
      title: "Auto-generated technical questions",
      description: "AI creates role-specific questions tailored to your industry"
    },
    {
      icon: Award,
      title: "Role-specific skill assessments", 
      description: "Test the exact skills candidates will use on the job"
    },
    {
      icon: BarChart3,
      title: "Instant scoring and feedback",
      description: "Get immediate results with detailed performance analytics"
    },
    {
      icon: Users,
      title: "Customizable difficulty levels",
      description: "Adjust assessment complexity based on experience level"
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Smart Multiple Choice Screening</h3>
                <Badge className="bg-primary/10 text-primary">AI Powered</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Question 1 of 15</p>
                  <h4 className="font-semibold text-foreground mb-3">
                    Which safety protocol should be followed when working with electrical equipment?
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border border-border rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Always wear protective gear</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground font-medium">Lock out/tag out procedures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border border-border rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Work quickly to minimize exposure</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">92%</span> accuracy rate
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Time remaining: <span className="text-foreground font-medium">2:45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Smart Assessment
            </h2>
            <p className="text-xl text-primary font-semibold mb-4">
              AI powered skill assessments
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Upgrade your hiring process with assessments designed to reveal who can actually perform on the job. PeopleOS reveals the strongest candidates by testing real-world, role-specific tasks tailored to your business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAssessment;