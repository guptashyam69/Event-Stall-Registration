const RegistrationForm = () => {
  return (
    <section
      id="register"
      className="py-20 px-4 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Register Your Food Stall
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to secure your spot at the most anticipated food festival of the year
          </p>
        </div>

        {/* Form Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-border/40 bg-card/60 backdrop-blur-xl">

          {/* Top Accent Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-primary via-purple-500 to-primary" />

          {/* Iframe Wrapper */}
          <div className="p-3 md:p-5 bg-background/90">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYjQydmzFHTvnijVSaFrEjUxUHN2V9v3teG181e5fvtuJOMA/viewform?embedded=true"
              width="100%"
              height="1460"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-xl bg-white"
              title="Food Stall Registration Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
