"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Key, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error('Invalid credentials');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50/40 relative overflow-hidden flex items-center justify-center p-6">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-blush-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-3xl -z-10" />

      <Link href="/" className="absolute top-8 left-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 hover:text-blush-600 transition">
        <ArrowLeft size={16} /> Back to Website
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-blush-100 rounded-[32px] p-8 md:p-10 shadow-xl shadow-blush-900/5"
      >
        <div className="w-16 h-16 bg-blush-50 rounded-2xl flex items-center justify-center text-blush-600 mb-6 shadow-sm mx-auto">
          <Lock size={28} />
        </div>
        
        <h1 className="font-serif text-3xl font-bold text-ink-900 text-center mb-2">Admin Access</h1>
        <p className="text-sm text-ink-500 text-center mb-8">Please sign in to manage bookings and gallery.</p>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-ink-900 mb-2">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 pr-5 py-3.5 bg-cream-50 border border-blush-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 transition"
                placeholder="Enter admin username"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-ink-900 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink-400">
                <Key size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-5 py-3.5 bg-cream-50 border border-blush-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 transition"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 rounded-full bg-ink-900 text-white py-4 font-semibold hover:bg-ink-800 transition flex items-center justify-center gap-2 shadow-xl shadow-ink-900/10 active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? (
              <><Loader2 size={18} className="animate-spin" /> Verifying...</>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
