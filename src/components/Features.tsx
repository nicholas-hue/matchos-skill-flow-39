import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MessageSquare, Shield, Zap, Settings, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Sparkles,
      title: "AI-Generated Custom Assessments",
      description: "Upload a job description and our AI creates industry-specific assessments in minutes. No tech skills required."
    },
    {
      icon: MessageSquare,
      title: "Real-World Performance Prediction",
      description: "Test actual job skills, not just resume keywords. Our AI analyzes responses to predict on-the-job performance with 92% accuracy."
    },
    {
      icon: Shield,
      title: "Candidate Quality Scoring",
      description: "Advanced behavioral analysis during assessments provides confidence scores for each candidate's true abilities."
    },
    {
      icon: Zap,
      title: "Automated Candidate Ranking",
      description: "Skip manual screening entirely. Get candidates automatically ranked by job-fit and performance potential."
    },
    {
      icon: Settings,
      title: "Collaborative Team Decisions", 
      description: "Share candidate insights with your hiring team. Make data-driven decisions together with detailed performance analytics."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Candidates complete assessments on any device with an experience they'll actually enjoy, increasing completion rates by 40%."
    }
  ];

  return (
    <section ref={ref} id="features" className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Beyond resume screening — test real skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered candidate quality assessment that combines skills testing, behavioral analysis, and performance prediction to find candidates who can actually do the job.
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