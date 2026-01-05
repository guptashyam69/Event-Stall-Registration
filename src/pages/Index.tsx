import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Guidelines } from "@/components/Guidelines";
import { Confetti } from "@/components/Confetti";
import { Sun, Sparkles, Store, Trophy, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Confetti />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-hero pattern-dots">
        {/* Decorative Diyas/Lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-4 h-4 bg-marigold rounded-full animate-glow-pulse opacity-80" />
          <div className="absolute top-32 right-[15%] w-3 h-3 bg-rose rounded-full animate-glow-pulse opacity-70" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-48 left-[25%] w-3 h-3 bg-saffron rounded-full animate-glow-pulse opacity-75" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-32 right-[20%] w-4 h-4 bg-marigold rounded-full animate-glow-pulse opacity-80" style={{ animationDelay: "1.5s" }} />
          <div className="absolute bottom-48 left-[15%] w-3 h-3 bg-rose rounded-full animate-glow-pulse opacity-70" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-festive text-primary-foreground mb-8 animate-fade-in shadow-lg">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Makar Sankranti 2026</span>
            <Flame className="w-4 h-4" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="text-gradient-festive drop-shadow-lg">Sankrant Sohala</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in font-medium" style={{ animationDelay: "200ms" }}>
            Celebrate the harvest festival with Chetana College! 
            Register your stalls or join exciting competitions.
          </p>

          <div className="mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <p className="text-muted-foreground text-sm mb-4 uppercase tracking-widest font-semibold">Event Countdown</p>
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button variant="hero" size="xl" asChild className="glow-saffron">
              <Link to="/register">
                <Store className="w-5 h-5" />
                Stall Registration
              </Link>
            </Button>
            <Button variant="pink" size="xl" asChild className="glow-rose">
              <Link to="/competition">
                <Trophy className="w-5 h-5" />
                Competition Registration
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-rose animate-float opacity-40">
          <Sparkles className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-10 text-marigold animate-float opacity-50" style={{ animationDelay: "2s" }}>
          <Sun className="w-20 h-20" />
        </div>
        <div className="absolute top-40 right-20 text-saffron animate-float opacity-40" style={{ animationDelay: "3s" }}>
          <Sparkles className="w-12 h-12" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card pattern-rangoli relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join the <span className="text-gradient-festive">Celebration</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Chetana College invites vendors, entrepreneurs, and creators to 
              be part of our spectacular Makar Sankranti festival. Showcase your 
              products—from delicious food to beautiful jewelry, accessories, books, and magazines—to over 100+ attendees!
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-saffron/10 to-marigold/10 border border-saffron/20">
                <p className="text-4xl md:text-5xl font-bold text-gradient-saffron font-display">10+</p>
                <p className="text-muted-foreground text-sm font-medium mt-1">Open Stalls</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-rose/10 to-rose-light/10 border border-rose/20">
                <p className="text-4xl md:text-5xl font-bold text-gradient-rose font-display">100+</p>
                <p className="text-muted-foreground text-sm font-medium mt-1">Attendees</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-sky/10 to-sky-light/10 border border-sky/20">
                <p className="text-4xl md:text-5xl font-bold text-gradient-sky font-display">4+</p>
                <p className="text-muted-foreground text-sm font-medium mt-1">Hours of Fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Event <span className="text-gradient-festive">Guidelines</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-medium">
              Please review these important guidelines before registering your stall
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