import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Rakshak</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                India's premier platform for professional bodyguard services. 
                Connecting you with verified security professionals for ultimate peace of mind.
              </p>
              <div className="flex space-x-3">
                <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Personal Bodyguard</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Event Security</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Travel Escort</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Corporate Security</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Residential Security</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Nightlife Security</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Join as Guard</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3 text-sm text-background/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 9876 543 210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@rakshak.in</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>
                    Business Bay, Mumbai,<br />
                    Maharashtra 400001
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-background/60">
                  24/7 Emergency Support<br />
                  Response Time: &lt; 15 minutes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 Rakshak Security Services. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-background transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}