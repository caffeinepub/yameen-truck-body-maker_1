import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9719774964',
    sub: 'Mon–Sat, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mursaleensaifi14@gmail.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Industrial Area, Lahore',
    sub: 'Punjab, Pakistan',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Saturday',
    sub: '8:00 AM – 6:00 PM',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-steel-950 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-steel-100 mb-4 leading-tight">
            Contact <span className="text-amber-500">Us</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto text-base leading-relaxed">
            Ready to get started? Reach out to us for a free consultation and quote on your truck body project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-steel-900 border border-steel-800 rounded-sm"
                >
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 rounded-sm">
                    <Icon size={18} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-steel-500 tracking-widest uppercase mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-steel-100 font-semibold text-sm">{item.value}</div>
                    <div className="text-steel-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-steel-900 border border-steel-800 rounded-sm">
                <CheckCircle size={56} className="text-amber-500 mb-4" />
                <h3 className="text-xl font-black text-steel-100 uppercase tracking-wide mb-2">
                  Message Sent!
                </h3>
                <p className="text-steel-400 text-sm max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-steel-950 font-black text-xs tracking-widest uppercase transition-colors rounded-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 bg-steel-900 border border-steel-800 rounded-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-steel-300 text-xs font-bold tracking-widest uppercase">
                      Full Name <span className="text-amber-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-steel-950 border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-amber-500 focus:ring-amber-500/20 rounded-sm"
                    />
                    {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-steel-300 text-xs font-bold tracking-widest uppercase">
                      Phone Number <span className="text-amber-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="bg-steel-950 border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-amber-500 focus:ring-amber-500/20 rounded-sm"
                    />
                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-steel-300 text-xs font-bold tracking-widest uppercase">
                    Email Address <span className="text-amber-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-steel-950 border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-amber-500 focus:ring-amber-500/20 rounded-sm"
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-steel-300 text-xs font-bold tracking-widest uppercase">
                    Message <span className="text-amber-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your truck body requirements..."
                    rows={5}
                    className="bg-steel-950 border-steel-700 text-steel-100 placeholder:text-steel-600 focus:border-amber-500 focus:ring-amber-500/20 rounded-sm resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-amber-500 hover:bg-amber-400 text-steel-950 font-black text-sm tracking-widest uppercase transition-colors duration-200 rounded-sm"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
