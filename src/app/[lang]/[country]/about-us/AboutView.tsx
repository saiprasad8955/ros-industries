'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe2, Factory, Settings, Users, ArrowRight } from 'lucide-react';
import { Dictionary } from '@/app/dictionaries';

export default function AboutView({ dict }: { dict?: Dictionary['about'] }) {
    if (!dict) return null;

    const t = dict;

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="relative min-h-screen bg-ros-gray-dark overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ros-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ros-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container-custom relative z-10 py-16 md:py-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="w-12 h-12 md:w-16 md:h-16 relative">
                        {/* Logo Abstract Representation */}
                        <div className="absolute inset-0 border-2 border-ros-blue rounded-lg rotate-45 transform origin-center" />
                        <div className="absolute inset-2 bg-ros-blue rounded-lg opacity-80" />
                        <div className="absolute -inset-1 border border-white/20 rounded-xl rotate-12" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        {t.title_prefix} <span className="text-ros-blue">{t.title_main}</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeIn}>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                ROS Industries
                            </h2>
                            <p className="text-xl md:text-2xl text-ros-blue font-serif italic mt-2">
                                {t.tagline}
                            </p>
                        </motion.div>

                        <motion.div variants={fadeIn} className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p className="border-l-4 border-ros-blue pl-4">
                                {t.intro_loc} <span className="text-white font-semibold">{t.intro_loc_highlight}</span>.
                            </p>

                            <p>
                                {t.intro_p1}
                            </p>

                            <p>
                                {t.intro_p2}
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-ros-blue" />
                                    {t.mfg_title}
                                </h3>
                                <p className="text-sm md:text-base">
                                    {t.mfg_p1} <span className="text-ros-blue font-bold">{t.mfg_p1_highlight1}</span>{t.mfg_p1_part2} <span className="text-white">{t.mfg_p1_highlight2}</span> {t.mfg_p1_part3}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <button className="btn-primary flex items-center gap-2 group">
                                {t.learn_more}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Image Grid / Visuals */}
                    <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
                        {/* Feature 1: Robotics/Automation (Large) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(0,86,145,0.2)]"
                        >
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                                {/* Fallback/Placeholder if image missing */}
                                <Factory className="w-16 h-16 opacity-20" />
                            </div>
                            <Image
                                src="/about/robotics.png"
                                alt="Industrial Automation"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay hover:opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl inline-flex mb-2 border border-white/20">
                                    <Globe2 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{t.card_industrial}</h3>
                                <p className="text-gray-300 text-sm">{t.card_industrial_desc}</p>
                            </div>
                        </motion.div>

                        {/* Feature 2: Industrial Shed (Small) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="col-span-2 md:col-span-1 relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10 group p-6 flex flex-col justify-between hover:border-ros-blue/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-ros-blue/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-ros-blue transition-colors duration-300">
                                <Factory className="w-6 h-6 text-ros-blue group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{t.card_shed}</h3>
                                <p className="text-xs text-gray-400">{t.card_shed_desc}</p>
                            </div>
                        </motion.div>

                        {/* Feature 3: On-Site Services (Small) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="col-span-2 md:col-span-1 relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10 group p-6 flex flex-col justify-between hover:border-ros-orange/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-ros-orange/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-ros-orange transition-colors duration-300">
                                <Users className="w-6 h-6 text-ros-orange group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{t.card_services}</h3>
                                <p className="text-xs text-gray-400">{t.card_services_desc}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
