import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x700.png')",
        }}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-steel-950/80 via-steel-950/60 to-steel-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-950/70 via-transparent to-steel-950/50" />

      {/* Decorative diagonal stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-steel-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
            Professional Truck Body Fabrication
          </span>
        </div>

        {/* Company Name */}
        <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4">
          <span className="block text-steel-100">YAMEEN</span>
          <span className="block text-amber-500">TRUCK BODY</span>
          <span className="block text-steel-100">MAKER</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-steel-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Built Tough. Built Right. Built to Last.
        </p>
        <p className="mt-3 text-sm sm:text-base text-steel-400 max-w-xl mx-auto">
          Crafting premium truck bodies with precision engineering and unmatched craftsmanship since day one.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#contact')}
            className="group flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-steel-950 font-black text-sm tracking-widest uppercase transition-all duration-200 rounded-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
          >
            Get a Free Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll('#services')}
            className="flex items-center gap-2 px-8 py-4 border-2 border-steel-500 hover:border-amber-500 text-steel-200 hover:text-amber-500 font-bold text-sm tracking-widest uppercase transition-all duration-200 rounded-sm"
          >
            Our Services
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Trucks Built' },
            { value: '15+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-500">{stat.value}</div>
              <div className="text-xs text-steel-400 font-semibold tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-400 hover:text-amber-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
