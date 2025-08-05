import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save $4,700 per hire",
      description: "Reduce the average cost per hire from $4,700 to under $500 by eliminating manual initial screening.",
      stat: "90% cost reduction"
    },
    {
      icon: Clock,
      title: "42 days to 2 days",
      description: "Cut your time-to-fill from the industry average of 42 days down to just 2 days with automated screening.",
      stat: "95% faster hiring"
    },
    {
      icon: Target,
      title: "Better quality hires",
      description: "Standardized assessments and skill verification lead to 40% better job performance and retention.",
      stat: "40% improvement"
    },
    {
      icon: TrendingUp,
      title: "Scale effortlessly",
      description: "Handle 10x more candidates without increasing your HR team size. Perfect for seasonal hiring spikes.",
      stat: "10x capacity"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transform your recruitment ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact from companies already using MatchOS to revolutionize their blue-collar hiring process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-all duration-300 pulse-subtle">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-card rounded-lg p-8 border border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "MatchOS reduced our screening time by 85% and improved candidate quality significantly."
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">JD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Jennifer Davis</div>
                <div className="text-sm text-muted-foreground">HR Director, BuildCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;