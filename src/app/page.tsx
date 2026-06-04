"use client";
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Heart, Shield, Stethoscope, Baby, Sparkles, Star, Phone, Calendar,
  ArrowUpRight, Clock, Award, Users, Activity, ChevronRight, ChevronLeft, Quote, ShieldCheck, MapPin, CheckCircle2, Image as ImageIcon, Plus, Minus, Microscope, ArrowRight, MessageCircle
} from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { services, doctors, testimonials, stats, HOSPITAL_INFO } from '@/data';

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

const HERO_IMAGES = [
  {
    url: "/hero_mother_child_1778827102322.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-doctors-talking-in-the-hospital-41122-large.mp4",
    alt: "Expert Maternal Care"
  },
  {
    url: "/hero_pediatrician_1778827121694.png",
    alt: "Friendly Pediatric Services"
  },
  {
    url: "/hero_nicu_care_1778827138889.png",
    alt: "Advanced NICU Facilities"
  },
  {
    url: "/hero_maternity_care_1778827153857.png",
    alt: "Premium Hospital Environment"
  }
];

const HOW_IT_WORKS = [
  { step: "01", title: "Book Appointment", desc: "Select your preferred doctor and time slot through our easy online booking system or call us." },
  { step: "02", title: "Visit Hospital", desc: "Arrive at our facility for your consultation. Our staff will guide you through the check-in process." },
  { step: "03", title: "Consultation", desc: "Discuss your health concerns with our specialists who provide personalized care plans." },
  { step: "04", title: "Follow-up", desc: "Receive post-consultation support, reports, and clear instructions for your next steps." }
];

const LEADERSHIP = [
  { name: "Dr. Mrigind Singh", role: "Managing Director", image: "/doctors/dr-mrigind-singh.jpeg", bio: "Visionary leader dedicated to providing world-class pediatric care close to home." },
  { name: "Dr. Rupinder Kaur", role: "Medical Director", image: "/doctors/dr-rupinder-kaur.jpeg", bio: "Leading the maternity and gynaecology departments with compassion and expertise." }
];

const FAQS = [
  { q: "What are the hospital timings?", a: "We provide round-the-clock emergency services for maternity and pediatrics. Our OPD timings are generally 10:00 AM to 2:00 PM and 5:00 PM to 8:00 PM." },
  { q: "Do you have NICU facilities?", a: "Yes, we have a state-of-the-art Level III NICU (Neonatal Intensive Care Unit) to handle all kinds of neonatal emergencies." },
  { q: "Is cashless facility available?", a: "We are empanelled with major TPA and insurance providers. Please check with our front desk for specific company tie-ups." },
  { q: "How can I book an appointment?", a: "You can book an appointment through our website's 'Book Appointment' button or by calling our helpdesk at 7888741037." }
];

const CERTIFICATIONS = [
  { title: "NABH Accredited" },
  { title: "IAP Certified" },
  { title: "Safe Delivery" }
];

const SERVICE_LOCATIONS = [
  { name: "Sunny Enclave", status: "Active" },
  { name: "Sector 125", status: "Active" },
  { name: "Mohali", status: "Active" },
  { name: "Kharar", status: "Active" },
  { name: "Chandigarh", status: "Active" },
  { name: "Panchkula", status: "Active" },
  { name: "New Sunny Enclave", status: "Active" },
  { name: "Mundhi Kharar", status: "Active" },
  { name: "Gillco Valley", status: "Expanding Soon" },
  { name: "Sector 127", status: "Expanding Soon" }
];

const GALLERY_IMAGES = [
  "https://images.pexels.com/photos/30282653/pexels-photo-30282653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  "https://images.pexels.com/photos/32830266/pexels-photo-32830266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  "https://images.pexels.com/photos/11782003/pexels-photo-11782003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
  "https://images.pexels.com/photos/19357676/pexels-photo-19357676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800"
];

