import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const CompetitiveComparison = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      category: "Assessment Speed",
      features: [
        { name: "Average assessment time", peopleOS: "15 minutes", manual: "4-6 hours", otherAI: "45-90 minutes" },
        { name: "Setup time", peopleOS: "5 minutes", manual: "N/A", otherAI: "2-3 days" },
        { name: "Results available", peopleOS: "Instantly", manual: "1-2 weeks", otherAI: "24-48 hours" }
      ]
    },
    {
      category: "Accuracy & Quality",
      features: [
        { name: "Performance prediction accuracy", peopleOS: "92%", manual: "35%", otherAI: "67%" },
        { name: "Skills verification", peopleOS: "✓", manual: "✗", otherAI: "✓" },
        { name: "Behavioral analysis", peopleOS: "✓", manual: "Limited", otherAI: "Basic" },
        { name: "Industry-specific assessments", peopleOS: "✓", manual: "✗", otherAI: "Limited" }
      ]
    },
    {
      category: "User Experience",
      features: [
        { name: "Mobile-optimized", peopleOS: "✓", manual: "✗", otherAI: "Partial" },
        { name: "Candidate completion rate", peopleOS: "94%", manual: "N/A", otherAI: "73%" },
        { name: "Multi-language support", peopleOS: "✓", manual: "✗", otherAI: "Limited" },
        { name: "Accessibility compliant", peopleOS: "✓", manual: "✗", otherAI: "✗" }
      ]
    },
    {
      category: "Integration & Setup",
      features: [
        { name: "ATS integration", peopleOS: "One-click", manual: "N/A", otherAI: "Custom dev" },
        { name: "Implementation time", peopleOS: "15 minutes", manual: "N/A", otherAI: "2-4 weeks" },
        { name: "Training required", peopleOS: "None", manual: "Extensive", otherAI: "2-3 days" },
        { name: "Technical support", peopleOS: "24/7", manual: "N/A", otherAI: "Business hours" }
      ]
    },
    {
      category: "Cost Effectiveness",
      features: [
        { name: "Cost per assessment", peopleOS: "$25", manual: "$200-500", otherAI: "$75-150" },
        { name: "Hidden fees", peopleOS: "None", manual: "High", otherAI: "Setup fees" },
        { name: "ROI in first year", peopleOS: "680%", manual: "Negative", otherAI: "120%" },
        { name: "Bad hire reduction", peopleOS: "85%", manual: "0%", otherAI: "45%" }
      ]
    }
  ];

  const renderValue = (value: string, isPeopleOS = false) => {
    if (value === "✓") {
      return <Check className={`h-5 w-5 ${isPeopleOS ? 'text-accent' : 'text-muted-foreground'}`} />;
    }
    if (value === "✗") {
      return <X className="h-5 w-5 text-destructive" />;
    }
    return (
      <span className={`font-medium ${isPeopleOS ? 'text-accent font-bold' : 'text-muted-foreground'}`}>
        {value}
      </span>
    );
  };

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm text-primary mb-6">
            <Star className="w-4 h-4 mr-2" />
            See Why We're Different
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            PeopleOS vs. The Competition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While others focus on complex solutions that take weeks to implement, we deliver results in minutes. 
            Here's how we stack up against manual screening and other AI platforms.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div></div>
              <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                <CardHeader className="text-center py-4">
                  <CardTitle className="text-primary flex items-center justify-center gap-2">
                    <Star className="h-5 w-5" />
                    PeopleOS
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">AI-Powered Assessment</p>
                </CardHeader>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="text-center py-4">
                  <CardTitle className="text-foreground">Manual Screening</CardTitle>
                  <p className="text-sm text-muted-foreground">Traditional HR Process</p>
                </CardHeader>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader className="text-center py-4">
                  <CardTitle className="text-foreground">Other AI Platforms</CardTitle>
                  <p className="text-sm text-muted-foreground">Generic Solutions</p>
                </CardHeader>
              </Card>
            </div>

            {/* Comparison Rows */}
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4 px-4">{category.category}</h3>
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="grid grid-cols-4 gap-4 mb-2">
                    <div className="flex items-center px-4 py-3">
                      <span className="text-sm font-medium text-foreground">{feature.name}</span>
                    </div>
                    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                      <CardContent className="flex items-center justify-center py-3">
                        {renderValue(feature.peopleOS, true)}
                      </CardContent>
                    </Card>
                    <Card className="bg-card border-border">
                      <CardContent className="flex items-center justify-center py-3">
                        {renderValue(feature.manual)}
                      </CardContent>
                    </Card>
                    <Card className="bg-card border-border">
                      <CardContent className="flex items-center justify-center py-3">
                        {renderValue(feature.otherAI)}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-card border-border text-center">
            <CardHeader>
              <CardTitle className="text-destructive">Manual Screening</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive mb-2">85+ hours</div>
              <p className="text-sm text-muted-foreground mb-4">per hire, with 35% accuracy</p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>• Inconsistent results</div>
                <div>• Bias and subjective decisions</div>
                <div>• High cost per hire</div>
                <div>• No performance prediction</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <CardTitle className="text-muted-foreground">Other AI Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-muted-foreground mb-2">3-4 weeks</div>
              <p className="text-sm text-muted-foreground mb-4">setup time, 67% accuracy</p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>• Generic, one-size-fits-all</div>
                <div>• Complex implementation</div>
                <div>• Limited industry focus</div>
                <div>• High setup costs</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 text-center">
            <CardHeader>
              <CardTitle className="text-primary flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                PeopleOS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary mb-2">15 minutes</div>
              <p className="text-sm text-muted-foreground mb-4">setup to results, 92% accuracy</p>
              <div className="space-y-2 text-xs text-foreground">
                <div>• Industry-specific assessments</div>
                <div>• Instant implementation</div>
                <div>• Mobile-first experience</div>
                <div>• Proven ROI in weeks</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              See the difference for yourself
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Try PeopleOS risk-free for 14 days. If you don't see immediate improvements in candidate quality and time savings, we'll refund your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Start Free 14-Day Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule Competitive Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Setup in under 15 minutes • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveComparison;