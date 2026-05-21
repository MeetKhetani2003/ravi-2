import { notFound } from 'next/navigation';
import { Section } from '@/components/ui';
import { ARTICLES } from '@/legacyData';
import { Clock, ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

export default async function ArticleDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLES.find(a => a.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative min-h-screen pb-20 bg-white">
      {/* Hero */}
      <section className="relative pt-10 lg:pt-16 pb-12 overflow-hidden border-b border-blush-100/50">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-blush-50 to-transparent -z-10 blur-3xl" />
        <div className="mx-auto max-w-3xl px-6 lg:px-10 relative">
          <Link href="/parent-corner" className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-blush-600 transition mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Parent Corner
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-ink-400 mb-6">
            <div className="flex items-center gap-1.5 bg-blush-50 text-blush-600 px-3 py-1.5 rounded-full">
              <Tag className="w-3.5 h-3.5" /> {article.category}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Published Recently
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-ink-900 leading-[1.1] mb-8 text-balance">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <Section className="pt-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-12 shadow-xl shadow-blush-100/50">
            <img src={article.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg prose-headings:font-serif prose-headings:font-semibold prose-headings:text-ink-900 prose-p:text-ink-600 prose-p:leading-relaxed prose-a:text-blush-600 max-w-none">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('-')) {
                // Render as list
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ul key={idx} className="my-6 space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-ink-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush-400 shrink-0 mt-2.5" />
                        <span>{item.replace(/^- /, '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              // Render as paragraph
              return (
                <p key={idx} className="mb-6">{paragraph}</p>
              );
            })}
          </div>

          <hr className="my-12 border-blush-100" />
          
          <div className="bg-blush-50 rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-4">Need personalized guidance?</h3>
            <p className="text-ink-600 mb-8 max-w-md mx-auto">Our specialists are here to answer your questions and provide the care your family deserves.</p>
            <Link href="/appointment" className="inline-block bg-ink-900 hover:bg-ink-800 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-ink-900/20">
              Book a Consultation
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
