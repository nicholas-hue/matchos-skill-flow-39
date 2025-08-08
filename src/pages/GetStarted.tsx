import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Lock, User, Building, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [signupStep, setSignupStep] = useState(1);

  const benefits = [
    {
      icon: CheckCircle,
      text: "Free 14-day trial with full access"
    },
    {
      icon: CheckCircle,
      text: "No credit card required"
    },
    {
      icon: CheckCircle,
      text: "Setup takes less than 5 minutes"
    },
    {
      icon: CheckCircle,
      text: "Cancel anytime, no hidden fees"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to PeopleOS
          </Link>
          <div className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <button className="text-primary hover:text-primary-hover font-medium">
              Sign in
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Benefits */}
          <div className="lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Start hiring better <span className="text-primary">skilled workers</span> today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of companies already saving time and money with PeopleOS. 
              Get up and running in minutes, not weeks.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <benefit.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Jennifer Davis</div>
                  <div className="text-sm text-muted-foreground">HR Director, BuildCorp</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "PeopleOS reduced our screening time by 85% and improved candidate quality significantly. 
                We went from taking 6 weeks to fill positions to just 2 days."
              </p>
            </div>
          </div>

          {/* Right side - Sign up form */}
          <div className="lg:pl-8">
            <Card className="bg-card border-border shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Get started for free
                </CardTitle>
                <p className="text-muted-foreground">
                  Create your account and start screening candidates in minutes
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="signup" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="signup" className="space-y-4">
                    {signupStep === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" placeholder="Smith" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work email</Label>
                          <Input id="email" type="email" placeholder="john@company.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" placeholder="••••••••" />
                        </div>
                        <Button 
                          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                          onClick={() => setSignupStep(2)}
                        >
                          Continue
                        </Button>
                      </div>
                    )}
                    
                    {signupStep === 2 && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company name</Label>
                          <Input id="company" placeholder="Acme Construction" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry</Label>
                          <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                            <option value="">Select your industry</option>
                            <option value="construction">Construction</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="trades">Skilled Trades</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="companySize">Company size</Label>
                          <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="200+">200+ employees</option>
                          </select>
                        </div>
                        <div className="flex gap-3">
                          <Button 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => setSignupStep(1)}
                          >
                            Back
                          </Button>
                          <Button 
                            className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                          >
                            Create Account
                          </Button>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="signin" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signinEmail">Email</Label>
                      <Input id="signinEmail" type="email" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signinPassword">Password</Label>
                      <Input id="signinPassword" type="password" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-border" />
                        <span>Remember me</span>
                      </label>
                      <button className="text-sm text-primary hover:text-primary-hover">
                        Forgot password?
                      </button>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                      Sign In
                    </Button>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 text-center text-xs text-muted-foreground">
                  By creating an account, you agree to our{" "}
                  <button className="text-primary hover:text-primary-hover">Terms of Service</button>{" "}
                  and{" "}
                  <button className="text-primary hover:text-primary-hover">Privacy Policy</button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;