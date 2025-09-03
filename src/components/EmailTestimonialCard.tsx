import React from 'react';
import { Star } from 'lucide-react';

interface EmailTestimonialCardProps {
  text: string;
  name: string;
  role?: string;
  avatar: string;
  rating?: number;
  className?: string;
}

export const EmailTestimonialCard: React.FC<EmailTestimonialCardProps> = ({
  text,
  name,
  role,
  avatar,
  rating = 5,
  className = ""
}) => {
  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      {/* Background with gradient */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-4 left-8 opacity-30">
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>
        
        <div className="absolute top-4 right-8 opacity-30">
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-12 left-12 w-2 h-2 bg-white/20 rounded-full" />
        <div className="absolute bottom-12 left-16 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-white/25 rounded-full" />

        {/* White testimonial bubble */}
        <div className="relative bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-start gap-6">
            {/* Content */}
            <div className="flex-1">
              {/* Testimonial label */}
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                TESTIMONIAL
              </div>

              {/* Quote */}
              <div className="text-lg text-foreground leading-relaxed mb-6 font-medium">
                "{text}"
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Author info */}
              <div className="text-sm">
                <div className="font-semibold text-foreground">{name}</div>
                {role && (
                  <div className="text-muted-foreground">{role}</div>
                )}
              </div>
            </div>

            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage component for demonstration
export const EmailTestimonialExample: React.FC = () => {
  return (
    <div className="p-8 bg-background">
      <h2 className="text-2xl font-bold mb-8 text-center">Email Testimonial Card Example</h2>
      
      <EmailTestimonialCard
        text="HireApp completely transformed our hiring process. We went from spending weeks screening candidates to finding the perfect match in just days. The AI assessment is incredibly accurate!"
        name="YOURNAME"
        role="HR Director, Tech Solutions Inc."
        avatar="/lovable-uploads/3fcfbfd9-32a6-4ce3-8307-fc2eb4ceb4c6.png"
        rating={5}
      />
      
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Usage:</h3>
        <pre className="text-sm text-muted-foreground overflow-x-auto">
{`<EmailTestimonialCard
  text="Your testimonial text here..."
  name="Customer Name"
  role="Job Title, Company"
  avatar="/path/to/avatar.jpg"
  rating={5}
/>`}
        </pre>
      </div>
    </div>
  );
};