import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const ROICalculator = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [inputs, setInputs] = useState({
    monthlyHires: 10,
    averageSalary: 65000,
    currentScreeningHours: 40,
    hrHourlyRate: 35,
    badHireRate: 25
  });

  const calculations = {
    // Current costs
    monthlyScreeningCost: inputs.monthlyHires * inputs.currentScreeningHours * inputs.hrHourlyRate,
    yearlyScreeningCost: inputs.monthlyHires * inputs.currentScreeningHours * inputs.hrHourlyRate * 12,
    badHiresPerYear: Math.round((inputs.monthlyHires * 12) * (inputs.badHireRate / 100)),
    costPerBadHire: 75000, // Industry average
    yearlyBadHireCost: Math.round((inputs.monthlyHires * 12) * (inputs.badHireRate / 100)) * 75000,
    
    // With PeopleOS
    newScreeningHours: inputs.currentScreeningHours * 0.15, // 85% reduction
    newScreeningCost: inputs.monthlyHires * (inputs.currentScreeningHours * 0.15) * inputs.hrHourlyRate,
    newYearlyScreeningCost: inputs.monthlyHires * (inputs.currentScreeningHours * 0.15) * inputs.hrHourlyRate * 12,
    newBadHireRate: 5, // 5% with PeopleOS
    newBadHiresPerYear: Math.round((inputs.monthlyHires * 12) * 0.05),
    newYearlyBadHireCost: Math.round((inputs.monthlyHires * 12) * 0.05) * 75000,
    
    // PeopleOS cost
    assessmentCost: inputs.monthlyHires * 25 * 12, // $25 per assessment
  };

  const savings = {
    screeningTimeSavings: calculations.yearlyScreeningCost - calculations.newYearlyScreeningCost,
    badHireSavings: calculations.yearlyBadHireCost - calculations.newYearlyBadHireCost,
    totalSavings: (calculations.yearlyScreeningCost - calculations.newYearlyScreeningCost) + 
                 (calculations.yearlyBadHireCost - calculations.newYearlyBadHireCost),
    netSavings: (calculations.yearlyScreeningCost - calculations.newYearlyScreeningCost) + 
                (calculations.yearlyBadHireCost - calculations.newYearlyBadHireCost) - calculations.assessmentCost,
    roi: Math.round(((((calculations.yearlyScreeningCost - calculations.newYearlyScreeningCost) + 
                     (calculations.yearlyBadHireCost - calculations.newYearlyBadHireCost) - calculations.assessmentCost) / 
                     calculations.assessmentCost) * 100))
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section ref={ref} className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-sm text-accent mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            ROI Calculator
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Calculate Your Savings with PeopleOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much money you'll save by reducing bad hires and cutting screening time. Most companies save $400K+ in their first year.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Panel */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Your Current Hiring Situation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="monthlyHires">Monthly Hires</Label>
                <Input
                  id="monthlyHires"
                  type="number"
                  value={inputs.monthlyHires}
                  onChange={(e) => setInputs(prev => ({ ...prev, monthlyHires: parseInt(e.target.value) || 0 }))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="averageSalary">Average Employee Salary</Label>
                <Input
                  id="averageSalary"
                  type="number"
                  value={inputs.averageSalary}
                  onChange={(e) => setInputs(prev => ({ ...prev, averageSalary: parseInt(e.target.value) || 0 }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="currentScreeningHours">Hours Spent Screening Per Hire</Label>
                <Input
                  id="currentScreeningHours"
                  type="number"
                  value={inputs.currentScreeningHours}
                  onChange={(e) => setInputs(prev => ({ ...prev, currentScreeningHours: parseInt(e.target.value) || 0 }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="hrHourlyRate">HR Team Hourly Rate</Label>
                <Input
                  id="hrHourlyRate"
                  type="number"
                  value={inputs.hrHourlyRate}
                  onChange={(e) => setInputs(prev => ({ ...prev, hrHourlyRate: parseInt(e.target.value) || 0 }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="badHireRate">Current Bad Hire Rate (%)</Label>
                <Input
                  id="badHireRate"
                  type="number"
                  value={inputs.badHireRate}
                  onChange={(e) => setInputs(prev => ({ ...prev, badHireRate: parseInt(e.target.value) || 0 }))}
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">Industry average: 25%</p>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Your Potential Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Costs */}
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <h4 className="font-semibold text-foreground mb-3">Current Annual Costs:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screening time costs:</span>
                    <span className="font-medium">{formatNumber(calculations.yearlyScreeningCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bad hire costs ({calculations.badHiresPerYear} bad hires):</span>
                    <span className="font-medium text-destructive">{formatNumber(calculations.yearlyBadHireCost)}</span>
                  </div>
                  <div className="border-t border-border/50 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total annual cost:</span>
                      <span className="text-destructive">{formatNumber(calculations.yearlyScreeningCost + calculations.yearlyBadHireCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* With PeopleOS */}
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-accent/50">
                <h4 className="font-semibold text-foreground mb-3">With PeopleOS:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New screening costs (85% reduction):</span>
                    <span className="font-medium">{formatNumber(calculations.newYearlyScreeningCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bad hire costs ({calculations.newBadHiresPerYear} bad hires):</span>
                    <span className="font-medium">{formatNumber(calculations.newYearlyBadHireCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">PeopleOS cost:</span>
                    <span className="font-medium">{formatNumber(calculations.assessmentCost)}</span>
                  </div>
                  <div className="border-t border-accent/50 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total annual cost:</span>
                      <span className="text-accent">{formatNumber(calculations.newYearlyScreeningCost + calculations.newYearlyBadHireCost + calculations.assessmentCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Summary */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-6 border border-primary/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatNumber(savings.netSavings)}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">Annual Net Savings</div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-accent">{savings.roi}%</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-accent">{Math.round(calculations.assessmentCost / 12 / savings.netSavings * 12)}x</div>
                      <div className="text-xs text-muted-foreground">Payback Period (months)</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start saving {formatNumber(savings.netSavings)} per year?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              These calculations are based on real customer data. Your actual savings may be even higher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Schedule ROI Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;