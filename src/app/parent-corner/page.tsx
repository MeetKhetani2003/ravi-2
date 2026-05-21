"use client";
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowUpRight, Sparkles, Heart, Baby, Syringe, Briefcase, Star, Truck, Calendar } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { ARTICLES } from '@/legacyData';
import Link from 'next/link';

const topicIcons: Record<string, any> = {
  Pregnancy: Heart,
  Newborn: Baby,
  Vaccination: Syringe,
  Prenatal: Truck,
  Working: Briefcase,
  Milestones: Star,
  Delivery: Calendar,
  Postpartum: Heart,
};

const topicColors: Record<string, string> = {
  Pregnancy: 'from-blush-400 to-blush-600',
  Newborn: 'from-sky-400 to-blue-500',
  Vaccination: 'from-violet-400 to-purple-500',
  Prenatal: 'from-emerald-400 to-teal-500',
  Working: 'from-amber-400 to-orange-500',
  Milestones: 'from-rose-400 to-pink-500',
  Delivery: 'from-red-400 to-rose-500',
  Postpartum: 'from-fuchsia-400 to-pink-500',
};

export default function ParentCorner() {
  return (
    <div className="relative">
      {/* Editorial hero */}
      <section className="relative pt-10 lg:pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-gradient-to-br from-cream-100 via-blush-100/50 to-sky-100/50 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
                <BookOpen className="h-3.5 w-3.5 text-blush-500" /> The Parent Corner · a knowledge hub
              </div>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-[92px] font-semibold tracking-tight text-ink-900 leading-[0.95]">
                Calm, clear answers for <em className="italic text-blush-600">every stage.</em>
              </h1>
              <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl text-balance">
                Written by our doctors, reviewed by parents. Honest, evidence-based guidance on pregnancy, newborn care, vaccination, and the beautiful chaos of early parenthood.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="glass rounded-[32px] p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blush-600 font-semibold">
                  <Sparkles className="h-3.5 w-3.5" /> This week's reads
                </div>
                <div className="mt-5 space-y-3">
                  {ARTICLES.slice(0, 3).map((a) => (
                    <Link key={a.title} href={`/article/${a.id}`} className="block group">
                      <div className="text-xs text-ink-400">{a.category} · {a.readTime}</div>
                      <div className="font-serif text-lg font-semibold text-ink-900 group-hover:text-blush-600 transition leading-tight">{a.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic pills */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Pregnancy', 'Newborn', 'Vaccination', 'Milestones'].map((t, i) => {
            const Icon = topicIcons[t];
            const color = topicColors[t];
            return (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`p-6 bg-gradient-to-br ${color} text-white hover:scale-[1.02] transition cursor-pointer`}>
                  <Icon className="h-7 w-7" />
                  <div className="mt-5 font-serif text-2xl font-semibold">{t} guidance</div>
                  <div className="text-sm text-white/80 mt-1">{ARTICLES.filter((a) => a.category === t).length} articles</div>
                  <ArrowUpRight className="mt-4 h-5 w-5" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Featured article */}
      <Section>
        <SectionHeader eyebrow="Featured read" title={<>The conversation every new parent needs.</>} />
        <Card className="overflow-hidden grid lg:grid-cols-2" hover={false}>
          <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img src={ARTICLES[0].image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-8 lg:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blush-50 text-blush-700 px-3 py-1 text-xs font-semibold w-fit">{ARTICLES[0].category}</div>
            <h3 className="mt-5 font-serif text-3xl lg:text-4xl font-semibold text-ink-900 leading-tight">{ARTICLES[0].title}</h3>
            <p className="mt-5 text-ink-500 leading-relaxed">{ARTICLES[0].content.slice(0, 120)}...</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-ink-400"><Clock className="h-4 w-4" /> {ARTICLES[0].readTime}</div>
              <Link href={`/article/${ARTICLES[0].id}`} className="rounded-full bg-ink-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-ink-800 transition flex items-center gap-2">
                Read article <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Card>
      </Section>

      {/* Article grid */}
      <Section>
        <SectionHeader
          eyebrow="Full library"
          title={<>Honest, useful, never clickbait.</>}
          subtitle="Every article is doctor-reviewed and parent-approved."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => {
            const color = topicColors[a.category] || 'from-ink-400 to-ink-600';
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/article/${a.id}`} className="group block h-full">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={a.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className={`absolute top-4 left-4 rounded-full bg-gradient-to-br ${color} text-white px-3 py-1 text-xs font-semibold backdrop-blur`}>
                        {a.category}
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-2 text-xs text-ink-400">
                        <Clock className="h-3.5 w-3.5" /> {a.readTime}
                      </div>
                      <h3 className="mt-3 font-serif text-xl font-semibold text-ink-900 leading-snug group-hover:text-blush-600 transition">{a.title}</h3>
                      <p className="mt-3 text-sm text-ink-500 leading-relaxed line-clamp-3">{a.content.slice(0, 100)}...</p>
                      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blush-600">
                        Read article <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Newsletter strip */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-[40px] bg-gradient-to-br from-blush-500 via-rose-500 to-blush-600 text-white p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            <div className="relative">
              <Sparkles className="h-8 w-8 mx-auto text-white/80" />
              <h2 className="mt-5 font-serif text-3xl lg:text-5xl font-semibold leading-tight text-balance max-w-2xl mx-auto">
                Gentle parenting guidance, every Sunday.
              </h2>
              <p className="mt-5 text-white/85 max-w-xl mx-auto">Join 20,000+ parents who receive our weekly letter. Doctor-curated. Zero spam.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-md mx-auto rounded-full bg-white/15 border border-white/25 backdrop-blur-xl p-1.5 flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-white/60 focus:outline-none"
                />
                <button className="rounded-full bg-white text-ink-900 px-6 py-3 text-sm font-semibold hover:bg-blush-100 transition">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
