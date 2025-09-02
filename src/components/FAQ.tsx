import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "How is PeopleOS different from other hiring platforms?",
      answer: "PeopleOS combines skills assessment, behavioral analysis, and performance prediction in one platform. Unlike resume scanners that just look for keywords, we test real job skills. Unlike standalone assessment tools, we provide complete candidate ranking and team collaboration features. It's the only platform that gives you X-ray vision into candidate quality."
    },
    {
      question: "How accurate is the performance prediction?",
      answer: "Our AI achieves 92% accuracy in predicting job performance, validated across 10,000+ hires. We analyze not just what candidates say, but how they think and solve problems. The system looks at response patterns, problem-solving approach, and behavioral indicators during assessments."
    },
    {
      question: "Can AI really replace resume screening?",
      answer: "Yes, but it does much more than just screening. Our AI creates assessments from job descriptions, automatically ranks candidates by job-fit, and provides confidence scores for hiring decisions. You get candidates who can actually do the job, not just those who look good on paper."
    },
    {
      question: "How fast can I get up and running?",
      answer: "Upload a job description and get a custom assessment in under 5 minutes. Most companies launch their first assessment within 15 minutes and see ranked candidates within 24 hours. It's designed for speed without sacrificing quality."
    },
    {
      question: "What if candidates don't complete the assessments?",
      answer: "Our mobile-first design and engaging assessment experience leads to 40% higher completion rates than traditional screening methods. Candidates actually enjoy the process because it lets them showcase their real abilities rather than just answering generic questions."
    },
    {
      question: "How does the AI learn what I value?",
      answer: "The AI learns from your feedback when you grade sample responses and make hiring decisions. The more you use it, the better it becomes at identifying candidates who match your specific requirements and company culture. You're training your own hiring assistant."
    },
    {
      question: "Can my team collaborate on hiring decisions?",
      answer: "Absolutely. Share candidate insights, performance analytics, and assessment results with your hiring team. Make data-driven decisions together with detailed candidate profiles that go far beyond what a resume can tell you."
    },
    {
      question: "What types of roles work best with PeopleOS?",
      answer: "PeopleOS excels with roles where skills matter more than credentials - construction, healthcare, manufacturing, technical positions, and skilled trades. However, any role that requires specific abilities (rather than just education) benefits from our performance-based assessment approach."
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how PeopleOS can transform your hiring process from chaos to clarity. Find answers to common questions about our AI-powered candidate quality assessment platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;