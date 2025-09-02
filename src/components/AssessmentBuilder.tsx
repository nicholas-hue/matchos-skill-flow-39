import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Upload, MessageSquare, MousePointer, Wand2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AssessmentBuilder = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const questionTypes = [
    {
      icon: MousePointer,
      title: "Multiple choice questions",
      description: "Auto-generated technical questions with role-specific skill assessments"
    },
    {
      icon: MessageSquare,
      title: "Open-ended questions",
      description: "Situational questions that reveal problem-solving abilities"
    },
    {
      icon: FileText,
      title: "Document Uploads",
      description: "Portfolio submissions and certification verification"
    },
    {
      icon: Video,
      title: "Video interview upload",
      description: "Recorded responses to assess communication skills"
    },
    {
      icon: Upload,
      title: "Situation based question",
      description: "Real-world scenarios specific to your industry"
    },
    {
      icon: Wand2,
      title: "Smart recommendations",
      description: "AI suggests questions based on job requirements"
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Visual Builder
            </h2>
            <p className="text-xl text-primary font-semibold mb-4">
              Power up fast — no tech skills required
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Easily build a fully customized assessment designed to match the exact requirements of the role you're hiring for. Getting started takes only a few steps. Upload a job description or enter a job title, and our AI-powered Assessment Builder will generate a custom assessment.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">AI Assessment Builder</h3>
              <p className="text-muted-foreground mb-4">
                With PeopleOS, you control every step of your applicant evaluation by creating workflows tailored exactly to job requirements:
              </p>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Try Assessment Builder
            </Button>
          </div>
          
          <div>
            <div className="grid md:grid-cols-2 gap-4">
              {questionTypes.map((type, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <type.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {type.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentBuilder;