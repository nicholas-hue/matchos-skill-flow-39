import { Card, CardContent } from "@/components/ui/card";
import { Clock, Brain, DollarSign, Zap, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const ObjectionHandling = () => {
  const { ref, isVisible } = useScrollAnimation();

  const objections = [
    {
      icon: Clock,
      objection: "\"Candidates hate long assessments\"",
      response: "Mobile-first, engaging experience",
      details: [
        "Average completion time: 15 minutes (industry standard: 45+ minutes)",
        "94% candidate completion rate vs. 73% industry average",
        "Interactive, game-like interface keeps candidates engaged",
        "Mobile-optimized for completion anywhere, anytime",
        "Real-time progress tracking and encouragement"
      ],
      proof: "94% completion rate"
    },
    {
      icon: Brain,
      objection: "\"AI can't judge soft skills\"",
      response: "Advanced behavioral analysis capabilities",
      details: [
        "Behavioral pattern recognition through scenario-based questions",
        "Communication style analysis from written responses",
        "Problem-solving approach evaluation under pressure",
        "Team collaboration indicators from situational judgments",
        "Cultural fit assessment based on value alignment"
      ],
      proof: "92% accuracy in soft skill prediction"
    },
    {
      icon: DollarSign,
      objection: "\"Too expensive for small companies\"",
      response: "Costs less than one bad hire",
      details: [
        "Starting at $25 per assessment vs. $75,000 average bad hire cost",
        "Break even after preventing just one bad hire",
        "No setup fees, hidden costs, or long-term contracts",
        "Scales with your hiring volume - pay only for what you use",
        "Free trial to prove ROI before you commit"
      ],
      proof: "ROI in first prevented bad hire"
    },
    {
      icon: Zap,
      objection: "\"Integration is too complex\"",
      response: "One-click integrations with popular ATS",
      details: [
        "Pre-built integrations with 50+ popular ATS platforms",
        "Setup completed in under 15 minutes",
        "No technical expertise or IT support required",
        "Bulk candidate import and automated workflow triggers",
        "24/7 support team for any questions"
      ],
      proof: "15-minute average setup time"
    },
    {
      icon: Shield,
      objection: "\"Security and compliance concerns\"",
      response: "Enterprise-grade security and full compliance",
      details: [
        "SOC 2 Type II certified data handling",
        "GDPR and CCPA compliant data processing",
        "End-to-end encryption for all candidate data",
        "Regular third-party security audits",
        "Data residency options for international compliance"
      ],
      proof: "SOC 2 Type II certified"
    },
    {
      icon: Users,
      objection: "\"Our team won't adopt new technology\"",
      response: "Intuitive interface requires zero training",
      details: [
        "Designed for non-technical HR professionals",
        "Familiar dashboard interface similar to email",
        "Built-in onboarding tutorials and tooltips",
        "Dedicated customer success manager for larger teams",
        "97% user adoption rate within first month"
      ],
      proof: "97% user adoption rate"
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            "But what about...?"
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've heard every objection and solved every concern. Here are the most common questions we get from companies considering PeopleOS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {objections.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-destructive mb-2">{item.objection}</h3>
                    <h4 className="text-xl font-semibold text-accent mb-4">{item.response}</h4>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-4 mb-4">
                  <div className="text-center mb-3">
                    <div className="text-2xl font-bold text-accent">{item.proof}</div>
                    <div className="text-sm text-muted-foreground">Proven results</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-foreground">How we solve this:</h5>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk Reversal Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have concerns? We'll eliminate all the risk.
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Try PeopleOS completely risk-free. If you don't see immediate improvements in candidate quality and time savings, we'll refund every penny.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl font-bold text-accent mb-2">14-Day Free Trial</div>
              <p className="text-sm text-muted-foreground">Full access, no limitations</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl font-bold text-accent mb-2">Money-Back Guarantee</div>
              <p className="text-sm text-muted-foreground">100% refund if not satisfied</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xl font-bold text-accent mb-2">Cancel Anytime</div>
              <p className="text-sm text-muted-foreground">No contracts or commitments</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Start Risk-Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Speak With Success Team
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Setup in 15 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;