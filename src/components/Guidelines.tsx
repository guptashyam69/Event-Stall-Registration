import { CheckCircle2, Clock, MapPin, Shield, Store, Users } from "lucide-react";

const guidelines = [
  {
    icon: Clock,
    title: "Event Timing",
    description: "December 31st, 5 PM onwards. Stalls must be set up by 4 PM.",
  },
  {
    icon: MapPin,
    title: "Venue",
    description: "Chetana College Main Ground, Bandra East, Mumbai.",
  },
  {
    icon: Store,
    title: "Stall Categories",
    description: "Food stalls, jewelry & accessories, books & magazines welcome.",
  },
  {
    icon: Shield,
    title: "Stall Setup Rules",
    description: "Standard stall size will be allotted. No drilling, nailing, or permanent fixtures allowed.",
  },
  {
    icon: Users,
    title: "Cleanliness & Waste Management",
    description: "Stall owners must maintain cleanliness. Dispose waste only in designated bins.",
  },
  {
    icon: CheckCircle2,
    title: "Safety & Conduct",
    description: "Participants must follow college rules. Any misconduct may lead to stall removal.",
  },
];

export const Guidelines = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {guidelines.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
