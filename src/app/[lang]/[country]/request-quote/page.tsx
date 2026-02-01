'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send,
    CheckCircle2,
    Building2,
    MessageSquare,
    Phone,
    Mail,
    User,
    ArrowRight,
    Loader2
} from 'lucide-react';
import { leadSchema } from '@/lib/validations';

export default function RequestQuotePage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrors({});

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'quote_page' }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setStatus('error');
                if (data.details?.fieldErrors) {
                    setErrors(data.details.fieldErrors);
                }
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full text-center"
                >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h1>
                    <p className="text-gray-600 mb-8">
                        Our engineering team has received your request. We'll analyze your requirements and get back to you with a detailed proposal within 24-48 hours.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="btn-primary px-8 py-3 rounded-xl inline-flex items-center gap-2"
                    >
                        Return to Homepage <ArrowRight className="h-4 w-4" />
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-ros-gray-dark text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] shadow-inner"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-md bg-ros-blue/20 border border-ros-blue/30 text-ros-blue text-xs font-bold uppercase tracking-wider mb-6">
                            Tailored Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Request a <span className="text-ros-blue">Custom Quote</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Share your project requirements with us. Whether it's a standard component or a complex hydraulic system, our engineers are ready to build the perfect solution for you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 -mt-10 relative z-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Info Column */}
                        <div className="space-y-8">
                            <div className="bg-ros-gray-light p-8 rounded-3xl border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Partner With ROS?</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-ros-blue/10 text-ros-blue flex items-center justify-center shrink-0">
                                            <Building2 className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Industry Leader</p>
                                            <p className="text-sm text-gray-500">Decades of engineering excellence in industrial solutions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-ros-blue/10 text-ros-blue flex items-center justify-center shrink-0">
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Expert Consultation</p>
                                            <p className="text-sm text-gray-500">Direct access to our technical support and design team.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-ros-blue/10 text-ros-blue flex items-center justify-center shrink-0">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Rapid Response</p>
                                            <p className="text-sm text-gray-500">Detailed quotes delivered within 24-48 business hours.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-3xl">
                                <p className="text-sm text-gray-400 mb-4 font-bold uppercase tracking-widest text-center">Trusted By Global Giants</p>
                                <div className="grid grid-cols-2 gap-4 opacity-30 grayscale">
                                    {/* Placeholders for client logos */}
                                    <div className="h-8 bg-gray-200 rounded"></div>
                                    <div className="h-8 bg-gray-200 rounded"></div>
                                    <div className="h-8 bg-gray-200 rounded"></div>
                                    <div className="h-8 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100"
                            >
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border ${errors.name ? 'border-red-300' : 'border-gray-100'} rounded-2xl focus:border-ros-blue focus:ring-4 focus:ring-ros-blue/5 outline-none transition-all`}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name[0]}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Work Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-100'} rounded-2xl focus:border-ros-blue focus:ring-4 focus:ring-ros-blue/5 outline-none transition-all`}
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email[0]}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-ros-blue focus:ring-4 focus:ring-ros-blue/5 outline-none transition-all"
                                                    placeholder="+91..."
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Company Name</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-ros-blue focus:ring-4 focus:ring-ros-blue/5 outline-none transition-all"
                                                    placeholder="Company Ltd"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Project Requirements</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={`w-full p-6 bg-gray-50 border ${errors.message ? 'border-red-300' : 'border-gray-100'} rounded-3xl focus:border-ros-blue focus:ring-4 focus:ring-ros-blue/5 outline-none transition-all min-h-[200px]`}
                                            placeholder="Tell us about your technical requirements, volumes, and timelines..."
                                        />
                                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message[0]}</p>}
                                    </div>

                                    <button
                                        disabled={status === 'loading'}
                                        className="w-full bg-ros-blue text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-ros-blue/20 disabled:opacity-50 active:scale-[0.98]"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="h-6 w-6 animate-spin" /> Processing Request...
                                            </>
                                        ) : (
                                            <>
                                                Send Request <Send className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-sm text-red-500 text-center font-bold">
                                            There was an error submitting your request. Please check the fields above.
                                        </p>
                                    )}
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
