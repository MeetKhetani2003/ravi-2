"use client";
import Link from 'next/link';
import { Phone, Mail, MapPin, Heart, ArrowUpRight, Camera, Users, Send, Play } from 'lucide-react';

const quick = [
  { label: 'Maternity Care', to: '/speciality/obstetrics-maternity' },
  { label: 'Neonatology', to: '/speciality/neonatology' },
  { label: 'Pediatrics', to: '/speciality/pediatrics' },
  { label: 'Fertility', to: '/speciality/fertility' },
  { label: 'Gynecology', to: '/speciality/gynaecology' },
  { label: 'All Specialities', to: '/specialities' },
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


        {/* Footer grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-ink-900/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Fateh Hospital Logo" 
                className="h-14 w-auto object-contain" 
              />
            </div>
            <p className="mt-6 text-ink-500 max-w-md leading-relaxed">
              A sanctuary of compassion and medical excellence — where every mother and child receives care that feels like home.
            </p>

            <div className="mt-8 space-y-3 text-sm text-ink-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-blush-500 shrink-0" />
                <span>Dholan Majra Chowk, Old Plaza Building<br />Old Chandigarh-Morinda Road, Morinda</span>
              </div>
              <a href="tel:7888741037" className="flex items-center gap-3 hover:text-blush-600 transition">
                <Phone className="h-4 w-4 text-blush-500" /> 78887-41037  ·  Alt: 94633-66657
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
