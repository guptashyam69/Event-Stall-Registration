import { CheckCircle2, Clock, MapPin, Shield, Utensils, Users } from "lucide-react";

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
    icon: Utensils,
    title: "Food Standards",
    description: "All food must be freshly prepared with proper hygiene practices.",
  },
  {
    icon: Shield,
    title: "Licensing",
    description: "FSSAI license or food handler certificate recommended.",
  },
  {
    icon: Users,
    title: "Staff Limit",
    description: "Maximum 3 persons per stall for smooth operations.",
  },
  {
    icon: CheckCircle2,
    title: "Registration Fee",
    description: "₹1,500 per stall (includes table, chairs & electricity).",
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
