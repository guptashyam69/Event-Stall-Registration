import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Utensils, User, Phone, Mail, Store } from "lucide-react";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/1qk6EQINZ7E1w6a1HCjGYM8KCOTNthHZPULzcPfY83XY";

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

    if (!formData.stallName || !formData.ownerName || !formData.email || !formData.phone || !formData.foodCategory) {
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
      // Map your form fields to Google Form entry IDs
      // You'll need to inspect your Google Form to get the correct entry IDs
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
        mode: "no-cors",
      });

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
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Register Your Food Stall
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to secure your spot at the most anticipated food festival of the year
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-10 shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
