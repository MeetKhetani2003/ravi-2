import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Section } from '../components/ui';
import { gallery } from '../data';

const categories = ['All', 'Maternity', 'NICU', 'Pediatrics', 'Facility'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? gallery : gallery.filter((g) => g.cat === filter);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-10 lg:pt-16 pb-16 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blush-200/50 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
              <ZoomIn className="h-3.5 w-3.5 text-blush-500" /> Step inside Fateh
            </div>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
              A hospital that feels like <em className="italic text-blush-600">a home.</em>
            </h1>
            <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl">
              Light-filled suites, calm corridors, family-integrated spaces — every corner designed with quiet intention.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                filter === c
                  ? 'bg-ink-900 text-white shadow-lg shadow-ink-900/20'
                  : 'bg-white border border-blush-100 text-ink-700 hover:border-blush-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry gallery */}
      <Section>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.button
                key={img.url}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(gallery.findIndex((g) => g.url === img.url))}
                className={`group relative block w-full break-inside-avoid rounded-[28px] overflow-hidden cursor-pointer ${
                  img.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img src={img.url} alt={img.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <div className="text-xs uppercase tracking-[0.18em] opacity-80">{img.cat}</div>
                  <div className="font-serif text-xl font-semibold mt-1">{img.title}</div>
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/80 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition">
                  <ZoomIn className="h-4 w-4 text-ink-900" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink-900/95 backdrop-blur-xl grid place-items-center p-4 lg:p-10"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 backdrop-blur text-white grid place-items-center hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={gallery[lightbox].url}
              alt={gallery[lightbox].title}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
              <div className="text-xs uppercase tracking-[0.2em] opacity-60">{gallery[lightbox].cat}</div>
              <div className="font-serif text-2xl font-semibold mt-1">{gallery[lightbox].title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
