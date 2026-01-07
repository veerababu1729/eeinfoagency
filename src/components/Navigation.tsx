import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/agency-logo.jpeg";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Why Us", href: "#why-us" },
  { label: "Works", href: "#works" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="EE Info Logo" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground">EE Info</span>
              <span className="text-xs text-muted-foreground">Next Gen Softwares</span>
            </div>
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-card border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <img src={logo} alt="EE Info Logo" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-lg font-semibold text-foreground">EE Info</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-4 px-4 text-lg text-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 EE Info. All rights reserved.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
