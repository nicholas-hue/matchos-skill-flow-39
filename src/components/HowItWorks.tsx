import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PenTool, Smartphone, CheckCircle } from "lucide-react";
import teamMeeting from "@/assets/hr-team-meeting.jpg";
import womanLaptop from "@/assets/hr-manager-laptop.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NetworkWorkflowImageGenerator from "./NetworkWorkflowImageGenerator";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: PenTool,
      step: "1",
      title: "Create assessments with AI training",
      description: "Build engaging assessments with our drag-and-drop builder. Train the AI to value what you value by grading sample responses from 1-10."
    },
    {
      icon: Smartphone,
      step: "2", 
      title: "Candidates complete mobile-friendly assessments",
      description: "Candidates enjoy the process on any device. They answer questions, upload files, and complete skills tests that predict job performance."
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "Get AI-powered candidate rankings",
      description: "Receive ranked candidates based on performance with detailed insights. Skip manual resume review and focus on qualified applicants."
    }
  ];

  return (
    <section ref={ref} id="how-it-works" className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            From job description to hired — in half the time
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform eliminates manual screening, predicts job performance, and delivers ranked candidates 
            who can actually do the job. Cut your time-to-hire from weeks to days.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-card border-border text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <img 
              src={teamMeeting} 
              alt="HR team discussing recruitment strategy"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
          </div>
          <div className="relative">
            <img 
              src={womanLaptop} 
              alt="HR manager reviewing candidate applications"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="bg-gradient-card rounded-lg p-8 border border-border mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Train the AI to value what you value
              </h3>
              <p className="text-muted-foreground mb-4">
                Grade sample responses from 1-10 and the AI learns your preferences. The more you train it, 
                the better it becomes at identifying candidates who match your specific requirements and company culture.
              </p>
              <p className="text-muted-foreground mb-4">
                Your feedback is fed back into the AI so it understands what good and bad answers look like to you, 
                ensuring every assessment reflects your unique hiring standards.
              </p>
              <p className="text-muted-foreground">
                It doesn't replace your judgement. Our AI is designed to enhance your hiring process, not replace your decision-making. 
                Use the AI recommendations as a powerful tool to identify top candidates faster, while maintaining full control over who you choose to hire.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Analyzes response patterns</div>
                    <div className="text-sm text-muted-foreground">AI processes thousands of responses looking for key traits and skills</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Personalized candidate scoring</div>
                    <div className="text-sm text-muted-foreground">Tracks individual interactions and responses for accurate evaluation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Continuous learning improvement</div>
                    <div className="text-sm text-muted-foreground">Gets smarter with each grading session you complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Workflow Image Generator Section */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Generate Custom Network Workflow Images
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create custom network workflow diagrams for your presentations and documentation using AI.
            </p>
          </div>
          <NetworkWorkflowImageGenerator />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;