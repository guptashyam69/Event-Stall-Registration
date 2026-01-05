import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Store, Loader2, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    course: "",
    category: "",
  });

  // 🔗 Google Apps Script Web App URL
  const GOOGLE_SHEETS_WEBHOOK =
    "https://script.google.com/macros/s/AKfycbyBaZ2RKlYiyFG8r_KycQ_8khjxivq36CyYF2b0n9aAUpRanj8A0V0gZTTBSCoGqZMr/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.year ||
      !formData.course ||
      !formData.category
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
      // ✅ JSON SUBMISSION (same as your working project)
      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          year: formData.year,
          course: formData.course,
          category: formData.category,
        }),
      });

      toast({
        title: "Registration Submitted! 🎉",
        description: "Your stall registration has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        year: "",
        course: "",
        category: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
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
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Store className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stall Registration
          </h2>
          <p className="text-muted-foreground">
            Register your stall for the event
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border p-6 space-y-5">

            {/* FULL NAME */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* PHONE */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
              />
            </div>

            {/* YEAR + COURSE */}
            <div className="grid grid-cols-2 gap-4">
              <Select
                value={formData.year}
                onValueChange={(v) =>
                  setFormData({ ...formData, year: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1st">1st Year</SelectItem>
                  <SelectItem value="2nd">2nd Year</SelectItem>
                  <SelectItem value="3rd">3rd Year</SelectItem>
                  <SelectItem value="4th">4th Year</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={formData.course}
                onValueChange={(v) =>
                  setFormData({ ...formData, course: v })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btech">B.Tech</SelectItem>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="mca">MCA</SelectItem>
                  <SelectItem value="mba">MBA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* CATEGORY */}
            <Select
              value={formData.category}
              onValueChange={(v) =>
                setFormData({ ...formData, category: v })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food Stall</SelectItem>
                <SelectItem value="jewelry">Jewelry</SelectItem>
                <SelectItem value="books">Books</SelectItem>
              </SelectContent>
            </Select>

            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
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

export default RegistrationForm;
