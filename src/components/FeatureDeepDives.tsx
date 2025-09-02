import { Card, CardContent } from "@/components/ui/card";
import { Brain, Smartphone, Zap, Users, Lock, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const FeatureDeepDives = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Brain,
      title: "AI That Thinks Like Your Best Hiring Manager",
      tagline: "15 years of hiring expertise, condensed into 15 minutes",
      description: "Our AI has been trained on thousands of successful hires across skilled trades. It knows what questions to ask and how to interpret the answers.",
      benefits: [
        "Learns from your specific hiring decisions and preferences",
        "Identifies patterns that predict long-term success",
        "Adapts to your company culture and values",
        "Eliminates unconscious bias from the process"
      ],
      techDetails: [
        "Machine learning algorithms trained on 500K+ successful hires",
        "Natural language processing for behavioral analysis", 
        "Predictive modeling with 92% accuracy rate",
        "Continuous learning from your feedback"
      ],
      demo: "See how the AI identifies red flags you might miss",
      stat: "92% accuracy"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Assessment Experience",
      tagline: "Candidates can complete assessments anywhere, anytime",
      description: "Unlike clunky desktop-only platforms, PeopleOS works perfectly on any device. Your candidates can take assessments during lunch breaks, at home, or even on job sites.",
      benefits: [
        "94% completion rate vs. 73% industry average",
        "No app downloads or complex logins required",
        "Works on any smartphone, tablet, or computer",
        "Saves automatically, candidates can pause and resume"
      ],
      techDetails: [
        "Progressive Web App technology",
        "Offline capability for poor signal areas",
        "Touch-optimized interface design",
        "Automatic device optimization"
      ],
      demo: "Try the mobile experience yourself",
      stat: "94% completion"
    },
    {
      icon: Zap,
      title: "15-Minute Setup, Lifetime of Better Hires",
      tagline: "From signup to first assessment in under 15 minutes",
      description: "While competitors take weeks to implement, PeopleOS is ready in minutes. No IT department needed, no training required, no complex configurations.",
      benefits: [
        "Pre-built templates for 50+ job roles",
        "One-click integration with popular ATS platforms",
        "Bulk candidate import from spreadsheets",
        "Automated email workflows and notifications"
      ],
      techDetails: [
        "Cloud-based infrastructure with 99.9% uptime",
        "API integrations with 50+ HR platforms",
        "Automatic backups and data sync",
        "Enterprise-grade security from day one"
      ],
      demo: "Watch a 5-minute setup walkthrough",
      stat: "15 minutes"
    },
    {
      icon: Users,
      title: "Collaborative Hiring Made Simple",
      tagline: "Get your whole team involved without the chaos",
      description: "Share assessment results with managers, get input from team leads, and make hiring decisions together. Everyone sees the same objective data.",
      benefits: [
        "Role-based access controls for different team members",
        "Comment and scoring system for collaborative review",
        "Automated notifications for key stakeholders",
        "Comparison tools to rank multiple candidates"
      ],
      techDetails: [
        "Real-time collaboration features",
        "Audit trail for all hiring decisions",
        "Customizable approval workflows",
        "Integration with Slack and Microsoft Teams"
      ],
      demo: "See collaborative features in action",
      stat: "5x faster decisions"
    },
    {
      icon: Lock,
      title: "Enterprise Security That Protects Everyone",
      tagline: "Bank-level security for candidate data",
      description: "Your candidate data is precious. We protect it with the same standards used by Fortune 500 companies and financial institutions.",
      benefits: [
        "SOC 2 Type II compliance for data handling",
        "GDPR and CCPA compliant processing",
        "End-to-end encryption for all communications",
        "Regular third-party security audits"
      ],
      techDetails: [
        "256-bit AES encryption at rest and in transit",
        "Multi-factor authentication options",
        "Data residency controls for international compliance",
        "Zero-knowledge architecture for sensitive data"
      ],
      demo: "Review our security documentation",
      stat: "SOC 2 certified"
    },
    {
      icon: BarChart3,
      title: "Analytics That Actually Help You Hire Better",
      tagline: "Turn hiring data into competitive advantage",
      description: "See which questions predict success, track your hiring ROI, and identify patterns that help you find better candidates faster.",
      benefits: [
        "Predictive analytics for candidate success",
        "ROI tracking for hiring decisions",
        "Benchmarking against industry standards",
        "Custom reports for leadership teams"
      ],
      techDetails: [
        "Real-time dashboard with key metrics",
        "Predictive modeling for candidate outcomes",
        "Integration with HRIS for long-term tracking",
        "Custom report builder with data export"
      ],
      demo: "Explore the analytics dashboard",
      stat: "15+ key metrics"
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Features That Make PeopleOS Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature is designed to solve real hiring problems that cost you time and money. 
            Here's how we're different from the competition.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="text-2xl font-bold text-primary mb-2">{feature.stat}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-lg text-accent font-semibold mb-4">{feature.tagline}</p>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    
                    <div className="grid gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">What this means for you:</h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technical details:</h4>
                        <ul className="space-y-2">
                          {feature.techDetails.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" size="sm">
                        {feature.demo}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gradient-to-br from-card to-background border border-border rounded-lg p-8 h-full">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-12 w-12 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">Live Demo</div>
                      <div className="text-lg font-semibold text-foreground">Interactive {feature.title.split(' ')[0]} Preview</div>
                    </div>
                    
                    {/* Mock Interface */}
                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <div className="text-sm font-medium text-foreground">Feature Active</div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-primary/20 rounded-full">
                            <div className="h-2 bg-primary rounded-full w-3/4"></div>
                          </div>
                          <div className="text-xs text-muted-foreground">Processing candidate assessment...</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-accent/10 rounded p-2">
                            <div className="font-medium text-accent">Success Rate</div>
                            <div className="text-foreground">{feature.stat}</div>
                          </div>
                          <div className="bg-primary/10 rounded p-2">
                            <div className="font-medium text-primary">Time Saved</div>
                            <div className="text-foreground">85%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                        Try Interactive Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Every feature is designed to make your hiring faster, better, and more cost-effective. 
              See them all in action with your free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Start Free Trial - See All Features
              </Button>
              <Button size="lg" variant="outline">
                Schedule Personalized Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDeepDives;