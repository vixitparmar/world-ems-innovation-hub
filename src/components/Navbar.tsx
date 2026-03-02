import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <span className="font-heading font-bold text-accent-foreground text-sm">W</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
            World<span className="text-[#007fff]">EMS</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === "/" && (location.hash === link.href.replace("/", "") || (location.hash === "" && link.href === "/#about"));
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${isActive
                  ? "text-[#007fff] font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm">
            <Link to="/#contact">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === "/" && (location.hash === link.href.replace("/", "") || (location.hash === "" && link.href === "/#about"));
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left py-3 text-sm font-medium transition-colors ${isActive
                  ? "text-secondary font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm" className="mt-2 w-full">
            <Link to="/#contact" onClick={() => setIsOpen(false)}>Partner With Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
