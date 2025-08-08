import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MessageSquare, Shield, Zap, Settings, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Sparkles,
      title: "Easy Setup - No Tech Skills Needed",
      description: "Build your screening questions in minutes. Just drag, drop, and click - like building with blocks. No computer training required."
    },
    {
      icon: MessageSquare,
      title: "Smart Questions That Actually Work",
      description: "Ask about welding techniques, safety procedures, equipment operation - our system knows what matters for each trade job."
    },
    {
      icon: Shield,
      title: "Automatic License & Certificate Checking",
      description: "Candidates upload their OSHA cards, trade licenses, or certifications. We verify they're real and current - no more fake certificates."
    },
    {
      icon: Zap,
      title: "Know If They're Qualified in Minutes",
      description: "Get a simple 'good fit' or 'not qualified' answer with reasons why, so you know exactly who to interview first."
    },
    {
      icon: Settings,
      title: "Works With Your Current System",
      description: "Connects to the hiring software you already use - Workday, BambooHR, and others. No need to change how you work."
    },
    {
      icon: Smartphone,
      title: "Easy for Candidates Too",
      description: "Works on any phone or computer. Candidates get a simple link, answer questions, and get feedback immediately."
    }
  ];

  return (
    <section ref={ref} id="features" className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How PeopleOS finds qualified candidates for you
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple system checks candidates automatically, so you only interview people who can actually do the job.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;