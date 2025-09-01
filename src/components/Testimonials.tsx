import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Event Organizer",
    content: "Rakshak made our wedding security seamless. The bodyguard was professional, discrete, and ensured all our guests felt safe throughout the celebration.",
    rating: 5,
    avatar: "/api/placeholder/50/50",
    initials: "PS"
  },
  {
    name: "Rajesh Kumar",
    role: "Business Executive",
    content: "As a frequent traveler, I rely on Rakshak for security in unfamiliar cities. Their guards are knowledgeable about local areas and provide excellent protection.",
    rating: 5,
    avatar: "/api/placeholder/50/50",
    initials: "RK"
  },
  {
    name: "Anita Desai",
    role: "Tourism Consultant",
    content: "I recommend Rakshak to all my international clients. The verification process is thorough and the service quality is consistently excellent.",
    rating: 5,
    avatar: "/api/placeholder/50/50",
    initials: "AD"
  },
  {
    name: "Vikram Singh",
    role: "Corporate Head",
    content: "For high-stakes business meetings, Rakshak's executive protection services are unmatched. Professional, reliable, and worth every rupee.",
    rating: 5,
    avatar: "/api/placeholder/50/50",
    initials: "VS"
  },
  {
    name: "Meera Patel",
    role: "Solo Traveler",
    content: "Traveling alone as a woman in India can be challenging. Rakshak's female bodyguards made me feel secure and confident during my trips.",
    rating: 5,
    avatar: "/api/placeholder/50/50",
    initials: "MP"
  },
  {
    name: "Suresh Gupta",
    role: "Film Producer",
    content: "For our celebrity events, Rakshak provides top-notch security. Their crowd management and VIP protection services are exceptional.",
    rating: 5,
    avatar: "/api/placeholder/50/50",
    initials: "SG"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from thousands of satisfied clients who trust 
            Rakshak for their security needs across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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