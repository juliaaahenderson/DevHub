'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  HelpCircle,
  Users,
  Compass,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const inquiryCategories = [
  { id: 'general', label: 'General Inquiry', icon: Compass, desc: 'Questions about our learning paths or platform features' },
  { id: 'support', label: 'Technical Support', icon: HelpCircle, desc: 'Issues with tools, API reference docs, or account' },
  { id: 'business', label: 'Business & Partnership', icon: Users, desc: 'Sponsorships, enterprise plans, or content partnerships' },
  { id: 'feedback', label: 'Product Feedback', icon: MessageSquare, desc: 'Suggestions to make DevHub even better for builders' },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.length < 2) error = 'Name must be at least 2 characters';
    }
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'subject') {
      if (!value.trim()) error = 'Subject is required';
      else if (value.length < 5) error = 'Subject must be at least 5 characters';
    }
    if (name === 'message') {
      if (!value.trim()) error = 'Message is required';
      else if (value.length < 10) error = 'Message must be at least 10 characters';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      subject: validateField('subject', form.subject),
      message: validateField('message', form.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const hasErrors = Object.values(newErrors).some(err => !!err);
    if (hasErrors) return;

    setIsSubmitting(true);

    // Simulate premium submission response API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general',
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  const activeCategoryDetail = inquiryCategories.find(c => c.id === form.category);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-6 pb-16 sm:pt-8 sm:pb-24">
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left deep blue gradient glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/[0.04] blur-[130px]" />
        {/* Right mid indigo/violet glow */}
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-indigo-600/[0.04] blur-[120px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 tech-dot-grid opacity-[0.2]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Go Back Home Link ── */}
        <div className="mb-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>

        {/* ── Header ── */}
        <div className="max-w-3xl mb-6 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
              Get in Touch
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1]"
          >
            Let’s build something <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              extraordinary together
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
          >
            Have a question about our platforms, tools, or enterprise plans? 
            Drop us a line and our core engineering team will reach out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ── Left Column: Contact Sidebar Card ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Quick Contact Methods */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Contact Information</h3>
              
              <div className="space-y-6">
                
                {/* Method 1: Email */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h4>
                    <a href="mailto:support@devhub.com" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors block mt-1">
                      support@devhub.com
                    </a>
                    <span className="text-[11px] text-slate-450 block mt-0.5">Average reply: &lt; 3 hours</span>
                  </div>
                </div>

                {/* Method 2: Phone */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Support</h4>
                    <a href="tel:+18005550199" className="text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors block mt-1">
                      +1 (800) 555-0199
                    </a>
                    <span className="text-[11px] text-slate-450 block mt-0.5">Mon-Fri: 9 AM - 6 PM EST</span>
                  </div>
                </div>

                {/* Method 3: Location */}
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global HQ</h4>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      100 Pine Street, Floor 14
                    </p>
                    <span className="text-xs text-slate-500 block">San Francisco, CA 94111</span>
                  </div>
                </div>

              </div>

              {/* Decorative line */}
              <div className="border-t border-slate-100 pt-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Join our community</span>
                <div className="flex gap-3">
                  {['GitHub', 'Discord', 'Twitter'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-350 transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Note widget */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 relative overflow-hidden border border-slate-950 shadow-md">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-blue-600/20 rounded-full blur-xl" />
              <div className="relative z-10 space-y-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block animate-pulse" />
                <h4 className="text-sm font-bold tracking-tight">Need immediate API help?</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our interactive search covers everything from standard libraries to framework specifics.
                </p>
                <Link 
                  href="/documentation" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors pt-1 group"
                >
                  Search Reference Docs
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </motion.div>

          {/* ── Right Column: Interactive Form & States ── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    
                    {/* inquiry categories */}
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Select Inquiry Category
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {inquiryCategories.map((cat) => {
                          const isSelected = form.category === cat.id;
                          const CatIcon = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setForm(prev => ({ ...prev, category: cat.id }))}
                              className={`p-4 rounded-2xl border text-left transition-all relative ${
                                isSelected
                                  ? 'bg-blue-50/50 border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                                  : 'bg-white border-slate-200 hover:bg-slate-50/50 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex gap-3 items-start">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                  isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                                }`}>
                                  <CatIcon className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                  <h4 className={`text-xs font-bold ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                                    {cat.label}
                                  </h4>
                                  <p className="text-[10px] text-slate-450 leading-tight">
                                    {cat.desc}
                                  </p>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Category specific helper badge */}
                    {activeCategoryDetail && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>You are filing a <strong>{activeCategoryDetail.label}</strong>. We routing this direct to our specialized desk.</span>
                      </motion.div>
                    )}

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name field */}
                      <div className="space-y-2 relative">
                        <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                              touched.name && errors.name
                                ? 'border-red-500 bg-red-50/10 focus:ring-1 focus:ring-red-500'
                                : touched.name && !errors.name
                                ? 'border-emerald-500 bg-emerald-50/10 focus:ring-1 focus:ring-emerald-500'
                                : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                            }`}
                          />
                          {touched.name && !errors.name && (
                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 font-bold text-xs">✓</span>
                          )}
                        </div>
                        {touched.name && errors.name && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium">
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      {/* Email field */}
                      <div className="space-y-2 relative">
                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="john@example.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                              touched.email && errors.email
                                ? 'border-red-500 bg-red-50/10 focus:ring-1 focus:ring-red-500'
                                : touched.email && !errors.email
                                ? 'border-emerald-500 bg-emerald-50/10 focus:ring-1 focus:ring-emerald-500'
                                : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                            }`}
                          />
                          {touched.email && !errors.email && (
                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 font-bold text-xs">✓</span>
                          )}
                        </div>
                        {touched.email && errors.email && (
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium">
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                    </div>

                    {/* Subject field */}
                    <div className="space-y-2 relative">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="How can we help your stack scaling?"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                            touched.subject && errors.subject
                              ? 'border-red-500 bg-red-50/10 focus:ring-1 focus:ring-red-500'
                              : touched.subject && !errors.subject
                              ? 'border-emerald-500 bg-emerald-50/10 focus:ring-1 focus:ring-emerald-500'
                              : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          }`}
                        />
                        {touched.subject && !errors.subject && (
                          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 font-bold text-xs">✓</span>
                        )}
                      </div>
                      {touched.subject && errors.subject && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium">
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2 relative">
                      <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell us details on the challenges or requirements..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all resize-none ${
                            touched.message && errors.message
                              ? 'border-red-500 bg-red-50/10 focus:ring-1 focus:ring-red-500'
                              : touched.message && !errors.message
                              ? 'border-emerald-500 bg-emerald-50/10 focus:ring-1 focus:ring-emerald-500'
                              : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          }`}
                        />
                        {touched.message && !errors.message && (
                          <span className="absolute right-3.5 top-4 text-emerald-500 font-bold text-xs">✓</span>
                        )}
                      </div>
                      {touched.message && errors.message && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-red-500 font-medium">
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] transition-all gap-2 group disabled:opacity-50`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Dispatching Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  // Success State View
                  <motion.div
                    key="success"
                    className="text-center py-12 space-y-6"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Message Dispatched!</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Thanks for reaching out, <strong>{form.name}</strong>. We have routing your message into the 
                        inbox of our engineering core desk. We will response at <strong>{form.email}</strong> shortly.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        onClick={handleReset}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-350 transition-all"
                      >
                        Send another message
                      </button>
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                      >
                        Return Home
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
