import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, FileText, Target, Users, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AssessmentCapabilities = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const capabilities = [
    {
      icon: Brain,
      title: "Communication Skills",
      description: "Test written and verbal communication with scenario-based questions that reveal how candidates interact with customers and team members."
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Assess how candidates prioritize tasks and handle multiple responsibilities through realistic workplace scenarios."
    },
    {
      icon: Target,
      title: "Resilience Testing",
      description: "Measure how candidates handle pressure, setbacks, and challenging situations using proven psychological assessments."
    },
    {
      icon: FileText,
      title: "Job-Specific Tasks",
      description: "Create custom assessments that mirror actual job responsibilities and test candidates on tasks they'll perform daily."
    },
    {
      icon: Users,
      title: "Cultural Fit Analysis",
      description: "AI analyzes responses to identify candidates whose values and work style align with your company culture."
    },
    {
      icon: Smartphone,
      title: "Timed Assessments",
      description: "Set time limits for questions or entire tests to eliminate cheating and improve completion rates."
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-card transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Assessment capabilities that predict job performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI immerse candidates in situations they'll find themselves in everyday, predicting job performance 
            by testing the skills that actually matter for success in your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background border border-border rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AI that understands human behavior
              </h3>
              <p className="text-muted-foreground mb-4">
                Our machine learning algorithms analyze thousands of responses, looking for specific words and sentiments 
                that accurately reflect the values and skills you're looking for.
              </p>
              <p className="text-muted-foreground">
                No two candidates are the same, so they shouldn't be graded the same. Our AI tracks each individual's 
                interaction with assessments to provide accurate, personalized evaluation.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000s</div>
                <div className="text-sm text-muted-foreground mb-4">of responses analyzed</div>
                <div className="w-full bg-border rounded-full h-2 mb-4">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="text-xs text-muted-foreground">92% accuracy in predicting job performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentCapabilities;