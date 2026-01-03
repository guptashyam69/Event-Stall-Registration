import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
