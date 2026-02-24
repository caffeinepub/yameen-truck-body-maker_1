import { Hammer, PaintBucket, Settings, Truck, Layers, Zap } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Custom Truck Body Fabrication',
    description:
      'We design and build custom truck bodies from scratch to match your exact specifications — flatbeds, dropside bodies, box bodies, and more.',
    features: ['Flatbed bodies', 'Dropside bodies', 'Box/van bodies'],
  },
  {
    icon: Settings,
    title: 'Truck Body Repair & Restoration',
    description:
      'Expert repair services for damaged or worn truck bodies. We restore structural integrity and appearance to factory-like condition.',
    features: ['Structural repairs', 'Panel replacement', 'Frame straightening'],
  },
  {
    icon: PaintBucket,
    title: 'Painting & Surface Finishing',
    description:
      'Professional painting and surface treatment services including sandblasting, priming, and high-durability topcoats for long-lasting protection.',
    features: ['Sandblasting', 'Primer coating', 'Topcoat finishing'],
  },
  {
    icon: Truck,
    title: 'Fleet Customization',
    description:
      'Comprehensive fleet solutions for businesses needing multiple custom truck bodies. Consistent quality across every unit in your fleet.',
    features: ['Bulk orders', 'Uniform branding', 'Fleet management'],
  },
  {
    icon: Layers,
    title: 'Steel & Aluminum Fabrication',
    description:
      'Precision cutting, bending, and welding of steel and aluminum components for heavy-duty applications and specialized requirements.',
    features: ['CNC cutting', 'MIG/TIG welding', 'Custom brackets'],
  },
  {
    icon: Zap,
    title: 'Hydraulic & Tipper Systems',
    description:
      'Installation and maintenance of hydraulic tipping systems, tail lifts, and other mechanical accessories for your truck body.',
    features: ['Tipper bodies', 'Hydraulic systems', 'Tail lifts'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-steel-900 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">What We Do</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-steel-100 mb-4 leading-tight">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto text-base leading-relaxed">
            From custom fabrication to full fleet solutions, we offer a complete range of truck body
            manufacturing and finishing services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 bg-steel-950 border border-steel-800 hover:border-amber-500/50 transition-all duration-300 rounded-sm overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number badge */}
                <div className="absolute top-4 right-4 text-4xl font-black text-steel-800 group-hover:text-steel-700 transition-colors select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors duration-300 rounded-sm">
                    <Icon size={22} className="text-amber-500 group-hover:text-steel-950 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-steel-100 text-base mb-3 tracking-wide uppercase leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-steel-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-steel-500">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 bg-amber-500 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-steel-950 text-xl md:text-2xl uppercase tracking-wide">
              Need a Custom Solution?
            </h3>
            <p className="text-steel-900 text-sm mt-1">
              Tell us your requirements and we'll build exactly what you need.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 px-8 py-3 bg-steel-950 hover:bg-steel-900 text-amber-500 font-black text-sm tracking-widest uppercase transition-colors duration-200 rounded-sm"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
}
