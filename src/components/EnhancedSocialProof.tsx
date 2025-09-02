import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Shield, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const EnhancedSocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  const caseStudies = [
    {
      company: "MegaBuild Construction",
      industry: "Construction",
      size: "500+ employees",
      challenge: "High turnover in equipment operators",
      results: {
        timeReduction: "89%",
        costSavings: "$675,000",
        turnoverReduction: "73%",
        safetyImprovement: "85%"
      },
      quote: "PeopleOS helped us identify operators who actually know how to use our $200K equipment safely. We went from 3 accidents per month to zero in 6 months.",
      person: "Sarah Mitchell",
      title: "Safety Director"
    },
    {
      company: "Precision Manufacturing",
      industry: "Manufacturing",
      size: "200+ employees",
      challenge: "Quality control issues from unskilled workers",
      results: {
        timeReduction: "76%",
        costSavings: "$425,000",
        qualityImprovement: "92%",
        productivityGain: "34%"
      },
      quote: "Our quality scores improved by 92% after implementing PeopleOS. We're finally hiring people who understand precision work.",
      person: "Marcus Chen",
      title: "Operations Manager"
    },
    {
      company: "Regional Medical Center",
      industry: "Healthcare",
      size: "1,200+ employees",
      challenge: "License verification taking weeks",
      results: {
        timeReduction: "95%",
        costSavings: "$340,000",
        complianceImprovement: "100%",
        riskReduction: "88%"
      },
      quote: "License verification went from 3 weeks to 3 minutes. We've eliminated compliance risks and filled critical positions 95% faster.",
      person: "Dr. Amanda Rodriguez",
      title: "Chief Medical Officer"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: Shield, description: "Enterprise security standards" },
    { name: "GDPR Compliant", icon: Shield, description: "European data protection" },
    { name: "ISO 27001", icon: Award, description: "Information security management" },
    { name: "CCPA Compliant", icon: Shield, description: "California privacy standards" }
  ];

  const mediaLogos = [
    "TechCrunch", "Forbes", "HR Tech Weekly", "Construction Today", "Manufacturing News", "Staffing Industry Report"
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-sm text-accent mb-6">
            <Star className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Real Companies, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how companies like yours are saving hundreds of thousands of dollars and improving quality with PeopleOS.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          {study.company.split(' ')[0][0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{study.company}</h3>
                        <p className="text-sm text-muted-foreground">{study.industry} • {study.size}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-destructive mb-2">The Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 mb-6">
                      <blockquote className="text-lg font-medium text-foreground mb-4">
                        "{study.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">
                            {study.person.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{study.person}</div>
                          <div className="text-sm text-muted-foreground">{study.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-8 border-l border-border">
                    <h4 className="font-semibold text-accent mb-6 text-center">Results Achieved:</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">{study.results.timeReduction}</div>
                        <div className="text-sm text-muted-foreground">Time Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">{study.results.costSavings}</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">
                          {study.results.turnoverReduction || study.results.qualityImprovement || study.results.complianceImprovement}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.results.turnoverReduction ? 'Less Turnover' : 
                           study.results.qualityImprovement ? 'Quality Improvement' : 
                           'Compliance Score'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">
                          {study.results.safetyImprovement || study.results.productivityGain || study.results.riskReduction}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {study.results.safetyImprovement ? 'Safety Improvement' : 
                           study.results.productivityGain ? 'Productivity Gain' : 
                           'Risk Reduction'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button variant="outline" size="sm">
                        Read Full Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Compliance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Enterprise-Grade Security & Compliance
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by leading publications and industry experts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {mediaLogos.map((logo, index) => (
              <div key={index} className="text-muted-foreground font-medium text-sm">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join hundreds of companies already saving money with PeopleOS
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              See your own case study in 30 days. Start your free trial and join the companies getting better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Start Your Success Story
              </Button>
              <Button size="lg" variant="outline">
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSocialProof;