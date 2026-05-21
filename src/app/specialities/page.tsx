"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Phone, ArrowUpRight, Shield } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { services } from '@/data';
import { SPECIALITIES } from '@/legacyData';

const faqs = [
  { q: 'Do you support painless delivery?', a: 'Yes. Our anaesthesia team is available 24/7 for epidural and other pain management options during labour.' },
  { q: 'Can my partner stay with me during delivery?', a: 'Absolutely. We practice family-integrated birth care. Partners are welcome in birthing suites throughout labour and delivery.' },
  { q: 'What insurance plans do you accept?', a: 'We partner with 30+ insurers and offer transparent self-pay packages for maternity, surgery, and NICU care.' },
  { q: 'Do you offer home visits after discharge?', a: 'Yes. Our postnatal care team conducts home visits within 48 hours of discharge for mothers and newborns.' },
  { q: 'Is NICU care available 24/7?', a: 'Yes. Our Level III NICU is staffed by neonatologists around the clock with advanced servo-incubators and monitoring.' },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id);
  const active = services.find((s) => s.id === activeService)!;

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-10 lg:pt-16 pb-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-blush-200/50 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-sky-200/50 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
              <Shield className="h-3.5 w-3.5 text-blush-500" /> 8 specialties, one family-centred approach
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
              Every chapter of care, <em className="italic text-blush-600">thoughtfully designed.</em>
            </h1>
            <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl">
              From the first prenatal visit to your child's adolescent years — explore how FH blends world-class medicine with the warmth of home.
            </p>
          </div>
        </div>
      </section>

      {/* Services layout with sidebar */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <Card className="p-3" hover={false}>
              <div className="p-3 pb-0">
                <div className="text-xs uppercase tracking-[0.2em] text-ink-400 font-medium">Jump to</div>
                <div className="mt-1 font-serif text-xl font-semibold text-ink-900">Our Specialties</div>
              </div>
              <nav className="p-3 space-y-1">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveService(s.id);
                      document.getElementById('service-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`w-full text-left flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      activeService === s.id
                        ? 'bg-gradient-to-r from-blush-100 to-sky-100 text-ink-900'
                        : 'text-ink-500 hover:bg-blush-50 hover:text-ink-900'
                    }`}
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className="flex-1">{s.title}</span>
                    {activeService === s.id && <ArrowUpRight className="h-4 w-4" />}
                  </button>
                ))}
              </nav>
            </Card>

            {/* Emergency card */}
            <div className="mt-5 rounded-[28px] bg-gradient-to-br from-blush-500 to-rose-500 text-white p-6 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-90">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> 24/7 Emergency
                </div>
                <div className="mt-3 font-serif text-xl font-semibold">Urgent maternity or NICU?</div>
                <p className="mt-2 text-sm text-white/85">A senior specialist answers within 60 seconds.</p>
                <a href="tel:+919876543210" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-5 py-2.5 text-sm font-semibold">
                  <Phone className="h-4 w-4" /> Call now
                </a>
              </div>
            </div>
          </aside>

          {/* Detail content */}
          <div className="lg:col-span-8" id="service-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header card */}
                <div className={`rounded-[36px] ${active.bg} p-10 lg:p-14 relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/50 blur-2xl" />
                  <div className="relative">
                    <div className="text-6xl mb-4">{active.icon}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-ink-500 font-medium">Specialty</div>
                    <h2 className="mt-2 font-serif text-4xl lg:text-5xl font-semibold text-ink-900 leading-tight">{active.title}</h2>
                    <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl">{active.description}</p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  {active.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Card className="p-5 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blush-400 to-blush-600 grid place-items-center text-white shrink-0">
                          <Check className="h-5 w-5" />
                        </div>
                        <div className="font-medium text-ink-900">{f}</div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* CTA block */}
                <div className="mt-5 rounded-[28px] bg-ink-900 text-white p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                  <div>
                    <div className="font-serif text-2xl font-semibold">Ready to discuss {active.title.toLowerCase()}?</div>
                    <div className="text-white/60 mt-2 text-sm">Book a 20-minute consultation with our specialist.</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    {(() => {
                      const idMap: Record<string, string> = {
                        'maternity': 'obstetrics-maternity',
                        'gynecology': 'gynaecology',
                        'fertility': 'fertility',
                        'pediatrics': 'pediatrics',
                        'neonatology': 'neonatology'
                      };
                      const legacyId = idMap[active.id];
                      return legacyId ? (
                        <Link href={`/speciality/${legacyId}`} className="rounded-full bg-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/30 transition flex items-center justify-center gap-2">
                          View details <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : null;
                    })()}
                    <Link href="/appointment" className="rounded-full bg-blush-500 text-white px-6 py-3 text-sm font-semibold hover:bg-blush-400 transition flex items-center justify-center gap-2">
                      Book consultation <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Bento services grid */}
      <section className="relative py-20 bg-gradient-to-b from-blush-50/40 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="At a glance"
            title={<>All specialties, in one view.</>}
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setActiveService(s.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className={`text-left rounded-[28px] p-6 lg:p-8 ${s.bg} hover:scale-[1.02] transition group ${
                  i === 0 || i === 5 ? 'lg:row-span-2' : ''
                }`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{s.short}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blush-600">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Common questions"
              title={<>Everything you wanted to ask.</>}
              subtitle="Honest answers from our specialists. If you don't see yours, message us — we'll answer within a few hours."
            />
          </div>
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Card className="p-6" hover={false}>
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 text-left">
        <span className="font-serif text-lg font-semibold text-ink-900">{q}</span>
        <ChevronDown className={`h-5 w-5 text-ink-500 shrink-0 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-ink-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
