import { Truck, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Custom Truck Body Fabrication',
  'Truck Body Repair',
  'Painting & Finishing',
  'Fleet Customization',
  'Steel & Aluminum Fabrication',
  'Hydraulic & Tipper Systems',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'yameen-truck-body-maker'
  );

  return (
    <footer className="bg-steel-900 border-t border-steel-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Truck size={24} className="text-amber-500" />
              <div>
                <div className="font-black text-amber-500 text-sm tracking-widest uppercase">Yameen</div>
                <div className="font-bold text-steel-300 text-xs tracking-wider uppercase">Truck Body Maker</div>
              </div>
            </div>
            <p className="text-steel-500 text-sm leading-relaxed">
              Premium truck body fabrication with precision engineering and unmatched craftsmanship.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-xs text-steel-400 font-medium">Currently Accepting Orders</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-steel-100 font-black text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-steel-500 hover:text-amber-500 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-steel-700 group-hover:bg-amber-500 rounded-full transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-steel-100 font-black text-xs tracking-widest uppercase mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-steel-500 hover:text-amber-500 text-sm transition-colors duration-200 flex items-center gap-2 group text-left"
                  >
                    <span className="w-1 h-1 bg-steel-700 group-hover:bg-amber-500 rounded-full transition-colors flex-shrink-0" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-steel-100 font-black text-xs tracking-widest uppercase mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-steel-400 text-sm">9719774964</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-steel-400 text-sm">mursaleensaifi14@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-steel-400 text-sm">Saharanpur Rd, Gangoh Khalsa, Uttar Pradesh 247341</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-600 text-xs">
            © {new Date().getFullYear()} Yameen Truck Body Maker. All rights reserved.
          </p>
          <p className="text-steel-600 text-xs flex items-center gap-1">
            Built with{' '}
            <span className="text-amber-500">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
