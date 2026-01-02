const RegistrationForm = () => {
  return (
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Register Your Food Stall
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to secure your spot at the most anticipated food festival of the year
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-4 md:p-8 shadow-2xl">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfYjQydmzFHTvnijVSaFrEjUxUHN2V9v3teG181e5fvtuJOMA/viewform?embedded=true" 
            width="100%" 
            height="1463" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="rounded-lg"
            title="Food Stall Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
