import { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-steel-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-steel-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/logo.dim_300x100.png"
              alt="Yameen Truck Body Maker"
              className="h-10 md:h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback if image doesn't load
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col leading-none">
              <span className="font-black text-amber-500 text-sm md:text-base tracking-widest uppercase">
                Yameen
              </span>
              <span className="font-bold text-steel-100 text-xs md:text-sm tracking-wider uppercase">
                Truck Body Maker
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-semibold tracking-wider uppercase text-steel-300 hover:text-amber-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-steel-950 font-black text-sm tracking-wider uppercase transition-colors duration-200 rounded-sm"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-steel-300 hover:text-amber-500 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-steel-950/98 backdrop-blur-md border-t border-steel-800">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-semibold tracking-wider uppercase text-steel-300 hover:text-amber-500 hover:bg-steel-900 transition-colors duration-200 rounded-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-steel-950 font-black text-sm tracking-wider uppercase transition-colors duration-200 rounded-sm"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
