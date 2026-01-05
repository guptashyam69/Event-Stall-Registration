import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy, Loader2, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CompetitionForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    competition: "",
  });

  // Replace this with your Google Sheets webhook URL
  const GOOGLE_SHEETS_WEBHOOK = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.competition) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    if (!GOOGLE_SHEETS_WEBHOOK) {
      toast({
        title: "Configuration Required",
        description: "Please set up the Google Sheets webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: "competition_registration",
        }),
      });

      toast({
        title: "Registration Submitted! 🎉",
        description: "Your competition registration has been sent. Good luck!",
      });

      setFormData({ name: "", email: "", phone: "", competition: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="competition" className="py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink/20 mb-6">
            <Trophy className="w-8 h-8 text-pink" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            <span className="text-gradient-pink">Competition Registration</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join exciting competitions at Makar Sankranti celebration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-pink/30 p-6 md:p-8 shadow-2xl space-y-5">
            <div className="space-y-2">
              <Label htmlFor="comp-name" className="text-foreground font-medium">
                Full Name <span className="text-pink">*</span>
              </Label>
              <Input
                id="comp-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted/50 border-border focus:border-pink focus:ring-pink"
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comp-email" className="text-foreground font-medium">
                Email Address <span className="text-pink">*</span>
              </Label>
              <Input
                id="comp-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted/50 border-border focus:border-pink focus:ring-pink"
                maxLength={255}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comp-phone" className="text-foreground font-medium">
                Phone Number <span className="text-pink">*</span>
              </Label>
              <Input
                id="comp-phone"
                type="tel"
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                className="bg-muted/50 border-border focus:border-pink focus:ring-pink"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competition" className="text-foreground font-medium">
                Competition <span className="text-pink">*</span>
              </Label>
              <Select value={formData.competition} onValueChange={(value) => setFormData({ ...formData, competition: value })}>
                <SelectTrigger className="bg-muted/50 border-border focus:border-pink focus:ring-pink">
                  <SelectValue placeholder="Select a competition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rangoli">🎨 Rangoli Making</SelectItem>
                  <SelectItem value="kite">🪁 Kite Flying</SelectItem>
                  <SelectItem value="cooking">👨‍🍳 Cooking Contest</SelectItem>
                  <SelectItem value="dance">💃 Dance Competition</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              variant="pink" 
              size="lg" 
              className="w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Registration
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CompetitionForm;
