import { MapPin, Phone, Sparkles, Flame } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-rangoli opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-saffron to-marigold shadow-md">
                <Flame className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Chetana College
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Join us for an unforgettable Sankrant Sohala celebration filled with delicious food, 
              music, and festivities. Register your Stall today!
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xl text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="p-1.5 rounded-lg bg-rose/10">
                  <Phone className="w-4 h-4 text-rose" />
                </div>
                +91 91369 14423
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <div className="p-1.5 rounded-lg bg-saffron/10 mt-0.5">
                  <MapPin className="w-4 h-4 text-saffron" />
                </div>
                Chetana College, Bandra East, Mumbai - 400051
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xl text-foreground mb-4">
              Event Coordinators
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-marigold" />
                Prof. Kunjal Solanki - Cultural Coordinator
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Chetana College. All rights reserved. | <span className="text-gradient-festive font-semibold">Sankrant Sohala 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
};