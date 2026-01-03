import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
