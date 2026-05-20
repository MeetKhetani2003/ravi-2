import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Heart, Shield, Stethoscope, Baby, Sparkles, Star, Phone, Calendar,
  ArrowUpRight, Clock, Award, Users, Activity, ChevronRight, Quote
} from 'lucide-react';
import { Section, SectionHeader, Card } from '../components/ui';
import { services, doctors, testimonials, stats } from '../data';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="relative">
      {/* ========= HERO ========= */}
      <section className="relative pt-6 lg:pt-10 pb-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[900px] w-[1400px] rounded-full bg-gradient-to-br from-blush-200/60 via-cream-50 to-sky-200/50 blur-3xl animate-gradient" />
        </div>
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blush-200/40 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-sky-200/40 blur-3xl animate-blob" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Emergency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="glass rounded-full pl-3 pr-5 py-2 flex items-center gap-3 text-sm font-medium text-ink-800 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-blush-500 animate-ping opacity-75" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-blush-500" />
              </span>
              <span className="text-ink-500">24/7 Emergency</span>
              <span className="h-4 w-px bg-ink-200" />
              <a href="tel:+919876543210" className="text-ink-900 font-semibold flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" /> +91 98765 43210
              </a>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl border border-blush-100 px-4 py-2 text-sm font-medium text-ink-700 shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-blush-500" />
                Trusted by 22,000+ families since 2009
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 font-serif text-5xl md:text-6xl lg:text-[88px] font-semibold leading-[0.98] tracking-tight text-ink-900"
              >
                Where every <span className="italic text-blush-600">mother</span> &amp; child finds their <span className="relative inline-block">
                  <span className="relative z-10">sanctuary.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 9 Q 100 -4 198 9" stroke="#ff7da3" strokeWidth="4" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-8 text-lg lg:text-xl text-ink-500 max-w-xl leading-relaxed"
              >
                Fateh Hospital is a boutique women & child healthcare destination —
                where world-class obstetrics, neonatology, and pediatrics meet the tenderness of a family home.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <Link
                  to="/appointment"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink-900 text-white pl-7 pr-2 py-2 text-sm font-semibold hover:bg-ink-800 transition shadow-xl shadow-ink-900/20"
                >
                  Book a consultation
                  <span className="grid place-items-center h-11 w-11 rounded-full bg-blush-500 group-hover:bg-blush-400 transition">
                    <Calendar className="h-5 w-5" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-7 py-3.5 text-sm font-semibold border border-blush-100 hover:border-blush-300 transition"
                >
                  Explore services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-14 grid grid-cols-3 gap-6 max-w-md"
              >
                {[
                  { v: '4.9', l: 'Google Rating', icon: Star },
                  { v: '22K+', l: 'Happy Families', icon: Heart },
                  { v: '24/7', l: 'Emergency Care', icon: Shield },
                ].map((t) => (
                  <div key={t.l}>
                    <div className="flex items-center gap-1.5 text-ink-900">
                      <t.icon className="h-4 w-4 text-blush-500" />
                      <span className="font-serif text-2xl font-semibold">{t.v}</span>
                    </div>
                    <div className="text-xs text-ink-500 mt-1">{t.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — hero visual */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative"
              >
                {/* Main image card */}
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-blush-200/50 aspect-[4/5]">
                  <img
                    src="https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1100"
                    alt="Caring doctor with newborn"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blush-500/10 to-transparent" />
                </div>

                {/* Floating stat card 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="absolute -left-6 lg:-left-12 top-10 glass rounded-3xl p-5 shadow-xl shadow-blush-200/30 animate-float-slow"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blush-400 to-blush-600 grid place-items-center text-white">
                      <Baby className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-semibold text-ink-900">6,800+</div>
                      <div className="text-xs text-ink-500">Safe deliveries</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating stat card 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="absolute -right-4 lg:-right-8 bottom-16 glass rounded-3xl p-5 shadow-xl shadow-sky-200/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 grid place-items-center text-white">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-semibold text-ink-900">Level III</div>
                      <div className="text-xs text-ink-500">NICU facility</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.7 }}
                  className="absolute bottom-6 left-6 glass rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-lg"
                >
                  <div className="flex -space-x-2">
                    {['from-blush-400 to-blush-600', 'from-sky-400 to-blue-500', 'from-amber-400 to-orange-500'].map((g, i) => (
                      <div key={i} className={`h-8 w-8 rounded-full bg-gradient-to-br ${g} ring-2 ring-white`} />
                    ))}
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-semibold text-ink-900">40+ specialists</div>
                    <div className="text-ink-500">On-call around the clock</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-sky-300/40 blur-2xl" />
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blush-300/40 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ========= LOGO MARQUEE (Trust Partners) ========= */}
      <section className="py-10 border-y border-blush-100/60 bg-gradient-to-r from-blush-50/40 via-white to-sky-50/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-ink-400 font-medium mb-6">Accreditations & Affiliations</div>
          <div className="flex items-center justify-between gap-10 flex-wrap opacity-70">
            {['NABH Accredited', 'FOGSI Member', 'IAP Certified', 'NNF India', 'ISO 9001:2015', 'AYUSH Partner'].map((b) => (
              <div key={b} className="font-serif text-lg font-semibold text-ink-700 whitespace-nowrap">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= WHY CHOOSE US ========= */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why Fateh"
              title={<>Healthcare, redesigned around <em className="font-serif italic text-blush-600">you</em>.</>}
              subtitle="We don't do generic hospitals. Every detail at Fateh — from lighting to protocols — is crafted to feel safe, warm, and deeply human."
            />
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-blush-600 transition">
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Stethoscope, title: 'Senior Specialists', desc: 'Consultants with 15+ years of focused expertise, not rotating juniors.', gradient: 'from-blush-400 to-blush-600' },
            { icon: Shield, title: 'Evidence-Led Care', desc: 'Protocols aligned with FOGSI, IAP, and WHO — never shortcuts.', gradient: 'from-sky-400 to-blue-500' },
            { icon: Heart, title: 'Emotional Safety', desc: 'Counsellors, lactation consultants, and partners-in-birth welcome.', gradient: 'from-rose-400 to-pink-500' },
            { icon: Clock, title: '24/7 Availability', desc: 'NICU, maternity, and emergency obstetrics always on.', gradient: 'from-amber-400 to-orange-500' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.gradient} grid place-items-center text-white shadow-lg shadow-blush-200/40 mb-6`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{f.desc}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-blush-200 to-transparent" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-10 rounded-[36px] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 text-white p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_0%_0%,rgba(255,125,163,0.4),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(138,197,255,0.4),transparent_50%)]" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-serif text-4xl lg:text-6xl font-semibold leading-none">
                  <Counter to={parseInt(s.value.replace(/\D/g, ''))} suffix={s.value.includes('K') ? 'K+' : s.value.includes('%') ? '%' : s.value.includes('+') ? '+' : ''} />
                </div>
                <div className="mt-3 text-sm text-white/60 max-w-[14ch]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ========= SERVICES PREVIEW ========= */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blush-50/60 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Our Specialties"
                title={<>Every chapter of womanhood & childhood, under one roof.</>}
              />
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <Link to="/services" className="group inline-flex items-center gap-3 rounded-full bg-white border border-blush-100 px-6 py-3.5 text-sm font-semibold text-ink-900 hover:border-blush-300 transition shadow-sm">
                View all services
                <span className="h-7 w-7 rounded-full bg-blush-100 group-hover:bg-blush-500 group-hover:text-white grid place-items-center transition">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.07 }}
              >
                <Link to="/services">
                  <Card className="p-8 h-full group cursor-pointer">
                    <div className={`h-14 w-14 rounded-2xl ${s.bg} grid place-items-center text-3xl mb-6 group-hover:scale-110 transition`}>
                      {s.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed line-clamp-3">{s.short}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blush-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= DOCTORS PREVIEW ========= */}
      <Section>
        <SectionHeader
          eyebrow="Meet the Team"
          title={<>Doctors who listen before they prescribe.</>}
          subtitle="A small, senior team — not a revolving door. Your face becomes familiar. Your history is remembered."
          center
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="p-2 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                  <div className="absolute top-5 left-5 glass rounded-full px-3 py-1 text-xs font-semibold text-ink-900 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-blush-600" /> {doc.experience}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <div className="text-xs uppercase tracking-widest text-blush-200 font-medium mb-2">{doc.role}</div>
                    <h3 className="font-serif text-3xl font-semibold">{doc.name}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {doc.specialties.slice(0, 2).map((s) => (
                        <span key={s} className="rounded-full bg-white/15 backdrop-blur border border-white/20 px-3 py-1 text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((n) => <Star key={n} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-ink-500">5.0 · 400+ reviews</span>
                  </div>
                  <Link to="/doctors" className="text-sm font-semibold text-blush-600 hover:text-blush-700 flex items-center gap-1">
                    Profile <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= TESTIMONIALS ========= */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-cream-50 via-blush-50/40 to-cream-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Stories from our families"
            title={<>Real words, from real rooms.</>}
            center
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-blush-300 mb-4" />
                  <p className="font-serif text-lg leading-relaxed text-ink-800 italic flex-1">"{t.quote}"</p>
                  <div className="mt-6 pt-6 border-t border-blush-100 flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-blush-100" />
                    <div>
                      <div className="font-semibold text-ink-900 text-sm">{t.name}</div>
                      <div className="text-xs text-ink-500">{t.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= APPOINTMENT CTA ========= */}
      <Section>
        <div className="relative rounded-[44px] overflow-hidden bg-gradient-to-br from-blush-500 via-blush-500 to-rose-500 p-12 lg:p-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(138,197,255,0.25),transparent_50%)]" />
          <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 backdrop-blur px-4 py-1.5 text-xs font-medium">
                <Users className="h-3.5 w-3.5" /> Same-day slots often available
              </span>
              <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05] font-semibold text-balance">
                Ready to meet the team your family deserves?
              </h2>
              <p className="mt-5 text-white/80 text-lg max-w-lg">
                A 20-minute first consultation — no pressure, no jargon. Just answers, clarity, and a plan.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/appointment" className="rounded-3xl bg-white text-ink-900 p-6 hover:-translate-y-1 transition">
                <Calendar className="h-7 w-7 text-blush-600 mb-4" />
                <div className="font-serif text-xl font-semibold">Book online</div>
                <div className="text-sm text-ink-500 mt-2">Choose your doctor, date, and time in 60 seconds.</div>
                <ArrowUpRight className="mt-4 h-5 w-5 text-blush-600" />
              </Link>
              <a href="tel:+919876543210" className="rounded-3xl bg-ink-900 text-white p-6 hover:-translate-y-1 transition">
                <Phone className="h-7 w-7 text-blush-400 mb-4" />
                <div className="font-serif text-xl font-semibold">Call the desk</div>
                <div className="text-sm text-white/60 mt-2">A real human answers. 24/7 for emergencies.</div>
                <ArrowUpRight className="mt-4 h-5 w-5 text-blush-400" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
