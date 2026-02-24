import { Shield, Award, Users, Wrench } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every truck body we build meets the highest industry standards with rigorous quality checks.',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Our skilled fabricators bring decades of hands-on experience to every project.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'We work closely with clients to deliver custom solutions that exceed expectations.',
  },
  {
    icon: Wrench,
    title: 'Full-Service Shop',
    description: 'From design to delivery, we handle every step of the fabrication process in-house.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-steel-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            oklch(0.7 0.15 60) 0px,
            oklch(0.7 0.15 60) 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-12 bg-amber-500" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Who We Are</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-steel-100 mb-6 leading-tight">
          About <span className="text-amber-500">Yameen</span> Truck Body Maker
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="text-steel-300 text-lg leading-relaxed mb-6">
              Yameen Truck Body Maker is a premier truck body fabrication company dedicated to delivering
              heavy-duty, custom-built truck bodies that stand the test of time. We specialize in designing
              and manufacturing truck bodies for commercial, industrial, and fleet applications.
            </p>
            <p className="text-steel-400 leading-relaxed mb-8">
              Our state-of-the-art workshop is equipped with modern fabrication tools and operated by
              experienced craftsmen who take pride in every weld, every cut, and every finish. Whether
              you need a single custom build or a full fleet solution, we deliver with precision and
              reliability.
            </p>

            {/* Key values */}
            <div className="space-y-3">
              {['Premium steel and aluminum materials', 'Custom designs to your specifications', 'On-time delivery, every time', 'Competitive pricing with no compromise on quality'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rotate-45 flex-shrink-0" />
                  <span className="text-steel-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-steel-950 font-black text-sm tracking-widest uppercase transition-colors duration-200 rounded-sm"
            >
              Work With Us
            </button>
          </div>

          {/* Right: Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 bg-steel-900 border border-steel-800 hover:border-amber-500/40 transition-colors duration-300 rounded-sm group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors rounded-sm">
                    <Icon size={20} className="text-amber-500" />
                  </div>
                  <h3 className="font-bold text-steel-100 mb-2 text-sm tracking-wide uppercase">{item.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
