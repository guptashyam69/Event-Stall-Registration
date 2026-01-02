import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Utensils, User, Phone, Mail, Store } from "lucide-react";

/* ✅ MUST end with /formResponse */
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfYjQydmzFHTvnijVSaFrEjUxUHN2V9v3teG181e5fvtuJOMA/formResponse";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    stallName: "",
    ownerName: "",
    email: "",
    phone: "",
    foodCategory: "",
    menuItems: "",
    specialRequirements: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, foodCategory: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.stallName ||
      !formData.ownerName ||
      !formData.email ||
      !formData.phone ||
      !formData.foodCategory
    ) {
      toast({
        title: "Please fill all required fields",
        description: "All fields marked with * are mandatory.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const form = new FormData();

      /* ✅ CORRECT entry IDs */
      form.append("entry.601523396", formData.stallName);
      form.append("entry.2020729575", formData.ownerName);
      form.append("entry.1146758362", formData.email);
      form.append("entry.1274800846", formData.phone);
      form.append("entry.1535600442", formData.foodCategory);
      form.append("entry.1832004683", formData.menuItems);
      form.append("entry.1208864290", formData.specialRequirements);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: form,
        mode: "no-cors", // REQUIRED
      });

      toast({
        title: "Form Submitted ✅",
        description:
          "Your registration has been recorded. We'll contact you soon.",
      });

      setFormData({
        stallName: "",
        ownerName: "",
        email: "",
        phone: "",
        foodCategory: "",
        menuItems: "",
        specialRequirements: "",
      });
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-card/50 rounded-2xl p-6 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>
                  <Store className="inline w-4 h-4 mr-1" />
                  Stall Name *
                </Label>
                <Input
                  name="stallName"
                  value={formData.stallName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label>
                  <User className="inline w-4 h-4 mr-1" />
                  Owner Name *
                </Label>
                <Input
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label>
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email *
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label>
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone *
                </Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label>
                <Utensils className="inline w-4 h-4 mr-1" />
                Food Category *
              </Label>
              <Select
                value={formData.foodCategory}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select food category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Indian Cuisine">Indian Cuisine</SelectItem>
                  <SelectItem value="Chinese / Indo-Chinese">
                    Chinese / Indo-Chinese
                  </SelectItem>
                  <SelectItem value="Street Food">Street Food</SelectItem>
                  <SelectItem value="Desserts & Sweets">
                    Desserts & Sweets
                  </SelectItem>
                  <SelectItem value="Beverages & Drinks">
                    Beverages & Drinks
                  </SelectItem>
                  <SelectItem value="Snacks & Fast Food">
                    Snacks & Fast Food
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Textarea
              name="menuItems"
              value={formData.menuItems}
              onChange={handleInputChange}
              placeholder="Menu Items (Optional)"
            />

            <Textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              placeholder="Special Requirements (Optional)"
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register Your Stall"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
