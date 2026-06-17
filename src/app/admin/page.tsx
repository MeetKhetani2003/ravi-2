"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, Trash2, Plus, Image as ImageIcon, Video, ArrowLeft, 
  CheckCircle, AlertCircle, Loader2, Play, ExternalLink, RefreshCw, Calendar, Check
} from 'lucide-react';
import Link from 'next/link';

type GalleryItem =
  | { _id: string; type: 'photo'; fileId?: string; url?: string; title: string; category: string }
  | { _id: string; type: 'video'; youtubeId: string; title: string; category: string };

const CATEGORIES = ['Maternity', 'Neonatology', 'Pediatrics', 'Fertility', 'Gynecology', 'Facility'];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'manage' | 'upload-photo' | 'add-video' | 'bookings'>('manage');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [envError, setEnvError] = useState<string | null>(null);

  // Form states
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoCategory, setPhotoCategory] = useState('Maternity');
  const [customPhotoCategory, setCustomPhotoCategory] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const [videoTitle, setVideoTitle] = useState('');
  const [videoCategory, setVideoCategory] = useState('Maternity');
  const [customVideoCategory, setCustomVideoCategory] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  // UI States
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: string; type: 'success' | 'error'; message: string }[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const addToast = (type: 'success' | 'error', message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/gallery');
      const data = await res.json();
      if (!res.ok) {
        if (data.error && data.error.includes('MONGODB_URI')) {
          setEnvError('MongoDB Connection Required. Please define the MONGODB_URI environment variable inside your .env.local file to use the gallery admin dashboard.');
        } else {
          throw new Error(data.error || 'Failed to load items');
        }
      } else {
        setItems(data.items || []);
        setEnvError(null);
      }
    } catch (err: any) {
      console.error(err);
      addToast('error', err.message || 'Error loading gallery items');
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/bookings');
      const data = await res.json();
      if (res.ok) {
        setBookings(data.bookings || []);
      }
    } catch (err: any) {
      console.error(err);
      addToast('error', err.message || 'Error loading bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchBookings();
  }, []);

  // Handle Photo Drag & Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        handleFileSelect(file);
      } else {
        addToast('error', 'Please drop a valid image file.');
      }
    }
  };

  const handleFileSelect = (file: File) => {
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Submit Photo
  const handlePhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile) {
      addToast('error', 'Please select or drop an image file first.');
      return;
    }

    setUploading(true);
    const finalCategory = photoCategory === 'Custom' ? customPhotoCategory.trim() : photoCategory;
    
    if (!finalCategory) {
      addToast('error', 'Please specify a category.');
      setUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', photoFile);
    formData.append('title', photoTitle.trim() || 'Untitled Photo');
    formData.append('category', finalCategory);

    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to upload photo');

      addToast('success', 'Photo successfully uploaded to GridFS!');
      setPhotoTitle('');
      setPhotoFile(null);
      setPhotoPreview(null);
      fetchItems();
      setActiveTab('manage');
    } catch (err: any) {
      addToast('error', err.message || 'Error uploading photo');
    } finally {
      setUploading(false);
    }
  };

  // Submit Video
  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl) {
      addToast('error', 'Please enter a YouTube video URL or ID.');
      return;
    }

    setUploading(true);
    const finalCategory = videoCategory === 'Custom' ? customVideoCategory.trim() : videoCategory;
    
    if (!finalCategory) {
      addToast('error', 'Please specify a category.');
      setUploading(false);
      return;
    }

    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'video',
          title: videoTitle.trim() || 'Untitled Video',
          category: finalCategory,
          videoUrl: videoUrl.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save video');

      addToast('success', 'YouTube video added successfully!');
      setVideoTitle('');
      setVideoUrl('');
      fetchItems();
      setActiveTab('manage');
    } catch (err: any) {
      addToast('error', err.message || 'Error adding video');
    } finally {
      setUploading(false);
    }
  };

  // Delete Item
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    setDeletingId(id);

    try {
      const res = await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete item');

      addToast('success', 'Item successfully deleted!');
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err: any) {
      addToast('error', err.message || 'Error deleting item');
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (!res.ok) throw new Error('Failed to update status');
      addToast('success', 'Booking status updated!');
      fetchBookings();
    } catch (err: any) {
      addToast('error', err.message);
    }
  };

  const handleDeleteBooking = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete booking');
      addToast('success', 'Booking deleted!');
      fetchBookings();
    } catch (err: any) {
      addToast('error', err.message);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50/40 pb-20 pt-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-blush-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Navigation / Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-blush-100 pb-6">
          <div>
            <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 hover:text-blush-600 transition mb-3">
              <ArrowLeft size={16} /> Back to Gallery
            </Link>
            <h1 className="font-serif text-4xl font-semibold text-ink-900 tracking-tight">
              Gallery Dashboard
            </h1>
            <p className="text-sm text-ink-500 mt-1">Manage Fateh Hospital's public gallery and media content</p>
          </div>
          
          <button 
            onClick={() => {
              fetchItems();
              fetchBookings();
            }}
            className="inline-flex items-center gap-2 rounded-full border border-blush-100 bg-white px-4 py-2 text-xs font-semibold text-ink-700 hover:bg-blush-50 shadow-sm transition"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh List
          </button>
        </div>

        {/* Environmental Error Warning */}
        {envError ? (
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-sm my-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-500 mb-6">
              <AlertCircle size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-red-950 mb-2">Configuration Required</h3>
            <p className="text-red-700 text-sm leading-relaxed mb-6">
              {envError}
            </p>
            <div className="bg-white border border-red-100 rounded-2xl p-4 text-xs font-mono text-left inline-block text-red-900 max-w-md">
              # Add this to your .env.local:<br />
              MONGODB_URI=your_mongodb_connection_string
            </div>
          </div>
        ) : (
          <>
            {/* Tab Bar */}
            <div className="flex border-b border-blush-100/60 mb-8 p-1 bg-white/70 backdrop-blur-md rounded-2xl max-w-md shadow-sm border border-blush-100/40">
              {[
                { id: 'manage', label: 'Manage Gallery', icon: ImageIcon },
                { id: 'upload-photo', label: 'Upload Photo', icon: Upload },
                { id: 'add-video', label: 'Add Video', icon: Plus },
                { id: 'bookings', label: 'Bookings', icon: Calendar },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                    activeTab === tab.id
                      ? 'bg-ink-900 text-white shadow-md shadow-ink-900/10'
                      : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  <tab.icon size={15} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {activeTab === 'bookings' && (
                  <motion.div
                    key="bookings"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    {loading && bookings.length === 0 ? (
                      <div className="grid place-items-center py-24">
                        <Loader2 className="h-10 w-10 text-blush-500 animate-spin" />
                        <span className="text-sm font-semibold text-ink-500 mt-4">Loading bookings...</span>
                      </div>
                    ) : bookings.length === 0 ? (
                      <div className="bg-white border border-blush-100 rounded-3xl p-16 text-center shadow-sm">
                        <div className="w-16 h-16 bg-blush-50 rounded-2xl flex items-center justify-center mx-auto text-blush-500 mb-4">
                          <Calendar size={28} />
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-ink-900">No bookings yet</h3>
                        <p className="text-sm text-ink-500 mt-2">New appointments will appear here.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking) => (
                          <div key={booking._id} className="bg-white border border-blush-100 rounded-[28px] p-6 shadow-sm hover:shadow-lg transition flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-blush-50 px-3 py-1 text-xs font-semibold text-blush-700">
                                  {booking.concern}
                                </span>
                              </div>
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                                booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                                booking.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                            
                            <h4 className="font-serif text-lg font-bold text-ink-900 mb-1">{booking.patient.name}</h4>
                            <p className="text-sm text-ink-500 mb-4 flex gap-3">
                              <span>{booking.patient.phone}</span>
                              {booking.patient.age && <span>{booking.patient.age} yrs</span>}
                            </p>

                            <div className="rounded-2xl bg-cream-50 p-4 text-sm mb-4">
                              <div className="flex justify-between mb-2">
                                <span className="text-ink-500">Date</span>
                                <span className="font-semibold text-ink-900">{new Date(booking.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex justify-between mb-2">
                                <span className="text-ink-500">Time</span>
                                <span className="font-semibold text-ink-900">{booking.time}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-ink-500">Doctor</span>
                                <span className="font-semibold text-ink-900 text-right">{booking.doctorId}</span>
                              </div>
                            </div>
                            
                            {booking.patient.notes && (
                              <div className="text-sm text-ink-600 mb-4 bg-gray-50 p-3 rounded-xl border border-gray-100 italic">
                                "{booking.patient.notes}"
                              </div>
                            )}

                            <div className="mt-auto flex items-center justify-between gap-2 border-t border-blush-100 pt-4">
                              <select 
                                value={booking.status}
                                onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                                className="text-xs font-semibold bg-white border border-blush-200 rounded-xl px-3 py-2 text-ink-700 focus:outline-none"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>

                              <button
                                onClick={() => handleDeleteBooking(booking._id)}
                                className="p-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition shadow-sm"
                                title="Delete Booking"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'manage' && (
                  <motion.div
                    key="manage"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    {loading ? (
                      <div className="grid place-items-center py-24">
                        <Loader2 className="h-10 w-10 text-blush-500 animate-spin" />
                        <span className="text-sm font-semibold text-ink-500 mt-4">Loading items...</span>
                      </div>
                    ) : items.length === 0 ? (
                      <div className="bg-white border border-blush-100 rounded-3xl p-16 text-center shadow-sm">
                        <div className="w-16 h-16 bg-blush-50 rounded-2xl flex items-center justify-center mx-auto text-blush-500 mb-4">
                          <ImageIcon size={28} />
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-ink-900">Your gallery is empty</h3>
                        <p className="text-sm text-ink-500 mt-2">Upload images or add YouTube links to display them in the website gallery.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => {
                          const isPhoto = item.type === 'photo';
                          const imgUrl = isPhoto
                            ? (item.fileId ? `/api/gallery/image/${item.fileId}` : item.url || '')
                            : `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;

                          return (
                            <div
                              key={item._id}
                              className="group relative bg-white border border-blush-100 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:border-blush-300 transition-all duration-300 flex flex-col"
                            >
                              {/* Preview Image */}
                              <div className="relative aspect-video bg-cream-50 overflow-hidden border-b border-blush-100">
                                <img
                                  src={imgUrl}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  onError={(e) => {
                                    // Fallback if maxresdefault doesn't exist for youtube
                                    if (!isPhoto && e.currentTarget.src.includes('maxresdefault')) {
                                      e.currentTarget.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                                    }
                                  }}
                                />
                                <div className="absolute inset-0 bg-ink-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                  {!isPhoto ? (
                                    <div className="h-12 w-12 rounded-full bg-white/90 grid place-items-center text-blush-600 scale-90 group-hover:scale-100 transition-all duration-300 shadow">
                                      <Play size={20} fill="currentColor" className="ml-0.5" />
                                    </div>
                                  ) : (
                                    <div className="h-12 w-12 rounded-full bg-white/90 grid place-items-center text-ink-900 scale-90 group-hover:scale-100 transition-all duration-300 shadow">
                                      <ImageIcon size={20} />
                                    </div>
                                  )}
                                </div>
                                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur border border-blush-100 text-ink-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                                  {item.category}
                                </span>
                                {!isPhoto && (
                                  <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                    <Video size={10} /> YouTube
                                  </span>
                                )}
                              </div>

                              {/* Title & Info */}
                              <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                  <h4 className="font-serif text-lg font-bold text-ink-900 leading-tight mb-1 group-hover:text-blush-600 transition">
                                    {item.title}
                                  </h4>
                                  <p className="text-[10px] font-semibold text-ink-400 font-mono">
                                    ID: {item._id}
                                  </p>
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-blush-100/50 pt-4">
                                  {!isPhoto && (
                                    <a
                                      href={`https://youtube.com/watch?v=${item.youtubeId}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 text-xs font-semibold text-ink-500 hover:text-blush-600 transition"
                                    >
                                      Watch <ExternalLink size={12} />
                                    </a>
                                  )}
                                  {isPhoto && (
                                    <span className="text-xs font-semibold text-ink-500">
                                      {item.fileId ? 'GridFS Storage' : 'Seeded Static'}
                                    </span>
                                  )}

                                  <button
                                    onClick={() => handleDelete(item._id)}
                                    disabled={deletingId === item._id}
                                    className="ml-auto p-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition shadow-sm active:scale-95 disabled:opacity-50"
                                    title="Delete Item"
                                  >
                                    {deletingId === item._id ? (
                                      <Loader2 size={16} className="animate-spin" />
                                    ) : (
                                      <Trash2 size={16} />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'upload-photo' && (
                  <motion.div
                    key="upload-photo"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="max-w-2xl mx-auto"
                  >
                    <div className="bg-white border border-blush-100 rounded-3xl p-8 lg:p-10 shadow-sm">
                      <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-6">Upload Image to GridFS</h3>

                      <form onSubmit={handlePhotoSubmit} className="space-y-6">
                        {/* Drag and Drop Zone */}
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] ${
                            isDragOver
                              ? 'border-blush-500 bg-blush-50/50 scale-[1.01]'
                              : photoPreview
                              ? 'border-blush-200 bg-cream-50/20'
                              : 'border-blush-100 bg-cream-50/40 hover:border-blush-300'
                          }`}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                            accept="image/*"
                            className="hidden"
                          />

                          {photoPreview ? (
                            <div className="relative w-full max-h-[280px] overflow-hidden rounded-xl border border-blush-100 flex items-center justify-center bg-cream-50">
                              <img
                                src={photoPreview}
                                alt="Upload Preview"
                                className="max-h-[280px] w-auto object-contain rounded-xl"
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPhotoFile(null);
                                  setPhotoPreview(null);
                                }}
                                className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-xl hover:bg-red-600 transition shadow"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ) : (
                            <>
                              <div className="w-14 h-14 bg-blush-50 rounded-2xl flex items-center justify-center text-blush-600 mb-4 shadow-sm">
                                <Upload size={24} />
                              </div>
                              <p className="font-semibold text-ink-800 text-sm">Drag & drop your image here, or <span className="text-blush-600">browse files</span></p>
                              <p className="text-xs text-ink-400 mt-2">Supports JPG, PNG, WEBP or GIF. Max 8MB.</p>
                            </>
                          )}
                        </div>

                        {/* Title input */}
                        <div>
                          <label className="block text-sm font-semibold text-ink-900 mb-2">Photo Title</label>
                          <input
                            type="text"
                            value={photoTitle}
                            onChange={(e) => setPhotoTitle(e.target.value)}
                            placeholder="e.g. Modern Maternity Suite"
                            className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                          />
                        </div>

                        {/* Category Selection */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-ink-900 mb-2">Category</label>
                            <select
                              value={photoCategory}
                              onChange={(e) => setPhotoCategory(e.target.value)}
                              className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                            >
                              {CATEGORIES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                              <option value="Custom">Custom Category...</option>
                            </select>
                          </div>

                          {photoCategory === 'Custom' && (
                            <motion.div
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <label className="block text-sm font-semibold text-ink-900 mb-2">Custom Category Name</label>
                              <input
                                type="text"
                                value={customPhotoCategory}
                                onChange={(e) => setCustomPhotoCategory(e.target.value)}
                                placeholder="e.g. Operation Theatre"
                                className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                              />
                            </motion.div>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={uploading}
                          className="w-full rounded-full bg-ink-900 text-white py-4 font-semibold hover:bg-ink-800 transition flex items-center justify-center gap-2 shadow-xl shadow-ink-900/10 active:scale-[0.99] disabled:opacity-50"
                        >
                          {uploading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" /> Uploading to GridFS...
                            </>
                          ) : (
                            <>
                              Upload to Gallery <ImageIcon size={18} />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'add-video' && (
                  <motion.div
                    key="add-video"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="max-w-2xl mx-auto"
                  >
                    <div className="bg-white border border-blush-100 rounded-3xl p-8 lg:p-10 shadow-sm">
                      <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-6">Add YouTube Video</h3>

                      <form onSubmit={handleVideoSubmit} className="space-y-6">
                        {/* Title input */}
                        <div>
                          <label className="block text-sm font-semibold text-ink-900 mb-2">Video Title</label>
                          <input
                            type="text"
                            value={videoTitle}
                            onChange={(e) => setVideoTitle(e.target.value)}
                            placeholder="e.g. Pediatric Department Tour"
                            className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                          />
                        </div>

                        {/* Video URL input */}
                        <div>
                          <label className="block text-sm font-semibold text-ink-900 mb-2">YouTube URL or Video ID</label>
                          <input
                            type="text"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            placeholder="e.g. https://www.youtube.com/watch?v=5fvxHh11nAs"
                            className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                          />
                          <p className="text-[11px] text-ink-400 mt-2">Accepts links like youtube.com/watch?v=..., youtu.be/..., or just the 11-character video ID.</p>
                        </div>

                        {/* Category Selection */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-ink-900 mb-2">Category</label>
                            <select
                              value={videoCategory}
                              onChange={(e) => setVideoCategory(e.target.value)}
                              className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                            >
                              {CATEGORIES.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                              <option value="Custom">Custom Category...</option>
                            </select>
                          </div>

                          {videoCategory === 'Custom' && (
                            <motion.div
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              <label className="block text-sm font-semibold text-ink-900 mb-2">Custom Category Name</label>
                              <input
                                type="text"
                                value={customVideoCategory}
                                onChange={(e) => setCustomVideoCategory(e.target.value)}
                                placeholder="e.g. Hospital Events"
                                className="w-full rounded-2xl bg-cream-50 border border-blush-100 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-transparent transition"
                              />
                            </motion.div>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={uploading}
                          className="w-full rounded-full bg-ink-900 text-white py-4 font-semibold hover:bg-ink-800 transition flex items-center justify-center gap-2 shadow-xl shadow-ink-900/10 active:scale-[0.99] disabled:opacity-50"
                        >
                          {uploading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" /> Saving...
                            </>
                          ) : (
                            <>
                              Add Video to Gallery <Video size={18} />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>

      {/* Toasts System */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`p-4 rounded-2xl shadow-xl flex items-start gap-3 border pointer-events-auto backdrop-blur-md ${
                toast.type === 'success'
                  ? 'bg-emerald-50/95 border-emerald-100 text-emerald-950'
                  : 'bg-red-50/95 border-red-100 text-red-950'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {toast.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-75">
                  {toast.type === 'success' ? 'Success' : 'Error'}
                </p>
                <p className="text-sm mt-0.5 font-medium leading-normal">{toast.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
