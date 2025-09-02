import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "How does PeopleOS improve hiring accuracy?",
      answer: "PeopleOS uses advanced AI algorithms to analyze candidate responses, behavior patterns, and performance on job-specific tasks. Our system achieves 92% accuracy in predicting job performance by testing real-world skills rather than just reviewing resumes. The AI learns from your feedback to continuously improve candidate matching."
    },
    {
      question: "Can I customize assessments for different roles?",
      answer: "Absolutely! Our Visual Builder allows you to create fully customized assessments for any role. You can upload job descriptions, set specific requirements, choose from multiple question types (multiple choice, open-ended, video, document uploads), and adjust difficulty levels. The AI helps generate role-specific questions tailored to your industry."
    },
    {
      question: "How long does it take to set up?",
      answer: "Getting started with PeopleOS takes just minutes. Simply upload a job description or enter a job title, and our AI-powered Assessment Builder generates a custom assessment automatically. You can review, customize, and launch your first assessment within 15 minutes."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including onboarding assistance, best practices coaching, and ongoing technical support. Our team works closely with hiring teams to optimize their processes and ensure maximum success. You'll also get access to proven strategies from the world's most successful hiring teams."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously. PeopleOS uses enterprise-grade encryption, secure data storage, and complies with industry standards for data protection. All candidate information and assessment data is stored securely and accessed only by authorized users. We're fully compliant with privacy regulations and industry standards."
    },
    {
      question: "How quickly can I see results?",
      answer: "You can start seeing qualified candidates immediately after launching your assessment. Most companies see a 85% reduction in screening time and begin receiving ranked, qualified candidates within 24-48 hours. The AI provides instant scoring and recommendations as soon as candidates complete assessments."
    },
    {
      question: "What industries does PeopleOS work best for?",
      answer: "PeopleOS is particularly effective for skilled trades, construction, manufacturing, healthcare, and technical roles where specific skills and certifications are crucial. However, our customizable platform works for any industry that needs to verify candidate qualifications and job-specific abilities."
    },
    {
      question: "How does the credential verification work?",
      answer: "Our system automatically verifies licenses, certifications, and credentials in real-time by connecting to official databases and verification services. This eliminates manual verification processes and ensures compliance with industry standards, saving hundreds of hours of administrative work."
    }
  ];

  return (
    <section ref={ref} className={`py-20 bg-gradient-subtle transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Have questions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you understand how everything works. Check out our frequently asked questions below, or reach out to our support team if you need more specific information.
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