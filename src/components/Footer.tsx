import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Chetana College
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Join us for an unforgettable New Year celebration filled with delicious food, 
              music, and festivities. Register your food stall today!
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                events@chetanacollege.edu.in
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Chetana College, Bandra East, Mumbai - 400051
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">
              Event Coordinators
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Prof. Kunjal Solanki - Cultural Coordinator</li>
              </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Chetana College. All rights reserved. | New Year Food Festival 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
