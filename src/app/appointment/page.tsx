"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowLeft, ArrowRight, Calendar, Clock, Phone, AlertCircle, User, Stethoscope } from 'lucide-react';
import { Section, Card } from '@/components/ui';
import { doctors } from '@/data';

const concernOptions = [
  { id: 'maternity', label: 'Pregnancy / Maternity', icon: '🤱' },
  { id: 'fertility', label: 'Fertility / IVF', icon: '🌱' },
  { id: 'pediatric', label: 'Pediatric visit', icon: '🧸' },
  { id: 'neonatal', label: 'Newborn care', icon: '👶' },
  { id: 'gynecology', label: 'Gynecology', icon: '🌸' },
  { id: 'vaccination', label: 'Vaccination', icon: '💉' },
  { id: 'other', label: 'Other concern', icon: '💬' },
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '4:00 PM', '4:30 PM', '5:00 PM',
];

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [concern, setConcern] = useState('');
  const [doctorId, setDoctorId] = useState(doctors[0].id);
  const [date, setDate] = useState(0); // days from today
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState({ name: '', phone: '', age: '', notes: '' });
  const [confirmed, setConfirmed] = useState(false);

  const selectedDoc = doctors.find((d) => d.id === doctorId)!;

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const handleSubmit = () => {
    setConfirmed(true);
  };

  const canNext =
    (step === 1 && concern) ||
    (step === 2 && doctorId) ||
    (step === 3 && date >= 0 && time) ||
    (step === 4 && patient.name && patient.phone);

  return (
    <div className="relative min-h-screen">
      {/* Hero / intro */}
      <section className="relative pt-10 lg:pt-16 pb-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-blush-200/50 blur-3xl animate-blob" />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-blush-100 px-4 py-1.5 text-xs font-medium text-ink-700">
            <Calendar className="h-3.5 w-3.5 text-blush-500" /> Book in 4 steps · ~60 seconds
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1] text-balance">
            Book a <em className="italic text-blush-600">consultation.</em>
          </h1>
          <p className="mt-6 text-lg text-ink-500 max-w-xl mx-auto">
            Choose your concern, pick your doctor, select a slot — we'll take it from there.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="rounded-2xl bg-gradient-to-r from-blush-50 to-rose-50 border border-blush-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-blush-500 grid place-items-center text-white shrink-0">
            <AlertCircle className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-ink-900">Is this an emergency?</div>
            <div className="text-sm text-ink-500">For urgent maternity or NICU care, please call immediately — don't wait for online booking.</div>
          </div>
          <a href="tel:+919876543210" className="rounded-full bg-ink-900 text-white px-5 py-2.5 text-sm font-semibold flex items-center gap-2 shrink-0">
            <Phone className="h-4 w-4" /> Call now
          </a>
        </div>
      </div>

      <Section>
        {!confirmed ? (
          <div className="max-w-5xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-10 max-w-2xl mx-auto">
              {[
                { n: 1, l: 'Concern', icon: Stethoscope },
                { n: 2, l: 'Doctor', icon: User },
                { n: 3, l: 'Date & Time', icon: Calendar },
                { n: 4, l: 'Your details', icon: Check },
              ].map((s, i) => (
                <div key={s.n} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div className={`h-11 w-11 rounded-full grid place-items-center transition ${
                      step > s.n ? 'bg-green-500 text-white' : step === s.n ? 'bg-blush-500 text-white shadow-lg shadow-blush-300' : 'bg-blush-50 text-ink-400'
                    }`}>
                      {step > s.n ? <Check className="h-5 w-5" /> : <s.icon className="h-5 w-5" />}
                    </div>
                    <div className={`mt-2 text-xs font-medium ${step >= s.n ? 'text-ink-900' : 'text-ink-400'}`}>{s.l}</div>
                  </div>
                  {i < 3 && <div className={`flex-1 h-px mx-3 ${step > s.n ? 'bg-green-500' : 'bg-blush-100'}`} />}
                </div>
              ))}
            </div>

            <Card className="p-8 lg:p-12" hover={false}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="font-serif text-3xl font-semibold text-ink-900">What brings you in today?</h2>
                    <p className="mt-2 text-ink-500">Select the closest match — we'll route you to the right specialist.</p>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {concernOptions.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setConcern(c.id)}
                          className={`text-left rounded-2xl p-5 border transition ${
                            concern === c.id
                              ? 'bg-gradient-to-br from-blush-50 to-sky-50 border-blush-400 shadow-md'
                              : 'bg-white border-blush-100 hover:border-blush-300'
                          }`}
                        >
                          <div className="text-3xl mb-3">{c.icon}</div>
                          <div className="font-semibold text-ink-900">{c.label}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="font-serif text-3xl font-semibold text-ink-900">Choose your doctor.</h2>
                    <p className="mt-2 text-ink-500">Both are available this week.</p>
                    <div className="mt-8 grid md:grid-cols-2 gap-4">
                      {doctors.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setDoctorId(d.id)}
                          className={`text-left rounded-3xl overflow-hidden border transition ${
                            doctorId === d.id ? 'border-blush-500 shadow-lg shadow-blush-200/50' : 'border-blush-100 hover:border-blush-300'
                          }`}
                        >
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <img src={d.image} alt={d.name} className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                            {doctorId === d.id && (
                              <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-blush-500 grid place-items-center text-white">
                                <Check className="h-4 w-4" />
                              </div>
                            )}
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="text-xs uppercase tracking-wider opacity-80">{d.role}</div>
                              <div className="font-serif text-xl font-semibold mt-1">{d.name}</div>
                            </div>
                          </div>
                          <div className="p-4 flex items-center gap-2 text-xs text-ink-500">
                            <span>{d.experience}</span>
                            <span>·</span>
                            <span>{d.specialties[0]}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="font-serif text-3xl font-semibold text-ink-900">Pick a date & time.</h2>
                    <p className="mt-2 text-ink-500">Available slots with {selectedDoc.name.split(' ')[0]}.</p>

                    <div className="mt-8">
                      <div className="text-xs uppercase tracking-[0.2em] text-ink-400 font-medium mb-3">Select date</div>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {dates.map((d, i) => {
                          const isSelected = date === i;
                          return (
                            <button
                              key={i}
                              onClick={() => setDate(i)}
                              className={`shrink-0 w-20 rounded-2xl p-3 text-center border transition ${
                                isSelected
                                  ? 'bg-ink-900 text-white border-ink-900'
                                  : 'bg-white border-blush-100 hover:border-blush-300'
                              }`}
                            >
                              <div className="text-[10px] uppercase tracking-wider opacity-70">
                                {d.toLocaleDateString('en-US', { weekday: 'short' })}
                              </div>
                              <div className="font-serif text-xl font-semibold mt-1">{d.getDate()}</div>
                              <div className="text-[10px] opacity-70">
                                {d.toLocaleDateString('en-US', { month: 'short' })}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="text-xs uppercase tracking-[0.2em] text-ink-400 font-medium mb-3">Select time</div>
                      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => setTime(t)}
                            className={`rounded-xl py-3 text-sm font-medium border transition ${
                              time === t
                                ? 'bg-blush-500 text-white border-blush-500'
                                : 'bg-white border-blush-100 hover:border-blush-300 text-ink-700'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h2 className="font-serif text-3xl font-semibold text-ink-900">Just a few details.</h2>
                    <p className="mt-2 text-ink-500">So our care coordinators can prepare for your visit.</p>
                    <div className="mt-8 space-y-5 max-w-xl">
                      <Field label="Full name *" value={patient.name} onChange={(v) => setPatient({ ...patient, name: v })} placeholder="Your name" />
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field label="Phone *" value={patient.phone} onChange={(v) => setPatient({ ...patient, phone: v })} placeholder="+91 98765 43210" />
                        <Field label="Age" value={patient.age} onChange={(v) => setPatient({ ...patient, age: v })} placeholder="e.g. 28" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink-900 mb-2">Any notes for the doctor?</label>
                        <textarea
                          value={patient.notes}
                          onChange={(e) => setPatient({ ...patient, notes: e.target.value })}
                          rows={4}
                          placeholder="Symptoms, concerns, anything helpful…"
                          className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 rounded-2xl bg-cream-50 p-6">
                      <div className="text-xs uppercase tracking-[0.2em] text-ink-400 font-medium mb-4">Booking summary</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-ink-500">Doctor</span><span className="font-medium">{selectedDoc.name}</span></div>
                        <div className="flex justify-between"><span className="text-ink-500">Date</span><span className="font-medium">{dates[date].toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</span></div>
                        <div className="flex justify-between"><span className="text-ink-500">Time</span><span className="font-medium">{time}</span></div>
                        <div className="flex justify-between"><span className="text-ink-500">Consultation</span><span className="font-medium text-green-600">Free first call</span></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nav buttons */}
              <div className="mt-10 flex items-center justify-between pt-8 border-t border-blush-100">
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-700 disabled:opacity-30 hover:bg-blush-50 transition"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {step < 4 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-white px-7 py-3 text-sm font-semibold disabled:opacity-40 hover:bg-ink-800 transition"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 rounded-full bg-blush-500 text-white px-7 py-3 text-sm font-semibold disabled:opacity-40 hover:bg-blush-600 transition"
                  >
                    Confirm booking <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            </Card>
          </div>
        ) : (
          /* CONFIRMED */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="p-12 lg:p-16" hover={false}>
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 grid place-items-center text-white mx-auto shadow-xl shadow-green-200">
                <Check className="h-10 w-10" strokeWidth={3} />
              </div>
              <h2 className="mt-8 font-serif text-4xl lg:text-5xl font-semibold text-ink-900">You're all set.</h2>
              <p className="mt-4 text-ink-500 text-lg">
                Your consultation with <span className="font-semibold text-ink-900">{selectedDoc.name}</span> is confirmed.
              </p>

              <div className="mt-10 rounded-3xl bg-cream-50 p-8 text-left space-y-3">
                <Row label="Date" value={dates[date].toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })} />
                <Row label="Time" value={time} />
                <Row label="Doctor" value={selectedDoc.name} />
                <Row label="Patient" value={patient.name} />
                <Row label="Phone" value={patient.phone} />
              </div>

              <div className="mt-10 rounded-2xl bg-blush-50 border border-blush-100 p-5 text-sm text-ink-700 text-left">
                <div className="flex items-center gap-2 font-semibold text-ink-900 mb-1"><Clock className="h-4 w-4 text-blush-500" /> What happens next</div>
                A care coordinator will call within 2 hours to confirm and share preparation notes. You'll also receive an SMS with a calendar invite.
              </div>

              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <Link href="/" className="rounded-full bg-ink-900 text-white px-6 py-3 text-sm font-semibold hover:bg-ink-800">Back to home</Link>
                <a href="tel:+919876543210" className="rounded-full bg-white border border-blush-100 text-ink-900 px-6 py-3 text-sm font-semibold flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call care desk
                </a>
              </div>
            </Card>
          </motion.div>
        )}
      </Section>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-900 mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blush-300"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1 border-b border-blush-100 last:border-0">
      <span className="text-sm text-ink-500">{label}</span>
      <span className="text-sm font-semibold text-ink-900">{value}</span>
    </div>
  );
}
