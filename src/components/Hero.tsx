import { Button } from "@/components/ui/button";
import { Shield, Star, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 md:px-6">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjQiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')]"></div>
      
      <div className="relative max-w-6xl mx-auto text-center space-y-8">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary p-3 rounded-full">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rakshak
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground max-w-4xl mx-auto leading-tight">
            Professional Bodyguards <br className="hidden md:block" />
            <span className="text-primary">On-Demand</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            India's premier platform for booking verified security professionals. 
            Get personal protection when you need it, where you need it.
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Bodyguard Now
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Available 24/7 • Verified Professionals • Instant Booking
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Verified Guards</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-secondary/10 p-3 rounded-full">
              <Star className="h-6 w-6 text-secondary" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-accent/10 p-3 rounded-full">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">15 min</p>
              <p className="text-sm text-muted-foreground">Avg Response</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-gold/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-gold" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">10,000+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}