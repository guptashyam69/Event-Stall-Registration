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
    <section id="competition" className="py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink/20 mb-6">
            <Trophy className="w-8 h-8 text-pink" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Competition Registration
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border p-6 space-y-5">

            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Phone *</Label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
              />
            </div>

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

            <Select
              value={formData.competition}
              onValueChange={(v) =>
                setFormData({ ...formData, competition: v })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select competition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rangoli">Rangoli</SelectItem>
                <SelectItem value="kite">Kite Flying</SelectItem>
                <SelectItem value="dance">Dance</SelectItem>
                <SelectItem value="cooking">Cooking</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2" />
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
