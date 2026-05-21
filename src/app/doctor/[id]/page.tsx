import { notFound } from 'next/navigation';
import { Section, SectionHeader, Card } from '@/components/ui';
import { DOCTORS } from '@/legacyData';
import { Award, GraduationCap, MapPin, Star, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default async function DoctorDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const doc = DOCTORS.find(d => d.id === resolvedParams.id);

  if (!doc) {
    notFound();
  }

  return (
    <div className="relative min-h-screen pb-20">
      <Section className="pt-10 lg:pt-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar Image */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-blush-200/50">
              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4 flex items-center justify-between text-white border border-white/20">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {doc.rating} Rating
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Award className="w-4 h-4 text-blush-400" /> {doc.experienceYears} Exp
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blush-50 border border-blush-100 px-4 py-1.5 text-xs font-semibold text-blush-600 tracking-wider uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" /> {doc.location}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-2">{doc.name}</h1>
            <p className="text-xl text-ink-500 mb-6">{doc.designation}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4" /> {doc.qualifications}
              </div>
            </div>

            <div className="prose prose-lg text-ink-600 mb-10">
              <p className="leading-relaxed">{doc.experienceDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <Card className="p-6">
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-ink-900 mb-4">
                  <Award className="w-5 h-5 text-blush-500" /> Experience
                </h3>
                <ul className="space-y-3">
                  {doc.experienceList.map((exp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="flex items-center gap-2 font-serif text-xl font-semibold text-ink-900 mb-4">
                  <BookOpen className="w-5 h-5 text-sky-500" /> Memberships & Training
                </h3>
                <ul className="space-y-3">
                  {doc.memberships.map((mem, i) => (
                    <li key={`m-${i}`} className="flex items-start gap-2 text-sm text-ink-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink-300 mt-1.5 shrink-0" />
                      <span>{mem}</span>
                    </li>
                  ))}
                  {doc.training.map((t, i) => (
                    <li key={`t-${i}`} className="flex items-start gap-2 text-sm text-ink-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink-300 mt-1.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {doc.publications && doc.publications.length > 0 && (
              <div className="mb-10">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-6">Publications & Research</h3>
                <div className="space-y-4">
                  {doc.publications.map((pub, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-blush-50/50 border border-blush-100 text-sm text-ink-700">
                      {pub}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-8 rounded-[2rem] bg-ink-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Schedule a visit</h3>
                <p className="text-white/70 text-sm">Consultations available at {doc.location}.</p>
              </div>
              <Link href="/appointment" className="shrink-0 flex items-center gap-2 bg-blush-500 hover:bg-blush-400 text-white px-6 py-3 rounded-full font-semibold transition">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
