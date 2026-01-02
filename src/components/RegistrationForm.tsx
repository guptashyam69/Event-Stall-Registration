const RegistrationForm = () => {
  return (
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Register Your Food Stall
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to secure your spot
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-2xl">
          
          <form
            action="https://script.google.com/macros/s/AKfycbwCETQsMMODSce6vryOMGBcMjcUGcXEjYIbJSt3nKgo2UV34uqAByMERSda3E2eO9D5/exec"
            method="POST"
            className="space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="stallName"
                placeholder="Stall Name"
                required
                className="input"
              />

              <input
                name="ownerName"
                placeholder="Owner Name"
                required
                className="input"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="input"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                className="input"
              />
            </div>

            <select
              name="foodCategory"
              required
              className="input w-full"
            >
              <option value="">Select food category</option>
              <option>Indian Cuisine</option>
              <option>Chinese / Indo-Chinese</option>
              <option>Street Food</option>
              <option>Desserts & Sweets</option>
              <option>Beverages & Drinks</option>
              <option>Snacks & Fast Food</option>
            </select>

            <textarea
              name="menuItems"
              placeholder="Menu items"
              className="input"
            />

            <textarea
              name="specialRequirements"
              placeholder="Special requirements"
              className="input"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold"
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
