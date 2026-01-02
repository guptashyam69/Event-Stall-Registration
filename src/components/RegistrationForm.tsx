const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzp_NEmTxc4PmS6rg1m5rBTdSpVLKo9mMShIPQn8TR7ZzFfdmw9je8AaRpMtwkz1C7V/exec";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    stallName: formData.stallName,
    ownerName: formData.ownerName,
    email: formData.email,
    phone: formData.phone,
    foodCategory: formData.foodCategory,
    menuItems: formData.menuItems,
    specialRequirements: formData.specialRequirements,
  };

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.status === "success") {
      toast({
        title: "Submitted successfully ✅",
        description: "Your data has been saved to Google Sheets",
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
    } else {
      throw new Error(result.message);
    }
  } catch (err) {
    toast({
      title: "Submission failed ❌",
      description: "Check Apps Script permissions or Sheet ID",
      variant: "destructive",
    });
  }
};
