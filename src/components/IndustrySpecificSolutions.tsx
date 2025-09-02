import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wrench, Stethoscope, Code, Truck, Building } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const IndustrySpecificSolutions = () => {
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    {
      icon: Building,
      title: "Construction",
      problem: "Safety violations and equipment damage from unqualified workers",
      solution: "Verify OSHA certifications, safety knowledge, and equipment operation skills",
      stats: {
        cost: "$185K per workplace accident",
        improvement: "73% fewer safety incidents"
      },
      painPoints: [
        "Workers claiming they can operate equipment they've never used",
        "Safety violations leading to OSHA fines and project delays",
        "Equipment damage from inexperienced operators",
        "Liability issues from unqualified workers on job sites"
      ],
      benefits: [
        "Verify equipment certifications before hiring",
        "Test safety protocol knowledge",
        "Assess problem-solving under pressure",
        "Ensure OSHA compliance"
      ]
    },
    {
      icon: Wrench,
      title: "Manufacturing",
      problem: "Production delays and quality issues from unskilled workers",
      solution: "Test technical skills, quality standards, and process knowledge",
      stats: {
        cost: "$50K per day in lost production",
        improvement: "89% improvement in quality metrics"
      },
      painPoints: [
        "Production line shutdowns from operator errors",
        "Quality control failures costing thousands in rework",
        "Machinery breakdowns from improper operation",
        "Missed deadlines from inadequate staffing"
      ],
      benefits: [
        "Assess technical problem-solving skills",
        "Verify quality control knowledge",
        "Test machinery operation competency",
        "Evaluate process improvement thinking"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      problem: "License verification delays and compliance risks",
      solution: "Instantly verify licenses, certifications, and clinical competencies",
      stats: {
        cost: "$129K per compliance violation",
        improvement: "95% faster credential verification"
      },
      painPoints: [
        "Weeks spent verifying licenses and certifications",
        "Risk of hiring unlicensed practitioners",
        "Compliance audits revealing credential gaps",
        "Patient safety risks from unqualified staff"
      ],
      benefits: [
        "Real-time license verification",
        "Clinical competency assessment",
        "Compliance documentation automation",
        "Risk mitigation protocols"
      ]
    },
    {
      icon: Code,
      title: "Technology",
      problem: "Code quality issues and security vulnerabilities",
      solution: "Assess real coding skills, not just resume claims",
      stats: {
        cost: "$4.2M average data breach cost",
        improvement: "81% better code quality scores"
      },
      painPoints: [
        "Developers who can't actually code what they claim",
        "Security vulnerabilities from inexperienced programmers",
        "Technical debt from poor coding practices",
        "Team productivity loss from skill mismatches"
      ],
      benefits: [
        "Live coding assessments",
        "Security knowledge verification",
        "Problem-solving evaluation",
        "Technical communication skills"
      ]
    },
    {
      icon: Truck,
      title: "Transportation",
      problem: "CDL fraud and safety compliance issues",
      solution: "Verify driving records, certifications, and safety knowledge",
      stats: {
        cost: "$143K per truck accident",
        improvement: "92% reduction in safety violations"
      },
      painPoints: [
        "Drivers with fake or expired CDLs",
        "DOT compliance violations and fines",
        "Accident liability from unqualified drivers",
        "Vehicle damage from inexperienced operators"
      ],
      benefits: [
        "Real-time CDL verification",
        "DOT compliance checking",
        "Safety record analysis",
        "Route planning competency"
      ]
    },
    {
      icon: Shield,
      title: "Security",
      problem: "Unqualified guards creating liability risks",
      solution: "Verify security training, certifications, and incident response",
      stats: {
        cost: "$267K per security breach",
        improvement: "78% improvement in incident response"
      },
      painPoints: [
        "Guards without proper training or certifications",
        "Security breaches from inadequate response",
        "Client complaints about unprofessional behavior",
        "Legal liability from security failures"
      ],
      benefits: [
        "Security certification verification",
        "Emergency response assessment",
        "Customer service evaluation",
        "Legal compliance checking"
      ]
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Industry-Specific Problems Need Industry-Specific Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every industry has unique hiring challenges. PeopleOS understands your specific pain points and provides targeted solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{industry.title}</h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-destructive mb-2">The Problem:</h4>
                  <p className="text-sm text-muted-foreground mb-4">{industry.problem}</p>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-destructive">{industry.stats.cost}</div>
                        <div className="text-xs text-muted-foreground">Average cost per incident</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">{industry.stats.improvement}</div>
                        <div className="text-xs text-muted-foreground">Improvement with PeopleOS</div>
                      </div>
                    </div>
                  </div>

                  <h5 className="font-medium text-foreground mb-2">Common pain points:</h5>
                  <ul className="space-y-1 mb-4">
                    {industry.painPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-xs text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <h4 className="font-semibold text-accent mb-2">PeopleOS Solution:</h4>
                  <p className="text-sm text-muted-foreground mb-3">{industry.solution}</p>
                  
                  <ul className="space-y-1">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to solve your industry's biggest hiring challenges?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join companies in your industry who are already using PeopleOS to reduce hiring mistakes, improve quality, and save money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Get Industry-Specific Demo
              </Button>
              <Button size="lg" variant="outline">
                See Customer Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySpecificSolutions;