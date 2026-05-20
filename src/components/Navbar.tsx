import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart, Calendar, MapPin } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/parent-corner', label: 'Parent Corner' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden md:block border-b border-blush-100/60 bg-gradient-to-r from-blush-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-[13px] text-ink-700">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-blush-500" /> Sector 12, Chandigarh, India</span>
            <span className="flex items-center gap-2"><Heart className="h-3.5 w-3.5 text-blush-500" /> 24/7 Emergency Maternity Care</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blush-600 transition">
              <Phone className="h-3.5 w-3.5" /> +91 98765 43210
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
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-blush-400 via-blush-500 to-blush-600 grid place-items-center shadow-lg shadow-blush-200 group-hover:scale-105 transition">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10" transform="translate(-2 0)" />
                </svg>
                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-sky-300 ring-2 ring-white" />
              </div>
              <div className="leading-tight">
                <div className="font-serif text-xl font-semibold tracking-tight text-ink-900">Fateh<span className="text-blush-500">.</span></div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400 font-medium">Women & Child</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium transition ${
                      isActive
                        ? 'text-ink-900'
                        : 'text-ink-500 hover:text-ink-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blush-100 to-sky-100"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/appointment"
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
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-base font-medium transition ${
                        isActive ? 'bg-gradient-to-r from-blush-100 to-sky-100 text-ink-900' : 'text-ink-700 hover:bg-blush-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/appointment"
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
