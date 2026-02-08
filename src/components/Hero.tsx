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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-ros-slate via-white to-ros-blue/5 pt-32 pb-20 lg:pt-10 lg:pb-10">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Advanced Industrial Manufacturing"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0" />

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ros-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl relative"
                >
                    {/* Glass Card Container - Enhanced for Mint Theme */}
                    <div className="relative backdrop-blur-xl bg-white/40 border border-white/60 p-6 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(12,189,157,0.15)] overflow-hidden group">

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/40 to-white/0 opacity-100  transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-ros-blue/30 rounded-full bg-white/50 backdrop-blur-md shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-ros-blue animate-pulse" />
                                <span className="text-ros-blue font-bold uppercase tracking-widest text-xs">{dict.tag}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                                {dict.title_1} <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-ros-blue to-teal-600 drop-shadow-sm">
                                    {dict.title_2}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-xl font-medium">
                                {dict.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link href={`${prefix}/request-quote`} className="btn-primary flex items-center justify-center gap-2 group shadow-xl shadow-ros-blue/20 hover:shadow-ros-blue/30 scale-100 hover:scale-[1.02] transition-all">
                                    {dict.cta_quote}
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href={`${prefix}/products`} className="px-8 py-3.5 rounded-full font-bold text-gray-700 border-2 border-white/50 bg-white/50 hover:bg-white hover:border-ros-blue/30 transition-all text-center backdrop-blur-sm shadow-sm hover:shadow-md">
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
                    className="hidden lg:block justify-self-end relative"
                >
                    {/* Decorative geometric elements behind stats */}
                    <div className="absolute -inset-4 bg-linear-to-tr from-ros-blue/20 to-teal-100/20 rounded-2xl blur-xl" />

                    <div className="relative p-8 bg-white/80 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)] backdrop-blur-2xl border border-white rounded-2xl max-w-xs text-gray-900 rotate-3 hover:rotate-0 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100/50">
                            <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-ros-blue to-teal-500">98%</div>
                            <div className="text-sm font-semibold text-gray-600 leading-tight">{dict.stat_label_1}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold text-ros-orange">24/7</div>
                            <div className="text-sm font-semibold text-gray-600 leading-tight">{dict.stat_label_2}</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ros-blue/50"
            >
                <div className="w-1 h-12 rounded-full border-2 border-ros-blue/20 flex justify-center p-1 bg-white/50 backdrop-blur-sm">
                    <div className="w-1 h-2 bg-ros-blue rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
