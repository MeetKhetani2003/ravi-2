import { notFound } from 'next/navigation';
import { Section, SectionHeader, Card } from '@/components/ui';
import { SPECIALITIES } from '@/legacyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function SpecialityDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const spec = SPECIALITIES.find(s => s.id === resolvedParams.id);

  if (!spec) {
    notFound();
  }

  return (
    <div className="relative min-h-screen pb-20">
      <section className="relative pt-10 lg:pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blush-50 to-white -z-10" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
            {spec.name}
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
            {spec.title}
          </h1>
          <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl mx-auto">
            {spec.fullDesc}
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-blush-200/50">
            <img src={spec.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"} alt={spec.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-semibold text-ink-900 mb-6">Services Offered</h3>
            <ul className="space-y-4">
              {spec.services.map((service, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blush-500 shrink-0 mt-0.5" />
                  <span className="text-ink-600 leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/appointment" className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white px-6 py-3 font-medium hover:bg-ink-800 transition">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {spec.faqs && spec.faqs.length > 0 && (
        <Section className="bg-blush-50/50 rounded-[3rem] mx-4 lg:mx-10 py-16">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="FAQ" title="Common Questions" center />
            <div className="space-y-6 mt-10">
              {spec.faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h4 className="font-serif font-semibold text-lg text-ink-900 mb-3">{faq.q}</h4>
                  <p className="text-ink-600 leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
