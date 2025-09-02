import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TrustAndCredibility = () => {
  const { ref, isVisible } = useScrollAnimation();

  const trustFactors = [
    {
      icon: Users,
      title: "Trusted by 500+ Companies",
      description: "From small contractors to Fortune 500 manufacturers",
      details: [
        "Construction companies (45%)",
        "Manufacturing facilities (32%)",
        "Healthcare organizations (15%)",
        "Transportation & logistics (8%)"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security Standards",
      description: "Bank-level security for your sensitive hiring data",
      details: [
        "SOC 2 Type II certified",
        "GDPR & CCPA compliant",
        "ISO 27001 security standards",
        "99.9% uptime guarantee"
      ]
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Awards and certifications from leading organizations",
      details: [
        "HR Tech Award Winner 2024",
        "Best AI Assessment Platform",
        "Customer Choice Award",
        "Innovation in Hiring Excellence"
      ]
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Measurable results across thousands of hires",
      details: [
        "500,000+ assessments completed",
        "92% prediction accuracy rate",
        "$50M+ in bad hire costs prevented",
        "85% average time reduction"
      ]
    }
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Performance Guarantee",
      description: "If PeopleOS doesn't reduce your screening time by 50% in 30 days, we'll refund your money.",
      terms: ["Measured against your current process", "30-day evaluation period", "Full refund, no questions asked"]
    },
    {
      icon: Shield,
      title: "Data Security Promise",
      description: "Your candidate data is protected with enterprise-grade security. We guarantee 100% confidentiality.",
      terms: ["End-to-end encryption", "No data sharing with third parties", "Compliant with all privacy laws"]
    },
    {
      icon: Clock,
      title: "24/7 Support Commitment",
      description: "Get help when you need it. Our support team responds to all inquiries within 2 hours.",
      terms: ["Live chat support", "Phone support during business hours", "Email support 24/7"]
    }
  ];

  const teamCredentials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      credentials: "PhD AI/ML from Stanford, Former Google AI researcher, 15+ years in predictive analytics",
      specialization: "AI model development and validation"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      credentials: "15 years in HR tech, Former VP at Workday, Built assessment platforms used by 100K+ companies",
      specialization: "HR technology and user experience"
    },
    {
      name: "Jennifer Kim",
      role: "VP of Customer Success",
      credentials: "20 years in skilled trades recruiting, Former Director at ManpowerGroup, Certified SHRM-SCP",
      specialization: "Skilled trades hiring expertise"
    }
  ];

  const partnerships = [
    {
      name: "Microsoft for Startups",
      type: "Technology Partner",
      description: "Azure cloud infrastructure and AI services"
    },
    {
      name: "Society for Human Resource Management",
      type: "Professional Partner", 
      description: "HR best practices and compliance guidance"
    },
    {
      name: "National Association of Manufacturers",
      type: "Industry Partner",
      description: "Manufacturing hiring standards and benchmarks"
    },
    {
      name: "Associated General Contractors",
      type: "Industry Partner",
      description: "Construction industry safety and skills standards"
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Industry Leaders Trust PeopleOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you're making critical hiring decisions, you need a partner you can trust. 
            Here's why companies choose PeopleOS with confidence.
          </p>
        </div>

        {/* Trust Factors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <factor.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{factor.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{factor.description}</p>
                <ul className="space-y-1">
                  {factor.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-muted-foreground">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Guarantees to You
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <guarantee.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{guarantee.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{guarantee.description}</p>
                  <div className="space-y-2">
                    {guarantee.terms.map((term, termIndex) => (
                      <div key={termIndex} className="text-xs text-muted-foreground flex items-start">
                        <CheckCircle className="h-3 w-3 text-accent mt-0.5 mr-2 flex-shrink-0" />
                        {term}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Credentials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Led by Industry Experts
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamCredentials.map((member, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                    <p className="text-sm text-accent font-semibold">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{member.credentials}</p>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-xs text-primary font-medium">Specialization: {member.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Trusted Partners & Industry Associations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{partner.name}</h4>
                  <p className="text-xs text-accent font-medium mb-2">{partner.type}</p>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Security & Compliance Certifications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['SOC 2 Type II', 'GDPR Compliant', 'ISO 27001', 'CCPA Ready', 'PIPEDA Compliant', 'HIPAA Ready'].map((cert, index) => (
              <div key={index} className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndCredibility;