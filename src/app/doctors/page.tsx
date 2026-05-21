"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Star, Calendar, Clock, GraduationCap, Heart, ArrowUpRight, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { doctors } from '@/data';

export default function Doctors() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-10 lg:pt-16 pb-16 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blush-200/50 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
              <Heart className="h-3.5 w-3.5 text-blush-500" /> Senior, stable, deeply human
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
              Doctors who know <em className="italic text-blush-600">your story.</em>
            </h1>
            <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl">
              At FH, your doctor doesn't rotate every visit. Our team is small by design — senior, stable, and genuinely invested in the families they care for.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor profiles */}
      <Section>
        <div className="space-y-10">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[40px] overflow-hidden border border-blush-100/60 bg-white shadow-[0_20px_60px_-20px_rgba(255,125,163,0.25)] grid lg:grid-cols-12 gap-0 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 left-6 glass rounded-full px-4 py-2 text-sm font-semibold text-ink-900 flex items-center gap-2">
                  <Award className="h-4 w-4 text-blush-600" /> {doc.experience}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-8 lg:p-14">
                <div className="text-xs uppercase tracking-[0.2em] text-blush-500 font-semibold">{doc.role}</div>
                <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-semibold text-ink-900 leading-tight">{doc.name}</h2>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-sm text-ink-500">5.0 · 400+ patient reviews</span>
                </div>

                <p className="mt-6 text-ink-500 leading-relaxed">{doc.bio}</p>

                {/* Specialties */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {doc.specialties.map((s) => (
                    <span key={s} className="rounded-full bg-blush-50 text-blush-700 px-4 py-1.5 text-xs font-semibold">{s}</span>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <div className="font-serif text-2xl lg:text-3xl font-semibold text-ink-900">
                      {doc.patients ?? doc.nicu}
                    </div>
                    <div className="text-xs text-ink-500 mt-1">{doc.patients ? 'Families served' : 'NICU recoveries'}</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl lg:text-3xl font-semibold text-ink-900">{doc.experience}</div>
                    <div className="text-xs text-ink-500 mt-1">Clinical experience</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl lg:text-3xl font-semibold text-ink-900">{doc.deliveries ?? '4.9'}</div>
                    <div className="text-xs text-ink-500 mt-1">{doc.deliveries ? 'Safe deliveries' : 'Avg rating'}</div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mt-8 pt-8 border-t border-blush-100">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-400 font-medium mb-4">
                    <GraduationCap className="h-3.5 w-3.5" /> Qualifications
                  </div>
                  <ul className="space-y-2">
                    {doc.qualifications.map((q) => (
                      <li key={q} className="flex items-center gap-2 text-sm text-ink-700">
                        <CheckCircle className="h-4 w-4 text-blush-500 shrink-0" /> {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule & CTA */}
                <div className="mt-8 grid md:grid-cols-5 gap-4 items-stretch">
                  <div className="md:col-span-3 rounded-2xl bg-cream-50 p-5">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-400 font-medium mb-3">
                      <Clock className="h-3.5 w-3.5" /> Weekly schedule
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-ink-700">
                      {doc.schedule.map((s) => (
                        <div key={s} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-blush-500" /> {s}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 grid grid-cols-2 gap-2">
                    <Link
                      href={`/doctor/dr-${doc.id}`}
                      className="rounded-2xl bg-white/50 border border-blush-100 text-ink-900 p-4 hover:bg-white transition flex flex-col justify-between"
                    >
                      <div>
                        <Star className="h-5 w-5 text-blush-400" />
                        <div className="mt-3 text-sm font-semibold">View profile</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-ink-400 mt-2" />
                    </Link>
                    <Link
                      href="/appointment"
                      className="rounded-2xl bg-ink-900 text-white p-4 hover:bg-ink-800 transition flex flex-col justify-between"
                    >
                      <div>
                        <Calendar className="h-5 w-5 text-blush-400" />
                        <div className="mt-3 text-sm font-semibold">Book visit</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-blush-400 mt-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Achievement counters */}
      <section className="relative py-24 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,125,163,0.5),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,197,255,0.5),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <SectionHeader
            eyebrow="By the numbers"
            title={<span className="text-white">Collective impact of our team.</span>}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: '32K+', l: 'Consultations delivered' },
              { v: '6.8K+', l: 'Safe deliveries' },
              { v: '4.1K+', l: 'NICU recoveries' },
              { v: '48%', l: 'First-cycle IVF success (under 35)' },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-serif text-4xl lg:text-6xl font-semibold">{s.v}</div>
                <div className="mt-3 text-sm text-white/60">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section>
        <Card className="p-10 lg:p-14 bg-gradient-to-br from-blush-50 via-white to-sky-50">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                eyebrow="Not sure who to see?"
                title={<>Our care coordinators will match you.</>}
                subtitle="A 10-minute phone call. Tell us your concern — we'll recommend the right specialist and earliest available slot."
              />
              <div className="flex flex-wrap gap-3">
                <Link href="/appointment" className="rounded-full bg-ink-900 text-white px-6 py-3.5 text-sm font-semibold hover:bg-ink-800 transition">
                  Book consultation
                </Link>
                <a href="tel:+919876543210" className="rounded-full bg-white border border-blush-100 text-ink-900 px-6 py-3.5 text-sm font-semibold">
                  Call care desk
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Free first call', 'Same-week slots', 'Insurance support', 'Follow-up included'].map((f) => (
                <div key={f} className="rounded-2xl bg-white p-5 border border-blush-100 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blush-500 shrink-0" />
                  <span className="text-sm font-medium text-ink-900">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
