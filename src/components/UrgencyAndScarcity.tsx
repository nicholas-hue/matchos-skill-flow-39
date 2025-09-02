import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Users, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const UrgencyAndScarcity = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [dailyCost, setDailyCost] = useState(2055);

  // Simulate real-time cost accumulation
  useEffect(() => {
    const interval = setInterval(() => {
      setDailyCost(prev => prev + Math.floor(Math.random() * 50) + 25);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const urgencyFactors = [
    {
      icon: Clock,
      title: "Every Day You Wait Costs You Money",
      amount: `$${dailyCost.toLocaleString()}`,
      description: "Your manual screening process is burning money while your competitors get the best candidates",
      details: [
        "Average company loses $2,000+ daily on inefficient screening",
        "Best candidates are hired within 48 hours",
        "Your slow process is losing top talent to faster competitors",
        "Each day of delay = higher recruitment costs"
      ]
    },
    {
      icon: Users,
      title: "Limited Beta Access",
      amount: "47 spots",
      description: "We're only accepting 50 new companies this month to ensure quality onboarding",
      details: [
        "Personalized setup and configuration",
        "Dedicated customer success manager",
        "Priority feature requests and feedback",
        "Exclusive beta pricing locked in forever"
      ]
    },
    {
      icon: TrendingUp,
      title: "Your Competitors Are Already Using AI",
      amount: "73%",
      description: "of leading companies in skilled trades are already using AI-powered assessment tools",
      details: [
        "Early adopters are capturing the best talent",
        "AI users report 85% faster hiring processes",
        "Companies using AI assessment see 40% less turnover",
        "The competitive advantage gap widens every month"
      ]
    }
  ];

  const competitorStats = [
    { company: "BuildCorp", improvement: "Reduced screening time by 89%", timeAgo: "3 months ago" },
    { company: "SteelWorks Inc", improvement: "Cut bad hires by 76%", timeAgo: "2 months ago" },
    { company: "TechManufacturing", improvement: "Filled 50 positions in 1 week", timeAgo: "1 month ago" },
    { company: "Regional Construction", improvement: "Saved $340K in first year", timeAgo: "3 weeks ago" }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-destructive/20 bg-destructive/10 text-sm text-destructive mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Time-Sensitive Opportunity
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The cost of waiting is getting higher
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day you stick with manual screening, your competitors get further ahead. Don't get left behind in the AI revolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {urgencyFactors.map((factor, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-destructive/20 transition-all duration-300">
                  <factor.icon className="h-8 w-8 text-destructive" />
                </div>
                
                <div className="text-3xl font-bold text-destructive mb-2">{factor.amount}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{factor.title}</h3>
                <p className="text-muted-foreground mb-6">{factor.description}</p>
                
                <div className="bg-background border border-border rounded-lg p-4 text-left">
                  <ul className="space-y-2">
                    {factor.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitor Success Stories */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            While you're thinking about it, your competitors are already winning
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competitorStats.map((stat, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{stat.company}</div>
                  <div className="text-sm text-accent">{stat.improvement}</div>
                </div>
                <div className="text-xs text-muted-foreground">{stat.timeAgo}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              These are real companies in your industry who started using PeopleOS. 
              <span className="font-semibold text-destructive"> How much market share are you losing while you wait?</span>
            </p>
          </div>
        </div>

        {/* Scarcity CTA */}
        <div className="bg-gradient-to-br from-destructive/10 to-primary/10 rounded-2xl p-8 border border-destructive/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Last chance to join this month's beta cohort
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're limiting new signups to ensure quality onboarding. Once we hit 50 companies, the waitlist opens and pricing goes up 40%.
          </p>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-md mx-auto">
            <div className="text-sm text-muted-foreground mb-2">Beta spots remaining:</div>
            <div className="text-3xl font-bold text-destructive">3 of 50</div>
            <div className="text-xs text-muted-foreground mt-2">Next available: February 2024</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              Claim Your Beta Spot Now
            </Button>
            <Button size="lg" variant="outline">
              Join February Waitlist
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-accent">Beta Pricing</div>
              <div className="text-xs text-muted-foreground">Locked in forever</div>
            </div>
            <div>
              <div className="font-semibold text-accent">Priority Support</div>
              <div className="text-xs text-muted-foreground">Direct line to founders</div>
            </div>
            <div>
              <div className="font-semibold text-accent">Feature Input</div>
              <div className="text-xs text-muted-foreground">Shape the product</div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Beta access includes everything: unlimited assessments, priority support, and locked-in pricing. 
            <span className="font-semibold text-destructive">This offer expires when we hit 50 companies.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencyAndScarcity;