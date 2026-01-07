import logo from "@/assets/agency-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EE Info Logo" className="w-10 h-10 rounded-lg object-cover" />
            <div>
              <p className="text-lg font-semibold text-foreground">EE Info</p>
              <p className="text-sm text-muted-foreground">Next Gen Softwares</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Works
            </a>
            <a href="#tech" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tech
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EE Info. All rights reserved. Built with ❤️ for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
