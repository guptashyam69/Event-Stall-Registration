import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy, Loader2, Sparkles, User, Mail, Phone, GraduationCap, BookOpen, Award } from "lucide-react";
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
    year: "",
    course: "",
    competition: "",
  });

  // 🔗 SAME Google Apps Script Web App URL
  const GOOGLE_SHEETS_WEBHOOK =
    "https://script.google.com/macros/s/AKfycbzx8p5AMoBisNdqVX7HU8IRrwIhaHysFd_70P5V8mfZdxozxYxrdPBHsNTQzUqVT9LBwQ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.year ||
      !formData.course ||
      !formData.competition
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // ✅ FormData (REQUIRED by Apps Script)
      const fd = new FormData();
      fd.append("formType", "competition"); // 👈 IMPORTANT
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("year", formData.year);
      fd.append("course", formData.course);
      fd.append("category", formData.competition); // saved as category

      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        body: fd,
      });

      toast({
        title: "Registration Submitted! 🎉",
        description: "Your competition registration has been sent. Good luck!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        year: "",
        course: "",
        competition: "",
      });
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
    <section id="competition" className="py-16 px-4 bg-gradient-hero min-h-screen">
      <div className="container mx-auto max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-rose to-rose-light shadow-lg mb-6 animate-bounce-soft">
            <Trophy className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-gradient-festive">
            Competition Registration
          </h2>
          <p className="text-muted-foreground font-medium">
            Join exciting competitions at Sankrant Sohala 2026
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit}>
          <div className="bg-card rounded-3xl border-2 border-secondary/10 p-8 shadow-xl relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-rose/20 to-rose-light/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-marigold/20 to-saffron/20 rounded-full blur-2xl" />
            
            <div className="space-y-5 relative z-10">
              {/* Full Name */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-semibold">
                  <User className="w-4 h-4 text-rose" />
                  Full Name
                </Label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 rounded-xl border-2 border-border focus:border-secondary bg-background/50 placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-semibold">
                  <Mail className="w-4 h-4 text-saffron" />
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 rounded-xl border-2 border-border focus:border-secondary bg-background/50 placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-semibold">
                  <Phone className="w-4 h-4 text-sky" />
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                    })
                  }
                  className="h-12 rounded-xl border-2 border-border focus:border-secondary bg-background/50 placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Year */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-semibold">
                  <GraduationCap className="w-4 h-4 text-marigold" />
                  Year
                </Label>
                <Select
                  value={formData.year}
                  onValueChange={(v) =>
                    setFormData({ ...formData, year: v })
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-2 border-border focus:border-secondary bg-background/50">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="1st">1st Year</SelectItem>
                    <SelectItem value="2nd">2nd Year</SelectItem>
                    <SelectItem value="3rd">3rd Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Course */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-semibold">
                  <BookOpen className="w-4 h-4 text-rose" />
                  Course
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(v) =>
                    setFormData({ ...formData, course: v })
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-2 border-border focus:border-secondary bg-background/50">
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="bms">Bms</SelectItem>
                    <SelectItem value="baf">Baf</SelectItem>
                    <SelectItem value="bsc it">Bsc IT</SelectItem>
                    <SelectItem value="bba">Bba</SelectItem>
                    <SelectItem value="bammc">Bammc</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Competition */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground font-semibold">
                  <Award className="w-4 h-4 text-saffron" />
                  Competition
                </Label>
                <Select
                  value={formData.competition}
                  onValueChange={(v) =>
                    setFormData({ ...formData, competition: v })
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-2 border-border focus:border-secondary bg-background/50">
                    <SelectValue placeholder="Select a competition" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="pot designing">🎨 Pot Designing</SelectItem>
                    <SelectItem value="kite making">🪁 Kite Making</SelectItem>
                    <SelectItem value="kite decoration">👨‍🍳 Kite Decoration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="pink"
                size="xl"
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
                    <Sparkles className="w-5 h-5" />
                    Submit Registration
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CompetitionForm;
