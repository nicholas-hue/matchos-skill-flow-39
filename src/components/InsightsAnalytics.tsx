import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, LinkIcon, Users, TrendingUp, Eye, Filter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InsightsAnalytics = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: BarChart3,
      title: "On-Demand Reporting",
      description: "See how your assessments are performing with powerful, user-friendly charts. Track completions, score distributions, and question-by-question insights."
    },
    {
      icon: LinkIcon,
      title: "Trackable Links",
      description: "Create trackable links with a single click and understand which sources your best performing candidates are coming from."
    },
    {
      icon: Eye,
      title: "Assessment Health Check",
      description: "Review your assessment question by question. In-depth insights help you identify questions that need tweaking and spot candidate roadblocks."
    },
    {
      icon: Filter,
      title: "Score Distribution Analysis",
      description: "Understand how candidates perform across different assessment sections and identify patterns in top performers."
    },
    {
      icon: Users,
      title: "Candidate Source Analytics",
      description: "Discover which job boards, referral sources, or recruiting channels deliver the highest quality candidates."
    },
    {
      icon: TrendingUp,
      title: "Performance Trends",
      description: "Track hiring performance over time and identify improvements in candidate quality and assessment effectiveness."
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Insights that put you in total control
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make data-driven hiring decisions with comprehensive analytics that show you exactly how your 
            assessments are performing and where your best candidates come from.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
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

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
              <div className="text-muted-foreground">Candidate status updates</div>
              <div className="text-sm text-muted-foreground mt-2">
                Know when candidates open emails, start tests, or complete assessments
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold text-accent mb-2">Question-level</div>
              <div className="text-muted-foreground">Performance insights</div>
              <div className="text-sm text-muted-foreground mt-2">
                See which questions work best and optimize your assessments
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Source</div>
              <div className="text-muted-foreground">Attribution tracking</div>
              <div className="text-sm text-muted-foreground mt-2">
                Understand which recruiting channels deliver the best candidates
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsAnalytics;