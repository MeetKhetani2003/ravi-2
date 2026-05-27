"use client";
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/917888741037"
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="fixed bottom-6 right-6 z-40 group"
        >
          <span className="absolute inset-0 rounded-full bg-green-500 blur-lg opacity-60 animate-pulse" />
          <span className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl shadow-green-500/30 hover:scale-110 transition">
            <MessageCircle className="h-6 w-6" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export function EmergencyStrip() {
  return (
    <div className="bg-gradient-to-r from-blush-600 via-blush-500 to-blush-400 text-white py-3 text-center text-sm font-medium relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
      <div className="relative flex items-center justify-center gap-3 px-4 flex-wrap">
        <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse" />
        <span>24/7 Emergency Maternity & NICU — Call now:</span>
        <a href="tel:7888741037" className="font-bold underline underline-offset-4 decoration-2">78887-41037</a>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = 'left',
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  align?: 'left' | 'center';
}) {
  return (
    <section className="relative pt-10 lg:pt-16 pb-20 overflow-hidden">
      {/* background blobs */}
      <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-blush-200/40 blur-3xl animate-blob" />
      <div className="absolute top-10 right-0 h-[400px] w-[400px] rounded-full bg-sky-200/50 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${align === 'center' ? 'lg:grid-cols-1 text-center' : ''}`}>
          <div className={align === 'center' ? 'max-w-3xl mx-auto' : ''}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blush-500" />
              {eyebrow}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1.02] text-balance"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 text-lg text-ink-500 max-w-xl leading-relaxed text-balance"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white px-6 py-3.5 text-sm font-semibold hover:bg-ink-800 transition shadow-lg shadow-ink-900/10"
              >
                Book a consultation
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <a
                href="tel:7888741037"
                className="inline-flex items-center gap-2 rounded-full bg-white text-ink-900 px-6 py-3.5 text-sm font-semibold border border-blush-100 hover:border-blush-300 transition"
              >
                <Phone className="h-4 w-4" /> Call 24/7
              </a>
            </motion.div>
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[40px] overflow-hidden shadow-2xl shadow-blush-200/50">
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-sky-300 blur-2xl opacity-60" />
              <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-blush-300 blur-2xl opacity-60" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-14`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full bg-blush-100/60 px-4 py-1.5 text-xs font-semibold text-blush-600 tracking-wide uppercase mb-5`}>
          <span className="h-1.5 w-1.5 rounded-full bg-blush-500" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-ink-500 leading-relaxed text-balance">{subtitle}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = '',
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[32px] bg-white border border-blush-100/60 shadow-[0_8px_40px_-12px_rgba(255,125,163,0.18)] ${
        hover ? 'hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(255,125,163,0.35)]' : ''
      } transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
