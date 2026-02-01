'use client';

import { Dictionary } from '@/app/dictionaries';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Warehouse, Cylinder } from 'lucide-react';
import Image from 'next/image';

export default function ProjectShowcase({ dict }: { dict?: Dictionary['project_showcase'] }) {
    if (!dict) return null;

    const iconMap: any = {
        "Hydraulics": Settings,
        "Industrial Sheds": Warehouse,
        "Hoses": Cylinder
    };

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[600px] h-[600px] bg-ros-blue/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold text-ros-blue uppercase tracking-widest mb-2 block">{dict.sub}</span>
                        <h2 className="h2-section mb-6">{dict.title}</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {dict.desc}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dict.projects.map((project, idx) => {
                        const Icon = iconMap[project.category] || Settings;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-2xl hover:shadow-ros-blue/10 transition-all duration-300"
                            >
                                {/* Image Placeholder - In real use, use Next/Image */}
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-ros-gray-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                        Project Image: {project.category}
                                    </div>
                                </div>

                                <div className="p-8 relative">
                                    <div className="absolute -top-6 right-8 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-ros-blue border border-gray-50">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <div className="text-xs font-bold text-ros-blue uppercase tracking-wider mb-3">{project.category}</div>
                                    <h3 className="text-2xl font-bold text-ros-gray-dark mb-4 group-hover:text-ros-blue transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-400 uppercase font-semibold">Result</span>
                                            <span className="text-sm font-bold text-ros-gray-dark">{project.stat}</span>
                                        </div>
                                        <button className="flex items-center text-sm font-bold text-ros-blue group-hover:underline">
                                            {dict.view_case_study} <ArrowRight className="w-4 h-4 ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