const SPECIALITIES = [
  {
    id: "obstetrics-maternity",
    title: "Obstetrics & Maternity",
    icon: <Baby className="w-6 h-6" />,
    shortDesc: "Catering to your pregnancy right from preconceptional counselling to child birth and post-partum care.",
    image: "/hero_maternity_care_1778827153857.png",
  },
  {
    id: "gynaecology",
    title: "Gynaecology",
    icon: <Activity className="w-6 h-6" />,
    shortDesc: "Expert diagnosis and treatment for conditions related to the reproductive system of women.",
    image: "/gynecology_real.jpg"
  },
  {
    id: "fertility",
    title: "Fertility",
    icon: <Microscope className="w-6 h-6" />,
    shortDesc: "Latest science combined with personal guidance and care for couples facing conception difficulties.",
    image: "/fertility.jpg",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    icon: <Stethoscope className="w-6 h-6" />,
    shortDesc: "Comprehensive physical, emotional and social health care for infants, children, and adolescents.",
    image: "/hero_pediatrician_1778827121694.png",
  }
];

const PARTNERS = [
  { name: "Lakshay Cancer Hospital", logo: "LC", color: "text-emerald-600" },
  { name: "PHC Multi Speciality", logo: "PHC", color: "text-blue-600" },
  { name: "Lucknow CISRO Hospital", logo: "CISRO", color: "text-ink-900" },
  { name: "SRS Hospital", logo: "SRS", color: "text-green-600" },
  { name: "Amrut Hospital", logo: "AMRUT", color: "text-amber-600" },
  { name: "Vidal Health TPA", logo: "VIDAL", color: "text-red-600" },
  { name: "Star Health Insurance", logo: "STAR", color: "text-blue-800" },
  { name: "HDFC Ergo", logo: "HDFC", color: "text-red-800" }
];

const RAW_TESTIMONIALS = [
  { name: "Deep Bhullar", image: "/testimonial_deep_bhullar_1778827963011.png", text: "Very good experince With Dr Rupinder kaur & Dr Mrigind. Both Doctors help us in very professional & in calm way. I will recomend all to visit Dr Rupinder" },
  { name: "Neha Parjapati", image: "/testimonial_neha_parjapati_1778827979420.png", text: "The doctor nd staff is very cooperative...the listen to the patient very calmly... Good experience nd nice doctor" },
  { name: "Peter Kite", image: "/testimonial_peter_kite_1778827995572.png", text: "Experienced dr both for kids and mothers available under one roof. We rely on Ravi Clinic. They have another set up in ph2 as well." }
];


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsScrollRef = useRef<HTMLDivElement>(null);
  const partnersScrollRef = useRef<HTMLDivElement>(null);

  const scrollPartners = (direction: 'left' | 'right') => {
    if (partnersScrollRef.current) {
      const { scrollLeft, clientWidth } = partnersScrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      partnersScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollToTestimonial = (index: number) => {
    if (testimonialsScrollRef.current) {
      const container = testimonialsScrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({ left: child.offsetLeft - container.offsetLeft, behavior: 'smooth' });
      }
    }
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = (prev + 1) % RAW_TESTIMONIALS.length;
        if (testimonialsScrollRef.current) {
          const container = testimonialsScrollRef.current;
          const child = container.children[next] as HTMLElement;
          if (child) {
            container.scrollTo({ left: child.offsetLeft - container.offsetLeft, behavior: 'smooth' });
          }
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
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
              <a href="tel:7888741037" className="text-ink-900 font-semibold flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" /> 78887-41037
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
                Trusted by 10,000+ families for over 15 years
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 font-serif text-5xl md:text-6xl lg:text-[70px] font-semibold leading-[0.98] tracking-tight text-ink-900"
              >
                Compassionate Care for <br />
                <span className="relative inline-block italic text-blush-600">
                  <span className="relative z-10">Mothers & Babies</span>
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
                Experience the perfect blend of medical expertise and compassionate care at Fateh Hospital, Morinda.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink-900 text-white pl-7 pr-2 py-2 text-sm font-semibold hover:bg-ink-800 transition shadow-xl shadow-ink-900/20"
                >
                  Book a consultation
                  <span className="grid place-items-center h-11 w-11 rounded-full bg-blush-500 group-hover:bg-blush-400 transition">
                    <Calendar className="h-5 w-5" />
                  </span>
                </Link>
                <Link
                  href="/services"
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
                  { v: '99.9%', l: 'Success Rate', icon: Star },
                  { v: '10K+', l: 'Happy Patients', icon: Heart },
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
                {/* Main image carousel */}
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-blush-200/50 aspect-[4/5]">
                  {HERO_IMAGES.map((img, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      {img.videoUrl ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={img.url}
                          className="w-full h-full object-cover"
                        >
                          <source src={img.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={img.url}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blush-500/10 to-transparent z-20 pointer-events-none" />

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    {HERO_IMAGES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-8 bg-blush-500' : 'bg-white/50 hover:bg-white'}`}
                      />
                    ))}
                  </div>
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
                      <div className="text-2xl font-serif font-semibold text-ink-900">5,000+</div>
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
                    <div className="font-semibold text-ink-900">20+ specialists</div>
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

      {/* ========= WHY CHOOSE US ========= */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Why FH"
              title={<>Healthcare, redesigned around <em className="font-serif italic text-blush-600">you</em>.</>}
              subtitle="We don't do generic hospitals. Every detail at FH — from lighting to protocols — is crafted to feel safe, warm, and deeply human."
            />
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-blush-600 transition">
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
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 lg:mb-16 gap-6 text-center lg:text-left">
            <div className="w-full lg:w-auto">
              <SectionHeader
                eyebrow="Our Specialities"
                title={<>Specialized Care for Your Family</>}
              />
            </div>
            <Link href="/specialities" className="group inline-flex items-center gap-3 rounded-full bg-white border border-blush-100 px-6 py-3.5 text-sm font-semibold text-ink-900 hover:border-blush-300 transition shadow-sm w-full sm:w-auto justify-center">
              Explore More
              <span className="h-7 w-7 rounded-full bg-blush-100 group-hover:bg-blush-500 group-hover:text-white grid place-items-center transition">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SPECIALITIES.map((spec, idx) => (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href="/services" className="group relative bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-blush-100 hover:border-blush-300 hover:shadow-xl hover:shadow-blush-200/40 transition-all duration-700 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-blush-500 shadow-lg group-hover:scale-110 group-hover:bg-blush-500 group-hover:text-white transition-all duration-500">
                      {spec.icon}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h4 className="text-xl sm:text-2xl font-serif font-semibold text-ink-900 mb-3 group-hover:text-blush-600 transition-colors">{spec.title}</h4>
                    <p className="text-ink-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{spec.shortDesc}</p>
                    <div className="flex items-center gap-2 text-blush-600 font-bold text-xs uppercase tracking-widest transition-all">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => window.location.href = `/doctor/dr-${doc.id}`}
              className="cursor-pointer group"
            >
              <Card className="p-2 overflow-hidden group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
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
                      {[1, 2, 3, 4, 5].map((n) => <Star key={n} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-ink-500">5.0 · 400+ reviews</span>
                  </div>
                  <Link href={`/doctor/dr-${doc.id}`} onClick={(e) => e.stopPropagation()} className="text-sm font-semibold text-blush-600 hover:text-blush-700 flex items-center gap-1">
                    Profile <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= HEALTHCARE PARTNERS ========= */}
      <section className="py-20 bg-white overflow-hidden border-t border-blush-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4 text-blush-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                <ShieldCheck size={16} /> Our Network
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-4 tracking-tight">Our Healthcare Partners</h2>
              <p className="text-ink-500 max-w-xl text-base sm:text-lg">Trusted by leading medical institutions across the region for fast response and quality care.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollPartners('left')} className="w-12 h-12 rounded-full border border-blush-100 bg-white flex items-center justify-center text-ink-400 hover:border-blush-500 hover:text-blush-500 transition-all shadow-sm active:scale-95">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollPartners('right')} className="w-12 h-12 rounded-full border border-blush-100 bg-white flex items-center justify-center text-ink-400 hover:border-blush-500 hover:text-blush-500 transition-all shadow-sm active:scale-95">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div ref={partnersScrollRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 scroll-smooth">
              {PARTNERS.map((p, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-[320px] snap-start">
                  <div className="bg-white p-8 rounded-[2rem] border border-blush-100 shadow-sm hover:shadow-xl hover:border-blush-300 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                    <div className="aspect-video bg-blush-50 rounded-2xl border border-white flex items-center justify-center mb-8 group">
                      <div className={`text-4xl font-black ${p.color} tracking-tighter opacity-80 group-hover:scale-110 transition-transform duration-500`}>{p.logo}</div>
                    </div>
                    <h4 className="text-lg font-bold text-ink-900 mb-4">{p.name}</h4>
                    <div className="mt-auto pt-6 border-t border-blush-50">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-blush-500 uppercase tracking-widest mb-3">
                        <CheckCircle2 size={12} /> Verified Network
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-current" />)}
                        <span className="text-ink-400 text-xs font-bold ml-2">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========= TESTIMONIALS ========= */}
      <section className="py-16 sm:py-24 bg-blush-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Verified Testimonials" title={<>What Our Patients Say</>} center />

          <div className="relative mt-10 sm:mt-16">
            <div ref={testimonialsScrollRef} className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 lg:px-0 lg:flex-row flex-nowrap">
              {RAW_TESTIMONIALS.map((test, idx) => (
                <div key={idx} className="w-[85vw] sm:w-[450px] lg:w-[48%] flex-shrink-0 snap-center">
                  <div className="bg-white p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm hover:shadow-xl border border-blush-100 relative group h-full flex flex-col transition-all">
                    <div className="flex items-start justify-between mb-6 sm:mb-10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-blush-100 shadow-sm">
                          <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-ink-900 text-base sm:text-2xl">{test.name}</h4>
                          <div className="flex gap-0.5 text-amber-400 mt-1">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-current sm:w-4 sm:h-4" />)}
                          </div>
                        </div>
                      </div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 sm:w-8 sm:h-8 opacity-50" />
                    </div>

                    <div className="flex-grow">
                      <p className="text-sm sm:text-lg text-ink-600 leading-relaxed italic mb-6">
                        "{test.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-auto">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <ShieldCheck size={12} /> Verified Patient
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blush-400 to-blush-600 rounded-t-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-12">
              <button onClick={() => scrollToTestimonial((currentTestimonial - 1 + RAW_TESTIMONIALS.length) % RAW_TESTIMONIALS.length)} className="hidden lg:flex w-14 h-14 rounded-2xl bg-white border border-blush-100 items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-white transition-all shadow-sm">
                <ChevronLeft size={28} />
              </button>
              <div className="flex gap-2 sm:gap-3">
                {RAW_TESTIMONIALS.map((_, idx) => (
                  <button key={idx} onClick={() => scrollToTestimonial(idx)} className={`h-2 rounded-full transition-all duration-500 ${idx === currentTestimonial ? 'w-8 sm:w-10 bg-blush-500' : 'w-2 sm:w-2.5 bg-blush-200'}`} />
                ))}
              </div>
              <button onClick={() => scrollToTestimonial((currentTestimonial + 1) % RAW_TESTIMONIALS.length)} className="hidden lg:flex w-14 h-14 rounded-2xl bg-white border border-blush-100 items-center justify-center text-ink-900 hover:bg-ink-900 hover:text-white transition-all shadow-sm">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========= HOW IT WORKS ========= */}
      <Section>
        <SectionHeader eyebrow="How It Works" title={<>Your Path to Better Health</>} center />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {HOW_IT_WORKS.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <div className="relative group bg-white p-8 rounded-3xl border border-blush-100 hover:shadow-2xl hover:border-blush-300 transition-all duration-500 h-full">
                <div className="absolute -top-4 -right-4 text-6xl font-black text-blush-50 group-hover:text-blush-100 transition-colors select-none italic">
                  {item.step}
                </div>
                <div className="relative z-10 w-14 h-14 bg-blush-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blush-500 group-hover:text-white transition-all">
                  <span className="text-xl font-bold text-blush-600 group-hover:text-white">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold text-ink-900 mb-3">{item.title}</h4>
                <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= LEADERSHIP ========= */}
      <Section>
        <SectionHeader eyebrow="Our Leadership" title={<>Guiding FH with Vision & Compassion</>} center />
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {LEADERSHIP.map((leader, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="glass rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-8 border border-blush-100">
                <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 ring-4 ring-white shadow-xl">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-serif text-2xl font-semibold text-ink-900">{leader.name}</h3>
                  <p className="text-blush-600 font-medium text-sm mt-1">{leader.role}</p>
                  <p className="text-sm text-ink-500 mt-4 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= CERTIFICATION & TRUST ========= */}
      <section className="py-24 bg-gradient-to-r from-blush-50 to-sky-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Trust & Quality" title={<>Certifications and Quality Standards</>} />
              <p className="text-lg text-ink-500 mb-10 leading-relaxed">
                We maintain the highest standards of medical care and safety. Our certifications reflect our commitment to excellence and patient-centric healthcare delivery.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-blush-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-blush-50 grid place-items-center text-blush-500 shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink-900 text-sm">{cert.title}</h4>
                      <p className="text-[10px] text-ink-400 font-bold uppercase tracking-wider mt-1">Verified</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-ink-900 rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blush-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blush-500 grid place-items-center">
                      <Star size={28} className="text-white fill-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">15+ Years of Excellence</h3>
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed mb-10">
                    Recognized as one of the most trusted brands in Mohali for maternal and child care. We have successfully handled over 5,000+ complex deliveries.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-4xl font-bold mb-1">98%</p>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Patient Satisfaction</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold mb-1">24/7</p>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Specialist Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= BRANCHES ========= */}
      <Section className="bg-blush-50/30">
        <SectionHeader eyebrow="Our Network" title={<>Other Branches</>} center />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {HOSPITAL_INFO?.branches?.map((branch, idx) => (
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

      {/* ========= SERVICE AREAS ========= */}
      <Section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <SectionHeader eyebrow="Our Presence" title={<>Serving Our Local Communities</>} />
          <div className="flex items-center gap-4 bg-blush-50 px-6 py-3 rounded-full border border-blush-100">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-ink-900">10+ Active Service Areas</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {SERVICE_LOCATIONS.map((loc, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <div className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-3 cursor-default ${loc.status === 'Active'
                ? 'bg-white border-blush-100 text-ink-900 hover:border-blush-300 hover:shadow-lg'
                : 'bg-cream-50 border-ink-100 text-ink-400 opacity-60'
                }`}>
                <MapPin size={16} className={loc.status === 'Active' ? 'text-blush-500' : 'text-ink-300'} />
                <span className="font-semibold text-sm">{loc.name}</span>
                {loc.status === 'Expanding Soon' && (
                  <span className="text-[10px] uppercase tracking-wider bg-ink-200 text-ink-600 px-2 py-0.5 rounded-full font-bold">Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ========= GALLERY PREVIEW ========= */}
      <section className="py-24 bg-white overflow-hidden border-t border-blush-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <SectionHeader eyebrow="Gallery" title={<>Take a Tour of Our Facility</>} />
            <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-7 py-3 text-sm font-semibold border border-blush-100 hover:border-blush-300 transition">
              View Full Gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="relative group overflow-hidden rounded-[2rem] shadow-lg h-[300px]">
                  <img src={img} alt="Hospital" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur border border-white/40 flex items-center justify-center text-white scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                      <ImageIcon size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= FAQ ========= */}
      <Section>
        <SectionHeader eyebrow="FAQ" title={<>Common Questions</>} center />
        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group glass rounded-2xl border border-blush-100 overflow-hidden open:shadow-lg transition-all">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-ink-900 text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="h-8 w-8 rounded-full bg-white border border-blush-100 grid place-items-center text-blush-500 transition-transform group-open:rotate-45 shrink-0 ml-4">
                  <Plus size={16} />
                </span>
              </summary>
              <div className="px-6 pb-6 text-ink-500 leading-relaxed border-t border-blush-50 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

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
              <Link href="/appointment" className="rounded-3xl bg-white text-ink-900 p-6 hover:-translate-y-1 transition">
                <Calendar className="h-7 w-7 text-blush-600 mb-4" />
                <div className="font-serif text-xl font-semibold">Book online</div>
                <div className="text-sm text-ink-500 mt-2">Choose your doctor, date, and time in 60 seconds.</div>
                <ArrowUpRight className="mt-4 h-5 w-5 text-blush-600" />
              </Link>
              <a href="tel:7888741037" className="rounded-3xl bg-ink-900 text-white p-6 hover:-translate-y-1 transition">
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
