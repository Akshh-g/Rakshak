import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Building, Camera, Car, Home } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Event Security",
    description: "Professional security for weddings, parties, and social gatherings",
    features: ["Crowd Management", "Guest Screening", "Perimeter Security"],
    price: "₹2,000/hour",
    popular: true
  },
  {
    icon: Car,
    title: "Travel Escort",
    description: "Safe travel companion for tourists and business trips",
    features: ["Local Knowledge", "Route Planning", "24/7 Support"],
    price: "₹1,500/hour",
    popular: false
  },
  {
    icon: Building,
    title: "Corporate Security",
    description: "Executive protection and corporate event security",
    features: ["VIP Protection", "Threat Assessment", "Discrete Service"],
    price: "₹3,000/hour",
    popular: false
  },
  {
    icon: Camera,
    title: "Nightlife Security",
    description: "Safe nights out with professional protection",
    features: ["Club Security", "Safe Transport", "Group Protection"],
    price: "₹1,800/hour",
    popular: false
  },
  {
    icon: Home,
    title: "Residential Security",
    description: "Home and family protection services",
    features: ["Property Patrol", "Access Control", "Emergency Response"],
    price: "₹2,500/hour",
    popular: false
  },
  {
    icon: Shield,
    title: "Personal Bodyguard",
    description: "One-on-one personal protection for high-risk situations",
    features: ["Close Protection", "Risk Assessment", "Armed/Unarmed"],
    price: "₹4,000/hour",
    popular: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Security Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of professional security services, 
            tailored to meet your specific protection needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                service.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  service.popular ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.popular ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="outline" className="text-xs">
                      Starting Price
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}