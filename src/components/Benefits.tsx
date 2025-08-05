import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Stop losing $4,700 on each bad hire",
      description: "Bad hires cost you training time, equipment, and replacement costs. Only interview candidates who can actually do the work.",
      stat: "90% less waste"
    },
    {
      icon: Clock,
      title: "Fill positions in days, not months",
      description: "Most companies take 6+ weeks to fill trade jobs. Find qualified candidates in 2 days by screening out unqualified applicants early.",
      stat: "6 weeks to 2 days"
    },
    {
      icon: Target,
      title: "Hire workers who actually stay",
      description: "When you hire people with the right skills and certifications, they stay longer and work better. 40% less turnover.",
      stat: "40% better retention"
    },
    {
      icon: TrendingUp,
      title: "Handle busy seasons without stress",
      description: "Need to hire 50 people for a big project? Screen hundreds of candidates automatically while you focus on running the business.",
      stat: "10x more candidates"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Stop wasting money on bad hires
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from construction companies, manufacturers, and trade businesses using MatchOS to hire better workers faster.
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