const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfYjQydmzFHTvnijVSaFrEjUxUHN2V9v3teG181e5fvtuJOMA/formResponse";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const form = new FormData();

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
      title: "Form Submitted",
      description: "If details are valid, your response is recorded.",
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
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
