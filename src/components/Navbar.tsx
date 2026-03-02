import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = ['Products', 'Manufacturing', 'Capabilities', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: string) => {
    if (link === 'Products') {
      navigate('/products');
    } else if (location.pathname !== '/') {
      navigate(`/#${link.toLowerCase()}`);
    } else {
      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-card transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ height: 68 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-mid flex items-center justify-center">
            <span className="text-primary-foreground font-black text-xs font-chivo">W</span>
          </div>
          <span className="font-chivo font-black text-xl tracking-tight">
            <span className="text-blue-deep">WORLD</span>
            <span className="text-yellow ml-0.5">EMS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="nav-link font-chivo font-normal text-sm text-grey-400 hover:text-blue-deep transition-colors pb-1 bg-transparent border-none cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 bg-blue-mid text-primary-foreground font-chivo font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-deep transition-colors"
        >
          Partner With Us <span className="ml-1">→</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-blue-deep transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-blue-deep transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-blue-deep transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="block font-chivo text-sm text-grey-400 hover:text-blue-deep bg-transparent border-none cursor-pointer text-left w-full"
            >
              {link}
            </button>
          ))}
          <a
            href="#contact"
            className="block bg-blue-mid text-primary-foreground font-chivo font-bold text-sm px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMobileOpen(false)}
          >
            Partner With Us →
          </a>
        </div>
      )}
    </nav>
  );
}
