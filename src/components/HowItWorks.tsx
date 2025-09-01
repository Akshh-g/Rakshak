import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, CreditCard, Shield } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Filter",
    description: "Search for bodyguards by location, expertise, and availability. Filter by language, event type, and budget.",
    step: "01"
  },
  {
    icon: UserCheck,
    title: "Select & Verify",
    description: "Choose from verified professionals with ratings, certifications, and detailed profiles. Read reviews from previous clients.",
    step: "02"
  },
  {
    icon: CreditCard,
    title: "Book & Pay",
    description: "Secure your booking with flexible payment options including UPI, cards, and digital wallets. Transparent pricing.",
    step: "03"
  },
  {
    icon: Shield,
    title: "Stay Protected",
    description: "Enjoy professional security services with real-time tracking, 24/7 support, and post-service feedback.",
    step: "04"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Rakshak Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting professional security is simple and straightforward. 
            Follow these easy steps to book your bodyguard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 mt-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Connector */}
        <div className="lg:hidden flex justify-center mt-8">
          <div className="w-0.5 h-16 bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
}