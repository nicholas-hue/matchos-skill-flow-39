import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, MessageSquare, FileCheck, Zap, Settings, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MousePointer,
      title: "Drag & Drop Builder",
      description: "Create assessment flows in minutes with our intuitive visual builder. No technical skills required."
    },
    {
      icon: MessageSquare,
      title: "Smart Questioning",
      description: "Mix multiple choice, open-ended questions, and skill assessments tailored for blue-collar roles."
    },
    {
      icon: FileCheck,
      title: "Certification Verification",
      description: "Automated verification of licenses, certifications, and safety training documents."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Real-time scoring and feedback for both candidates and recruiters with detailed insights."
    },
    {
      icon: Settings,
      title: "ATS Integration",
      description: "Seamlessly integrates with major ATS platforms including Workday, BambooHR, and more."
    },
    {
      icon: Users,
      title: "Candidate Experience",
      description: "Mobile-friendly interface with personalized links and immediate feedback for candidates."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything you need to streamline blue-collar hiring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From skill assessments to certification verification, MatchOS handles every step of the vetting process.
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