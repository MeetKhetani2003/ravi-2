import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users, Leaf, Building2, Stethoscope } from 'lucide-react';
import { Section, SectionHeader, Card } from '../components/ui';
import { values, stats } from '../data';

const timeline = [
  { year: '2009', title: 'A quiet beginning', desc: 'Dr. Rupinder opens a small clinic in Panchkula with one mission: dignified maternity care.' },
  { year: '2013', title: 'First NICU wing', desc: 'Fateh becomes the region\'s first boutique NICU with family-integrated care.' },
  { year: '2016', title: 'Pediatrics joins home', desc: 'Dr. Mrigind Singh brings world-class neonatology. The team grows to 20 specialists.' },
  { year: '2019', title: 'Fertility program', desc: 'Launch of our IUI/IVF unit — with a 48% first-cycle success rate in under-35 patients.' },
  { year: '2022', title: 'NABH accreditation', desc: 'Fateh is accredited for 100+ quality benchmarks across all departments.' },
  { year: '2025', title: 'A new chapter', desc: 'Expanded parent corner, digital records, and a dedicated lactation sanctuary open.' },
];

export default function About() {
  return (
    <div className="relative">
      {/* Cinematic hero */}
      <section className="relative pt-10 lg:pt-16 pb-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blush-200/50 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-sky-200/50 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
                <Sparkles className="h-3.5 w-3.5 text-blush-500" />
                Our story · est. 2009
              </div>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
                Built on a quiet belief: <em className="italic text-blush-600">care can be kinder.</em>
              </h1>
              <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-xl">
                Fateh began as one doctor, one room, and a refusal to accept that childbirth has to feel clinical. Sixteen years later, that belief still shapes every decision we make — from who we hire to how we dim the lights in the delivery room.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink-700">
                <div className="flex items-center gap-2"><Award className="h-4 w-4 text-blush-500" /> NABH Accredited</div>
                <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-blush-500" /> FOGSI Member</div>
                <div className="flex items-center gap-2"><Users className="h-4 w-4 text-blush-500" /> 40+ Specialists</div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-[32px] overflow-hidden aspect-[3/4] shadow-xl shadow-blush-200/50">
                    <img src="https://images.pexels.com/photos/19357672/pexels-photo-19357672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="rounded-[28px] overflow-hidden aspect-square shadow-lg">
                    <img src="https://images.pexels.com/photos/3259628/pexels-photo-3259628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600" alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="rounded-[28px] overflow-hidden aspect-square shadow-lg">
                    <img src="https://images.pexels.com/photos/10956983/pexels-photo-10956983.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600" alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="rounded-[32px] overflow-hidden aspect-[3/4] shadow-xl shadow-blush-200/50">
                    <img src="https://images.pexels.com/photos/30282653/pexels-photo-30282653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Quote overlay */}
              <div className="absolute -bottom-6 -left-6 right-10 glass rounded-3xl p-6 shadow-2xl shadow-blush-200/40">
                <div className="font-serif italic text-lg text-ink-800 leading-snug">
                  "We don't treat patients. We welcome families."
                </div>
                <div className="mt-3 text-xs text-ink-500 font-medium">— Dr. Rupinder Kaur, Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision bento */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[40px] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 text-white p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_100%_0%,rgba(255,125,163,0.4),transparent_60%)]" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-blush-300 font-medium">Our Mission</div>
              <h3 className="mt-5 font-serif text-3xl lg:text-5xl font-semibold leading-[1.1] text-balance">
                To make exceptional maternity and pediatric care feel <span className="italic text-blush-300">inevitable, not exclusive.</span>
              </h3>
              <p className="mt-6 text-white/70 leading-relaxed max-w-2xl">
                We build systems that remember your name, rooms that feel like sanctuaries, and teams that treat your family the way they'd treat their own.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 rounded-[40px] bg-gradient-to-br from-blush-400 via-blush-500 to-rose-500 text-white p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-white/15 blur-2xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium">Our Vision</div>
              <h3 className="mt-5 font-serif text-3xl lg:text-4xl font-semibold leading-[1.15] text-balance">
                A future where every birth is gentle, every child is seen.
              </h3>
              <p className="mt-6 text-white/85 leading-relaxed">
                We're working toward a model of healthcare where quality, empathy, and access don't have to compete.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core values */}
      <Section>
        <SectionHeader
          eyebrow="What we stand for"
          title={<>Four truths we never compromise on.</>}
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{v.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-blush-50/40 via-cream-50 to-white overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Our journey"
            title={<>Sixteen years, one quiet revolution.</>}
            center
          />
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blush-200 via-blush-300 to-blush-200 lg:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:text-right ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`pl-12 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:text-left'}`}>
                      <div className="font-serif text-5xl lg:text-6xl font-semibold text-blush-500/40">{item.year}</div>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-ink-900">{item.title}</h3>
                      <p className="mt-2 text-ink-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} />
                  <div className="absolute left-4 lg:left-1/2 top-4 lg:-translate-x-1/2 h-4 w-4 rounded-full bg-blush-500 ring-8 ring-white shadow" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <Section>
        <SectionHeader
          eyebrow="Our infrastructure"
          title={<>Thoughtful spaces, advanced medicine.</>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Building2, title: '60-Bed Facility', desc: 'Private suites, family rooms, and dedicated recovery wings.' },
            { icon: Stethoscope, title: '8 Operation Theatres', desc: 'Laminar airflow, HEPA filtered, fully modular.' },
            { icon: Heart, title: 'Level III NICU', desc: '18 cots with servo-incubators and 24/7 neonatologists.' },
            { icon: Leaf, title: 'Lactation Sanctuary', desc: 'A quiet space for breastfeeding support and counselling.' },
            { icon: Award, title: 'Fertility Lab', desc: 'In-house embryology with Class-100 clean rooms.' },
            { icon: Users, title: 'Family Lounges', desc: 'Warm waiting spaces — never sterile, never cold.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="p-8 h-full">
                <div className="h-14 w-14 rounded-2xl bg-blush-50 grid place-items-center mb-5">
                  <item.icon className="h-6 w-6 text-blush-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats recap */}
      <section className="relative py-20 bg-gradient-to-br from-ink-900 to-ink-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,rgba(255,125,163,0.4),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="font-serif text-5xl lg:text-6xl font-semibold">{s.value}</div>
              <div className="mt-3 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
