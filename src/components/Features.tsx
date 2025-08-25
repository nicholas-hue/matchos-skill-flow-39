import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MessageSquare, Shield, Zap, Settings, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Sparkles,
      title: "Mobile-Friendly Assessments",
      description: "Candidates can showcase their talent on any device with engaging assessments that they'll actually enjoy completing."
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Skills Testing",
      description: "Test communication, time management, resilience, and job-specific tasks. Our AI analyzes responses to identify the best candidates."
    },
    {
      icon: Shield,
      title: "Real-Time Candidate Tracking",
      description: "Stay updated when candidates open emails, start tests, or complete assessments. Know exactly where each candidate stands."
    },
    {
      icon: Zap,
      title: "Automated Candidate Ranking",
      description: "Skip manual resume review and get candidates ranked by performance. Spend time only on the most qualified applicants."
    },
    {
      icon: Settings,
      title: "File Upload Capabilities", 
      description: "Candidates can upload portfolios, certificates, or any file type they'll use on the job. Support for PDF, PSD, ODT and more."
    },
    {
      icon: Smartphone,
      title: "Collaborative Hiring",
      description: "Share candidate details and scores with hiring managers and recruiters to make informed team decisions."
    }
  ];

  return (
    <section ref={ref} id="features" className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Create efficiency in your hiring process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Screen all applicants as they apply and get a ranked list of candidates based on their performance instead of manually reviewing resumes.
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