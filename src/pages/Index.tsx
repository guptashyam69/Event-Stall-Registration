import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Guidelines } from "@/components/Guidelines";
import { Confetti } from "@/components/Confetti";
import { PartyPopper, Sparkles, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Confetti />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <PartyPopper className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">New Year Celebration 2026</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="text-foreground">Food Stall</span>
            <br />
            <span className="text-gradient-gold">Registration</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Be part of Chetana College's grand New Year celebration! 
            Register your food stall and serve delicious treats to hundreds of attendees.
          </p>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wider">Event Countdown</p>
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#register">
                <UtensilsCrossed className="w-5 h-5" />
                Register Now
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#guidelines">
                View Guidelines
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-primary/20 animate-float">
          <Sparkles className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-10 text-primary/20 animate-float" style={{ animationDelay: "2s" }}>
          <PartyPopper className="w-20 h-20" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join the <span className="text-gradient-gold">Celebration</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chetana College invites food enthusiasts, vendors, and culinary entrepreneurs to 
              be part of our spectacular New Year's Eve food festival. Showcase your culinary 
              skills to over 1,000+ attendees and make this celebration memorable!
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">50+</p>
                <p className="text-muted-foreground text-sm">Food Stalls</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">1000+</p>
                <p className="text-muted-foreground text-sm">Attendees</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold font-display">8+</p>
                <p className="text-muted-foreground text-sm">Hours of Fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Register Your <span className="text-gradient-gold">Food Stall</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to secure your spot at the food festival
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-10 shadow-xl">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event <span className="text-gradient-gold">Guidelines</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Please review these important guidelines before registering your food stall
            </p>
          </div>

          <Guidelines />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
