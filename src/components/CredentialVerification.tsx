import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, FileCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CredentialVerification = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Instant License & Certification Verification
            </h2>
            <p className="text-xl text-primary font-semibold mb-4">
              Verify credentials instantly
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Automatically verify licenses, certifications, and credentials in real-time. Reduce hiring risks and ensure compliance with industry standards without manual verification processes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Real-time license verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-foreground">Industry compliance checking</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileCheck className="h-5 w-5 text-primary" />
                <span className="text-foreground">Automated credential validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-foreground">Instant verification results</span>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">CDL License</h3>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <Badge className="bg-green-100 text-green-800 border-green-200">Verified ✓</Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">License Number</p>
                      <p className="font-medium text-foreground">CDL-2024-789456</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expiration</p>
                      <p className="font-medium text-foreground">Dec 15, 2026</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Class</p>
                      <p className="font-medium text-foreground">Class A</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium text-green-600">Active</p>
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Verified</span>
                      <span className="text-sm text-muted-foreground">2 min ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialVerification;