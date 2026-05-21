"use client";
import Link from 'next/link';
import { Phone, Mail, MapPin, Heart, ArrowUpRight, Camera, Users, Send, Play } from 'lucide-react';

const quick = [
  { label: 'Maternity Care', to: '/services' },
  { label: 'Neonatology', to: '/services' },
  { label: 'Pediatrics', to: '/services' },
  { label: 'Fertility', to: '/services' },
  { label: 'Gynecology', to: '/services' },
  { label: 'Vaccination', to: '/services' },
];

const hospital = [
  { label: 'About FH', to: '/about' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Parent Corner', to: '/parent-corner' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book Appointment', to: '/appointment' },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blush-200/50 blur-3xl animate-blob" />
      <div className="absolute -top-10 right-0 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Newsletter CTA strip */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 lg:p-14 text-white mb-20">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,125,163,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,197,255,0.4),transparent_50%)]" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-blush-400 animate-pulse" />
                Parenting guidance, straight to you
              </span>
              <h3 className="mt-5 font-serif text-3xl lg:text-5xl leading-[1.05] tracking-tight text-balance">
                A gentler start to motherhood & beyond.
              </h3>
              <p className="mt-4 text-white/70 max-w-lg">
                Join 20,000+ parents receiving weekly, doctor-curated insights on pregnancy, newborn care, and child wellness.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-3 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="rounded-2xl bg-white text-ink-900 px-6 py-3 text-sm font-semibold hover:bg-blush-100 transition flex items-center justify-center gap-2">
                Subscribe <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-ink-900/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-blush-400 to-blush-600 grid place-items-center shadow-lg shadow-blush-200">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10" transform="translate(-2 0)" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-2xl font-semibold text-ink-900">Fatesh Hospital</div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink-400 font-medium">FH</div>
              </div>
            </div>
            <p className="mt-6 text-ink-500 max-w-md leading-relaxed">
              A sanctuary of compassion and medical excellence — where every mother and child receives care that feels like home.
            </p>

            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-blush-500 shrink-0" />
                <span>Sco 14, Sec- 125, Naval Market<br />Sunny Enclave, Mohali</span>
              </div>
              <a href="tel:7087556657" className="flex items-center gap-3 hover:text-blush-600 transition">
                <Phone className="h-4 w-4 text-blush-500" /> 70875-56657  ·  Alt: 94633-66657
              </a>
              <a href="mailto:info@ravihospital.com" className="flex items-center gap-3 hover:text-blush-600 transition">
                <Mail className="h-4 w-4 text-blush-500" /> info@ravihospital.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-semibold text-ink-900 mb-5">Services</h5>
            <ul className="space-y-3 text-sm text-ink-500">
              {quick.map((q) => (
                <li key={q.label}>
                  <Link href={q.to} className="hover:text-blush-600 transition">{q.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-semibold text-ink-900 mb-5">Hospital</h5>
            <ul className="space-y-3 text-sm text-ink-500">
              {hospital.map((h) => (
                <li key={h.label}>
                  <Link href={h.to} className="hover:text-blush-600 transition">{h.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-semibold text-ink-900 mb-5">Hours</h5>
            <ul className="space-y-3 text-sm text-ink-500">
              <li>OPD · 9 AM – 8 PM</li>
              <li>Maternity · 24 / 7</li>
              <li>NICU · 24 / 7</li>
              <li>Emergency · Always</li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {[Camera, Users, Send, Play].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-xl bg-blush-50 hover:bg-blush-500 hover:text-white text-ink-700 grid place-items-center transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-400">
          <div>© {new Date().getFullYear()} Fatesh Hospital. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink-900 transition">Privacy</a>
            <a href="#" className="hover:text-ink-900 transition">Terms</a>
            <a href="#" className="hover:text-ink-900 transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
