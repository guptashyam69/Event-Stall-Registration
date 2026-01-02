import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Utensils, User, Phone, Mail, Store } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

export const RegistrationForm = () => {
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

    // Validate form
    if (!formData.stallName || !formData.ownerName || !formData.email || !formData.phone || !formData.foodCategory) {
      toast({
        title: "Please fill all required fields",
        description: "All fields marked with * are mandatory.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual Google Form submission)
    try {
      // In production, you would submit to Google Forms using fetch
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Registration Successful! 🎉",
        description: "Your food stall has been registered. We'll contact you soon!",
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
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="stallName" className="text-foreground flex items-center gap-2">
            <Store className="w-4 h-4 text-primary" />
            Stall Name *
          </Label>
          <Input
            id="stallName"
            name="stallName"
            value={formData.stallName}
            onChange={handleInputChange}
            placeholder="e.g., Spice Garden"
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ownerName" className="text-foreground flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Owner Name *
          </Label>
          <Input
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            placeholder="Your full name"
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            className="bg-secondary/50 border-border focus:border-primary transition-colors"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="foodCategory" className="text-foreground flex items-center gap-2">
          <Utensils className="w-4 h-4 text-primary" />
          Food Category *
        </Label>
        <Select onValueChange={handleSelectChange} value={formData.foodCategory}>
          <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
            <SelectValue placeholder="Select your food category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="indian">Indian Cuisine</SelectItem>
            <SelectItem value="chinese">Chinese / Indo-Chinese</SelectItem>
            <SelectItem value="street-food">Street Food</SelectItem>
            <SelectItem value="desserts">Desserts & Sweets</SelectItem>
            <SelectItem value="beverages">Beverages & Drinks</SelectItem>
            <SelectItem value="snacks">Snacks & Fast Food</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="menuItems" className="text-foreground">
          Menu Items (Optional)
        </Label>
        <Textarea
          id="menuItems"
          name="menuItems"
          value={formData.menuItems}
          onChange={handleInputChange}
          placeholder="List your main menu items..."
          className="bg-secondary/50 border-border focus:border-primary transition-colors min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequirements" className="text-foreground">
          Special Requirements (Optional)
        </Label>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          placeholder="Any special equipment or space requirements..."
          className="bg-secondary/50 border-border focus:border-primary transition-colors min-h-[80px]"
        />
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>Submitting...</>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Register Your Stall
          </>
        )}
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        By registering, you agree to follow the event guidelines and food safety standards.
      </p>
    </form>
  );
};
