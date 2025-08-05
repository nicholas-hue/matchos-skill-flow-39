import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, PenTool, Smartphone, CheckCircle } from "lucide-react";
import teamMeeting from "@/assets/hr-team-meeting.jpg";
import womanLaptop from "@/assets/hr-manager-laptop.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: PenTool,
      step: "1",
      title: "You create simple questions",
      description: "Set up questions about the job - like 'Can you operate a forklift?' or 'Do you have OSHA 30 certification?' Takes 5 minutes."
    },
    {
      icon: Smartphone,
      step: "2", 
      title: "Candidates answer on their phone",
      description: "Send them a link. They answer questions, upload certificates, maybe take a quick skills test. Works on any device."
    },
    {
      icon: CheckCircle,
      step: "3",
      title: "You get a simple 'yes' or 'no'",
      description: "Our system checks their answers against what you need. You see 'Good fit for electrician role' or 'Missing required certification.'"
    }
  ];

  return (
    <section ref={ref} id="how-it-works" className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How does the AI actually check if someone is qualified?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Think of it like having an experienced foreman review each application. The AI looks at their answers, 
            checks their certificates, and compares everything to what you said you need for the job.
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

        <div className="bg-gradient-card rounded-lg p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The AI is like having an expert helper
              </h3>
              <p className="text-muted-foreground mb-4">
                It doesn't replace your judgment - it just does the boring work of checking if people meet your basic requirements. 
                Like having someone go through 100 resumes and only show you the 10 that actually have the right experience.
              </p>
              <p className="text-muted-foreground">
                You still make the final hiring decision after meeting the candidates. The AI just makes sure you're not wasting 
                time interviewing people who can't do the job.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Checks certificates are real</div>
                    <div className="text-sm text-muted-foreground">Verifies OSHA cards, trade licenses, safety training</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Compares experience to job needs</div>
                    <div className="text-sm text-muted-foreground">Matches years of experience, specific skills, equipment knowledge</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Gives you a simple recommendation</div>
                    <div className="text-sm text-muted-foreground">"Strong match" or "Missing requirements" with clear reasons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;