import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, DollarSign, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const PainPointsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const painPoints = [
    {
      icon: DollarSign,
      title: "The $75,000 Bad Hire Problem",
      stat: "$75K",
      description: "Every bad hire in skilled trades costs you $75,000 in wasted training, equipment damage, rework costs, and replacement expenses.",
      details: [
        "2 weeks of supervisor time training ($4,800)",
        "Equipment damage from inexperience ($15,000)",
        "Rework costs from poor quality ($25,000)",
        "Recruitment and replacement costs ($8,200)",
        "Lost productivity and delays ($22,000)"
      ]
    },
    {
      icon: AlertTriangle,
      title: "The Resume Lie Epidemic",
      stat: "78%",
      description: "78% of candidates exaggerate their skills on resumes. You're hiring based on fiction, not facts.",
      details: [
        "58% claim certifications they don't have",
        "45% inflate years of experience",
        "34% list skills they can't demonstrate", 
        "29% fabricate previous job responsibilities",
        "Only 22% of resumes are completely accurate"
      ]
    },
    {
      icon: TrendingDown,
      title: "Why 67% of Skilled Trades Hires Fail",
      stat: "67%",
      description: "Most skilled trades hires fail within 90 days because companies can't verify real skills during interviews.",
      details: [
        "43% lack the technical skills they claimed",
        "31% can't follow safety protocols",
        "28% can't work with team dynamics",
        "25% struggle with problem-solving",
        "22% have attendance/reliability issues"
      ]
    },
    {
      icon: Clock,
      title: "The Hidden Costs of Manual Screening",
      stat: "89 hrs",
      description: "Your team spends 89 hours per hire manually screening candidates. That's over 2 weeks of lost productivity.",
      details: [
        "Resume review and initial screening (32 hours)",
        "Phone interviews and scheduling (28 hours)",
        "In-person interviews and assessments (19 hours)",
        "Reference checks and verification (10 hours)",
        "Administrative tasks and coordination (8 hours)"
      ]
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-destructive/20 bg-destructive/10 text-sm text-destructive mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Real Cost of Hiring Mistakes
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Every bad hire costs you <span className="text-destructive">$75,000</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            While your competitors keep losing money on unqualified workers, you could be identifying top performers before they even step foot in your office.
          </p>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-destructive mb-2">
              "We hired 12 welders last year. Only 3 are still with us."
            </p>
            <p className="text-sm text-muted-foreground">
              — Real quote from a construction company that lost $675,000 on bad hires
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                      <span className="text-2xl font-bold text-destructive">{point.stat}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{point.description}</p>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Breaking down the real costs:</h4>
                  <ul className="space-y-2">
                    {point.details.map((detail, detailIndex) => (
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

        <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stop the bleeding. Start hiring workers who can actually do the job.
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            PeopleOS identifies qualified candidates before you waste time interviewing people who can't do the work. 
            See exactly which candidates have the skills, certifications, and experience you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Stop Losing $75K Per Bad Hire
            </Button>
            <Button size="lg" variant="outline">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;