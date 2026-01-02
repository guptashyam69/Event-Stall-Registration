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

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzp_NEmTxc4PmS6rg1m5rBTdSpVLKo9mMShIPQn8TR7ZzFfdmw9je8AaRpMtwkz1C7V/exec";

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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      toast({
        title: "Registration Successful 🎉",
        description: "Your data has been saved successfully.",
      });

      setFormData({
        stallName: "",
        ownerName: "",
        email: "",
        phone: "",
        foodCategory: "",
        menuItems: "",
      });
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="bg-card/60 backdrop-blur rounded-2xl p-6 space-y-6 border"
        >
          <h2 className="text-3xl font-bold text-center">
            Register Your Food Stall
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>
                <Store className="inline w-4 h-4 mr-1" />
                Stall Name *
              </Label>
              <Input
                name="stallName"
                value={formData.stallName}
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label>
                <Mail className="inline w-4 h-4 mr-1" />
                Email *
              </Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
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
                onChange={handleChange}
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
                <SelectItem value="Beverages">Beverages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Menu Items (Optional)</Label>
            <Textarea
              name="menuItems"
              value={formData.menuItems}
              onChange={handleChange}
            />
          </div>

          <Button disabled={isSubmitting} className="w-full">
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
