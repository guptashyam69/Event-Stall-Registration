import logo from "@/assets/logo.jpg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Chetana College Logo" className="w-10 h-10 rounded-lg object-contain" />
            <div>
              <h1 className="font-display font-bold text-lg text-foreground">
                Chetana College
              </h1>
              <p className="text-xs text-muted-foreground">New Year Celebration 2026</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </a>
            <a href="#register" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Register
            </a>
            <a href="#guidelines" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Guidelines
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
