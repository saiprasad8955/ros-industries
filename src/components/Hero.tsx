'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Dictionary } from '@/app/dictionaries';

export default function Hero({ dict, lang, country }: { dict?: Dictionary['hero'], lang?: string, country?: string }) {
    if (!dict) return null; // Or render loading/fallback

    const prefix = `/${lang || 'en'}/${country || 'us'}`;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-ros-gray-dark py-20 lg:py-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Advanced Industrial Manufacturing"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ros-gray-dark/90 via-ros-gray-dark/50 to-transparent" />
            </div>

            <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl relative"
                >
                    {/* Glass Card Container */}
                    <div className="relative backdrop-blur-xl bg-black/40 border border-white/10 p-6 md:p-12 rounded-3xl shadow-[0_0_80px_-20px_rgba(0,86,145,0.4)] overflow-hidden group">

                        {/* Subtle decorative gradient orb/glow inside the card */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-ros-blue/20 rounded-full blur-3xl pointer-events-none group-hover:bg-ros-blue/30 transition-colors duration-500" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-ros-blue/50 rounded-full bg-ros-blue/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,86,145,0.3)]">
                                <span className="w-2 h-2 rounded-full bg-ros-blue animate-pulse" />
                                <span className="text-ros-blue font-bold uppercase tracking-widest text-xs">{dict.tag}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                                {dict.title_1} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ros-blue via-blue-400 to-white drop-shadow-sm">
                                    {dict.title_2}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-xl font-medium drop-shadow-md">
                                {dict.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link href={`${prefix}/request-quote`} className="btn-primary flex items-center justify-center gap-2 group shadow-lg shadow-ros-blue/25 hover:shadow-ros-blue/40">
                                    {dict.cta_quote}
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href={`${prefix}/products`} className="px-8 py-3.5 rounded-md font-bold text-white border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all text-center backdrop-blur-sm shadow-lg">
                                    {dict.cta_products}
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Optional: Add a subtle floating stats card or visual element on the right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hidden lg:block justify-self-end"
                >
                    <div className="p-6 bg-black/40 shadow-[0_0_80px_-20px_rgba(0,86,145,0.4)] backdrop-blur-xl border border-white/10 rounded-xl max-w-xs text-white">
                        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                            <div className="text-4xl font-bold text-ros-blue">98%</div>
                            <div className="text-sm text-gray-400">{dict.stat_label_1}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-ros-red">24/7</div>
                            <div className="text-sm text-gray-400">{dict.stat_label_2}</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-1 h-12 rounded-full border-2 border-white/20 flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
