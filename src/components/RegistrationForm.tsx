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

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfYjQydmzFHTvnijVSaFrEjUxUHN2V9v3teG181e5fvtuJOMA/formResponse";

export default function RegistrationForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();

      // ✅ REAL ENTRY IDS (from your Google Form)
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
        title: "Form submitted ✅",
        description:
          "Your response has been recorded successfully in Google Forms.",
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
    } catch (err) {
      toast({
        title: "Submission failed ❌",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <Label>
          <Store className="inline w-4 h-4 mr-2" />
          Stall Name
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
          <User className="inline w-4 h-4 mr-2" />
          Owner Name
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
          <Mail className="inline w-4 h-4 mr-2" />
          Email
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
          <Phone className="inline w-4 h-4 mr-2" />
          Phone
        </Label>
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label>
          <Utensils className="inline w-4 h-4 mr-2" />
          Food Category
        </Label>
        <Select
          value={formData.foodCategory}
          onValueChange={(v) =>
            setFormData((p) => ({ ...p, foodCategory: v }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Indian">Indian</SelectItem>
            <SelectItem value="Chinese">Chinese</SelectItem>
            <SelectItem value="Street Food">Street Food</SelectItem>
            <SelectItem value="Desserts">Desserts</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        name="menuItems"
        placeholder="Menu Items (optional)"
        value={formData.menuItems}
        onChange={handleInputChange}
      />

      <Textarea
        name="specialRequirements"
        placeholder="Special Requirements (optional)"
        value={formData.specialRequirements}
        onChange={handleInputChange}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Submit
          </>
        )}
      </Button>
    </form>
  );
}
