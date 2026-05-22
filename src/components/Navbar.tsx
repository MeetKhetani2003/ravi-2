"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart, Calendar, MapPin } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/specialities', label: 'Specialities' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/parent-corner', label: 'Parent Corner' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden md:block border-b border-blush-100/60 bg-gradient-to-r from-blush-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-[13px] text-ink-700">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-blush-500" /> Sunny Enclave, Mohali</span>
            <span className="flex items-center gap-2"><Heart className="h-3.5 w-3.5 text-blush-500" /> 24/7 Emergency Maternity Care</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:7087556657" className="flex items-center gap-2 hover:text-blush-600 transition">
              <Phone className="h-3.5 w-3.5" /> 70875-56657
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/75 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,173,197,0.25)]' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Fateh Hospital Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.to;
                return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition ${
                      isActive
                        ? 'text-ink-900'
                        : 'text-ink-500 hover:text-ink-900'
                    }`
                  }
                >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blush-100 to-sky-100"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/appointment"
                className="group relative inline-flex items-center gap-2 rounded-full bg-ink-900 pl-5 pr-2 py-2 text-sm font-medium text-white hover:bg-ink-800 transition"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
                <span className="grid place-items-center h-8 w-8 rounded-full bg-blush-500 group-hover:bg-blush-400 transition">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            <button
              className="lg:hidden grid place-items-center h-11 w-11 rounded-2xl bg-white shadow-sm border border-blush-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mx-6 mb-4 rounded-3xl bg-white/90 backdrop-blur-xl border border-blush-100 p-4 shadow-2xl shadow-blush-100/40"
            >
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = pathname === item.to;
                  return (
                  <Link
                    key={item.to}
                    href={item.to}
                    className={`px-4 py-3 rounded-2xl text-base font-medium transition ${
                        isActive ? 'bg-gradient-to-r from-blush-100 to-sky-100 text-ink-900' : 'text-ink-700 hover:bg-blush-50'
                      }`
                    }
                  >
                    {item.label}
                  </Link>
                  );
                })}
                <Link
                  href="/appointment"
                  className="mt-3 rounded-2xl bg-ink-900 text-white px-4 py-3 text-center font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
