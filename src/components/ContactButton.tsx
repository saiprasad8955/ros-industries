'use client';

import { Dictionary } from '@/app/dictionaries';
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactButton({ dict }: { dict?: Dictionary['contact_button'] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const t = dict || {
        title: "Quick Inquiry",
        email: "Email",
        message: "Message",
        email_ph: "you@company.com",
        msg_ph: "How can we help?",
        send: "Send Request",
        label: "Contact Us"
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrors({});

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'quick_inquiry' }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                setTimeout(() => {
                    setIsOpen(false);
                    setStatus('idle');
                }, 3000);
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

    return (
        <>
            <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-4">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl p-6 w-[340px] mb-2 border border-gray-100"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="font-bold text-ros-gray-dark text-lg">{t.title}</h3>
                                    <p className="text-xs text-gray-500">We'll get back to you within 24h</p>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-all">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="h-8 w-8" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">Message Sent!</h4>
                                    <p className="text-sm text-gray-500 mt-2">Thank you for reaching out.</p>
                                </motion.div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full px-3 py-2 bg-gray-50 border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:border-ros-blue outline-none text-sm transition-all`}
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Company</label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-ros-blue outline-none text-sm transition-all"
                                                placeholder="Optional"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.email}</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={`w-full px-3 py-2 bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:border-ros-blue outline-none text-sm transition-all`}
                                            placeholder={t.email_ph}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-ros-blue outline-none text-sm transition-all"
                                            placeholder="+91..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.message}</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={`w-full px-3 py-2 bg-gray-50 border ${errors.message ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:border-ros-blue outline-none text-sm transition-all`}
                                            rows={3}
                                            placeholder={t.msg_ph}
                                        />
                                    </div>

                                    <button
                                        disabled={status === 'loading'}
                                        className="w-full bg-ros-blue text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-ros-blue/10 disabled:opacity-50"
                                    >
                                        {status === 'loading' ? 'Sending...' : t.send}
                                        {status !== 'loading' && <Send className="h-3 w-3" />}
                                    </button>
                                    {status === 'error' && <p className="text-[10px] text-red-500 text-center font-medium">Please check the fields and try again.</p>}
                                </form>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-14 w-14 rounded-full bg-ros-blue text-white shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center hover:scale-110 active:scale-95 group relative"
                    aria-label={t.label}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
                    {!isOpen && <span className="absolute right-full mr-4 bg-ros-gray-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">Quick Inquiry</span>}
                </button>
            </div>
        </>
    );
}

