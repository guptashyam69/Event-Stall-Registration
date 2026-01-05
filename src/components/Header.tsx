import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Flame } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  // Check if current page is Register
  const isRegisterPage = location.pathname === "/register";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Chetana College Logo"
                className="w-11 h-11 rounded-xl object-contain shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-marigold rounded-full flex items-center justify-center animate-glow-pulse">
                <Flame className="w-2.5 h-2.5 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground group-hover:text-gradient-festive transition-all">
                Chetana College
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Sankrant Sohala 2026
              </p>
            </div>
          </Link>

          {/* Navigation (HIDDEN on Register Page) */}
          {!isRegisterPage && (
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                About
              </a>

            

              <a
                href="#guidelines"
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                Guidelines
              </a>

              <a
                href="#contact"
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                Contact
              </a>
            </nav>
          )}

        </div>
      </div>
    </header>
  );
};
