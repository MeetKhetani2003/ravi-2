"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Heart } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-10 lg:pt-16 pb-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blush-200/50 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
              <Heart className="h-3.5 w-3.5 text-blush-500" /> We'd love to hear from you
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
              Say hello. <em className="italic text-blush-600">We respond fast.</em>
            </h1>
            <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl">
              Whether it's a question about a service, a second opinion, or an emergency — our care coordinators are on the other side of this message.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[32px] bg-gradient-to-r from-blush-600 via-blush-500 to-rose-500 text-white p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold opacity-90">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> 24/7 Emergency
            </div>
            <div className="mt-3 font-serif text-3xl lg:text-4xl font-semibold">Maternity or NICU emergency?</div>
            <div className="text-white/85 mt-2">Call now — a senior specialist answers within 60 seconds.</div>
          </div>
          <a href="tel:7888741037" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-8 py-4 font-semibold hover:scale-105 transition">
            <Phone className="h-5 w-5" /> 78887-41037
          </a>
        </div>
      </div>

      {/* Contact grid */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, title: 'Visit us', lines: ['Dholan Majra Chowk, Old Plaza Building', 'Old Chandigarh-Morinda Road, Morinda'], accent: 'from-blush-400 to-blush-600' },
              { icon: Phone, title: 'Call us', lines: ['General: 78887-41037', 'Alt: 94633-66657'], accent: 'from-sky-400 to-blue-500' },
              { icon: Mail, title: 'Write to us', lines: ['info@ravihospital.com'], accent: 'from-emerald-400 to-teal-500' },
              { icon: Clock, title: 'Working hours', lines: ['OPD: Mon–Sat · 9 AM – 8 PM', 'Maternity, NICU, Emergency: 24/7'], accent: 'from-amber-400 to-orange-500' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${item.accent} grid place-items-center text-white shrink-0 shadow-lg`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-serif text-lg font-semibold text-ink-900">{item.title}</div>
                    <div className="mt-1 space-y-0.5 text-sm text-ink-500">
                      {item.lines.map((l) => <div key={l}>{l}</div>)}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/917888741037"
              target="_blank"
              rel="noreferrer"
              className="block rounded-[28px] bg-gradient-to-br from-green-500 to-green-600 text-white p-6 hover:scale-[1.01] transition"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/20 grid place-items-center backdrop-blur">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold">Prefer WhatsApp?</div>
                  <div className="text-sm text-white/85 mt-0.5">Message us — replies within 15 minutes.</div>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 lg:p-10" hover={false}>
              <SectionHeader
                eyebrow="Consultation form"
                title={<>Tell us what's on your mind.</>}
                subtitle="We'll respond within 2 hours during working hours. For emergencies, please call."
              />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Aanya Sharma" />
                  <Field label="Phone number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+91 98765 43210" />
                </div>
                <Field label="Email (optional)" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" />
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">What brings you to FH?</label>
                  <div className="flex flex-wrap gap-2">
                    {['Pregnancy care', 'Newborn/Pediatric', 'Gynecology', 'Fertility', 'General enquiry'].map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setForm({ ...form, concern: c })}
                        className={`rounded-full px-4 py-2 text-sm transition ${
                          form.concern === c
                            ? 'bg-blush-500 text-white'
                            : 'bg-blush-50 text-ink-700 hover:bg-blush-100'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-2">Your message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="A few lines about what you'd like to discuss…"
                    className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-4 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink-900 text-white px-8 py-4 font-semibold hover:bg-ink-800 transition flex items-center justify-center gap-2"
                >
                  {sent ? 'Message sent — we\'ll be in touch ✓' : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
                <p className="text-xs text-ink-400 text-center">By submitting, you agree to be contacted by our care coordinators.</p>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Branches */}
      <Section className="bg-blush-50/30">
        <SectionHeader eyebrow="Our Network" title={<>Other Branches</>} center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Note: In a real app we'd import HOSPITAL_INFO here, but since it's hard to import correctly without knowing the exact relative path if there are aliasing issues, we'll hardcode or we can import from '@/data' */}
          {[
            {
              name: "Fateh Children Hospital",
              location: "Ropar",
              description: "Only children hospital",
              contactLabel: "WhatsApp",
              contactInfo: "7888741037",
              logo: "/branch_fch.png"
            },
            {
              name: "Fateh Mediclinic",
              location: "Chamkaur Sahib",
              description: "Best of care, close to home",
              contactLabel: "Mobile",
              contactInfo: "9877264696",
              logo: "/branch_mediclinic.png"
            }
          ].map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col items-center text-center">
                <img src={branch.logo} alt={branch.name} className="h-20 w-auto object-contain mb-6" />
                <h4 className="font-serif text-2xl font-bold text-ink-900">{branch.name}</h4>
                <p className="text-ink-500 font-medium text-sm mt-1">{branch.location}</p>
                <p className="text-ink-600 mt-4 leading-relaxed max-w-xs mx-auto flex-grow">{branch.description}</p>
                
                <div className="mt-8 pt-6 border-t border-blush-100 w-full">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-blush-500">{branch.contactLabel}</span>
                    <a href={branch.contactLabel === 'WhatsApp' ? `https://wa.me/91${branch.contactInfo}` : `tel:${branch.contactInfo}`} className="inline-flex items-center gap-2 font-semibold text-lg text-ink-900 hover:text-blush-600 transition">
                      {branch.contactLabel === 'WhatsApp' ? <MessageCircle className="h-5 w-5 text-green-500" /> : <Phone className="h-5 w-5 text-blush-500" />}
                      {branch.contactInfo}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Map */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[40px] overflow-hidden shadow-xl shadow-blush-200/30 aspect-[16/9] lg:aspect-[21/9] relative">
            <iframe
              title="FH Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.490%2C30.787%2C76.500%2C30.797&layer=mapnik&marker=30.7923203%2C76.4951248"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 glass rounded-2xl p-5 max-w-xs">
              <div className="font-serif text-lg font-semibold text-ink-900">Fatesh Hospital</div>
              <div className="text-sm text-ink-500 mt-1">Dholan Majra Chowk, Old Plaza Building, Morinda</div>
              <a href="https://www.google.com/maps/search/Fateh%20Hospital/@30.792320251464844,76.49512481689453,17z?hl=en" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blush-600">
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-900 mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent"
      />
    </div>
  );
}
