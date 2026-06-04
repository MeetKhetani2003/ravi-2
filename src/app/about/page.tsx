"use client";
import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users, Clock, ShieldCheck, CheckCircle2, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { HOSPITAL_INFO } from '@/data';

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
                Our story
              </div>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.1] text-balance">
                About <span className="italic text-blush-600">Fateh Hospital</span>
              </h1>
              <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-xl">
                {HOSPITAL_INFO.aboutText}
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink-700">
                <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-blush-500" /> Patient Centric Care</div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-square shadow-2xl shadow-blush-200/50 border border-white/50"
              >
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" alt="Hospital Building" className="h-full w-full object-cover" />
              </motion.div>
              {/* Quote overlay */}
              <div className="absolute -bottom-6 -left-6 right-10 glass rounded-3xl p-6 shadow-xl shadow-blush-200/40 border border-white/60 backdrop-blur-xl">
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
              <div className="text-xs uppercase tracking-[0.2em] text-blush-300 font-medium mb-4 flex items-center gap-2">
                <Heart size={16} /> Our Vision
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl font-medium leading-[1.3] text-balance italic border-l-4 border-blush-400 pl-6 text-white/90">
                "{HOSPITAL_INFO.vision}"
              </h3>
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
            <div className="relative h-full flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.2em] text-white/80 font-medium mb-4 flex items-center gap-2">
                <Sparkles size={16} /> Our Mission
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-medium leading-[1.4] text-balance italic border-l-4 border-white/40 pl-6 text-white">
                "{HOSPITAL_INFO.mission}"
              </h3>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Legacy of Care and Trust (Why Choose Us) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Choose Us"
                title={<>A Legacy of Care and <span className="italic text-blush-600">Trust</span></>}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-ink-500 leading-relaxed mb-10">
                  {HOSPITAL_INFO.aboutText}
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-blush-50 border border-blush-100 flex-shrink-0 flex items-center justify-center text-blush-600 group-hover:bg-blush-600 group-hover:text-white transition-all duration-300">
                      <Award className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-ink-900 mb-2">Expert Consultants</h4>
                      <p className="text-ink-500 leading-relaxed">Our expertise is the result of hard working, experienced & sincere consultants.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex-shrink-0 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-semibold text-ink-900 mb-2">Round the Clock Services</h4>
                      <p className="text-ink-500 leading-relaxed">We provide seamless 24/7 care and emergency services for maternity and pediatrics.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blush-200 rounded-[3rem] transform rotate-3 scale-105 -z-10 blur-sm opacity-50"></div>
              <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80" alt="Care" className="relative rounded-[2rem] sm:rounded-[3rem] shadow-2xl object-cover h-[500px] sm:h-[600px] w-full border border-white/50" />

              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-6 glass backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/60 max-w-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="p-2.5 bg-blush-100 rounded-xl text-blush-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-ink-900">Core Values</h4>
                </div>
                <ul className="space-y-3 text-ink-600 font-medium text-sm">
                  {HOSPITAL_INFO.coreValues.map((value, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core values cards */}
      <Section className="bg-blush-50/30">
        <SectionHeader
          eyebrow="What Drives Us"
          title={<>Our Core Values</>}
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {HOSPITAL_INFO.coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="group bg-white rounded-[2rem] p-8 sm:p-10 text-center shadow-sm border border-blush-100 hover:border-blush-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blush-50 to-blush-100 rounded-2xl flex items-center justify-center mb-6 text-blush-500 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-lg font-serif font-semibold text-ink-900 mb-4">{value}</h4>
                <div className="w-10 h-1 bg-blush-200 mx-auto rounded-full group-hover:w-16 group-hover:bg-blush-500 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Branches */}
      <Section className="bg-white">
        <SectionHeader eyebrow="Our Network" title={<>Other Branches</>} center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {HOSPITAL_INFO.branches?.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col items-center text-center">
                {branch.logo && <img src={branch.logo} alt={branch.name} className="h-20 w-auto object-contain mb-6" />}
                <h4 className="font-serif text-2xl font-bold text-ink-900">{branch.name}</h4>
                <p className="text-ink-500 font-medium text-sm mt-1">{branch.location}</p>
                <p className="text-ink-600 mt-4 leading-relaxed max-w-xs mx-auto flex-grow">{branch.description}</p>

                <div className="mt-8 pt-6 border-t border-blush-100 w-full">
                  <div className="flex flex-col items-center gap-2">
                    {branch.whatsapp && (
                      <>
                        <span className="text-xs uppercase tracking-widest font-bold text-blush-500">WhatsApp</span>
                        <a href={`https://wa.me/91${branch.whatsapp}`} className="inline-flex items-center gap-2 font-semibold text-lg text-ink-900 hover:text-blush-600 transition">
                          <MessageCircle className="h-5 w-5 text-green-500" />
                          {branch.whatsapp}
                        </a>
                      </>
                    )}
                    {branch.mobile && (
                      <>
                        <span className="text-xs uppercase tracking-widest font-bold text-blush-500">Mobile</span>
                        <a href={`tel:${branch.mobile}`} className="inline-flex items-center gap-2 font-semibold text-lg text-ink-900 hover:text-blush-600 transition">
                          <Phone className="h-5 w-5 text-blush-500" />
                          {branch.mobile}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
